const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  productName: String,
  productPrice: Number,
  productImage: String,
});

module.exports = mongoose.model("CartItem", cartItemSchema);
