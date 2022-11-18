/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import * as styles from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/app/store";
import { RewardState } from "src/reducers/rewards";
import { getRewardUser } from "src/actions/rewards";
import face from "src/assets/face.svg";
import chart from "src/assets/chart.svg";
import chartCup from "src/assets/chartCup.svg";
import btnArrow from "src/assets/btn_arrow.svg";
import { HeaderContainer } from "src/components/Header";
import { FooterContainer } from "src/components/Footer";

export const Main = () => { 
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const rewardUser = useSelector(
    (state: {user: RewardState["user"]})=> state.user
  )
  useEffect(() => {
    if (!rewardUser) {
      dispatch(getRewardUser());
    }
  }, []);
  console.log(rewardUser);

  return (
    <>
      <HeaderContainer />
      <main css={styles.mainWrapper}>
        <div css={styles.mainStyle}>
          <div css={styles.graphStyle(rewardUser.loginDone)}>
            <div css={styles.innerWrapper}>
              <img src={face} alt="timer" css={styles.faceImgStyle} />
              <div css={styles.textwrapper}>
                <p css={styles.textStyle}>오늘 달린 거리</p>
                <p css={styles.distanceStyle}>
                  4.00<span className="kilometer">km</span>
                </p>
                <p css={styles.caloryStyle}>
                  120<span className="kcal">Kcal</span>
                </p>
              </div>
            </div>
          </div>
          <button
            css={styles.btnCommon}
            className="btnStart"
            onClick={() => {
              if(rewardUser.loginDone){
                navigate('/reward');
              }else{
                navigate("/login");
              }
            }}
          >
            <span css={{ paddingLeft: 48, fontWeight: 700, fontSize: 16 }}>
              {rewardUser.loginDone ? '운동 시작하기' : '로그인 하러 가기'}
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
