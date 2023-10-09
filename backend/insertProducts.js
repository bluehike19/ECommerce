require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");

const atlasConnection = process.env.MONGODB_URI;

//connect to MongoDB
mongoose
  .connect(atlasConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

const Product = mongoose.model("Product", {
  name: String,
  price: Number,
  imageUrl: String,
});

const productsData = JSON.parse(fs.readFileSync("products.json", "utf8"));

async function insertProducts() {
  try {
    await Product.insertMany(productsData);
    console.log("Products inserted successfully");
  } catch (error) {
    console.error("Error inserting products:", error);
  } finally {
    mongoose.connection.close();
  }
}

insertProducts();
