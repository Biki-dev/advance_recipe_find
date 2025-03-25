import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
       <div className="nav-logo">
       <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div> 
        
        <div className="nav-text">
                 <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <h2>
              Recipe Finder
            </h2>          </Link>
        </div> 

        <button onClick={toggleMenu} className="menu-toggle">
          <div className="burger-icon">
            <div className="burger-container">
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>
          </div>
        </button>
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}></div>

      {/* Side Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/find" onClick={toggleMenu}>Find Recipe</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;