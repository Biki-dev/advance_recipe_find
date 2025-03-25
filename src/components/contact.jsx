import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false); // To manage button state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    setIsVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("❌ Please complete the reCAPTCHA verification before submitting.");
      return;
    }

    setLoading(true); // Disable button while sending

    emailjs
      .send(
        "service_zi7grnu",  // Your EmailJS Service ID
        "template_w7d7bzo", // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          "g-recaptcha-response": recaptchaToken, // Pass reCAPTCHA token
        },
        "cRfxjCd3s8LOY8PJM" // Your EmailJS Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaToken(null);
        setIsVerified(false);
        setLoading(false); // Enable button again
      })
      .catch((error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      <h2>Contact Us 📩</h2>
      <p>Have any questions or feedback? Drop us a message!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea id="msg" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>

        {/* Google reCAPTCHA */}
        <ReCAPTCHA sitekey="6LeRY_0qAAAAALIqPV6jPfUvzRGjctbhfWcBfajT" onChange={handleRecaptchaChange} />

        <button type="submit" className="submit-btn" disabled={!isVerified || loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;