import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { useGlobalContext } from "../context/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "../../productsComponents/ProductDetail";
import ProductList from "../../productsComponents/ProductList";
import ShoppingCart from "../../productsComponents/ShoppingCart";

const Navbar = () => {
  // const { openSidebar } = useGlobalContext();
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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          render={(props) => <ProductList {...props} addToCart={addToCart} />}
        />
        <Route path="/products" Component={ProductDetail} />
        <Route path="/cart" Component={ShoppingCart} />
      </Routes>
    </Router>
  );
};
export default Navbar;

// <nav className="nav">
//   <div className="nav-center">
//     <div className="nav-header">
//       <button className="btn toggle-btn" onClick={openSidebar}>
//         <FaBars />
//       </button>
//     </div>
//   </div>
// </nav>

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" compo={<Home />} />
//         <Route path="/about" compo={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };
