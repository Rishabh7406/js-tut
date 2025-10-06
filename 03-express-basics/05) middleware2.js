const express = require("express");
const app = express();

// custom logger
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
