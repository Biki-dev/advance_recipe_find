import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
       <h1>Turn Your Ingredients into Delicious Meals! 🍽</h1>
        <p>Scan or enter ingredients, and let AI create tasty, nutritious recipes just for you. No more food waste—just smart cooking!</p>
        <Link to="/find"><button className="hero-btn">Find Recipe</button></Link>
      </div>
    </div>
  );
};

export default Hero;