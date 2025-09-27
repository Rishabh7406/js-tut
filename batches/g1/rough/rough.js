const express = require('express');
const app = express();
let arr = [
    { id: 1, name: "rishabh", age: 22 },
    { id: 2, name: "dhawal", age: 50 },
    { id: 2, name: "mithlesh", age: 49 },
]
app.get("/users", (req, res) => {
    res.send(arr);
})
app.get("/users/:id", (req, res) => {
    //extract id from params
    let id = Number(req.params.id);
    //id filter out -> find
    let user = arr.find((ele) => ele.id === id)
    //send response
    res.send(user);
})
app.listen(8000, () => {
    console.log("server started")
})