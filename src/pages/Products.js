import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = ({ discount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>Original: {product.price.toFixed(2)} USD</p>
            {discount !== null && (
              <p>Discounted Price: {(product.price - product.price * discount).toFixed(2)} USD</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

