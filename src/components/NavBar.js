import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/path-to-your-logo.png" alt="Dragon nest logo" />
      </Link>
      <div className="login-signup">
        <Link to="/login">Login</Link>
        <span> | </span>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default NavBar;
