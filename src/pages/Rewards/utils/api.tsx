/**
 * reward API fetching
 * @rewards/
 */
import { useEffect, useState } from "react";
import { useAppDispatch } from "src/app/hooks";
import {
  rewardRunningCheck,
  rewardRunningEnd,
  rewardRunningStart,
  rewardRunningStop,
} from "src/actions/rewards";
import { PositionProps } from "./handleError";

//start
export const useRewardStart = async (position: PositionProps) => {
  const [result, setResult] = useState({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      rewardRunningStart({
        longitude: position.longitude.toString(),
        latitude: position.latitude.toString(),
      })
    );
  }, []);
};

//check
export const useRewardCheck = (position: PositionProps, isRestart: boolean) => {
  const dispatch = useAppDispatch();

  const response = dispatch(
    rewardRunningCheck({
      longitude: position.longitude.toString(),
      latitude: position.latitude.toString(),
      isRestart: isRestart,
    })
  );

  return response;
};

//stop
export const useRewardStop = async (position: PositionProps) => {
  const dispatch = useAppDispatch();

  const response = await dispatch(
    rewardRunningStop({
      longitude: position.longitude.toString(),
      latitude: position.latitude.toString(),
    })
  );

  console.log(response);
  return response;
};

//end
export const useRewardEnd = async (
  position: PositionProps,
  forceEnd: boolean
) => {
  const dispatch = useAppDispatch();

  const response = await dispatch(
    rewardRunningEnd({
      longitude: position.longitude.toString(),
      latitude: position.latitude.toString(),
      forceEnd: forceEnd,
    })
  );

  console.log(response);
  return response;
};
