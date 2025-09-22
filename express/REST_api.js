const express = require("express");
const app = express();

// Middleware to read JSON body
app.use(express.json());

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
app.post("/users", (req, res) => {
    const newUser = {
        id: users.length + 1, // simple id
        name: req.body.name,
        age: req.body.age
    };

    users.push(newUser);
    res.status(201).json({ message: "User created", user: newUser });
});

// -------------------- PUT --------------------
// Replace a user completely
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Replace the entire object
    user.name = req.body.name;
    user.age = req.body.age;

    res.json({ message: "User replaced", user });
});

// -------------------- PATCH --------------------
// Update only some fields
app.patch("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (req.body.name) user.name = req.body.name;
    if (req.body.age) user.age = req.body.age;

    res.json({ message: "User updated", user });
});

// -------------------- DELETE --------------------
// Delete a user
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1); // remove from array
    res.json({ message: "User deleted" });
});

// -------------------- SERVER --------------------
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
