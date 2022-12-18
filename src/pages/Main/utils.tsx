import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/app/hooks";
import { requestToken } from "src/actions/token";
import { localLogout } from "src/actions/user";

export const useRewardUserError = (RewardUser: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleError = useCallback(
    (RewardUser: { code: any; message: any }) => {
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
        case 1055:
          alert(RewardUser.message);
          //로그아웃
          dispatch(localLogout(document.cookie.substring(4)));
          document.cookie = "";
          navigate("/login");
          break;
      }
    },
    [RewardUser?.code]
  );

  return { handleError };
};
