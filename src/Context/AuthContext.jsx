import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const login = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = storedUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setUser(username); // Update the state with the logged-in user
      localStorage.setItem("user", username); // Store user in localStorage
      return true;
    }
    return false;
  };

  const register = (username, password) => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if the username already exists
    const userExists = storedUsers.some((user) => user.username === username);
    if (userExists) {
      return false; // Username already taken
    }

    // Register new user
    storedUsers.push({ username, password });
    localStorage.setItem("users", JSON.stringify(storedUsers));
    return true; // Successfully registered
  };

  const logout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};