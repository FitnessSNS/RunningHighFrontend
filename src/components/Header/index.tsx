/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import { RootState } from "src/app/store";
import { changeProcess } from "src/reducers/process";
import back from "src/assets/back.svg";
import coin from "src/assets/coin.svg";
import mainLogo from "src/assets/mainLogo.svg";

type clickFuncType = {
  onClick: () => {
    payload: any;
    type: string;
  };
};

export const Header = () => {
  const process = useAppSelector((state) => state.page.process);
  const dispatch = useAppDispatch();

  const handlePage = () => dispatch(changeProcess("start"));

  return (
    <>
      {
        {
          start: <HeaderContainer />,
          running: <CloseBox onClick={() => handlePage()} />,
          complete: <CloseBox onClick={() => handlePage()} />,
        }[process]
      }
    </>
  );
};

export const HeaderContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { loginDone } = useAppSelector((state: RootState) => state.user);
  const rewardUser = useAppSelector((state) => state.rewards.rewardUser);

  return (
    <nav css={styles.navStyle}>
      <h1>
        {location.pathname.length > 1 ? (
          <div css={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
            <img src={back} alt="뒤로가기" />
          </div>
        ) : (
          <div css={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            <img src={mainLogo} alt="logo" />
          </div>
        )}
      </h1>
      <div css={{ display: "flex" }}>
        {loginDone && (
          <div css={styles.pointStyle}>
            <img
              src={coin}
              css={{ marginRight: 4, objectFit: "contain" }}
              alt="포인트"
            />
            <p className="myPoint">
              {rewardUser && rewardUser.result ? rewardUser.result.point : 0}
            </p>
          </div>
        )}
        <div css={styles.menuStyle} />
      </div>
    </nav>
  );
};

const CloseBox = (onClick?: clickFuncType) => {
  const navigate = useNavigate();

  return (
    <nav css={styles.navStyle}>
      <div css={styles.closeBtnStyle} onClick={() => navigate(-1)} />
    </nav>
  );
};
