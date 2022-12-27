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

export const all = css`
  width: 335px;
  height: 58px;
  border: 1px solid ${theme.color.line};
  border-radius: 10px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
`;

export const bottomContainer = css`
  padding-bottom: 30px;
`;
