import { ReactNode } from "react";
import { ITheme } from "@themes/types";
import { lightTheme, darkTheme } from "themes";
import { createContext, useState, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface IThemeContextProps {
  theme: ITheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<undefined | IThemeContextProps>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
