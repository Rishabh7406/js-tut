const express = require('express');
const app = express();

// Log Request Details middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => res.send('Home Page'));
app.listen(3000, () => console.log('Server running on 3000'));
