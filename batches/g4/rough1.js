//log 29 sept end monday morning
const express = require('express');
const app = express();
// let arr = [
//     { id: 1, name: "rishabh", age: 22 },
//     { id: 2, name: "alok", age: 18 },
//     { id: 2, name: "aditya", age: 18 }
// ]

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

// Create a new user
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1, // simple id
        name: req.body.name,
        age: req.body.age
    };

    users.push(newUser);
    res.status(201).json({ message: "User created", user: newUser });
});
let arr = [
    { id: 1, name: "rishabh", age: 22 },
    { id: 2, name: "alok", age: 18 },
    { id: 3, name: "aditya", age: 18 }
]

app.use(express.json())
app.put("/users/:id", (req, res) => {
    //extract data from req.body
    let { name, age } = req.body;
    let id = Number(req.params.id);
    //find user in arr
    let user = arr.find((ele) => ele.id === id);
    // use array logic , object logic to replace user
    user.name = name;
    user.age = age;
    //send response to client
    res.send(user);
})

app.patch("/users/:id", (req, res) => {
    //extract data from req.body
    let { name, age } = req.body;
    let id = Number(req.params.id);
    //find user in arr
    let user = arr.find((ele) => ele.id === id);
    // use array logic , object logic to replace user
    if (name) {
        user.name = name;
    }
    if (age) {
        user.age = age;
    }
    //send response to client
    res.send(user);
})

app.delete("/users/:id", (req, res) => {
    //extract data from req.body
    //find user by id
    // delete user using array logic ,splice
    //send response
})
app.listen(3000, () => {
    console.log("Sever started")
})