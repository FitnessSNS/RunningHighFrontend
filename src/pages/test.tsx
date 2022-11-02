import React from "react";
import axios from "axios";
//import instance from "src/libs/config";

export const Test = () => {
  const login = async () => {
    const response = await axios.post<{ email: string; password: string }>(
      "https://www.sosocamp.shop/auth/signin",
      {
        email: "test123@naver.com",
        password: "test123!",
      }
    );
    console.log(response.data);
  };
  const email = async () => {
    const response = await axios.post<{ email: string }>(
      "https://www.sosocamp.shop/auth/signup/evstart",
      {
        email: "yoonseo1997@naver.com",
      }
    );
    console.log(response.data);
  };
  const kakao = async () => {
    const response = await axios.get(
      "https://www.sosocamp.shop/auth/kakao/authorize"
    );
    console.log(response.data);
  };

  return (
    <>
      <button onClick={login}>로그인 테스트</button>
      <button onClick={email}>이메일 테스트</button>
      <button onClick={kakao}>카카오 테스트</button>
    </>
  );
};
