// Header component with navigation menu

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">Blessing</Link>
        <ul className="nav-links">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          {username ? (
            <li className="user">Welcome, {username}</li>
          ) : (
            <>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
