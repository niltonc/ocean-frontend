import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: any;
    fonts: any;

    colors: {
      primary: string,
      secundary: string,
      yellow: string,
      black: string,
      blue: string,
      greylight: string,
      grey: string,
      white: string,
    };

    fonts:{
      header: string,
      title: string,
      button: string,
      titlecard: string,
      h1: string,
      h2: string,
      h3: string,
      h4: string,
      h5: string,
    };

  }
}