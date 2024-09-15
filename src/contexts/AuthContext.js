import React, { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

      setUser({ email });

      const toastResponse = await axios.post("http://localhost:8000/toast", {
        username: email,
      });

      // Show the toast message directly after the successful request
      toast.success(toastResponse.data.toast);
    } catch (err) {
      setError("Failed to register");
      toast.error("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
