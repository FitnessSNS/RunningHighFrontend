/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProcess } from "src/reducers/process";
import { distanceStyle } from "../Main/styles";
import * as styles from "./css/runningStyles";
import runAlone from "src/assets/runAlone.svg";
import clock from "src/assets/icon/ico_clock.svg";
import play from "src/assets/icon/btn_play.svg";
import pause from "src/assets/icon/btn_pause.svg";
import cam from "src/assets/icon/btn_cam.svg";
import fire from "src/assets/icon/ico_fire.svg";
import {
  rewardRunningCheck,
  rewardRunningEnd,
  rewardRunningStart,
  rewardRunningStop,
} from "src/actions/rewards";
import { AppDispatch, RootState } from "src/app/store";

export const Running = () => {
  const [position, setPosition] = useState({ longitude: 0, latitude: 0 });
  const dispatch = useDispatch<AppDispatch>();

  const start = useSelector((state: RootState) => state.rewards.start);
  const check = useSelector((state: RootState) => state.rewards.check);
  const stop = useSelector((state: RootState) => state.rewards.stop);
  const end = useSelector((state: RootState) => state.rewards.end);

  //user location
  const findUserLocation = (position: {
    coords: { longitude: number; latitude: number };
  }) => {
    setPosition({
      ...position,
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  };

  const notFoundLocation = () => {
    alert("위치를 찾을 수 없습니다.");
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

  /*   useEffect(() => {
    //check 주기적으로 호출
    let interval = setInterval(() => {
      checkRunningStateAndFetch(rewardRunningCheck);
    }, 30000);
    // forceEnd=true 일 경우 강제 종료처리
    if (check.forceEnd) {
      clearInterval(interval);
      checkRunningStateAndFetch(rewardRunningEnd);
    }
  }, [position]); */

  //running 상태 체크, dispatch 함수
  const checkRunningStateAndFetch = (
    runningState: (arg0: { longitude: string; latitude: string }) => any
  ) => {
    dispatch(
      runningState({
        longitude: position.longitude.toString(),
        latitude: position.latitude.toString(),
      })
    );
  };

  return (
    <section css={styles.containerStyle}>
      <div css={styles.runningTimeStyle}>
        <img src={clock} alt="clock" />
        <p>
          진행시간 <span>09:47:00</span>
        </p>
      </div>
      <h1 css={styles.titleStyle}>
        목표를 향해
        <br />
        달려가고 있어요!
      </h1>
      <div css={styles.runningGraphStyle}>
        <div css={styles.runningGraphInnerStyle}>
          <div css={styles.textWrapStyle}>
            <img src={runAlone} alt="running" />
            <p css={distanceStyle}>
              4.00<span className="kilometer">km</span>
            </p>
            <p css={styles.distanceGoalStyle}>
              목표거리 <span className="goal">5.00</span>km
            </p>
          </div>
        </div>
        {/*         {
          {
            start: (
              <div
                css={styles.btnRoundStyle(play)}
                onClick={() => checkRunningStateAndFetch(rewardRunningStart)}
              />
            ),
            running: {
              stop: (
                <div
                  css={styles.btnRoundStyle(pause)}
                  onClick={() => checkRunningStateAndFetch(rewardRunningStop)}
                />
              ),
              end: (
                <div
                  css={styles.btnRoundStyle(cam)}
                  onClick={() => {
                    checkRunningStateAndFetch(rewardRunningEnd);
                    dispatch(changeProcess("photo"));
                  }}
                />
              ),
            }[check.distance >= end.distance ? "end" : "stop"],
          }[start.distance > 0 ? "running" : "start"]
        } */}
        <div
          css={styles.btnRoundStyle(play)}
          onClick={() => {
            dispatch(changeProcess("photo"));
          }}
        />
      </div>
      <div css={styles.runningFootStyle}>
        <img src={fire} alt="fire" css={{ marginRight: 17 }} />
        <p style={{ fontSize: 14, fontWeight: 500 }}>
          현재 <span>120</span>Kcal가 소모되었어요.
        </p>
      </div>
    </section>
  );
};
