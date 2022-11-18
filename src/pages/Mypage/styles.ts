import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const inner = css`
  padding-left: 20px;
  padding-right: 20px;
`;

export const topContainer = css`
  height: 214px;
  margin-bottom: 30px;
`;

export const infoBlock = css`
  display: flex;
  padding: 24px 0 48px 0;
  div {
    padding-left: 14px;
    margin: auto 0;
  }
  span {
    font-size: 15px;
    font-weight: 400;
    color: #666666;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #333333;
    margin-top: 8px;
  }
`;

export const listBlock = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  img {
    padding-bottom: 19px;
  }
`;

export const middleContainer = css`
  height: 190px;
  padding: 18px 0 30px 0;
  background-color: #f5f5f8;
`;

export const exerciseBlock = css`
  width: 100%;
  height: 94px;
  border-radius: 10px;
  display: flex;
  background-color: #ffffff;
  div {
    margin: auto;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    padding-left: 6px;
  }
  h1 {
    font-size: 18px;
    font-weight: 700;
    color: #333333;
    padding-top: 14px;
  }
`;

export const bottomContainer = css`
  height: 277px;
  padding: 0 0 32px 0;
  p {
    font-size: 12px;
    font-weight: 400;
    color: #888888;
  }
`;

export const menuBlock = css`
  padding: 30px 0 18px 0;
`;

export const menuLine = css`
  border-bottom: 1px solid #e9e9e9;
`;
