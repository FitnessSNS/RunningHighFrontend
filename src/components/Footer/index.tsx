/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles";
import { useAppSelector } from "src/app/hooks";
import home from "src/assets/home.svg";
import store from "src/assets/store.svg";
import runStart from "src/assets/runStart.svg";
import challenge from "src/assets/challenge.svg";
import my from "src/assets/my.svg";

export const Footer = () => {
  const process = useAppSelector((state) => state.page.process);

  return (
    <>
      {
        {
          start: <FooterContainer />,
          complete: <FooterContainer />,
        }[process]
      }
    </>
  );
};

export const FooterContainer = () => {
  return (
    <footer css={styles.footStyle}>
      {MENU_TABS.map((menu) => (
        <div key={menu.id} className="start">
          <Link to={menu.url}>
            <img src={`${menu.imgUrl}`} alt="menu" />
          </Link>
        </div>
      ))}
    </footer>
  );
};

const MENU_TABS = [
  { id: 1, url: "/", imgUrl: home },
  { id: 2, url: "/store", imgUrl: store },
  { id: 3, url: "/reward", imgUrl: runStart },
  { id: 4, url: "/challenge", imgUrl: challenge },
  { id: 5, url: "/mypage", imgUrl: my },
];
