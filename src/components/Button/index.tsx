/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./styles";

export type ButtonStyle = "white" | "primary" | "gray";
export type ButtonSize = "small" | "medium" | "large" | "modal";

type Props = {
  children?: React.ReactNode;
  style?: ButtonStyle;
  size?: ButtonSize;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  style = "white",
  size = "small",
  disabled = false,
  id,
  onClick,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      css={[styles.button, styles.style(style), styles.size(size)]}
      id={id}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
