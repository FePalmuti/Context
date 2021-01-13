import React, {createContext, useContext, useState} from "react";

const ThemeContext = createContext();

const themes = {
  default: {
    color: {
      bgPrimary: "#9c88ff",
      bgSecundary: "#f5f6fa",
      textPrimary: "#fff",
      textSecondary: "#333",
      btnColor: "#9268EC",
    },
  },
  dark: {
    color: {
      bgPrimary: "#121212",
      bgSecondary: "#333",
      textPrimary: "#fff",
      textSecondary: "#ddd",
      btnColor: "#333",
    },
  },
};

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState("default");

  const value = {
    theme: themes[theme],
    name: theme,
    setTheme: () =>
      theme === "default" ? setTheme("dark") : setTheme("default"),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const {theme, name, setTheme} = context;
  return {theme, name, setTheme};
}
