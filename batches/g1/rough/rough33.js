const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home' && req.method === 'GET') {
        res.writeHead(200, { "content-type": "text/html" })
        res.end('<h1>this is home page</h1>')
    }
    else if (req.url === '/about') {
        res.end('this is about page')
    }
    else {
        res.end("404 not found")
    }
})

server.listen(8000, () => {
    console.log("sever started")
})