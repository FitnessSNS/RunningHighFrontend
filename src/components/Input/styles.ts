import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const input = css`
  width: 100%;
  height: 58px;
  padding-left: 20px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.line};
  border-radius: 10px;
  color: ${theme.color.gray[500]};
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.25px;
  ::placeholder {
    color: ${theme.color.gray[500]};
    font-size: 15px;
    font-weight: 400;
  }
`;
