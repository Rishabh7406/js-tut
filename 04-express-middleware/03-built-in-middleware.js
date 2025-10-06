const express = require('express');
const app = express();

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/data', (req, res) => {
    res.send(`Received data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => console.log('Server running on 3000'));
