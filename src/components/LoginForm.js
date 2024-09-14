import React, { useContext, useState } from "react";
import FormInput from "./FormInput";
import Divider from "./Divider";
import SocialButton from "./SocialButton";
import RegisterButton from "./RegisterButton";
import AuthContext from "../contexts/AuthContext";

const LoginForm = () => {
  const { login, loading, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      login(email, password);
    }
  };

  const isValidEmail = email.includes("@");
  const isFormValid = isValidEmail && password.length > 0;

  return (
    <div style={styles.loginForm}>
      <h2 style={styles.formHeading}>Log in</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="Email"
          iconPath="EmailIcon.png"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type="password"
          placeholder="Password"
          iconPath="LockIcon.png"
          isPassword={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={styles.forgotPassword}>
          <a href="/forgot-password" style={styles.forgotPasswordLink}>
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className={`submitButton ${isFormValid && !loading ? "enabled" : ""}`}
          disabled={!isFormValid || loading}
        >
          {loading ? "Logging in..." : "Log in"}
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
