import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const containerStyle = css`
  position: relative;
  min-height: 630px;
  height: calc(100vh - 138px);
  overflow: hidden;
`;

export const runningTimeStyle = css`
  display: flex;
  ${theme.flexBox("row", "center", "center")};
  margin: 40px auto 20px;

  p {
    padding-left: 6px;
    color: #888888;
    ${theme.fontStyle("Pretendard-Regular", "normal", "400", "15px")};
    letter-spacing: -0.25px;
  }

  span {
    padding-left: 6px;
  }
`;

export const titleStyle = css`
  margin-bottom: 35px;
  color: #333;
  ${theme.fontStyle("Pretendard-Regular", "normal", "700", "28px", "1.5")};
  text-align: center;
  letter-spacing: -0.25px;
`;

export const runningGraphStyle = (percent: number) => css`
  ${theme.positionCenterX("absolute")};
  width: 269px;
  height: 269px;
  background-image: ${theme.gradient.running};
  border-radius: 50%;

  :after {
    content: "";
    ${theme.positionLeftTop("absolute")};
    width: 270px;
    height: 270px;
    border-radius: 50%;
    border: none;
    background: conic-gradient(
      transparent 0% ${percent}%,
      #ddd ${percent}% 70%,
      #fff 70% 100%
    );
    rotate: 233deg;
    z-index: -1;
  }
`;
export const startPointStyle = css`
  ${theme.positionLeftBottom("absolute")};
  left: -68px;
  bottom: -37px;
  width: 15.5px;
  height: 15.5px;
  background-image: ${theme.gradient.running};
  border-radius: 50%;
`;

export const endPointStyle = css`
  ${theme.positionRightBottom("absolute")};
  /* right: -70px;
  bottom: -35px; */
  right: -68px;
  bottom: -37px;
  width: 15.5px;
  height: 15.5px;
  background-color: #ddd;
  border-radius: 50%;
`;

export const runningGraphInnerStyle = css`
  ${theme.positionCenterX("absolute")};
  top: 15px;

  width: 239px;
  height: 239px;
  background: #fff;
  border-radius: 50%;
`;

export const textWrapStyle = css`
  ${theme.flexBox("column", "stretch", "center")}
  ${theme.positionCenter("absolute")};
  top: 40%;
  z-index: 1;

  img {
    width: 52px;
    height: 52px;
    margin: 0 auto;
  }
`;

export const distanceGoalStyle = css`
  color: ${theme.color.gray[500]};
  ${theme.fontStyle("Pretendard-Regular", "normal", "400", "16px", "normal")};

  .goal {
    font-weight: 700;
  }
`;
export const btnRoundStyle = (status: string) => css`
  ${theme.positionCenterX("absolute")};
  bottom: 0;
  background: url(${status}) no-repeat;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  cursor: pointer;
`;

export const runningFootStyle = css`
  ${theme.flexBox("row", "center", "center")};
  ${theme.positionCenterX("absolute")};
  bottom: 40px;

  width: 90%;
  height: 58px;
  background: #f0f0f3;
  border-radius: 10px;
`;
