import { ITheme } from "./types";

const darkTheme: ITheme = {
  colors: {
    primary: "#90caf9",
    secondary: "#f48fb1",
    background: "#121212",
    text: "#ffffff",
    button: {
      base: {
        background: "#90caf9",
        text: "#121212",
        hover: "#64b5f6",
        disabled: "#a0a0a0",
      },
      delete: {
        background: "#f48fb1",
        text: "#121212",
        hover: "#f06292",
        disabled: "#e57373",
      },
      outlined: {
        background: "transparent",
        text: "#90caf9",
        hover: "#e3f2fd",
        disabled: "#e3f2fd",
        border: "#90caf9",
      },
      "outlined-delete": {
        background: "transparent",
        text: "#f48fb1",
        hover: "#f8bbd0",
        disabled: "#f8bbd0",
        border: "#f48fb1",
      },
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
