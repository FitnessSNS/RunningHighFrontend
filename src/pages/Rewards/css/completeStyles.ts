import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const pollenImgStyles = css`
  ${theme.positionCenterX("absolute")}
  top:-58px;
  min-height: 300px;
  height: 47.6%;
`;

export const containerStyle = css`
  position: relative;
  min-height: 630px;
  height: calc(100vh - 138px);
  overflow: hidden;
`;

export const titleStyle = css`
  margin-top: 18.7%;
  margin-bottom: 2%;

  ${theme.fontStyle("Pretendard-Regular", "normal", "700", "1.75rem", "1.125")};

  text-align: center;
  letter-spacing: -0.25px;
  color: #333333;

  img {
    margin-bottom: 2%;
  }
  span {
    color: #00a057;
  }
`;

export const tableWrapperStyle = css`
  width: 90%;
  margin: 0 auto;
  padding: 24px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;

  #btnRewardDetail {
    border-radius: 10px;
  }
`;
export const runningTableStyle = css`
  width: 100%;

  tr {
    height: 30px;
    ${theme.fontStyle("Pretendard-Regular", "normal", "500", "14px", "14px")}
    letter-spacing: -0.25px;
    color: #666666;
  }
  th,
  td {
    width: 50%;
  }

  th {
    text-align: left;
  }
  td {
    text-align: right;
    span {
      color: #333;
      font-weight: 600;
    }
  }
`;

export const linkStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  p {
    padding: 0 20px;
    ${theme.fontStyle("Pretendard-Regular", "normal", "500", "14px", "14px")}
    letter-spacing: -0.25px;
    color: #666666;
  }
  a {
    position: relative;
    :after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #ddd;
    }
  }
`;
