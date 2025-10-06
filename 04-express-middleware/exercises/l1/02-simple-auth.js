const express = require('express');
const app = express();

// Simple Authentication middleware
app.use((req, res, next) => {
    if (req.query.user === 'admin') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.get('/', (req, res) => res.send('Welcome Admin!'));
app.listen(3000, () => console.log('Server running on 3000'));
