import { createContext } from "react";

export const themes = {
  dark: {
    backgroundColor: "#000",
    color: "#fff",
    type: 'dark'
  },
  light: {
    backgroundColor: '#fff',
    color: "#000",
    type: 'light'
  }
}

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {}
});
