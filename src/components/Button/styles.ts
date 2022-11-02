import { css } from "@emotion/react";
import { ButtonStyle, ButtonSize } from "./index";

export const Size = {
  small: {
    height: 36,
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 10,
  },
  medium: {
    height: 46,
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 10,
  },
  large: {
    height: 58,
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 10,
  },
  modal: {
    height: 54,
    fontSize: 14,
    fontWeight: 500,
    borderRadius: 0,
  },
};

export const Style = {
  white: {
    color: "#333333",
    bgColor: "#FFFFFF",
  },
  primary: {
    color: "#FFFFFF",
    bgColor: "#00BF68",
  },
  gray: {
    color: "#888888",
    bgColor: "#F0F0F3",
  },
};

export const button = css`
  width: 100%;
  height: 100%;
  border: none;
`;

export const style = (style: ButtonStyle) => {
  return (
    Style[style] &&
    css`
      color: ${Style[style]["color"]};
      background-color: ${Style[style]["bgColor"]};
    `
  );
};

export const size = (size: ButtonSize) => {
  return (
    Size[size] &&
    css`
      height: ${Size[size]["height"]}px;
      font-size: ${Size[size]["fontSize"]}px;
      font-weight: ${Size[size]["fontWeight"]};
      border-radius: ${Size[size]["borderRadius"]}px;
    `
  );
};
