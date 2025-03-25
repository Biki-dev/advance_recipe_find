import "./footer.css"; // Import the CSS file
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import React from "react"; // Removed useState
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/*<h2 className="footer-logo">XUNWEAVE</h2>*/}
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/find">Find</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="footer-divider"></div>
      <div className="footer-social">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://github.com/Biki-dev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/naru.tobik1?igsh=MXA0dHVkMjJxc2o0YQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
      <p className="footer-copyright">Dev : Biki Kalita</p>
      <p className="footer-copyright">© Copyright 2025, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
