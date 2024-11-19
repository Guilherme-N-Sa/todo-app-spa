import { ITheme } from "./types";

export const lightTheme: ITheme = {
  colors: {
    primary: "#1976d2",
    secondary: "#dc004e",
    background: "#ffffff",
    text: "#000000",
    button: {
      background: "#1976d2",
      text: "#ffffff",
      hover: "#1565c0",
    },
    postIt: {
      background: "#FFEB3B",
      text: "#000000",
      border: "#ced4da",
      hoverBackground: "#FFF176",
    },
  },
  fonts: {
    main: "'Noto Sans KR', sans-serif",
    code: "'Fira Code', monospace",
  },
};
