import React, { useContext, useState } from "react";
import InputStack from "./InputStack";
import ButtonStack from "./ButtonStack";
import AuthContext from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <InputStack
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <ButtonStack
          isFormValid={isFormValid}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </form>
      <ToastContainer />
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
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "10px",
  },
};

export default LoginForm;
