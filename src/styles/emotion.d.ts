import "@emotion/react";

declare module "@emotion/react" {
  export interface ThemePropsType {
    color: {
      main: {
        primary: string;
        positive: string;
        negative: string;
      };
      error: string;
      disabled: string;
      kakao: string;
      line: string;
      white: string;
      gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        500: string;
        700: string;
        800: string;
      };
    };
    gradient: {
      main: string;
      running: string;
    };
  }
  export interface ThemePropsType extends MixinPropsType {
    fontStyle: (
      family?: string,
      style?: string,
      weight?: string,
      size?: string,
      lineHeight?: string
    ) => string;
    flexBox: (direction?: string, align?: string, justify?: string) => string;
    positionCenterX: (type?: string) => string | undefined;
    positionCenterY: (type?: string) => string | undefined;
    positionCenter: (type?: string) => string | undefined;
    positionLeftTop: (type?: string) => string | undefined;
    positionRightTop: (type?: string) => string | undefined;
    positionLeftBottom: (type?: string) => string | undefined;
    positionRightBottom: (type?: string) => string | undefined;
    positionAll: (type?: string) => string | undefined;
  }
}
