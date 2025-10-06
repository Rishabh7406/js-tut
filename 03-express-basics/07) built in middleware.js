const express = require("express");
const app = express();

// parses JSON body
app.use(express.json());

app.post("/data", (req, res) => {
    res.send(`You sent: ${JSON.stringify(req.body)}`);
});

app.listen(3000);
