import React from "react";
import { Link } from "react-router-dom";
import "../styles/globalStyles.css";

const Header = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src="/images/Logo.png" alt="Logo" className="logo" />
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
            <Link href="#" className="navbar-link">
              Shop
              <img
                img
                src="https://uploads-ssl.webflow.com/66bedb35bcc767bc5d766e6f/66bedb78d75f8b0fb892eb49_Vectors-Wrapper.svg"
                alt=""
                class="vectors-wrapper"
              />
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
