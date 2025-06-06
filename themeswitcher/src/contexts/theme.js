import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "",
  darkTheme: () => {},
  lightTheme: () => {},
});

export default function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ThemeContext.Provider;
