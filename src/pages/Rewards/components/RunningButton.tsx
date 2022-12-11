/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as styles from "../css/runningStyles";

import { useRewardCheck, useRewardStop, useRewardEnd } from "../utils/api";
import { PositionProps } from "../utils/handleError";
import { RewardInfoProps } from "../Running";

import play from "src/assets/icon/btn_play.svg";
import pause from "src/assets/icon/btn_pause.svg";
import stop from "src/assets/icon/btn_stop.svg";
import cam from "src/assets/icon/btn_cam.svg";

export const RunningButton = (props: {
  position: PositionProps;
  rewardsInfo: RewardInfoProps;
  setModalClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onClickCheck = useRewardCheck(props.position, false);
  const onClickStop = useRewardStop(props.position);
  const onClickEnd = useRewardEnd(props.position, false);

  return (
    <>
      {
        {
          play: (
            <div
              css={styles.btnRoundStyle(play)}
              onClick={() => onClickCheck}
            />
          ),
          pause: (
            <div
              css={styles.btnRoundStyle(pause)}
              onClick={() => {
                onClickStop.then(() => props.setModalClicked(true));
              }}
            />
          ),
          stop: (
            <div css={styles.btnRoundStyle(stop)} onClick={() => onClickEnd} />
          ),
          cam: <div css={styles.btnRoundStyle(cam)} onClick={() => {}} />,
        }[props.rewardsInfo.status]
      }
    </>
  );
};
