const express = require("express");
const app = express();
app.use(express.json())
app.get("/", (req, res) => {
    res.send("server is running")
})
app.get('/greet/:name', (req, res) => {
    let user = req.params.name;
    res.send(`hello ${user}`)
})

app.get("/sum", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let sum = a + b;
    res.send(sum);
})

app.post("/login", (req, res) => {
    res.send("Login successful")
})
app.listen(8000, () => {
    console.log("server started")
})