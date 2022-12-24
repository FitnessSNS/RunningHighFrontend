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
import { changeProcess } from "src/reducers/process";
import RunningLayout from "./components/RunningLayout";

export const Running = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { rewardUser, start, startDone, check, stop, end } = useAppSelector(
    (state) => state.rewards
  );

  const intervalRef = useRef<number | undefined>();

  const [modal, setModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [errCode, setErrCode] = useState();
  const [title, setTitle] = useState("");

  const [runState, setRunState] = useState("play");
  const [position, setPosition] = useState({ longitude: 0, latitude: 0 });

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
  }, [position]);

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
  }, []);
  console.log("start", start);

  //start handle error
  useEffect(() => {
    if (!start?.isSuccess) {
      switch (start?.code) {
        case 1053:
        case 1054:
          //로그인 토큰이 없는 경우 or 토큰 에러
          if (document.cookie) {
            dispatch(requestToken());
            return;
          } else {
            setErrCode(start?.code);
            setTitle("로그인 세션이 만료되었습니다.\n다시 로그인 해주세요");
            setModal(true);
            return;
          }
        case 1055:
          //로그아웃 상태
          setErrCode(start?.code);
          setTitle("로그인 세션이 만료되었습니다.\n다시 로그인 해주세요");
          setModal(true);
          return;
        case 1311:
        case 1312:
          //위치정보 재확인 요청
          setErrCode(start?.code);
          setTitle(
            "위치 정보가 올바르지 않습니다.\n위치 정보 수집을 허용해주세요."
          );
          setModal(true);
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
          setErrCode(start?.code);
          setTitle("이미 시작한 운동이 있습니다.\n재시작 하시겠습니까?");
          setConfirmModal(true);
          return;
        case 3033:
          //운동기록을 찾을 수 없는 경우 - 일시정지 /메세지 출력 /초기화 /메인 이동
          setErrCode(start?.code);
          setTitle(start?.message);
          setModal(true);
          return;
        case 9000:
          setErrCode(start?.code);
          setTitle("알 수 없는 오류가 발생하였습니다.\n다시 로그인 해주세요.");
          setModal(true);
          return;
      }
    }
  }, []);

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
        1000
      );
      return () => window.clearInterval(intervalRef.current);
    }
  }, []);

  //check handle error
  useEffect(() => {
    if (!check?.isSuccess) {
      switch (check?.code) {
        case 1053:
        case 1054:
          //로그인 토큰이 없는 경우 or 토큰 에러
          if (document.cookie) {
            dispatch(requestToken());
            return;
          } else {
            setErrCode(check?.code);
            setTitle("로그인 세션이 만료되었습니다.\n다시 로그인 해주세요");
            setModal(true);
            return;
          }
        case 1055:
          //로그아웃 상태
          setErrCode(check?.code);
          setTitle("로그인 세션이 만료되었습니다.\n다시 로그인 해주세요");
          setModal(true);
          return;
        case 1301:
          setErrCode(check?.code);
          setTitle(`${start?.message}\n다시 로그인 해주세요.`);
          setModal(true);
          return;
        case 1302:
          setErrCode(check?.code);
          setTitle(`${start?.message}\n회원가입 후 다시 시도해주세요.`);
          setModal(true);
          return;
        case 1321:
          //운동 재시작 여부를 확인해주세요
          setErrCode(check?.code);
          setTitle(
            "운동을 재시작 하시겠습니까?\n취소를 누르면 세션이 종료되오니 유의하여 주세요."
          );
          setConfirmModal(true);
          return;
        case 1322:
        case 1323:
          //위치정보 재확인 요청
          //위치 정보 오류시
          setErrCode(check?.code);
          setTitle(
            "위치 정보가 올바르지 않습니다.\n위치 정보 수집을 허용해주세요."
          );
          setModal(true);
          return;
        case 3041:
          //운동을 시작하지 않았을 경우
          setErrCode(check?.code);
          setTitle(`${check?.message}\n운동을 처음부터 시작해주세요.`);
          setModal(true);
          return;
        case 3042:
          //운동 시간 간격이 없을 경우
          setErrCode(check?.code);
          setTitle(
            "정상적으로 운동이 시작되지 않았습니다.\n재시작 하시겠습니까?"
          );
          setModal(true);
          return;
        case 3043:
          //운동시간 초과(3시간 경과)했을 경우
          setErrCode(check?.code);
          setTitle(
            "운동 시간이 초과되었습니다.(3시간 이상 경과)\n처음부터 다시 시도해주세요."
          );
          setModal(true);
          return;
        case 3044:
          //운동기록을 찾을 수 없는 경우
          setErrCode(check?.code);
          setTitle(
            "운동 기록을 찾을 수 없습니다.\n처음부터 다시 시도해주세요."
          );
          setModal(true);
          return;
        case 9000:
          setErrCode(check?.code);
          setTitle("알 수 없는 오류가 발생하였습니다.\n다시 로그인 해주세요.");
          setModal(true);
          return;
      }
    }
  }, [check?.code]);

  //call stop api
  useEffect(() => {
    if (runState === "stop") {
      dispatch(
        rewardRunningStop({
          longitude: position.longitude.toString(),
          latitude: position.latitude.toString(),
        })
      );
    }
  }, []);

  // stop handle error
  useEffect(() => {
    if (!stop?.isSuccess) {
      switch (stop?.code) {
        case 1053:
        case 1054:
          //로그인 토큰이 없는 경우 or 토큰 에러
          if (document.cookie) {
            dispatch(requestToken());
            return;
          } else {
            setErrCode(stop?.code);
            setTitle("로그인 세션이 만료되었습니다.\n다시 로그인 해주세요");
            setModal(true);
            return;
          }
        case 1055:
          //로그아웃 상태
          setErrCode(stop?.code);
          setTitle("로그인 세션이 만료되었습니다.\n다시 로그인 해주세요");
          setModal(true);
          return;
        case 1301:
          setErrCode(check?.code);
          setTitle(`${start?.message}\n다시 로그인 해주세요.`);
          setModal(true);
          return;
        case 1302:
          setErrCode(check?.code);
          setTitle(`${start?.message}\n회원가입 후 다시 시도해주세요.`);
          setModal(true);
          return;
        case 1331:
        case 1332:
          //위치정보 재확인 요청
          //위치 정보 오류시
          setErrCode(check?.code);
          setTitle(
            "위치 정보가 올바르지 않습니다.\n위치 정보 수집을 허용해주세요."
          );
          setModal(true);
          return;
        case 3051:
          //운동을 시작하지 않았을 경우
          setErrCode(check?.code);
          setTitle(`${check?.message}\n운동을 처음부터 시작해주세요.`);
          setModal(true);
          return;
        case 3052:
          //운동 시간 간격이 없을 경우
          setErrCode(check?.code);
          setTitle(
            "정상적으로 운동이 시작되지 않았습니다.\n재시작 하시겠습니까?"
          );
          setModal(true);
          return;
        case 3053:
          //운동시간 초과(3시간 경과)했을 경우
          setErrCode(check?.code);
          setTitle(
            "운동 시간이 초과되었습니다.(3시간 이상 경과)\n처음부터 다시 시도해주세요."
          );
          setModal(true);
          return;
        case 3054:
          //운동기록을 찾을 수 없는 경우
          setErrCode(check?.code);
          setTitle(
            "운동 기록을 찾을 수 없습니다.\n처음부터 다시 시도해주세요."
          );
          setModal(true);
          return;
        case 9000:
          localLogout(document.cookie);
          navigate("/");
          return;
      }
    }
  }, [stop?.code]);

  //call end api
  useEffect(() => {
    if (runState === "end") {
      dispatch(
        rewardRunningEnd({
          longitude: position.longitude.toString(),
          latitude: position.latitude.toString(),
          forceEnd: false,
        })
      );
    }
  }, []);

  // end handle error

  console.log(runState);
  console.log("check", check);

  const navigateModal = (code: number) => {
    switch (code) {
      case 1053:
      case 1054:
      case 1055:
        //로그인 토큰에 오류가 있는 경우
        dispatch(
          rewardRunningStop({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
          })
        );

        navigate("/login");
        break;
      case 1311:
      case 1312:
        //위치 정보에 오류가 있는 경우
        dispatch(
          rewardRunningStop({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
          })
        );

        navigator.geolocation.getCurrentPosition(
          findUserLocation,
          notFoundLocation
        );
        break;
      case 3033:
      case 3044:
        //운동기록을 찾을 수 없는 경우
        dispatch(
          rewardRunningEnd({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
            forceEnd: true,
          })
        );
        dispatch(changeProcess("start"));
        navigate("/");
        break;
      case 3041:
      case 3051:
      case 3061:
        //운동을 시작하지 않았을 경우
        dispatch(
          rewardRunningStop({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
          })
        );
        dispatch(changeProcess("start"));
        navigate("/");
        break;
      case 3042:
      case 3052:
        //운동 시간 간격이 없을 경우
        dispatch(
          rewardRunningCheck({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
            isRestart: true,
          })
        );
        break;
      case 9000:
        //DB 오류
        dispatch(
          rewardRunningStop({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
          })
        );

        localLogout(document.cookie);
        dispatch(changeProcess("start"));
        navigate("/");
        break;
      default:
        break;
    }
  };

  const navigateConfirmModal = (code: number) => {
    switch (code) {
      case 1321:
      case 3032:
        dispatch(
          rewardRunningStop({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
          })
        );

        dispatch(
          rewardRunningCheck({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
            isRestart: true,
          })
        );
        break;

      default:
        break;
    }
  };

  const navigateCancelModal = (code: number) => {
    switch (code) {
      case 1321:
      case 3032:
        //1321: 운동 재시작 여부 확인 요청
        //3032: 이미 시작한 운동이 있는 경우
        dispatch(
          rewardRunningStop({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
          })
        );
        navigate("/");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {
        {
          play: start?.isSuccess ? (
            <RunningLayout
              runData={start.result}
              runState={runState}
              setRunState={setRunState}
            />
          ) : (
            <RunningLayout
              runData={initialRunData}
              runState="plqy"
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
        title={title}
        size="modal"
        buttonConfirmTitle="확인"
        onConfirm={() => {
          if (runState === "play") navigateModal(start?.code);
          else if (runState === "pause") navigateModal(check?.code);
          setModal(false);
        }}
      />
      <ModalAlert
        isOpen={confirmModal}
        title={title}
        size="modal"
        buttonCancelTitle="취소"
        onCancel={() => {
          if (runState === "pause") navigateCancelModal(check?.code);
          setConfirmModal(false);
        }}
        buttonConfirmTitle="확인"
        onConfirm={() => {
          if (runState === "pause") navigateConfirmModal(check?.code);
          setConfirmModal(false);
        }}
      />
    </>
  );
};
