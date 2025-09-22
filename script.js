const express = require("express")

const app = express();
app.use(express.json());
let users = [
    { id: 1, name: "rishabh", age: 22 },
    { id: 2, name: "amit", age: 13 },
    { id: 3, name: "alok", age: 18 }
]
app.get("/", (req, res) => {
    res.send("hello world")
})
app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    let ans = users.filter((ele) => ele.id == id);
    if (ans.length === 0) {
        res.json({
            message: "user not found"
        })
    }
    res.json(ans);
})
app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.post("/users", (req, res) => {
    let data = req.body;
    let dataObj = {
        id: users.length + 1,
        name: data.name,
        age: data.age
    }
    users.push(dataObj);
    res.send(users);
})

app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    let index = users.findIndex((ele) => ele.id == id);
    if (index === -1) {
        res.json({
            message: "user not found"
        })
    }
    users.splice(index, 1)
    res.json({
        message: "user deleted  "
    });
})
app.listen(3000, () => {
    console.log("server started at http://localhost:3000/")
})
// const express = require('express');

// const app = express();
// let users = [{ id: 1, name: "rishabh", age: 30 }, { id: 2, name: "rishabh", age: 30 }]
// app.get("/users/id", (req, res) => {
//     res.send(users);
// })
// app.listen(3000, () => {
//     console.log("server started at localhost:3000")
// })