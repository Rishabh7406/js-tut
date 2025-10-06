const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
    console.log(`[App] ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => res.send('Home Page'));
app.listen(3000, () => console.log('Server running on 3000'));
