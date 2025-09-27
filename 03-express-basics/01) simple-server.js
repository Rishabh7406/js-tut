const express = require('express');

const app = express();
app.get('/home', (req, res) => {
    res.send("this is home page")
})

app.use(express.json())
app.get('/', (req, res) => {
    res.send("this is landing page")
})

app.post('/something', (req, res) => {
    const data = req.body;
    res.send(data);
})
app.get('/about', (req, res) => {
    res.send("this is about page")
})
app.get('/contact', (req, res) => {
    res.send("this is Contact page")
})

app.listen(3000, () => {
    console.log("server started at localhost:3000")
})