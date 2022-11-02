import { css } from "@emotion/react";

export const footStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  div.start {
    padding-top: 20px;
    text-align: center;
    cursor: pointer;

    &:nth-of-type(3) {
      padding-top: 14px;
    }
  }
`;

export const runningFootStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;

  position: absolute;
  left: 20px;
  bottom: 50px;

  width: 335px;
  height: 58px;

  background: #f0f0f3;
  border-radius: 10px;
`;
