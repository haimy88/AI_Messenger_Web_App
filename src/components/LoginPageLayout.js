import React from "react";
import LoginForm from "./LoginForm";
import WelcomePanel from "./WelcomePanel"; // Importing the new component

const LoginPageLayout = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loginPage}>
        <WelcomePanel />
        <div style={styles.loginPanel}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#5769D4",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginPage: {
    display: "flex",
    width: "90vw",
    height: "90vh",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  },
  loginPanel: {
    flex: 2,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    borderRadius: "0 20px 20px 0",
    width: "486px",
  },
};

export default LoginPageLayout;
