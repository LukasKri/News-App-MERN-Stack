const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const searchValuesArray = [];

const clickedArticlesArray = [];

app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/searchValue", (req, res) => {
    const searchValue = req.body;

    console.log("I got a searchValue request!");
    console.log(searchValue);
    searchValuesArray.push(searchValue);
    console.log(searchValuesArray);
});

app.post("/clickedArticle", (req, res) => {
    const clickedArticle = req.body;

    console.log("I got a clickedArticle request!");
    console.log(clickedArticle);
    clickedArticlesArray.push(clickedArticle);
    console.log(clickedArticlesArray);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
