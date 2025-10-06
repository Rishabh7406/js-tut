const express = require('express');
const app = express();

// Middleware 1: log request
app.use((req, res, next) => {
    console.log('Middleware 1: Logging', req.method, req.url);
    next();
});

// Middleware 2: validate query param
app.use((req, res, next) => {
    if (!req.query.name) {
        return res.status(400).send('Missing name query param');
    }
    console.log('Middleware 2: Query validated');
    next();
});

// Middleware 3: final response
app.get('/', (req, res) => {
    res.send(`Hello, ${req.query.name}`);
});

app.listen(3000, () => console.log('Server running on 3000'));
