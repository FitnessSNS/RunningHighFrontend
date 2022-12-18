/** @jsxImportSource @emotion/react */
import React, { useEffect, useLayoutEffect, useState } from "react";

import * as styles from "src/pages/Rewards/css/runningStyles";
import { distanceStyle } from "src/pages/Main/styles";

import runAlone from "src/assets/runAlone.svg";
import clock from "src/assets/icon/ico_clock.svg";
import fire from "src/assets/icon/ico_fire.svg";
import play from "src/assets/icon/btn_play.svg";
import pause from "src/assets/icon/btn_pause.svg";
import stop from "src/assets/icon/btn_stop.svg";
import cam from "src/assets/icon/btn_cam.svg";

export type RunDataProps = {
  calorie: number;
  challenge_goal: number;
  check_time: string;
  distance: number;
  exercise_id: number;
  forceEnd: boolean;
  image: null;
  nickname: string;
  time: string;
  user_id: number;
};

const RunningLayout = (props: {
  runData: RunDataProps;
  runState: string;
  setRunState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [buttonImage, setButtonImage] = useState(play);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (props.runData.distance > 0) {
      setPercent((props.runData.distance / props.runData.challenge_goal) * 70);
    }
  }, [percent, props.runData.distance]);

  useLayoutEffect(() => {
    if (props.runState === "pause") {
      setButtonImage(pause);
    } else if (props.runState === "stop") {
      setButtonImage(stop);
    } else if (props.runState === "cam") {
      setButtonImage(cam);
    }
  }, [props.runState]);
  console.log(percent);
  return (
    <section css={styles.containerStyle}>
      <div css={styles.runningTimeStyle}>
        <img src={clock} alt="clock" />
        <p>
          진행시간
          <span>{props.runData.time}</span>
        </p>
      </div>
      <h1 css={styles.titleStyle}>
        목표를 향해
        <br />
        달려볼까요?
      </h1>
      <div css={styles.runningGraphStyle(percent)}>
        <div css={styles.runningGraphInnerStyle}>
          <div css={styles.textWrapStyle}>
            <img src={runAlone} alt="running" />
            <p css={distanceStyle}>
              {props.runData.distance / 1000}
              <span className="kilometer">km</span>
            </p>
            <p css={styles.distanceGoalStyle}>
              목표거리&nbsp;
              <span className="goal">
                {props.runData.challenge_goal / 1000}
              </span>
              km
            </p>
            {/* <div css={styles.startPointStyle} />
            <div css={styles.endPointStyle} /> */}
          </div>
        </div>
        <div
          css={styles.btnRoundStyle(buttonImage)}
          onClick={() => {
            switch (props.runState) {
              case "play":
                props.setRunState("pasue");
                setButtonImage(pause);
                return;
              case "pause":
                props.setRunState("stop");
                setButtonImage(stop);
                return;
              case "stop":
                props.setRunState("cam");
                setButtonImage(cam);
                return;
            }
          }}
        />
      </div>
      <div css={styles.runningFootStyle}>
        <img src={fire} alt="fire" css={{ marginRight: 17 }} />
        <p style={{ fontSize: 14, fontWeight: 500 }}>
          현재 <span>{props.runData.calorie}</span>
          Kcal가 소모되었어요.
        </p>
      </div>
    </section>
  );
};

export default RunningLayout;
