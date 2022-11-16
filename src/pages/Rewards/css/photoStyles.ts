import { css } from "@emotion/react";
import { theme } from "src/styles/theme";

export const photoStyle = css`
  position: relative;
  min-height: 630px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;

  #btnPhoto {
    ${theme.positionCenterX("absolute")};
    bottom: 30px;
    width: 335px;
  }

  #icoPhoto {
    vertical-align: middle;
    padding-right: 8px;
  }

  #cam {
    width: 100%;
  }

  #video,
  #photo {
    position: absolute;
    width: 100%;
    border: none;
    outline: none;
  }

  #video {
    top: 123px;
    height: 60%;
    object-fit: cover;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg); /* Safari and Chrome */
    -moz-transform: rotateY(180deg); /* Firefox */
  }

  #photo {
    top: 123px;
    height: 60%;
    object-fit: cover;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg); /* Safari and Chrome */
    -moz-transform: rotateY(180deg); /* Firefox */
  }

  #canvas {
    display: none;
  }
`;

export const titleStyle = css`
  padding: 65px 0 40px;
  color: #fff;
  ${theme.fontStyle("Pretendard-Regular", "normal", "700", "18px", "1")};
  text-align: center;
  letter-spacing: -0.25px;
`;

export const thumbsStyle = css`
  position: relative;
  width: 100%;
  height: 60%;
  z-index: 1;
  border: none;

  .frameTopLeft {
    display: block;
    position: absolute;
    left: 16px;
    top: 16px;
  }
  .frameBottomLeft {
    display: block;
    position: absolute;
    left: 16px;
    bottom: 16px;
  }
  .frameTopRight {
    display: block;
    position: absolute;
    right: 16px;
    top: 16px;
  }
  .frameBottomRight {
    display: block;
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
`;

export const afterPhotoStyle = css`
  display: none;
  justify-content: space-between;
  ${theme.positionCenterX("absolute")};
  bottom: 30px;
  width: 335px;
  height: 58px;

  #btnRefresh {
    width: 58px;
  }
  #btnGetReward {
    width: 267px;
  }
`;
