require("dotenv").config();
const express = require("express");
const connectDB = require("./config/dbConnection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/menus", require("./routes/menuRoute"));
app.use("/api/items", require("./routes/itemRoute"));

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing the app:", error.message);
  });
