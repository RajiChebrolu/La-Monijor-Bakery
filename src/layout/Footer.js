import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="" alt="Logo" className="logo" />
        </div>
        <div className="footer-nav">
          <div className="footer-column">
            <h3>COMPANY</h3>
            <a href="#" className="footer-link">
              Home
            </a>
            <a href="#" className="footer-link">
              About
            </a>
            <a href="#" className="footer-link">
              Products
            </a>
          </div>
          <div className="footer-column">
            <h3>RESOURCES</h3>
            <a href="#" className="footer-link">
              Catalogue
            </a>
            <a href="#" className="footer-link">
              Bulk Sale
            </a>
            <a href="#" className="footer-link">
              Shop
            </a>
          </div>
          <div className="footer-column">
            <h3>ABOUT</h3>
            <a href="#" className="footer-link">
              Terms & Conditions
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="footer-social">
          <a href="#" className="social-link">
            <img src="" alt="Social Icon" />
          </a>
          <a href="#" className="social-link">
            <img src="" alt="Social Icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 La Monijor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
