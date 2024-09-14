import React from "react";
import SocialButton from "./SocialButton";
import FormInput from "./FormInput";
import Divider from "./Divider";

const LoginPageLayout = () => {
  return (
    <div style={styles.loginPage}>
      <div style={styles.welcomePanel}>
        <img
          src="path/to/illustration.png"
          alt="Welcome"
          style={styles.image}
        />
        <h1 style={styles.heading}>Welcome aboard my friend</h1>
        <p style={styles.subheading}>Just a couple of clicks and we start</p>
      </div>
      <div style={styles.loginPanel}>
        <LoginForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div style={styles.loginForm}>
      <h2 style={styles.formHeading}>Log in</h2>
      <form>
        <FormInput type="email" placeholder="Email" icon="emailIcon.png" />
        <FormInput
          type="password"
          placeholder="Password"
          icon="passwordIcon.png"
        />
        <div style={styles.forgotPassword}>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button type="submit" style={styles.submitButton}>
          Log in
        </button>
        <Divider />
        <div style={styles.socialButtons}>
          <SocialButton icon="googleIcon.png" buttonText="Google" />
          <SocialButton icon="facebookIcon.png" buttonText="Facebook" />
        </div>
      </form>
      <div style={styles.registerLink}>
        <span>Have no account yet?</span> <a href="/register">Register</a>
      </div>
    </div>
  );
};

const styles = {
  loginPage: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#4b3af5",
  },
  welcomePanel: {
    flex: 1,
    color: "white",
    backgroundColor: "#4b3af5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "80%",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.2rem",
    textAlign: "center",
  },
  loginPanel: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  loginForm: {
    maxWidth: "300px",
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

export default LoginPageLayout;
