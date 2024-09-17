import React from "react";

const ForgotPassword = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="forgot-password-container">
      <a href="/" className="forgot-password-link" onClick={handleClick}>
        Forgot password?
      </a>
    </div>
  );
};

export default ForgotPassword;
