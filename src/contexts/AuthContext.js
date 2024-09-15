// src/context/AuthContext.js
import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://registrationserver.azurewebsites.net/register",
        {
          username: email,
          password: password,
        }
      );

      console.log("User registered:", response.data);
      setUser({ email });

      const toastResponse = await axios.post("http://localhost:8000/toast", {
        username: email,
      });

      setToastMessage(toastResponse.data.message);
    } catch (err) {
      setError("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToastMessage(""); // Reset the toast message when the user logs out
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, logout, toastMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
