/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./styles";
import face from "src/assets/face.svg";
export type TextAlign = "left" | "right" | "center";
export type TextSize = "sm" | "base";

type Props = {
  children?: React.ReactNode;
  textAlign?: TextAlign;
  textSize?: TextSize;
  img?: boolean;
};
const Title = ({
  children,
  textAlign = "left",
  textSize = "base",
  img = true,
}: Props) => {
  return (
    <div css={styles.container}>
      {img && (
        <div>
          <img src={face} alt="아이콘" />
        </div>
      )}
      <div css={[styles.title, styles.align(textAlign), styles.size(textSize)]}>
        {children}
      </div>
    </div>
  );
};

export default React.memo(Title);
