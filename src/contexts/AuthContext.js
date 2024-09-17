import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      await authService.register(email, password);
      setUser({ email });

      const toastMessage = await authService.triggerToast(email);
      toast.success(toastMessage);
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
