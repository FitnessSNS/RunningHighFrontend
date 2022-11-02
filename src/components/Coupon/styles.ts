import { css } from "@emotion/react";

export const container = css`
  width: 335px;
  height: 112px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  padding: 16px;
`;

export const imgBlock = css`
  width: 80px;
  height: 80px;
  line-height: 80px;
  background-color: #f0f0f3;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  text-align: center;
  img {
    vertical-align: middle;
  }
`;

export const infoBlock = css`
  width: 255px;
  padding: 8px 8px 8px 16px;
  h1 {
    font-size: 14px;
    font-weight: 700;
    color: #333333;
    padding-top: 7px;
  }
`;

export const top = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 12px;
    font-weight: 400;
    color: #888888;
  }
`;

export const bottom = css`
  display: flex;
  padding-top: 16px;
  line-height: 30px;
  img {
    vertical-align: middle;
  }
  span {
    padding-left: 6px;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
`;
