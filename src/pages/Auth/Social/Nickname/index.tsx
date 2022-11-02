/** @jsxImportSource @emotion/react */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import NavBar from "src/components/NavBar";
import Title from "src/components/Title";
import Input from "src/components/Input";
import Button from "src/components/Button";

import * as styles from "./styles";
import { nicknameValidation } from "src/libs/validations/nicknameValidation";

type formData = {
  nickname: string;
};

export const SocialNickname = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(nicknameValidation),
    mode: "onChange",
  });
  const handleBtnClick = (data: formData) => {
    //api 연결
    console.log(data);
  };
  const handleChange = () => {
    //
  };
  return (
    <>
      <NavBar />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <Title>
            사용하실 닉네임을
            <br />
            입력해주세요.
          </Title>
          <div css={styles.inputBlock}>
            <Input placeholder="닉네임" {...register("nickname")} />
            <p>{errors.nickname?.message}</p>
          </div>
        </section>
        <section css={styles.bottomContainer}>
          <Button
            style={isValid ? "primary" : "gray"}
            size="large"
            onClick={handleSubmit(handleBtnClick)}
            disabled={!isValid}
          >
            시작하기
          </Button>
        </section>
      </section>
    </>
  );
};
