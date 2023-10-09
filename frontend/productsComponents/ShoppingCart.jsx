import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product._id === product._id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { product, quantity: 1 }]);
    }
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product._id !== productId)
    );
  };

  const totalPrice = cart.reduce((total, item) => {
    total + item.product.price * item.quantity, 0;
  });

  return (
    <div>
      <h1>Shopping Cart</h1>
      {addToCart.map((item) => (
        <div key={item.product._id} className="cart-item">
          <img src={item.product.iamge} alt={item.product.name} />
          <div>
            <h3>{item.product.name}</h3>
            <p>Price: Ksh: {item.product.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button
              onClick={() =>
                updateCartItemQuantity(item.product._id, item.quantity + 1)
              }>
              Increase quantity
            </button>
            <button
              onClick={() =>
                updateCartItemQuantity(item.product._id, item.quantity - 1)
              }>
              Decrease Quantity
            </button>
            <button onClick={() => removeFromCart(item.product._id)}>
              remove from the cart
            </button>
          </div>
        </div>
      ))}
      <div className="total-price">
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
