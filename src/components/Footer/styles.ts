import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const footStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 80px;

  div.start {
    padding-top: 20px;
    text-align: center;
    cursor: pointer;

    &:nth-of-type(3) {
      padding-top: 14px;
    }
  }
`;
