const express = require('express');
const app = express();

const requestCounts = {};

// Rate Limiter middleware
app.use((req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!requestCounts[ip]) requestCounts[ip] = [];

    // keep only requests within last 10 seconds
    requestCounts[ip] = requestCounts[ip].filter(t => now - t < 10000);

    if (requestCounts[ip].length >= 5) {
        return res.status(429).send('Too many requests, try later.');
    }

    requestCounts[ip].push(now);
    next();
});

app.get('/', (req, res) => res.send('Request successful'));
app.listen(3000, () => console.log('Server running on 3000'));
