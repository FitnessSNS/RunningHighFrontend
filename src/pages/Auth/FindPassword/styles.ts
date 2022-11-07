import { css } from "@emotion/react";

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

export const code = css`
  margin-top: 10px;
`;

export const button = css`
  position: absolute;
  width: 72px;
  height: 30px;
  left: 243px;
  top: 12px;
  background-color: #f0f0f3;
  border: none;
  border-radius: 6px;
  color: #666666;
  font-size: 14px;
  font-weight: 400px;
  cursor: pointer;
`;

export const timerBlock = css`
  display: inline-block;
  position: absolute;
  width: 35px;
  height: 14px;
  left: 280px;
  top: 22px;
`;

export const bottomContainer = css`
  padding-bottom: 30px;
`;