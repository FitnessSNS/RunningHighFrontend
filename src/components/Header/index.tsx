/** @jsxImportSource @emotion/react */
import React from "react";
import * as styles from "./styles";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeProcess, RewardState } from "src/reducers/rewards";
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
  const process = useSelector(
    (state: { rewards: RewardState }) => state.rewards.process
  );
  const dispatch = useDispatch();
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
        <div css={styles.pointStyle}>
          <img
            src={coin}
            css={{ heihgt: "15px", objectFit: "contain" }}
            alt="포인트"
          />
          <p className="myPoint">1,200</p>
        </div>
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
