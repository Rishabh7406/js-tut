const http = require("http");

const apiServer = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Hello from API", status: "success" }));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Not Found" }));
    }
});

apiServer.listen(8000, () => {
    console.log("API Server running at http://localhost:8000");
});
