/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { RootState } from "src/app/store";
import { useAppSelector } from "src/app/hooks";

import * as styles from "./css/runningStyles";
import { distanceStyle } from "../Main/styles";

import { useRewardStart, useRewardCheck } from "./utils/api";
import { notFoundLocation, useRewardError } from "./utils/handleError";
import { RunningButton } from "./components/RunningButton";

import runAlone from "src/assets/runAlone.svg";
import clock from "src/assets/icon/ico_clock.svg";
import fire from "src/assets/icon/ico_fire.svg";

export type RewardInfoProps = {
  challenge_goal: number;
  time: string;
  distance: number;
  calorie: string;
  status: string;
};

export const Running = () => {
  const [position, setPosition] = useState({ longitude: 0, latitude: 0 });
  const [percent, setPercent] = useState(0);
  const [rewardsInfo, setRewardsInfo] = useState({
    challenge_goal: 0,
    time: "00:00:00",
    distance: 0,
    calorie: "0",
    status: "play",
  });

  const USER_ID = sessionStorage.getItem("id");
  const MENT = sessionStorage.getItem("ment");

  const { start, startDone, check, stop, end } = useAppSelector(
    (state: RootState) => state.rewards
  );

  //사용자 위치 확인하기
  const findUserLocation = (position: {
    coords: { longitude: number; latitude: number };
  }) => {
    setPosition({
      ...position,
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("브라우저에서 위치를 허용해주세요.");
    } else {
      navigator.geolocation.getCurrentPosition(
        findUserLocation,
        notFoundLocation
      );
    }
  }, []);

  //페이지 접속하자마자 start API 호출
  const result = useRewardStart(position);
  console.log(result);
  const { handleError } = useRewardError(
    start,
    position,
    setPosition,
    rewardsInfo,
    setRewardsInfo
  );

  useEffect(() => {
    if (startDone) {
      if (start?.isSuccess) {
        setRewardsInfo({
          ...rewardsInfo,
          challenge_goal: start.result.challenge_goal,
          time: start.result.time,
          distance: start.result.distance,
          calorie: start.result.calorie,
          status: "pause",
        });
      } else {
        handleError();
      }
    }
  }, [handleError, rewardsInfo, start?.isSuccess, startDone]);

  useEffect(() => {
    if (rewardsInfo.status === "pause") {
      // useRewardCheck(position, false);
    }
  }, []);

  return (
    <section css={styles.containerStyle}>
      <div css={styles.runningTimeStyle}>
        <img src={clock} alt="clock" />
        <p>
          진행시간 <span>{rewardsInfo.time}</span>
        </p>
      </div>
      <h1 css={styles.titleStyle}>
        {rewardsInfo.status === "play"
          ? `${USER_ID}${MENT}`
          : "목표를 향해\n달려가고 있어요!"}
      </h1>
      <div css={styles.runningGraphStyle(percent)}>
        <div css={styles.runningGraphInnerStyle}>
          <div css={styles.textWrapStyle}>
            <img src={runAlone} alt="running" />
            <p css={distanceStyle}>
              {rewardsInfo.distance}
              <span className="kilometer">km</span>
            </p>
            <p css={styles.distanceGoalStyle}>
              목표거리
              <span className="goal">{rewardsInfo.challenge_goal}</span>km
            </p>
            <div css={styles.startPointStyle} />
            <div css={styles.endPointStyle} />
          </div>
        </div>
        <RunningButton rewardsInfo={rewardsInfo} />
      </div>
      <div css={styles.runningFootStyle}>
        <img src={fire} alt="fire" css={{ marginRight: 17 }} />
        <p style={{ fontSize: 14, fontWeight: 500 }}>
          현재 <span>{rewardsInfo.calorie}</span>Kcal가 소모되었어요.
        </p>
      </div>
    </section>
  );
};
