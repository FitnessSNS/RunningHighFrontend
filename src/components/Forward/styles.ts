import { css } from "@emotion/react";
import { TitleSize } from "./index";

export const Size = {
  sm: {
    fontSize: 16,
    fontWeight: 500,
  },
  base: {
    fontSize: 18,
    fontWeight: 700,
  },
};

export const container = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  span {
    color: #333333;
  }
`;

export const size = (size: TitleSize) => {
  return (
    Size[size] &&
    css`
      font-size: ${Size[size]["fontSize"]}px;
      font-weight: ${Size[size]["fontWeight"]};
    `
  );
};
