/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./styles";
import close from "src/assets/btn_close.svg";

const CloseButton = () => {
  return (
    <div css={styles.container}>
      <Link to="/">
        <img src={close} alt="뒤로가기" />
      </Link>
    </div>
  );
};

export default React.memo(CloseButton);
