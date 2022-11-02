import { css } from "@emotion/react";
import { TextAlign, TextSize } from "./index";

export const Size = {
  sm: {
    fontSize: 15,
    fontWeight: 400,
    color: "#333333",
  },
  base: {
    fontSize: 28,
    fontWeight: 700,
    color: "#333333",
  },
};

export const container = css`
  margin-top: 17px;
`;

export const title = css`
  margin: 17px 0;
  white-space: pre-wrap;
  line-height: 140%;
`;

export const align = (align: TextAlign) => {
  return (
    align &&
    css`
      text-align: ${align};
    `
  );
};

export const size = (size: TextSize) => {
  return (
    Size[size] &&
    css`
      font-size: ${Size[size]["fontSize"]}px;
      font-weight: ${Size[size]["fontWeight"]};
      color: ${Size[size]["color"]};
    `
  );
};
