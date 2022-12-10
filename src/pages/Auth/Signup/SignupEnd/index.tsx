/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "src/components/NavBar";
import CloseButton from "src/components/CloseButton";
import Title from "src/components/Title";
import Button from "src/components/Button";

import * as styles from "./styles";
import success from "src/assets/success.svg";
import { RootState } from "src/app/store";

export const SignupEnd = () => {
  const { signUp } = useSelector((state: RootState) => state.user);
  return (
    <>
      <NavBar right={<CloseButton />} />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <div css={styles.imgBlock}>
            <img src={success} alt="아이콘" />
          </div>
          <Title textAlign="center" img={false}>
            {signUp.result.nickname}님,
            <br />
            회원가입이 완료되었습니다!
          </Title>
          <Title textAlign="center" textSize="sm" img={false}>
            열심히 달린 만큼 보상이 주어지는
            <br />
            러닝하이에 오신 것을 환영합니다.
          </Title>
        </section>
        <section css={styles.bottomContainer}>
          <Link to="/">
            <Button style="primary" size="large">
              시작하기
            </Button>
          </Link>
        </section>
      </section>
    </>
  );
};
