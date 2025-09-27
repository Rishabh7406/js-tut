const express = require('express');
const app = express();

// Simple middleware
function myMiddleware(req, res, next) {
    console.log('Middleware ran');
    next(); // let the request continue
}

app.use(myMiddleware); // use middleware

app.get('/', (req, res) => {
    res.send('Hello, this is the main route!');
});

app.listen(3000, () => console.log('Server started'));
