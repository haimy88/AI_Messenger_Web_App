import React, { useContext, useState } from "react";
import InputStack from "./InputStack";
import ButtonStack from "./ButtonStack";
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
};

export default LoginForm;
