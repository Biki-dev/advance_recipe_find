import React from "react";
import Guide from "../components/guide.jsx";

const About = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "100vw", backgroundColor: '#f8f9fa', margin: "auto" }}>
      <h1>About Recipe Finder</h1>
      <p>
        Welcome to <strong>Recipe Finder</strong>! Our platform helps you discover delicious recipes based on the ingredients you have. Whether you're looking for quick meal ideas or gourmet dishes, we've got you covered.
      </p>

    
      <Guide />
    

      <h2>Why Use Recipe Finder?</h2>
      <ul>
        <li>Find recipes based on available ingredients.</li>
        <li>Save time and reduce food waste.</li>
        <li>Discover new and exciting dishes.</li>
      </ul>
    </div>
  );
};

export default About;