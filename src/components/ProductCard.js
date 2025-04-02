import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import './ProductCard.css';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  // Display a message if product data is missing
  if (!product) {
    return <div>Product data is missing</div>;
  }

  // Dispatch the addToCart action when the button is clicked
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      {/* Render product details */}
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;