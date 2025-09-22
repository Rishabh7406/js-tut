const http = require('http'); // import http module

const server = http.createServer((req, res) => {
    res.end('Hello World'); // simplest response
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
