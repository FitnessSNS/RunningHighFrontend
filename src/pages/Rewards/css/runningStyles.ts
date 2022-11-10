import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const runningTimeStyle = css`
  display: flex;
  ${theme.flexBox("row", "center", "space-between")};

  width: 148px;
  height: 15px;
  margin: 40px auto 20px;

  p {
    padding-left: 6px;
    width: calc(100% - 14px);
    color: #888888;
    ${theme.fontStyle("Pretendard-Regular", "normal", "400", "15px", "normal")};
    letter-spacing: -0.25px;
  }

  span {
    padding-left: 12px;
  }
`;

export const titleStyle = css`
  margin-bottom: 35px;
  color: #333;
  ${theme.fontStyle("Pretendard-Regular", "normal", "700", "28px", "1.5")};
  text-align: center;
  letter-spacing: -0.25px;
`;

export const runningGraphStyle = css`
  ${theme.positionCenterX("absolute")};
  width: 269px;
  height: 269px;
  background-image: ${theme.gradient.running};
  border-radius: 50%;

  :after {
    content: "";
    ${theme.positionLeftTop("absolute")};
    width: 269px;
    height: 269px;
    border-radius: 50%;
    border: none;
    background: conic-gradient(transparent 0% 56%, #ddd 56% 70%, #fff 70% 100%);
    rotate: 233deg;
    z-index: -1;
  }

  /* :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 14px;

    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #269e62;
    z-index: 1;
  } */
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
