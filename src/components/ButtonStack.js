import React from "react";
import Divider from "./Divider";
import SocialButton from "./SocialButton";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton"; // Import the new LoginButton component

const ButtonStack = ({ isFormValid, loading, handleRegister }) => {
  return (
    <div style={styles.buttonStack}>
      <LoginButton isFormValid={isFormValid} />
      <div style={styles.dividerContainer}>
        <Divider />
      </div>
      <div style={styles.socialButtons}>
        <SocialButton iconPath="GoogleIcon.png" buttonText="Google" />
        <SocialButton iconPath="FacebookIcon.png" buttonText="Facebook" />
      </div>
      <div style={styles.registerSection}>
        <span>Have no account yet?</span>
        <RegisterButton
          isFormValid={isFormValid}
          loading={loading}
          handleRegister={handleRegister}
        />
      </div>
    </div>
  );
};

const styles = {
  buttonStack: {
    marginTop: "20px",
  },
  dividerContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
  },
  socialButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
  registerSection: {
    marginTop: "20px",
    textAlign: "center",
  },
};

export default ButtonStack;
