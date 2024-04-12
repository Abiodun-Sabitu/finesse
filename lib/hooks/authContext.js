"use client";
import { createContext, useState } from "react";

// This is the authContext is used to conditionally render what view is displayed on the auth.
const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState("login");
  const value = { currentView, setCurrentView };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
