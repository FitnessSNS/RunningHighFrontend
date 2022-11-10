/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RewardState } from "src/reducers/rewards";
import Complete from "./Complete";
import Photo from "./Photo";
import Running from "./Running";
import { Start } from "./Start";
import { persistor } from "../../index";
import { Main } from "../Main";

export const Rewards = () => {
  const process = useSelector(
    (state: { rewards: RewardState }) => state.rewards.process
  );
  console.log(process);

  // 브라우저 창을 닫을 때 로컬스토리지 초기화
  const purge = async () => {
    await persistor.purge();
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      console.log("초기화");
      setTimeout(() => purge(), 200);
    };
  }, []);

  return (
    <>
      {
        {
          main: <Main />,
          start: <Start />,
          running: <Running />,
          photo: <Photo />,
          complete: <Complete />,
        }[process]
      }
    </>
  );
};
