import React, { useState } from "react";

const FormInput = ({
  type,
  placeholder,
  iconPath,
  isPassword,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.inputContainer}>
      <img src={require(`../assets/${iconPath}`)} alt="" style={styles.icon} />
      <input
        type={isPassword && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles.input}
      />
      {isPassword && (
        <img
          src={require("../assets/ViewIcon.png")}
          alt="Toggle password visibility"
          style={styles.viewIcon}
          onClick={togglePasswordVisibility}
        />
      )}
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
  viewIcon: {
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },
};

export default FormInput;
