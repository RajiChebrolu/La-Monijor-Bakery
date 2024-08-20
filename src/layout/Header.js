import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src="" alt="Logo" className="logo" />
        </div>
        <nav className="navbar-menu">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
          <Link to="/products" className="navbar-link">
            Our Breads
          </Link>
          <Link to="/catalogue" className="navbar-link">
            Catalogue
          </Link>

          <a href="#" className="navbar-button">
            Shop
            <img src="" alt="Shop Icon" className="vectors-wrapper" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
