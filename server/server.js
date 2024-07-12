const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3001;

const app = express();

connectDB();

app.use(express.static(`${__dirname}/client/build`));
app.use(express.json({ limit: "1mb" }));

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
