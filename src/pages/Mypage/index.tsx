/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";

import Forward from "src/components/Forward";

import * as styles from "./styles";
import profile from "src/assets/profile.svg";
import coupon from "src/assets/coupon.svg";
import shop from "src/assets/shop.svg";
import statistics from "src/assets/statistics.svg";
import clock1 from "src/assets/clock_1.svg";
import clock2 from "src/assets/clock_2.svg";

export const Mypage = () => {
  const nickname = "러닝하이";
  const point = "5,250";
  const exerciseTime = "03: 24: 30";
  const exerciseDate = "12";
  const totalDate = "30";
  return (
    <section css={styles.container}>
      <section css={[styles.topContainer, styles.inner]}>
        <div css={styles.infoBlock}>
          <img src={profile} alt="기본 이미지" />
          <div>
            <span>{nickname}님의 포인트</span>
            <h1>{point}P</h1>
          </div>
        </div>
        <ul css={styles.listBlock}>
          <li>
            <Link to="/mycoupon">
              <div>
                <img src={coupon} alt="내 쿠폰함" />내 쿠폰함
              </div>
            </Link>
          </li>
          <li>
            <div>
              <img src={shop} alt="쇼핑하기" />
              쇼핑하기
            </div>
          </li>
          <li>
            <div>
              <img src={statistics} alt="내 통계" />내 통계
            </div>
          </li>
        </ul>
      </section>
      <section css={[styles.middleContainer, styles.inner]}>
        <Forward title="이번 달 운동 기록" link="" size="base" />
        <div css={styles.exerciseBlock}>
          <div>
            <img src={clock1} alt="시계" />
            <span>총 운동 시간</span>
            <h1>{exerciseTime}</h1>
          </div>
          <div>
            <img src={clock2} alt="시계" />
            <span>총 운동 일</span>
            <h1>
              {exerciseDate} / {totalDate}일
            </h1>
          </div>
        </div>
      </section>
      <section css={[styles.bottomContainer, styles.inner]}>
        <div css={[styles.menuBlock, styles.menuLine]}>
          <p>나의 활동</p>
          <Forward title="챌린지 참여 내역" link="" size="sm" />
        </div>
        <div css={styles.menuBlock}>
          <p>서비스</p>
          <Forward title="공지사항" link="" size="sm" />
          <Forward title="이벤트" link="" size="sm" />
        </div>
      </section>
    </section>
  );
};
