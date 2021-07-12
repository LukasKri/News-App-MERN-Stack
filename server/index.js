const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

var searchArray = [];

app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/search", (req, res) => {
    const searchValue = req.body;

    console.log("I got a request!");
    console.log(searchValue);
    searchArray.push(searchValue);
    console.log(searchArray);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
