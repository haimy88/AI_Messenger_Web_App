import React from "react";

const RegisterButton = ({ isFormValid, loading, handleRegister }) => {
  return (
    <button
      style={styles.registerButton}
      disabled={!isFormValid || loading}
      onClick={handleRegister}
    >
      {loading ? "Registering..." : "Register"}
    </button>
  );
};

const styles = {
  registerButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "transparent",
    border: "1px solid #3949AB",
    borderRadius: "40px",
    color: "#3949AB",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "14px",
  },
};

export default RegisterButton;
