import { css } from "@emotion/react";

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
  width: 250px;
  height: 100px;
  background-color: rgba(255, 0, 0, 0.2);
  margin: 0 auto;
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
    color: #333333;
  }
  input {
    margin: 0;
    width: 22px;
    height: 22px;
    border: 1px solid #dddddd;
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
  color: #333333;
  background-color: #f8eb00;
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
    padding: 0 20px;
    font-size: 14px;
    font-weight: 400;
    color: #888888;
  }
`;

export const listLine = css`
  border-right: 1px solid #e9e9e9;
`;
