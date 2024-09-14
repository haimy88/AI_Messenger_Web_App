import React from "react";
import FormInput from "./FormInput";
import Divider from "./Divider";
import SocialButton from "./SocialButton";

const LoginForm = () => {
  return (
    <div style={styles.loginForm}>
      <h2 style={styles.formHeading}>Log in</h2>
      <form>
        <FormInput type="email" placeholder="Email" iconPath="EmailIcon.png" />
        <FormInput
          type="password"
          placeholder="Password"
          iconPath="LockIcon.png"
          isPassword={true}
        />
        <div style={styles.forgotPassword}>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button type="submit" style={styles.submitButton}>
          Log in
        </button>
        <Divider />
        <div style={styles.socialButtons}>
          <SocialButton iconPath="GoogleIcon.png" buttonText="Google" />
          <SocialButton iconPath="FacebookIcon.png" buttonText="Facebook" />
        </div>
      </form>
      <div style={styles.registerLink}>
        <span>Have no account yet?</span> <a href="/register">Register</a>
      </div>
    </div>
  );
};

const styles = {
  loginForm: {
    maxWidth: "358px",
    width: "100%",
  },
  formHeading: {
    marginBottom: "20px",
    fontSize: "24px",
    textAlign: "center",
  },
  forgotPassword: {
    textAlign: "right",
    marginBottom: "20px",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#A4A8D1",
    borderRadius: "40px",
    border: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  socialButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  registerLink: {
    marginTop: "20px",
    textAlign: "center",
  },
};

export default LoginForm;
