import { useAppDispatch } from "src/app/hooks";
import { requestToken } from "src/actions/token";
import { useCallback } from "react";

export const useRewardUserError = (RewardUser: any) => {
  const dispatch = useAppDispatch();

  const handleError = useCallback(
    (RewardState: { code: any; message: any }) => {
      switch (RewardUser.code) {
        case 1053:
          if (document.cookie) {
            dispatch(requestToken());
          } else {
            //로그아웃
          }
          break;
        case 1054:
          dispatch(requestToken());
          break;
        default:
          alert(RewardUser.message);
          //로그아웃
          break;
      }
    },
    [RewardUser]
  );

  return { handleError };
};
