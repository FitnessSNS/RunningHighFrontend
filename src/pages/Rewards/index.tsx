/** @jsxImportSource @emotion/react */
import { Complete } from "./Complete";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAppSelector } from "src/app/hooks";
import instance from "src/libs/config";

import { persistor } from "src/index";
import { Start } from "./Start";
import { Running } from "./Running";
import { Photo } from "./Photo";

export const Rewards = () => {
  const navigate = useNavigate();
  const process = useAppSelector((state) => state.page.process);

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

  useEffect(() => {
    //토큰 유무 체크
    if (document.cookie) {
      instance.defaults.headers["x-access-token"] =
        document.cookie.substring(4);
    } else {
      navigate("/login");
    }
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
