const express = require('express');
const app = express();
let arr = [
    { id: 1, name: "rishabh", age: 22 },
    { id: 2, name: "alok", age: 18 },
    { id: 3, name: "aditya", age: 18 }
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

app.use(express.json())
app.post("/users", (req, res) => {
    //extract data from req.body
    let { name, age } = req.body;

    //create an obj from data
    let newObj = {
        id: arr.length + 1,
        name: req.body.name,
        age: Number(req.body.age)
    }
    // push this data into array
    arr.push(newObj)
    //send response to client
    res.status(201).send(newObj)
})

app.put("/users/:id", (req, res) => {
    // id , name ,age -> extract data from req
    const id = Number(req.params.id);
    let { name, age } = req.body;
    // find user by id-> myUser
    let myUser = arr.find((ele) => ele.id === id)
    // change myUser name and age
    myUser.name = name;
    myUser.age = age;
    // send response

    res.send(myUser)
})
app.listen(3000, () => {
    console.log("Sever started")
})