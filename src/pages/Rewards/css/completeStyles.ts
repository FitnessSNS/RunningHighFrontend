import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";

export const containerStyle = (bg: string) => css`
  position: relative;
  top: -58px;
  height: 631px;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 289px;
    background: url(${bg}) no-repeat;
  }
`;
