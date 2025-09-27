const http = require("http");

// 1️⃣ Hello World server
// const server1 = http.createServer((req, res) => {
//   res.end("Hello World");
// });
// server1.listen(3000, () => console.log("Hello server on 3000"));

// 2️⃣ HTML response server
// const server2 = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Welcome</h1>");
// });
// server2.listen(3001, () => console.log("HTML server on 3001"));

// 3️⃣ Routing server
// const server3 = http.createServer((req, res) => {
//   if (req.url === "/") res.end("Home Page");
//   else if (req.url === "/about") res.end("About Page");
//   else res.end("404 Not Found");
// });
// server3.listen(3002, () => console.log("Routing server on 3002"));

// 4️⃣ JSON server
// const server4 = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ name: "NodeJS" }));
// });
// server4.listen(3003, () => console.log("JSON server on 3003"));

// 5️⃣ Close server
// const server5 = http.createServer((req, res) => {
//   res.end("Closing server...");
//   server5.close();
// });
// server5.listen(3004, () => console.log("Close server on 3004"));
