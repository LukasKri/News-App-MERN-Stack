const ArticleData = require("../models/ArticleData");

const saveArticleData = async (req, res) => {
  const { data } = req.body;

  try {
    const newArticleData = new ArticleData({
      title: data?.title,
      description: data?.description,
      url: data?.url,
    });

    await newArticleData.save();
    res.status(201).json(newArticleData);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveArticleData };
