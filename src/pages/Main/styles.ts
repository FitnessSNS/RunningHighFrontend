import { css } from "@emotion/react";
import start from "../../assets/start.svg";
import dashEllipse from "../../assets/dashEllipse.svg";
import { theme } from "src/styles/theme";

export const mainWrapper = css`
  position: relative;
  height: 630px;
  background-color: ${theme.color.gray[50]};
`;

export const mainStyle = css`
  position: absolute;
  top: 14px;
  left: 20px;
  width: 335px;
  height: 438px;
  background: #ffffff;
  border-radius: 10px;
`;

export const graphStyle = css`
  ${theme.positionCenterX("absolute")};
  top: 40px;
  width: 263px;
  height: 263px;

  border-radius: 50%;
  background: ${theme.gradient.main};

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
    background: #00bf68 url(${start}) no-repeat 91px center;
  }
`;

export const listStyle = css`
  ${theme.flexBox("row", "center", "space-between")}
  position: absolute;
  left: 20px;
  width: 335px;
  height: 58px;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;

  :first-of-type {
    bottom: 104px;
  }
  :last-of-type {
    bottom: 34px;
  }

  .chart {
    display: block;
    width: 24px;
    height: 24px;
    flex: 1;
  }

  a {
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
