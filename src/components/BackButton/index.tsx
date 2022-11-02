/** @jsxImportSource @emotion/react */
import React from "react";
import { useNavigate } from "react-router-dom";

import * as styles from "./styles";
import back from "src/assets/btn_back.svg";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div css={styles.container}>
      <img src={back} alt="뒤로가기" onClick={() => navigate(-1)} />
    </div>
  );
};

export default React.memo(BackButton);
