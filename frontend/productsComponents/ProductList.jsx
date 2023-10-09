import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  return (
    <div>
      <h1>Product list</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>
              <h2>{product.name}</h2>
              <p>Price: Ksh {product.price}</p>
              <img src={product.image} alt={product.name} />
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
