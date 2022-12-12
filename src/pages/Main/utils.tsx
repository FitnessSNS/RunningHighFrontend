import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/app/hooks";
import { requestToken } from "src/actions/token";
import { localLogout } from "src/actions/user";

export const useRewardUserError = (RewardUser: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleError = useCallback(
    (RewardState: { code: any; message: any }) => {
      switch (RewardUser.code) {
        case 1053:
          if (document.cookie) {
            dispatch(requestToken());
          } else {
            navigate("/login");
          }
          break;
        case 1054:
          dispatch(requestToken());
          break;
        default:
          alert(RewardUser.message);
          //로그아웃
          dispatch(localLogout(document.cookie.substring(4)));
          document.cookie = "";
          break;
      }
    },
    [RewardUser]
  );

  return { handleError };
};
