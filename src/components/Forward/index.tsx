/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./styles";
import arrow from "src/assets/btn_arrow.svg";

export type TitleSize = "sm" | "base";

type Props = {
  title?: string;
  link: string;
  size?: TitleSize;
};

const Forward = ({ title, link = "", size = "sm" }: Props) => {
  return (
    <div css={styles.container}>
      <span css={styles.size(size)}>{title}</span>
      <Link to={link}>
        <img src={arrow} alt="페이지 이동" />
      </Link>
    </div>
  );
};

export default React.memo(Forward);
