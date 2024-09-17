import React from "react";

const LoginButton = ({ isFormValid }) => {
  const handleLoginClick = (event) => {
    event.preventDefault();
  };

  return (
    <button
      type="submit"
      className={`submitButton ${isFormValid ? "enabled" : ""}`}
      disabled={!isFormValid}
      onClick={handleLoginClick}
    >
      Log in
    </button>
  );
};

export default LoginButton;
