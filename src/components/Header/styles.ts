import { css } from "@emotion/react";
import menu from "../../assets/menu.svg";
import close from "../../assets/icon/ico_close.svg";

export const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  height: 58px;
`;

export const pointStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 14px;

  width: 81px;
  height: 35px;

  border: 1px solid #dddddd;
  border-radius: 30px;

  box-sizing: border-box;

  .myPoint {
    font-family: "Pretendard-Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    text-align: right;
  }
`;

export const menuStyle = css`
  width: 48px;
  background: url(${menu}) no-repeat 100%;
  cursor: pointer;
`;

export const closeBtnStyle = css`
  width: 100%;
  height: 100%;
  background: url(${close}) no-repeat 100%;
  cursor: pointer;
`;
