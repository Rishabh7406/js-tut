// server.js
const express = require('express');
const app = express();

app.use(express.json()); // parse JSON

// GET /greet
app.get('/greet', (req, res) => {
    res.send('Hello Student');
});

// POST /data
app.post('/data', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).send('Name is required');
    res.send(`Hello ${name}`);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
