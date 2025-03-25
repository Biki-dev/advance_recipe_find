import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import "./App.css";
import Hero from "./components/hero.jsx";
import Footer from "./components/footer.jsx";
import Guide from "./components/guide.jsx";
import ReviewSection from "./components/review.jsx";
import Contact from "./components/contact.jsx";
import FindRecipe from "./pages/finding.jsx";
import About from "./pages/about.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
<Route
  path="/"
  element={
    <>
      <Hero />
      <Guide />
      <ReviewSection />
      <Contact />
      
    </>
  }
/>
<Route path="/find" element={<FindRecipe/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/about" element={<About/>}/>

      </Routes>

      
      
     <Footer/>
    </Router>
  );
};

export default App;
