// server.js
import express from "express";

const app = express();
app.use(express.json());

// GET /
app.get("/", (req, res) => {
    res.send("Server is running");
});

// GET /greet/:name
app.get("/greet/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// GET /sum?a=1&b=2
app.get("/sum", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.send(`Sum is ${a + b}`);
});

// POST /login
app.post("/login", (req, res) => {
    res.send("Login successful");
});

// GET /products
app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Headphones", price: 3000 },
    ]);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
