import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const container = css`
  height: 100vh;
  padding: 58px 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const topContainer = css`
  padding: 20px 0;
  text-align: center;
  img {
    width: 80px;
    height: 80px;
  }
  h1 {
    padding-top: 20px;
    font-size: 20px;
    font-weight: 600;
    color: ${theme.color.gray[800]};
  }
`;
export const middleContainer = css`
  padding-top: 20px;
  input:first-of-type {
    margin-bottom: 20px;
  }
`;
export const bottomContainer = css`
  padding-bottom: 30px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: ${theme.color.gray[700]};
  }
  li {
    padding: 33px 20px;
  }
`;
