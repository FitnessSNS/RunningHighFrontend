import { css } from "@emotion/react";
import { theme } from "src/styles/theme";
import { CheckBoxType } from "./index";

export const Type = {
  all: {
    fontSize: 16,
    fontWeight: 700,
    paddingBottom: 0,
  },
  basic: {
    fontSize: 14,
    fontWeight: 400,
    paddingBottom: 27,
  },
};

export const checkbox = css`
  display: flex;
  align-items: center;
  label {
    padding-left: 10px;
    color: ${theme.color.gray[800]};
  }
  img {
    cursor: pointer;
  }
  input {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

export const type = (type: CheckBoxType) => {
  return (
    Type[type] &&
    css`
      padding-bottom: ${Type[type]["paddingBottom"]}px;
      label {
        font-size: ${Type[type]["fontSize"]}px;
        font-weight: ${Type[type]["fontWeight"]};
      }
    `
  );
};
