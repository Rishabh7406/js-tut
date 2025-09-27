const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send("server is running")
})
app.get("/greet/:name", (req, res) => {
    let name = req.params.name;
    res.send("hello" + name);
})

app.get("/sum", (req, res) => {
    // let a = req.query.a;
    // let b = req.query.b;
    let { a, b } = req.query;
    let sum = Number(a) + Number(b);
    res.send(sum);
})
app.use(express.json())
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    res.json({ username, password })
})
app.listen(8000, () => {
    console.log("server started")
})