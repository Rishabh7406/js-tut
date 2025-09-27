const express = require("express");
const app = express();

// Middleware to read JSON body
// app.use(express.json());

// In-memory "database"
let users = [
    { id: 1, name: "Rishabh", age: 22 },
    { id: 2, name: "Amit", age: 25 }
];

// -------------------- GET --------------------
// Get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// Get one user by id
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

// -------------------- POST --------------------
// Create a new user
app.use(express.json());
app.post("/users", (req, res) => {
    //extract data from req.body
    let { name, age } = req.body;
    // create an user obj
    let arrLen = users.length;
    let obj = {
        id: arrLen + 1,
        name: name,
        age: age
    }
    // add this obj into users array
    users.push(obj);
    //send response
    res.send(obj)
});

// -------------------- PUT --------------------
// Replace a user completely
app.put("/users/:id", (req, res) => {

});

// -------------------- PATCH --------------------
// Update only some fields


// -------------------- DELETE --------------------
// Delete a user
app.delete("/users/:id", (req, res) => {
    
});

// -------------------- SERVER --------------------
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
