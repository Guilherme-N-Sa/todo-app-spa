import { ITheme } from "./types";

const darkTheme: ITheme = {
  colors: {
    primary: "#90caf9",
    secondary: "#f48fb1",
    background: "#121212",
    text: "#ffffff",
    button: {
      background: "#90caf9",
      text: "#121212",
      hover: "#64b5f6",
    },
    postIt: {
      background: "#fbc02d",
      text: "#ffffff",
      border: "#424242",
      hoverBackground: "#f9a825",
    },
  },
  fonts: {
    main: "'Noto Sans KR', sans-serif",
    code: "'Fira Code', monospace",
  },
};

export { darkTheme };
