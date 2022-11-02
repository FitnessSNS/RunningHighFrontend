/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles";
import { useSelector } from "react-redux";
import { RewardState } from "src/recuders/rewards";
import home from "../../assets/home.svg";
import store from "../../assets/store.svg";
import runStart from "../../assets/runStart.svg";
import challenge from "../../assets/challenge.svg";
import my from "../../assets/my.svg";
import fire from "../../assets/icon/ico_fire.svg";

export const Footer = () => {
  const process = useSelector(
    (state: { rewards: RewardState }) => state.rewards.process
  );

  return (
    <footer css={styles.footStyle}>
      <FooterContainer />
      {
        {
          main: <FooterContainer />,
          start: <FooterContainer />,
          running: (
            <div css={styles.runningFootStyle}>
              <img src={fire} alt="fire" css={{ marginRight: 17 }} />
              <p style={{ fontSize: 14, fontWeight: 500 }}>
                현재 <span>120</span>Kcal가 소모되었어요.
              </p>
            </div>
          ),
          photo: <></>,
          complete: <FooterContainer />,
        }[process]
      }
    </footer>
  );
};

const FooterContainer = () => {
  return (
    <>
      {MENU_TABS.map((menu) => (
        <div key={menu.id} className="start">
          <Link to={menu.url}>
            <img src={`${menu.imgUrl}`} />
          </Link>
        </div>
      ))}
    </>
  );
};

const MENU_TABS = [
  { id: 1, url: "/", imgUrl: home },
  { id: 2, url: "/store", imgUrl: store },
  { id: 3, url: "/reward", imgUrl: runStart },
  { id: 4, url: "/challenge", imgUrl: challenge },
  { id: 5, url: "/mypage", imgUrl: my },
];
