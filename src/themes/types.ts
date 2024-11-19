export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: {
      background: string;
      text: string;
      hover: string;
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
