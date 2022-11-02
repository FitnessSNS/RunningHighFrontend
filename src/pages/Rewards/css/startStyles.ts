import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import active from "../../../assets/active.svg";

type CheckedProps = {
  checked: boolean;
};

export const containerStyle = css`
  height: 630px;
`;

export const rewardStyle = css`
  height: 100%;
  padding: 40px 20px;
`;

export const titleStyle = css`
  width: 229px;
  height: 66px;
  margin-bottom: 40px;
  color: #333;
  ${theme.fontStyle("Pretendard-Regular", "normal", "700", "28px", "1.5")};
`;

export const boxStyle = css`
  ${theme.flexBox("row", "center", "space-between")};
  width: 335px;
  height: 120px;
  padding: 34px 30px;
  margin-bottom: 14px;

  background: #ffffff;
  border: 1px solid ${theme.color.gray[200]};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const textStyle = css`
  width: 66.56716418%;
  h2 {
    padding-bottom: 12px;
    color: #333333;
    ${theme.fontStyle("Pretendard-Regular", "normal", "700", "18px", "normal")};
    letter-spacing: -0.25px;
  }
  p {
    ${theme.fontStyle("Pretendard-Regular", "normal", "400", "14px", "100%")};
    color: #666666;
  }
`;

export const checkBoxStyle = (props: CheckedProps) => css`
  ${theme.flexBox("row", "center", "space-between")};
  position: relative;
  bottom: 40px;
  width: 245px;
  height: 22px;
  margin: 0 auto;

  label {
    width: 22px;
    height: 22px;

    border: ${props.checked ? "none" : "1px solid #ddd"};
    border-radius: 4px;

    background: ${props.checked
      ? `url(${active}) no-repeat 100%/contain`
      : "#ffff"};
  }

  input[type="checkbox"] {
    display: none;
    width: 22px;
    height: 22px;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.25px;
  }

  img {
    display: inline-block;
  }
`;
