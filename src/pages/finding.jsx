import React, { useState } from "react";
import { getRecipe } from "../api/recipeAPI.js";
import "./finding.css";

function FindRecipe() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const results = await getRecipe(ingredients);
      if (results.length === 0 || results[0].title === "No recipes found. Try different ingredients!") {
        setError("No recipes found. Try different ingredients.");
        setRecipes([]);
      } else {
        setRecipes(results);
      }
    } catch (err) {
      setError("⚠️ Failed to fetch recipes. Please try again.");
    }
    setLoading(false);
  };
  
  return (
    <div className="recipe-container">
      <h2>Find a Recipe</h2>
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients (e.g., egg, milk)"
      />
      <button className="search" onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p className="error">{error}</p>}

      <div className="recipe-listfind">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-cardfind">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width="200" />
            <p><strong>Calories:</strong> {recipe.calories}</p>
            <p><strong>Diet Labels:</strong> {recipe.dietLabels.join(", ") || "None"}</p>
            <p><strong>Meal Type:</strong> {recipe.mealType.join(", ") || "Not specified"}</p>

            <h4><strong>Ingredients:</strong></h4>
            <ul>
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="recipeshow">
            <a href={recipe.source} target="_blank" rel="noopener noreferrer">
              View Full Recipe
            </a>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindRecipe;