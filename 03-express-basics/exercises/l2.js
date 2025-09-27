// server.js
const express = require('express');
const app = express();
app.use(express.json());

// In-memory users array
let users = [];
let nextId = 1;

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// POST new user
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) return res.status(400).send('Name and age required');
    const user = { id: nextId++, name, age };
    users.push(user);
    res.status(201).json(user);
});

// PATCH user by ID (partial update)
app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).send('User not found');
    const { name, age } = req.body;
    if (name !== undefined) user.name = name;
    if (age !== undefined) user.age = age;
    res.json(user);
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).send('User not found');
    const deleted = users.splice(index, 1);
    res.json(deleted[0]);
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
