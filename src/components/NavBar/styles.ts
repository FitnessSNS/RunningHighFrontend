import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const container = css`
  width: 100%;
  height: 58px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background-color: ${theme.color.white};
`;

export const leftBlock = css`
  margin-right: auto;
`;

export const rightBlock = css`
  margin-left: auto;
`;
