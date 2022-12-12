/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import * as styles from "./styles";
import { initTimer } from "src/reducers/user";
import { AppDispatch } from "src/app/store";

const AuthTimer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [seconds, setSeconds] = useState<number>(59);
  const [minutes, setMinutes] = useState<number>(4);
  useEffect(() => {
    const counter = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          dispatch(
            initTimer({
              init: true,
            })
          );
          clearInterval(counter);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(counter);
  }, [seconds, minutes, dispatch]);
  return (
    <div css={styles.container}>
      <span>{minutes}</span>
      <span>: {seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
};

export default AuthTimer;
