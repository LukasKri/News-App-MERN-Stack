const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

const searchValuesArray = [];

const clickedArticlesArray = [];

mongoose.connect(
    "mongodb+srv://admin:admin@news-app.bdk3q.mongodb.net/news-app-values",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const searchValuesSchema = new mongoose.Schema({
    search_value: String,
});

const SearchValue = mongoose.model("SearchValue", searchValuesSchema);

app.use(express.json({ limit: "1mb" }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/searchValue", (req, res) => {
    const { data } = req.body;

    const newSearchValue = new SearchValue({
        search_value: data,
    });

    console.log("I got a searchValue request!");
    console.log(newSearchValue);
    searchValuesArray.push(newSearchValue);
    console.log(searchValuesArray);
    newSearchValue.save();
});

app.post("/clickedArticle", (req, res) => {
    const { data } = req.body;

    const articleData = {
        title: data.title,
        description: data.description,
        url: data.url,
    };

    console.log("I got a clickedArticle request!");
    console.log(articleData);
    clickedArticlesArray.push(articleData);
    console.log(clickedArticlesArray);
    // addSearchValuestoDb(articleData).catch(console.dir);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
