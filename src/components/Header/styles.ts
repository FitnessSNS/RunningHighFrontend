import { css } from "@emotion/react";
import { theme } from "src/styles/theme";
import menu from "src/assets/menu.svg";
import close from "src/assets/icon/ico_close.svg";

export const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  height: 58px;
`;

export const pointStyle = css`
  ${theme.flexBox("row", "flex-start", "space-between")};
  height: 35px;
  padding: 10px 14px;
  border: 1px solid #dddddd;
  border-radius: 30px;

  box-sizing: border-box;

  .myPoint {
    ${theme.fontStyle("Pretendard-Regular", "normal", "500", "13px", "17px")};
    text-align: right;
  }
`;

export const menuStyle = css`
  width: 48px;
  height: 35px;
  background: url(${menu}) no-repeat 100%;
  cursor: pointer;
`;

export const closeBtnStyle = css`
  width: 100%;
  height: 100%;
  background: url(${close}) no-repeat 100%;
  cursor: pointer;
`;
