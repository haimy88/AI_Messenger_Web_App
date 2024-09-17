import React from "react";
import Divider from "./Divider";
import SocialButton from "./SocialButton";
import RegisterButton from "./RegisterButton";

const ButtonStack = ({ isFormValid, loading, handleRegister }) => {
  return (
    <div style={styles.buttonStack}>
      <button
        type="submit"
        className={`submitButton ${isFormValid ? "enabled" : ""}`}
        disabled={!isFormValid}
      >
        Log in
      </button>
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
