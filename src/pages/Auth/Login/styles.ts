import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const container = css`
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const topContainer = css`
  padding-top: 90px;
`;

export const imgBlock = css`
  display: block;
`;

export const formBlock = css`
  padding-top: 50px;
  button {
    margin: 17px 0;
  }
`;

export const checkBlock = css`
  display: flex;
  padding: 4px 0;
  div {
    display: flex;
    align-items: center;
    padding-right: 35px;
  }
  label {
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.color.gray[800]};
  }
  input {
    margin: 0;
    width: 22px;
    height: 22px;
    border: 1px solid ${theme.color.gray[300]};
    bordr-radius: 4px;
  }
`;

export const bottomContainer = css`
  padding-top: 122px;
  padding-bottom: 50px;
`;

export const socialBtn = css`
  position: relative;
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 10px;
  color: ${theme.color.gray[800]};
  background-color: ${theme.color.kakao};
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0;
  text-align: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    margin-left: 8px;
  }
`;

export const list = css`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  li {
    padding: 0 14px;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.color.gray[500]};
  }
`;

export const listLine = css`
  border-right: 1px solid ${theme.color.line};
`;
