const express = require('express');
const app = express();
let arr = [
    { id: 1, name: "rishabh", age: 20 },
    { id: 2, name: "vishal", age: 23 },
    { id: 3, name: "bhavesh", age: 21 }
]
app.get("/users", (req, res) => {
    res.send(arr);
})

app.get("/users/:id", (req, res) => {
    //extract data from params
    let id = Number(req.params.id);
    // find user by array logic 
    let myUser = arr.find((ele) => ele.id === id)
    //send response
    res.send(myUser)
})
app.use(express.json())
app.post("/users", (req, res) => {
    //extract data from req.body
    // let name=req.body.name;
    let { name, age } = req.body;


    //create a new obj  -> myObj
    let myObj = {
        id: arr.length+1,
        name: req.body.name,
        age: Number(req.body.age)
    }

    // push myObj into arr 
    arr.push(myObj)
    //send response to client
    res.send(myObj)
})
app.listen(8000, () => {
    console.log("server started")
})