import React from "react";
import FormInput from "./FormInput";
import ForgotPassword from "./ForgotPassword";

const InputStack = ({ email, setEmail, password, setPassword }) => {
  return (
    <div style={styles.inputStack}>
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
      <ForgotPassword />
    </div>
  );
};

const styles = {
  inputStack: {
    marginBottom: "30px",
  },
};

export default InputStack;
