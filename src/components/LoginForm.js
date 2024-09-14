import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Divider from "./Divider";
import SocialButton from "./SocialButton";
import RegisterButton from "./RegisterButton";
import "../App.css"; // Ensure to import your CSS

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsFormValid(emailPattern.test(email) && password.length > 0);
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div style={styles.loginForm}>
      <h2 style={styles.formHeading}>Log in</h2>
      <form>
        <FormInput
          type="email"
          placeholder="Email"
          iconPath="EmailIcon.png"
          value={email}
          onChange={handleEmailChange}
        />
        <FormInput
          type="password"
          placeholder="Password"
          iconPath="LockIcon.png"
          isPassword={true}
          value={password}
          onChange={handlePasswordChange}
        />
        <div style={styles.forgotPassword}>
          <a href="/forgot-password" style={styles.forgotPasswordLink}>
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className={
            isFormValid
              ? "submit-button active-button"
              : "submit-button disabled-button"
          }
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
      </form>
      <div style={styles.registerSection}>
        <span>Have no account yet?</span>
        <RegisterButton />
      </div>
    </div>
  );
};

const styles = {
  loginForm: {
    maxWidth: "358px",
    width: "75%",
  },
  formHeading: {
    marginBottom: "50px",
    fontSize: "20px",
    textAlign: "center",
    color: "#3949AB",
  },
  forgotPassword: {
    textAlign: "right",
    marginBottom: "30px",
  },
  forgotPasswordLink: {
    textDecoration: "none",
    color: "#3949AB",
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

export default LoginForm;
