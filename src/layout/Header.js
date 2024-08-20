import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">La Monijor Bakery</div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#products">Products</a>
      </nav>
    </header>
  );
};

export default Header;
