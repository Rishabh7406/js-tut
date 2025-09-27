const express = require("express");
const app = express();

app.use(express.json()); // to handle POST body if needed later

// 1. GET /
app.get("/", (req, res) => {
  res.send("Server is running");
});

// 2. GET /greet/:name
app.get("/greet/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// 3. GET /sum?a=5&b=7
app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`Sum is ${a + b}`);
});

// 4. POST /login
app.post("/login", (req, res) => {
  res.send("Login successful");
});

// 5. GET /products
app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
