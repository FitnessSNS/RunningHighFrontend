/** @jsxImportSource @emotion/react */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import NavBar from "src/components/NavBar";
import BackButton from "src/components/BackButton";
import Input from "src/components/Input";
import ValidationMessage from "src/components/ValidationMessage";
import Button from "src/components/Button";

import * as styles from "./styles";
import { myInfoValidation } from "src/libs/validations/myInfoValidation";
import profile from "src/assets/profile.svg";

type formData = {
  nickname: string;
  password: string;
  passwordConfirm: string;
};

export const MyInfo = () => {
  const nickname = "김러닝";
  const email = "abcd1234@naver.com";
  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(myInfoValidation),
  });
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true });
  };
  const handleBtnClick = () => {
    //api 연결
  };
  return (
    <>
      <NavBar left={<BackButton />} />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <div>
            <img src={profile} alt="기본 이미지" />
          </div>
          <h1>{nickname}</h1>
        </section>
        <section css={styles.middleContainer}>
          <Input placeholder={email} />
          <Input
            placeholder="닉네임"
            {...register("nickname")}
            onChange={handleChange}
          />
          <ValidationMessage message={errors.nickname?.message} />
          <Input
            type="password"
            placeholder="비밀번호 변경"
            {...register("password")}
            onChange={handleChange}
          />
          <ValidationMessage message={errors.password?.message} />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            {...register("passwordConfirm")}
            onChange={handleChange}
          />
          <ValidationMessage message={errors.passwordConfirm?.message} />
        </section>
        <section css={styles.bottomContainer}>
          <ul>
            <li>로그아웃</li>
            <li>회원탈퇴</li>
          </ul>
          <Button
            style={isValid ? "primary" : "gray"}
            size="large"
            onClick={handleBtnClick}
            disabled={!isValid}
          >
            수정하기
          </Button>
        </section>
      </section>
    </>
  );
};
