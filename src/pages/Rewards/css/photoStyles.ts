import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";

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
    width: 375px;
    border: none;
    outline: none;
  }

  #video {
    top: 123px;
    height: 499px;
    object-fit: cover;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg); /* Safari and Chrome */
    -moz-transform: rotateY(180deg); /* Firefox */
  }

  #photo {
    top: 123px;
    height: 499px;
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

export const thumbsStyle = (frame: string) => css`
  position: relative;
  height: 499px;
  background: transparent;
  z-index: 1;
  border: none;

  :after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${frame}) no-repeat center center/ 93%;
    z-index: 2;
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
