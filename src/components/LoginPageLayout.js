import React from "react";
import LoginForm from "./LoginForm";
import illustration from "../assets/Illustration.png";
import logo from "../assets/LogoWhite.png"; // Assuming the logo is added to assets folder

const LoginPageLayout = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loginPage}>
        <div style={styles.welcomePanel}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <img src={illustration} alt="Welcome" style={styles.image} />
          <h1 style={styles.heading}>Welcome aboard my friend</h1>
          <p style={styles.subheading}>Just a couple of clicks and we start</p>
        </div>
        <div style={styles.loginPanel}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#4b3af5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginPage: {
    display: "flex",
    width: "80vw",
    height: "80vh",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  },
  welcomePanel: {
    flex: 1,
    color: "white",
    backgroundColor: "#3949AB", // Darker color for welcome panel
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px 0 0 20px",
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "49px",
    height: "49px",
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
    borderRadius: "0 20px 20px 0",
  },
};

export default LoginPageLayout;
