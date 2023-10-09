const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const insertProducts = require("./insertProducts");x
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(bodyParser.json());

// connect to MongoDB
const atlasConnection = process.env.MONGODB_URI;
mongoose
  .connect(atlasConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// const Product = mongoose.model("Product", {
//   name: String,
//   price: Number,
//   imageUrl: String,
// });

// Routes
const productRoutes = require("./routes/productsRoutes");
app.use("/api/products", productRoutes);

const cartRoutes = require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);

// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
