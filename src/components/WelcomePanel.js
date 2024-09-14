import React from "react";
import illustration from "../assets/Illustration.png";
import logo from "../assets/LogoWhite.png"; // Assuming the logo is added to assets folder

const WelcomePanel = () => {
  return (
    <div style={styles.welcomePanel}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <img src={illustration} alt="Welcome" style={styles.image} />
      <h1 style={styles.heading}>Welcome aboard my friend</h1>
      <p style={styles.subheading}>just a couple of clicks and we start</p>
    </div>
  );
};

const styles = {
  welcomePanel: {
    flex: 3,
    color: "white",
    backgroundColor: "#3949AB",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px 0 0 20px",
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: "50px",
    left: "50px",
    width: "49px",
    height: "49px",
  },
  image: {
    width: "357px",
    height: "357px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "16px",
    marginTop: "-18px",
  },
  subheading: {
    fontSize: "14px",
    textAlign: "center",
  },
};

export default WelcomePanel;
