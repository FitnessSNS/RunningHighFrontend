/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProcess } from 'src/reducers/rewards';
import { runStart } from './api';
import { distanceStyle } from '../Main/styles';
import * as styles from './css/runningStyles';
import runAlone from 'src/assets/runAlone.svg';
import clock from 'src/assets/icon/ico_clock.svg';
import play from 'src/assets/icon/btn_play.svg';

export default function Running() {
  const [position, setPosition] = useState({ longitude: 0, latitude: 0 });
  const dispatch = useDispatch();

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
    alert('위치를 찾을 수 없습니다.');
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      alert('브라우저에서 위치를 허용해주세요.');
    } else {
      navigator.geolocation.getCurrentPosition(
        findUserLocation,
        notFoundLocation
      );
    }
  }, []);

  useEffect(() => {
    runStart(position);
  }, [position]);

  return (
    <section style={{ height: 710 }}>
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
        <div
          css={styles.btnRoundStyle(play)}
          onClick={() => {
            dispatch(changeProcess('photo'));
          }}
        />
      </div>
    </section>
  );
}
