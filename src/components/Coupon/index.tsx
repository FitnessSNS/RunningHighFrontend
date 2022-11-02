/** @jsxImportSource @emotion/react */
import React from "react";

import * as styles from "./styles";
import cafe from "src/assets/cafe.svg";
import coin from "src/assets/coin.svg";

type CouponProps = {
  brand?: string;
  name?: string;
  amount?: number;
  period?: number;
};

type Props = {
  data?: CouponProps;
};

const Coupon = ({ data }: Props) => {
  const { brand, name, amount, period } = data || {};
  return (
    <div css={styles.container}>
      <div css={styles.imgBlock}>
        <img src={cafe} alt="카페라떼" />
      </div>
      <div css={styles.infoBlock}>
        <div css={styles.top}>
          <span>{brand}</span>
          <span>D-{period}</span>
        </div>
        <h1>{name}</h1>
        <div css={styles.bottom}>
          <img src={coin} alt="coin" />
          <span>{amount}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Coupon);
