import React from "react";

const SocialButton = ({ iconPath, buttonText }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <button style={styles.socialButton} onClick={handleClick}>
      <img src={require(`../assets/${iconPath}`)} alt="" style={styles.icon} />
      <span style={styles.text}>{buttonText}</span>
    </button>
  );
};

const styles = {
  socialButton: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "40px",
    padding: "10px 20px",
    flex: "1",
    justifyContent: "center",
    background: "none",
    cursor: "pointer",
    margin: "0 5px",
  },
  icon: {
    marginRight: "10px",
    width: "24px",
    height: "24px",
  },
  text: {
    fontSize: "16px",
    color: "#333",
  },
};

export default SocialButton;
