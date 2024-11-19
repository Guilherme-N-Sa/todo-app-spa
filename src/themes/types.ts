// types.ts
export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: {
      [key: string]: {
        background: string;
        text: string;
        hover: string;
        disabled: string;
        border?: string;
      };
    };
    postIt: {
      background: string;
      text: string;
      border: string;
      hoverBackground: string;
    };
  };
  fonts: {
    main: string;
    code: string;
  };
}
