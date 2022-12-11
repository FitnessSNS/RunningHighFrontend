/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "../css/runningStyles";

import { RewardInfoProps } from "../Running";

import play from "src/assets/icon/btn_play.svg";
import pause from "src/assets/icon/btn_pause.svg";
import stop from "src/assets/icon/btn_stop.svg";
import cam from "src/assets/icon/btn_cam.svg";
import { useAppDispatch } from "src/app/hooks";

export const RunningButton = (props: { rewardsInfo: RewardInfoProps }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {
        {
          play: <div css={styles.btnRoundStyle(play)} onClick={() => {}} />,
          pause: <div css={styles.btnRoundStyle(pause)} onClick={() => {}} />,
          stop: <div css={styles.btnRoundStyle(stop)} onClick={() => {}} />,
          cam: <div css={styles.btnRoundStyle(cam)} onClick={() => {}} />,
        }[props.rewardsInfo.status]
      }
    </>
  );
};
