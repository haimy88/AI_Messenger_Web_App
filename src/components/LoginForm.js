import React, { useContext, useState } from "react";
import InputStack from "./InputStack";
import ButtonStack from "./ButtonStack";
import AuthContext from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const { register, loading, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid) {
      register(email, password);
    }
  };

  const isValidEmail = email.includes("@");
  const isFormValid = isValidEmail && password.length > 0;

  return (
    <div style={styles.loginForm}>
      <h2 style={styles.formHeading}>Log in</h2>
      {error && <div style={styles.error}>{error}</div>}
      <form>
        <InputStack
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <ButtonStack
          isFormValid={isFormValid}
          loading={loading}
          handleRegister={handleRegister}
        />
      </form>
      <ToastContainer />
    </div>
  );
};

const styles = {
  loginForm: {
    maxWidth: "358px",
    width: "85%",
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
