const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "content-type": "text/html" })
        res.end("<h1>hello this is home</h1>");
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { "content-type": "text/html" })
        res.end("<h1>hello this is contact</h1>");
    }
    else if (req.url === '/about') {
        res.writeHead(200, { "content-type": "text/html" })
        res.end("<h1>hello this is about</h1>");
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end("<h1>Not Found</h1>");
    }
})

server.listen(8000, () => {
    console.log("sever started http://localhost:8000/")
})