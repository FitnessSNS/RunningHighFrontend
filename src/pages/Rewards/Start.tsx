/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import * as styles from "./css/startStyles";
import { useDispatch } from "react-redux";
import { changeProcess } from "src/reducers/process";
import runAlone from "src/assets/runAlone.svg";
import runWith from "src/assets/runWith.svg";
import information from "src/assets/info.svg";
import { AppDispatch } from "src/app/store";
import { getRewardType } from "src/actions/rewards";

export const Start = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section css={styles.containerStyle}>
      <div css={styles.rewardStyle}>
        <h1 css={styles.titleStyle}>
          시작하실 운동유형을
          <br /> 선택해주세요!
        </h1>
        {EXERCISE_TYPES.map((exercise) => (
          <div
            key={exercise.id}
            css={styles.boxStyle}
            onClick={() => {
              dispatch(changeProcess("running"));
              // if (exercise.id === 1) {
              //   dispatch(getRewardType("P"));
              // } else {
              //   dispatch(getRewardType("G"));
              // }
            }}
          >
            <img
              src={exercise.imgUrl}
              style={{ width: 52, height: 52 }}
              alt="exercise"
            />
            <div css={styles.textStyle}>
              <h2>{exercise.title}</h2>
              <p>{exercise.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div css={styles.checkBoxStyle({ checked })}>
        <label htmlFor="checkbox" />
        <input
          type="checkbox"
          id="checkbox"
          onChange={(): void => setChecked(!checked)}
        />
        <p>선택한 운동으로 다음에도 계속하기</p>
        <img src={information} alt="info" />
      </div>
    </section>
  );
};

const EXERCISE_TYPES = [
  {
    id: 1,
    title: "개인 운동",
    subtitle: "혼자서 자유롭게 운동 시작하기",
    imgUrl: runAlone,
  },
  {
    id: 2,
    title: "그룹 운동",
    subtitle: "친구들과 함께 운동 시작하기",
    imgUrl: runWith,
  },
];
