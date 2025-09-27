const express = require('express');
const app = express();
let arr = [
    { id: 1, name: "rishabh", age: 22 },
    { id: 2, name: "alok", age: 18 },
    { id: 2, name: "aditya", age: 18 }
]

app.get("/users", (req, res) => {
    res.send(arr);
})
app.get("/users/:id", (req, res) => {
    //filter, find
    let id = Number(req.params.id);
    let user = arr.find((ele) => ele.id === id)
    //send
    res.send(user)
})
app.listen(3000, () => {
    console.log("Sever started")
})