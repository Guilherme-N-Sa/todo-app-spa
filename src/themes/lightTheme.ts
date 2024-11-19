import { ITheme } from "./types";

export const lightTheme: ITheme = {
  colors: {
    primary: "#1976d2",
    secondary: "#dc004e",
    background: "#ffffff",
    text: "#000000",
    button: {
      base: {
        background: "#1976d2",
        text: "#ffffff",
        hover: "#1565c0",
        disabled: "#90caf9",
      },
      delete: {
        background: "#dc004e",
        text: "#ffffff",
        hover: "#d6002d",
        disabled: "#f48fb1",
      },
      outlined: {
        background: "transparent",
        text: "#1976d2",
        hover: "#e3f2fd",
        disabled: "#e3f2fd",
        border: "#1976d2",
      },
      "outlined-delete": {
        background: "transparent",
        text: "#dc004e99",
        hover: "#f8bbd0",
        disabled: "#f8bbd0",
        border: "#dc004e99",
      },
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
