import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
 
  
  return (
    <div className="product-card">
      <img src={product.images} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">Category : {product.category}</p>
      <p className="product-price">Price : {product.price}</p>
    </div>
  );
};

export default ProductCard;
