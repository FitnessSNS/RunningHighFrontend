import { useAppDispatch } from "src/app/hooks";
import {
  rewardRunningCheck,
  rewardRunningEnd,
  rewardRunningStop,
} from "src/actions/rewards";
import { useCallback } from "react";
import { requestToken } from "src/actions/token";
import { RewardInfoProps } from "../Running";
import { useNavigate } from "react-router-dom";

export type PositionProps = {
  longitude: number;
  latitude: number;
};

//error handling
export const useRewardError = (
  RewardState: any,
  position: PositionProps,
  setPosition: (
    value: React.SetStateAction<{
      longitude: number;
      latitude: number;
    }>
  ) => void,
  rewardsInfo: RewardInfoProps,
  setRewardsInfo: React.Dispatch<
    React.SetStateAction<{
      challenge_goal: number;
      time: string;
      distance: number;
      calorie: string;
      status: string;
    }>
  >
) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const findUserLocation = (position: {
    coords: { longitude: number; latitude: number };
  }) => {
    setPosition({
      ...position,
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  };

  const handleError = useCallback(() => {
    switch (RewardState.code) {
      case 1053:
        //토큰이 없을 경우
        if (document.cookie) {
          //쿠키가 있으면 토큰 재발급
          dispatch(requestToken());
        } else {
          //없으면 로그아웃
        }
        break;
      case 1054:
        //토큰 에러 발생시
        dispatch(requestToken());
        break;
      case 1321:
        //운동 재시작 여부 확인 - 일시정지 /재시작 여부 확인 후 호출
        dispatch(
          rewardRunningStop({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
          })
        );

        const result = window.confirm("운동을 재시작 하시겠습니까?");
        if (result) {
          dispatch(
            rewardRunningCheck({
              longitude: position.longitude.toString(),
              latitude: position.latitude.toString(),
              isRestart: true,
            })
          );
        } else {
          dispatch(
            rewardRunningEnd({
              longitude: position.longitude.toString(),
              latitude: position.latitude.toString(),
              forceEnd: true,
            })
          );
        }
        break;
      case 1342:
      case 1343:
        //위치 정보를 찾을 수 없을 경우 - 위치쟝보 업데이트
        navigator.geolocation.getCurrentPosition(
          findUserLocation,
          notFoundLocation
        );
        break;
      case 3031:
        //이미 운동을 시작했을 경우 - check 호출
        dispatch(
          rewardRunningCheck({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
            isRestart: false,
          })
        );
        break;
      case 3032:
        //이미 시작한 운동 기록이 있을 경우 - check 호출(재시작)
        dispatch(
          rewardRunningCheck({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
            isRestart: true,
          })
        );
        break;
      case 3033:
      case 3044:
      case 3054:
      case 3064:
        //운동기록을 찾을 수 없는 경우 - 일시정지 /메세지 출력 /초기화 /메인 이동
        dispatch(
          rewardRunningStop({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
          })
        );

        alert(RewardState.message);
        setRewardsInfo({
          ...rewardsInfo,
          challenge_goal: 0,
          time: "00:00:00",
          distance: 0,
          calorie: "0",
          status: "play",
        });
        navigate("/");
        break;
      case 3041:
      case 3051:
      case 3061:
        //운동을 시작하지 않았을 경우 - 메세지 출력 /초기화 /메인 이동
        alert(RewardState.message);
        setRewardsInfo({
          ...rewardsInfo,
          challenge_goal: 0,
          time: "00:00:00",
          distance: 0,
          calorie: "0",
          status: "play",
        });
        navigate("/");
        break;
      case 3042:
      case 3052:
      case 3062:
        //운동 시간 간격이 없는 경우 - 메세지 출력 /강제종료 /초기화
        alert(RewardState.message);
        dispatch(
          rewardRunningEnd({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
            forceEnd: true,
          })
        );
        setRewardsInfo({
          ...rewardsInfo,
          challenge_goal: 0,
          time: "00:00:00",
          distance: 0,
          calorie: "0",
          status: "play",
        });
        break;
      case 3043:
      case 3053:
      case 3063:
        //운동 시간 초과(3시간 이상)
        dispatch(
          rewardRunningEnd({
            longitude: position.longitude.toString(),
            latitude: position.latitude.toString(),
            forceEnd: true,
          })
        );
        //로그아웃
        break;
      default:
        alert(RewardState.message);
        //로그아웃
        break;
    }
  }, [RewardState?.code, dispatch, position, rewardsInfo]);

  return { handleError };
};

export const notFoundLocation = () => {
  alert("위치를 찾을 수 없습니다.");
};
