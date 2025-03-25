import React, { useRef } from "react";
import "./aisuggest.css"; // Import CSS for styling

const Aisuggest = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Dummy data for AI-generated recipes
  const recipes = [
    { id: 1, name: "Pasta Alfredo", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D" },
    { id: 2, name: "Vegan Salad", image: "https://plus.unsplash.com/premium_photo-1692309186751-2513ec1fa292?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmVnYW4lMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "Grilled Chicken", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JpbGxlZCUyMENoaWNrZW58ZW58MHx8MHx8fDA%3D" },
    { id: 4, name: "Fruit Smoothie", image: "https://plus.unsplash.com/premium_photo-1663011387802-81162759de6e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnJ1aXQlMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 5, name: "Sushi Rolls", image: "https://plus.unsplash.com/premium_photo-1712949157104-074404157a2e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U3VzaGklMjBSb2xsc3xlbnwwfHwwfHx8MA%3D%3D" }
  ];

  return (
<div className="ai-suggest-container">
  <h2>AI-Suggested Recipes 🍽️</h2>

  <div className="scroll-container">
    <div className="card-container" ref={scrollRef}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.name} />
          <h3>{recipe.name}</h3>
          <button className="view-recipe-btn">View Recipe</button>
        </div>
      ))}
    </div>
  </div>

  {/* Scroll buttons moved below and centered */}
  <div className="scroll-buttons">
    <button className="scroll-btn left" onClick={scrollLeft}>❮</button>
    <button className="scroll-btn right" onClick={scrollRight}>❯</button>
  </div>
</div>
  );
};

export default Aisuggest;