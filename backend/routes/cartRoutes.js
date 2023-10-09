const express = require("express");
const router = express.Router();
const CartItem = require("../models/CartItem");

// Get all cart items
router.get("/", async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Create a new product
router.post("/", async (req, res) => {
  const CartItem = new CartItem(req.body);
  try {
    await CartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a cart item by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedCartItem = await CartItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCartItem) {
      return res.status(404).json({ error: "CartItem not found" });
    }
    res.json(updatedCartItem);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a cart item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedCartItem = await CartItem.findByIdAndRemove(req.params.id);

    if (!deletedCartItem) {
      return res.status(404).json({ error: "CartItem not found" });
    }

    res.json({ message: "CartItem deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
