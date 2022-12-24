/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as styles from "./styles";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/app/hooks";
import instance from "src/libs/config";

import { requestToken } from "src/actions/token";
import { changeProcess } from "src/reducers/process";

import { getRewardUser, rewardRunningStart } from "src/actions/rewards";
import { HeaderContainer } from "src/components/Header";
import { FooterContainer } from "src/components/Footer";

import face from "src/assets/face.svg";
import chart from "src/assets/chart.svg";
import chartCup from "src/assets/chartCup.svg";
import btnArrow from "src/assets/btn_arrow.svg";
import ModalAlert from "src/components/ModalAlert";

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { rewardUser, rewardUserDone } = useAppSelector(
    (state) => state.rewards
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);
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
    }
  }, []);

  useEffect(() => {
    //쿠키 만료 시간 직전 토큰 재발급 - 시간 추후 조정 필요
    setTimeout(() => {
      dispatch(requestToken());
    }, EXPIRED_TIME);
  }, []);

  useEffect(() => {
    if (!rewardUser?.isSuccess) {
      switch (rewardUser?.code) {
        case 1053:
        case 1054:
          //로그인 토큰이 없는 경우 or 토큰 에러
          if (document.cookie) {
            dispatch(requestToken());
          } else {
            setModal(true);
          }
          break;
        case 1055:
          //로그아웃 상태
          setModal(true);
          break;
      }
    }
  }, []);
  console.log(rewardUser);

  const unitOfCalorie = (cal: string) => {
    if (cal.substr(0, 1) === "0") {
      return cal.substr(1, cal.indexOf(".") - 1);
    } else {
      return cal.substr(0, cal.indexOf(".") - 1);
    }
  };

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
                        ? rewardUser.result.activity.distance_stack / 1000
                        : "-.--"
                      : "-.--"
                    : "-.--"}
                  <span className="kilometer"> km</span>
                </p>
                <p css={styles.caloryStyle}>
                  {rewardUserDone
                    ? rewardUser.isSuccess
                      ? rewardUser.result.activity.calorie_stack > 0
                        ? unitOfCalorie(
                            rewardUser.result.activity.calorie_stack
                          )
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
                changeProcess("start");
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
      {modal && (
        <ModalAlert
          isOpen={modal}
          title={"로그인 세션이 만료되었습니다.\n다시 로그인 해주세요"}
          size="modal"
          buttonConfirmTitle="확인"
          onConfirm={() => {
            setModal(false);
            navigate("/login");
          }}
        />
      )}
    </>
  );
};
