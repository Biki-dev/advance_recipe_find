import axios from "axios";

const EDAMAM_APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const EDAMAM_APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

export async function getRecipe(ingredients) {
  try {
    const response = await axios.get("https://api.edamam.com/search", {
      params: {
        q: ingredients,  
        app_id: EDAMAM_APP_ID,
        app_key: EDAMAM_APP_KEY,
        from: 0,
        to: 20,  
      },
    });

    if (response.data.hits.length === 0) {
      return [{ title: "No recipes found. Try different ingredients!" }];
    }

    return response.data.hits.map((hit) => ({
      title: hit.recipe.label,
      image: hit.recipe.image,
      ingredients: hit.recipe.ingredientLines,
      healthLabels: hit.recipe.healthLabels,
      dietLabels: hit.recipe.dietLabels,
      mealType: hit.recipe.mealType,
      calories: hit.recipe.calories.toFixed(2),
      source: hit.recipe.url,  
    }));
  } catch (error) {
    console.error("❌ API Error:", error);
    return [{ title: "⚠️ Failed to fetch recipes. Please try again." }];
  }
}