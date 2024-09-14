import React from "react";

const FormInput = ({ type, placeholder, iconPath }) => {
  return (
    <div style={styles.inputContainer}>
      <img src={require(`../assets/${iconPath}`)} alt="" style={styles.icon} />
      <input type={type} placeholder={placeholder} style={styles.input} />
    </div>
  );
};

const styles = {
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
  },
  icon: {
    marginRight: "10px",
    width: "24px",
    height: "24px",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
  },
};

export default FormInput;
