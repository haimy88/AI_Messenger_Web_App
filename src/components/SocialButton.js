import React from "react";
import "../App.css"; // Ensure your CSS file is properly imported

const SocialButton = ({ iconPath, buttonText }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <button className="social-button" onClick={handleClick}>
      <img
        src={require(`../assets/${iconPath}`)}
        alt=""
        className="social-button-icon"
      />
      <span className="social-button-text">{buttonText}</span>
    </button>
  );
};

export default SocialButton;
