// Cart Page component

import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css';

const CartPage = () => {
  // Access the cart state from Redux
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // Calculate the total price of items in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      {/* Display a message if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {/* Render each item in the cart */}
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x R{item.price}
            </li>
          ))}
        </ul>
      )}
      {/* Display the total price */}
      <h2>Total: R{total.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;