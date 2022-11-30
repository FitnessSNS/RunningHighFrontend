import { css } from "@emotion/react";
import { theme } from "src/styles/theme";
import start from "src/assets/start.svg";
import dashEllipse from "src/assets/dashEllipse.svg";

export const mainWrapper = css`
  position: relative;
  min-height: 630px;
  height: calc(100vh - 138px);
  background-color: ${theme.color.gray[50]};
`;

export const mainStyle = css`
  ${theme.positionCenterX("absolute")};
  top: 14px;
  width: 335px;
  min-height: 438px;
  height: 69.5%;
  background: #ffffff;
  border-radius: 10px;
`;

export const graphStyle = (isLoggedIn: boolean) => css`
  ${theme.positionCenterX("absolute")};
  top: 9.13%;
  width: 263px;
  height: 263px;

  border-radius: 50%;
  background: ${isLoggedIn ? `${theme.gradient.main};` : "#DDDDDD"};

  z-index: 0;

  :after {
    content: "";
    ${theme.positionCenter("absolute")};
    width: 235px;
    height: 235px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
  }
`;

export const innerWrapper = css`
  ${theme.positionCenter("absolute")};
  width: 224px;
  height: 224px;
  background: url(${dashEllipse}) no-repeat center;
  z-index: 2;
`;

export const faceImgStyle = css`
  display: block;
  position: absolute;
  top: 34.16px;
  left: 95px;
  width: 28px;
  height: 28px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const textwrapper = css`
  ${theme.positionCenterX("absolute")};
  top: 85px;
`;

export const textStyle = css`
  color: #888888;
  ${theme.fontStyle("Pretendard-Regular", "normal", "400", "14px", "100%")};
  text-align: center;
  letter-spacing: -0.25px;
`;

export const distanceStyle = css`
  margin: 10px auto 18px;
  color: #333333;
  ${theme.fontStyle("Pretendard-Regular", "normal", "700", "34px", "normal")};
  text-align: center;

  .kilometer {
    color: #666666;
    ${theme.fontStyle("Pretendard-Regular", "normal", "400", "26px", "normal")};
  }
`;

export const caloryStyle = css`
  color: #888888;
  ${theme.fontStyle("Pretendard-Regular", "normal", "700", "18px", "normal")};
  text-align: center;

  .kcal {
    padding-left: 2px;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const btnCommon = css`
  position: absolute;
  left: 20px;
  bottom: 40px;
  width: 295px;
  height: 58px;
  background: ${theme.color.main.primary};
  border-radius: 10px;
  color: #fff;
  border: none;
  cursor: pointer;

  &.btnStart {
    background: #00bf68 url(${start}) no-repeat 80px center;
  }
`;

export const listWrapper = css`
  ${theme.positionLeftBottom("absolute")};
  left: 50%;
  transform: translateX(-50%);
  bottom: 34px;
  width: 335px;

  li ~ li {
    margin-top: 4%;
  }
`;

export const listStyle = css`
  ${theme.flexBox("row", "center", "space-between")}
  width: 335px;
  height: 58px;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;

  .chart {
    display: block;
    width: 24px;
    height: 24px;
    flex: 1;
  }

  p {
    ${theme.flexBox("row", "center", "initial")}
    flex: 4;

    color: #333333;
    ${theme.fontStyle("Pretendard-Regular", "normal", "400", "15px", "100%")}
    letter-spacing: -0.25px;
  }

  .btnArrow {
    display: block;
    flex: 0.8;
    width: 14px;
    height: 14px;
  }
`;
