"use client";

import { createContext, useContext, useState, useEffect } from "react";

// 1. Create the context
const ThemeContext = createContext(null);

// 2. Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // or get it from local storage, etc.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // You can add logic here to load the theme from localStorage
  }, []);

  return (
    <ThemeContextProvider value={{ theme, setTheme }}>
      {mounted ? children : null}
    </ThemeContextProvider>
  );
};

// 3. Create a custom hook to consume the context easily
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};