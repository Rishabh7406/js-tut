const express = require("express");
const app = express();

// Middleware function
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} at ${new Date()}`);
    next(); // pass control to next middleware/route
};

// Apply middleware to all routes
app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(3000, () => console.log("Server running"));
