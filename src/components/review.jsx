import React, { useRef } from "react";
import "./review.css";

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    review: "This app is a game-changer! AI-generated recipes saved me so much time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Selin lina",
    review: "I love how it suggests healthy meals based on what I have in my fridge.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1692862061691-5555f2bbf57d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Rohit Mehta",
    review: "The meal planning feature is super useful! Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1710974481447-fb001ad9ad5a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    review: "Great AI recommendations! Helped me cook better meals effortlessly.",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvWWcYqfkQ9HBdOc5Jv35zjDBzu3HQfU8wQ&s",
  },
  {
    id: 5,
    name: "Vikas Roy",
    review: "Very easy to use and great for meal planning. 10/10 experience!",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdL4O3zFgRM3aXr_tqkRNEQ-FUatNa4NxCck9r9HRtQ&s",
  },
];

const ReviewSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="review-sectionp">
      <h2>What Our Users Say</h2>

      <div className="reviews-containerp" ref={scrollRef}>
        {reviews.map((review) => (
          <div key={review.id} className="review-cardp">
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            <p>"{review.review}"</p>
            <div className="ratingp">{"⭐".repeat(review.rating)}</div>
          </div>
        ))}
      </div>

      {/* Scroll Buttons Positioned at the Bottom Center */}
      <div className="scroll-buttonsp">
        <button className="scroll-btnp" onClick={scrollLeft}>❮</button>
        <button className="scroll-btnp" onClick={scrollRight}>❯</button>
      </div>
    </section>
  );
};

export default ReviewSection;