// src/App.js
import React from "react";
import LoginPageLayout from "./components/LoginPageLayout";
import { AuthProvider } from "../src/contexts/AuthContext";
import "./App.css"; // Assuming your styles are here

function App() {
  return (
    <AuthProvider>
      <LoginPageLayout />
    </AuthProvider>
  );
}

export default App;
