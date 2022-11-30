/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as styles from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/app/hooks";
import instance from "src/libs/config";
import { getRewardUser } from "src/actions/rewards";
import { HeaderContainer } from "src/components/Header";
import { FooterContainer } from "src/components/Footer";
import face from "src/assets/face.svg";
import chart from "src/assets/chart.svg";
import chartCup from "src/assets/chartCup.svg";
import btnArrow from "src/assets/btn_arrow.svg";
import { useBeforeLeave } from "src/customHooks/useBeforeLeave";
import { requestToken } from "src/actions/token";

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.token.accessToken);
  const { enableEvent, disableEvent } = useBeforeLeave();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    enableEvent();
    disableEvent();
  }, []);
  useEffect(() => {
    instance.defaults.headers["x-access-token"] = accessToken;
    setIsLoggedIn(true);
    dispatch(getRewardUser());
  }, [accessToken]);
  console.log(accessToken);
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
                  -.--<span className="kilometer">km</span>
                </p>
                <p css={styles.caloryStyle}>
                  0<span className="kcal">Kcal</span>
                </p>
              </div>
            </div>
          </div>
          <button
            css={styles.btnCommon}
            className="btnStart"
            onClick={() => {
              if (accessToken) {
                navigate("/reward");
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
