import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const container = css`
  height: 100vh;
  padding: 58px 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const topContainer = css``;

export const inputBlock = css`
  position: relative;
  margin: 23px 0;
`;

export const button = css`
  position: absolute;
  width: 72px;
  height: 30px;
  right: 14px;
  top: 14px;
  background-color: ${theme.color.gray[100]};
  border: none;
  border-radius: 6px;
  color: ${theme.color.gray[700]};
  font-size: 14px;
  font-weight: 400px;
  cursor: pointer;
`;

export const bottomContainer = css`
  padding-bottom: 30px;
`;
