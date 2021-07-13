const express = require("express");
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 3001;

const app = express();

const searchValuesArray = [];

const clickedArticlesArray = [];

// Atlas connection string
const url =
    "mongodb+srv://admin:admin@news-app.bdk3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(
    url,
    { useUnifiedTopology: true },
    // { useNewUrlParser: true },
    { connectTimeoutMS: 30000 },
    { keepAlive: 1 }
);

// The database to use
const dbName = "news-app-values";

const addSearchValuestoDb = async (data) => {
    try {
        await client.connect();

        console.log("Connected correctly to server");
        const db = client.db(dbName);
        // Use the collection "people"
        const col = db.collection("search_values");
        // Construct a document

        // const dataToString = JSON.stringify(data);

        // let valueToDB = {
        //     dataToString,
        // };

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(data);

        // Find one document
        // const myDoc = await col.findOne();

        // Print to the console
        console.log("Value added");
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
};

app.use(express.json({ limit: "1mb" }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/searchValue", (req, res) => {
    const { data } = req.body;

    const searchValue = {
        search_value: data,
    };

    console.log("I got a searchValue request!");
    console.log(searchValue);
    searchValuesArray.push(searchValue);
    console.log(searchValuesArray);
    addSearchValuestoDb(searchValue).catch(console.dir);
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
    addSearchValuestoDb(articleData).catch(console.dir);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
