import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "claro" | "oscuro";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (mode: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("claro");

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "claro" ? "oscuro" : "claro"));
  };

  const setTheme = (mode: Theme) => {
    setThemeState(mode);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext debe usarse dentro de un ThemeProvider"
    );
  }
  return context;
}
