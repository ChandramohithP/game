import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

const LoveForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    humor: "",
    kindness: "",
    intelligence: "",
    creativity: "",
    style: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/submit", formData);
      setResponseMessage(`Thank you kutta, ${formData.name}! 💖 Your ratings and message have been received!`);
    } catch (error) {
      setResponseMessage("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="love-form-container">
      <h1>💖 Welcome,MY Pando (RGNIKITHA)! 💖</h1>
      <p className="fun-nicknames">
        AKA: Thakkali, Kutta, and my angel rowdy! 🌟
      </p>
      <form onSubmit={handleSubmit}>
        <label>Enter nickname of Mohith and start😁🤍:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />

        <h3>Rate My Personality[Marks paathu podu RG]🌟</h3>

        <label>Humor (1-10):</label>
        <input type="number" name="humor" value={formData.humor} onChange={handleChange} placeholder="Rate my humor!" min="1" max="10" required />

        <label>Kindness (1-10):</label>
        <input type="number" name="kindness" value={formData.kindness} onChange={handleChange} placeholder="Rate my kindness!" min="1" max="10" required />

        <label>Intelligence (1-10):</label>
        <input type="number" name="intelligence" value={formData.intelligence} onChange={handleChange} placeholder="Rate my intelligence!" min="1" max="10" required />

        <label>Creativity (1-10):</label>
        <input type="number" name="creativity" value={formData.creativity} onChange={handleChange} placeholder="Rate my creativity!" min="1" max="10" required />

        <label>Style (1-10):</label>
        <input type="number" name="style" value={formData.style} onChange={handleChange} placeholder="Rate my style!" min="1" max="10" required />

        <label>Love Message (Tell me your ❤️):</label>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..." required />

        <button type="submit">Send My Love 🚀to Mohith</button>
      </form>
      {responseMessage && <div className="thank-you-message">{responseMessage}</div>}
    </div>
  );
};

export default LoveForm;
