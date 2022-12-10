/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as styles from "./styles";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/app/hooks";
import instance from "src/libs/config";

import { requestToken } from "src/actions/token";
import { changeProcess } from "src/reducers/process";
import { useRewardUserError } from "./utils";

import { getRewardUser } from "src/actions/rewards";
import { HeaderContainer } from "src/components/Header";
import { FooterContainer } from "src/components/Footer";

import face from "src/assets/face.svg";
import chart from "src/assets/chart.svg";
import chartCup from "src/assets/chartCup.svg";
import btnArrow from "src/assets/btn_arrow.svg";

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { rewardUser, rewardUserDone } = useAppSelector(
    (state) => state.rewards
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { handleError } = useRewardUserError(rewardUser);
  const EXPIRED_TIME = 1000 * 60 * 60 * 1; //1hr

  useEffect(() => {
    //토큰 유무 체크 후 rewardUser API 호출
    if (document.cookie) {
      setIsLoggedIn(true);
      instance.defaults.headers["x-access-token"] =
        document.cookie.substring(4);
      dispatch(getRewardUser());
    } else {
      setIsLoggedIn(false);
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    if (rewardUserDone) {
      if (rewardUser?.isSucess) {
        sessionStorage.setItem("id", rewardUser?.result.userId);
        sessionStorage.setItem("ment", rewardUser?.result.ment);
      } else {
        handleError();
      }
    }
  }, [handleError, rewardUser?.isSucess, rewardUserDone]);

  useEffect(() => {
    //쿠키 만료 시간 직전 토큰 재발급 - 시간 추후 조정 필요
    setTimeout(() => {
      dispatch(requestToken());
    }, EXPIRED_TIME);
  }, []);

  console.log(rewardUser);

  return (
    <>
      <HeaderContainer />
      <main css={styles.mainWrapper}>
        <div css={styles.mainStyle}>
          <div css={styles.graphStyle(isLoggedIn)}>
            <div css={styles.innerWrapper}>
              <img src={face} alt="timer" css={styles.faceImgStyle} />
              <div css={styles.textwrapper}>
                <p css={styles.textStyle}>오늘 달린 거리</p>
                <p css={styles.distanceStyle}>
                  {rewardUserDone
                    ? rewardUser.isSuccess
                      ? rewardUser.result.activity.distance_stack > 0
                        ? rewardUser.result.activity.distance_stack
                        : "-.--"
                      : "-.--"
                    : "-.--"}
                  <span className="kilometer"> km</span>
                </p>
                <p css={styles.caloryStyle}>
                  {rewardUserDone
                    ? rewardUser.isSuccess
                      ? rewardUser.result.activity.calorie_stack > 0
                        ? rewardUser.result.activity.calorie_stack
                        : 0
                      : 0
                    : 0}
                  <span className="kcal">Kcal</span>
                </p>
              </div>
            </div>
          </div>
          <button
            css={styles.btnCommon}
            className="btnStart"
            onClick={() => {
              if (isLoggedIn) {
                navigate("/reward");
                changeProcess("start");
              } else {
                navigate("/login");
              }
            }}
          >
            <span css={{ paddingLeft: 16, fontWeight: 700, fontSize: 16 }}>
              {isLoggedIn ? "운동 시작하기" : "로그인 하러 가기"}
            </span>
          </button>
        </div>
        <ul css={styles.listWrapper}>
          <li css={styles.listStyle}>
            <img src={chart} className="chart" alt="chart" />
            <p>나의 운동 기록</p>
            <img src={btnArrow} className="btnArrow" alt="btn" />
          </li>
          <li css={styles.listStyle}>
            <img src={chartCup} className="chart" alt="challenge" />
            <p>진행 중인 챌린지</p>
            <img src={btnArrow} className="btnArrow" alt="btn" />
          </li>
        </ul>
      </main>
      <FooterContainer />
    </>
  );
};
