const SearchValue = require("../models/SearchValue");

const saveSearchValue = async (req, res) => {
  const { data } = req.body;

  try {
    const newSearchValue = new SearchValue({
      search_value: data,
    });

    await newSearchValue.save();
    res.status(201).json(newSearchValue);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveSearchValue };
