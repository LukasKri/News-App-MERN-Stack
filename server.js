const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const searchValueSchema = new mongoose.Schema({
    search_value: String,
});

const articleDataSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
});

const SearchValue = mongoose.model("SearchValue", searchValueSchema);

const ArticleData = mongoose.model("ArticleData", articleDataSchema);

// serve the react app files
app.use(express.static(`${__dirname}/client/build`));

app.use(express.json({ limit: "1mb" }));

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello World" });
});

app.post("/searchValue", (req, res) => {
    const { data } = req.body;

    const newSearchValue = new SearchValue({
        search_value: data,
    });

    console.log("I got a searchValue request!");
    console.log(newSearchValue);
    newSearchValue.save();
});

app.post("/clickedArticle", (req, res) => {
    const { data } = req.body;

    const newArticleData = new ArticleData({
        title: data.title,
        description: data.description,
        url: data.url,
    });

    console.log("I got a clickedArticle request!");
    console.log(newArticleData);
    newArticleData.save();
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
