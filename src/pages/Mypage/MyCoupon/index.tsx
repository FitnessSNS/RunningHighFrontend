/** @jsxImportSource @emotion/react */
import React from "react";

import NavBar from "src/components/NavBar";
import BackButton from "src/components/BackButton";
import Coupon from "src/components/Coupon";

import * as styles from "./styles";
import { couponData } from "src/libs/mock/data";

export const MyCoupon = () => {
  return (
    <>
      <NavBar left={<BackButton />} />
      <section css={styles.container}>
        {couponData.map((coupon, index) => (
          <Coupon key={index} data={coupon} />
        ))}
      </section>
    </>
  );
};
