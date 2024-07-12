const express = require("express");
const { saveSearchValue } = require("../controllers/searchValueController");
const { saveArticleData } = require("../controllers/articleDataController");

const router = express.Router();

router.post("/searchValue", saveSearchValue);

router.post("/clickedArticle", saveArticleData);

module.exports = router;
