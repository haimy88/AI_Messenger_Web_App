import React from "react";
import "./LoginPageLayout.css"; // or use styled-components

const LoginPageLayout = () => {
  return (
    <div className="login-page">
      <div className="welcome-panel">
        {/* Welcome message and illustration */}
        <img src="path/to/illustration.png" alt="Welcome" />
        <h1>Welcome aboard my friend</h1>
        <p>Just a couple of clicks and we start</p>
      </div>
      <div className="login-panel">
        {/* Login form and social buttons */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPageLayout;
