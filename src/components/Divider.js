import React from "react";

const Divider = () => {
  return (
    <div style={styles.dividerContainer}>
      <hr style={styles.line} />
      <span style={styles.text}>Or</span>
      <hr style={styles.line} />
    </div>
  );
};

const styles = {
  dividerContainer: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  },
  line: {
    flex: 1,
    border: "none",
    borderTop: "1px solid #ccc",
  },
  text: {
    margin: "0 10px",
    color: "#999",
  },
};

export default Divider;
