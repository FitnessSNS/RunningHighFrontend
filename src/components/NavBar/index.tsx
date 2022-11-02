/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./styles";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

const NavBar = ({ left, right }: Props) => {
  return (
    <div css={styles.container}>
      <div css={styles.leftBlock}>{left}</div>
      <div css={styles.rightBlock}>{right}</div>
    </div>
  );
};

export default React.memo(NavBar);
