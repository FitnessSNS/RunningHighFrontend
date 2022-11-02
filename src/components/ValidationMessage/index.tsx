/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./styles";

type Props = {
  message?: any;
};

const ValidationMessage = ({ message }: Props) => {
  return <div css={styles.container}>{message}</div>;
};

export default React.memo(ValidationMessage);
