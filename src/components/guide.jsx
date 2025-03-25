import React from "react";
import "./guide.css"; // Import CSS file

const steps = [
  {
    id: 1,
    title: "📸 Scan Your Ingredients",
    description: "Upload a picture of your fridge or pantry or search ingredients, and our AI will detect the available ingredients.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQh1vQSbaC5ApDAhopgvpS4E29_8lyQhJgY-LSGrPIssAXiqQIkt6fhQ&s=10",
  },
  {
    id: 2,
    title: "🤖 AI Suggests Recipes",
    description: "Our AI will generate recipe ideas based on your ingredients, dietary preferences, and restrictions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN0xtS_JRDf-CfW0eltF3s705lSqzz6odl25I_tr5DT4oEcK3Sqtf7QU&s=10",
  },
  {
    id: 3,
    title: "🍽️ Cook & Enjoy",
    description: "Follow the easy step-by-step instructions and enjoy a delicious, AI-suggested meal!",
    image: "https://plus.unsplash.com/premium_photo-1723507294350-c2be238d929f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWF0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Guide = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <img src={step.image} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guide;