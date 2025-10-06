const express = require("express");
const app = express();

// middleware to block a route
function blocker(req, res, next) {
    if (req.url === "/secret") {
        return res.send("Access Denied!");
    }
    next();
}

app.use(blocker);

app.get("/", (req, res) => res.send("Home Page"));
app.get("/secret", (req, res) => res.send("This should never run"));

app.listen(3000);
