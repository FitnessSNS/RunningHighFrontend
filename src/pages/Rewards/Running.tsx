/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  rewardRunningCheck,
  rewardRunningEnd,
  rewardRunningStart,
  rewardRunningStop,
} from "src/actions/rewards";

import { requestToken } from "src/actions/token";
import { localLogout } from "src/actions/user";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

import ModalAlert from "src/components/ModalAlert";
import RunningLayout from "./components/RunningLayout";

export const Running = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { rewardUser, start, startDone, check, stop, end } = useAppSelector(
    (state) => state.rewards
  );

  const intervalRef = useRef<number | undefined>();

  const [runState, setRunState] = useState("play");
  const [position, setPosition] = useState({ longitude: 0, latitude: 0 });
  const [modal, setModal] = useState(false);
  const initialRunData = {
    calorie: 0,
    challenge_goal: 0,
    check_time: "00:00:00",
    distance: 0,
    exercise_id: 0,
    forceEnd: false,
    image: null,
    nickname: "",
    time: "00:00:00",
    user_id: rewardUser?.user_id,
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

  //사용자 위치 확인하기
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
    alert("위치를 찾을 수 없습니다.\n다시 시도해주세요.");
  };

  //call start api
  useEffect(() => {
    dispatch(
      rewardRunningStart({
        longitude: position.longitude.toString(),
        latitude: position.latitude.toString(),
      })
    );
  }, [dispatch, position]);
  console.log(start);

  //start handle error
  useEffect(() => {
    if (!start?.isSuccess) {
      switch (start?.code) {
        case 1053:
          //로그인 토큰이 없는 경우
          if (document.cookie && !document.cookie.includes("undefined")) {
            dispatch(requestToken());
            return;
          } else {
            navigate("/login");
            return;
          }
        case 1054:
          //로그인 토큰 에러
          setModal(true);
          return;
        case 1055:
          //로그아웃 상태
          navigate("/login");
          return;
        case 1311:
        case 1312:
          //위치정보 재확인 요청
          navigator.geolocation.getCurrentPosition(
            findUserLocation,
            notFoundLocation
          );
          return;
        case 3031:
          //이미 운동을 시작했을 경우 - check 호출
          setRunState("pause");
          dispatch(
            rewardRunningCheck({
              longitude: position.longitude.toString(),
              latitude: position.latitude.toString(),
              isRestart: false,
            })
          );

          return;
        case 3032:
          //이미 시작한 운동 기록이 있을 경우 - check 호출(재시작)
          dispatch(
            rewardRunningCheck({
              longitude: position.longitude.toString(),
              latitude: position.latitude.toString(),
              isRestart: true,
            })
          );
          return;
        case 3033:
          //운동기록을 찾을 수 없는 경우 - 일시정지 /메세지 출력 /초기화 /메인 이동
          dispatch(
            rewardRunningStop({
              longitude: position.longitude.toString(),
              latitude: position.latitude.toString(),
            })
          );
          alert(start?.message);
          navigate("/");
          return;
        case 9000:
          localLogout(document.cookie);
          navigate("/");
          return;
      }
    }
  }, [start?.code]);

  //call check api interval
  useEffect(() => {
    if (runState === "pause") {
      intervalRef.current = window.setInterval(
        () =>
          dispatch(
            rewardRunningCheck({
              longitude: position.longitude.toString(),
              latitude: position.latitude.toString(),
              isRestart: false,
            })
          ),
        50000
      );
      return () => window.clearInterval(intervalRef.current);
    }
  }, []);

  //check handle error
  useEffect(() => {
    if (!check?.isSuccess) {
      switch (check?.code) {
        case 1053:
          //로그인 토큰이 없는 경우
          if (document.cookie && !document.cookie.includes("undefined")) {
            dispatch(requestToken());
            return;
          } else {
            navigate("/login");
            return;
          }
        case 1054:
          //로그인 토큰 에러
          setModal(true);
          return;
        case 1055:
        case 1301:
        case 1302:
          //로그아웃 상태
          alert(check?.message);
          navigate("/login");
          return;
        case 1321:
        case 1322:
        case 1323:
          //위치정보 재확인 요청
          //위치 정보 오류시
          alert(check?.message);
          navigator.geolocation.getCurrentPosition(
            findUserLocation,
            notFoundLocation
          );
          return;
        case 3041:
        case 3042:
          //운동을 시작하지 않았을 경우
          alert(check?.message);
          navigate("/");
          return;
        case 3043:
          //시간초과,
          //운동기록을 찾을 수 없는 경우
          alert(check?.message);
          dispatch(
            rewardRunningEnd({
              longitude: position.longitude.toString(),
              latitude: position.latitude.toString(),
              forceEnd: true,
            })
          );
          navigate("/");
          return;
        case 9000:
          localLogout(document.cookie);
          navigate("/");
          return;
      }
    }
  }, [check?.code]);
  console.log(runState);
  console.log("check", check);
  return (
    <>
      {
        {
          play: start?.isSuccess && (
            <RunningLayout
              runData={start.result}
              runState={runState}
              setRunState={setRunState}
            />
          ),
          pause: check?.isSuccess && (
            <RunningLayout
              runData={check.result}
              runState={runState}
              setRunState={setRunState}
            />
          ),
          stop: stop?.isSuccess && (
            <RunningLayout
              runData={stop.result}
              runState={runState}
              setRunState={setRunState}
            />
          ),
          cam: end?.isSuccess && (
            <RunningLayout
              runData={end.result}
              runState={runState}
              setRunState={setRunState}
            />
          ),
        }[runState]
      }
      <ModalAlert
        isOpen={modal}
        title={"알 수 없는 오류가 발생하였습니다.\n다시 로그인 해주세요"}
        size="modal"
        buttonConfirmTitle="확인"
        onConfirm={() => {
          setModal(false);
          navigate("/login");
        }}
      />
    </>
  );
};
