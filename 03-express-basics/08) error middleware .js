const express = require("express");
const app = express();

app.get("/", (req, res) => {
    throw new Error("Something went wrong!");
});

// error middleware has 4 arguments
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
});

app.listen(3000);
