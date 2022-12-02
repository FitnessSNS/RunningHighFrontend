/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { useAppSelector } from "src/app/hooks";
import { persistor } from "src/index";
import { Start } from "./Start";
import { Running } from "./Running";
import { Photo } from "./Photo";
import { Complete } from "./Complete";

export const Rewards = () => {
  const process = useAppSelector((state) => state.page.process);

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
          start: <Start />,
          running: <Running />,
          photo: <Photo />,
          complete: <Complete />,
        }[process]
      }
    </>
  );
};
