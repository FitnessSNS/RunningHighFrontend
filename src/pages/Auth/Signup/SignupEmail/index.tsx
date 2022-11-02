/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import NavBar from "src/components/NavBar";
import BackButton from "src/components/BackButton";
import Title from "src/components/Title";
import Input from "src/components/Input";
import ValidationMessage from "src/components/ValidationMessage";
import Button from "src/components/Button";

import * as styles from "./styles";
import { emailValidation } from "src/libs/validations/emailValidation";

type formData = {
  email: string;
  code: string;
};

export const SignupEmail = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);
  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(emailValidation),
  });
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true });
  };
  const handleSubmitClick = () => {
    //api 연결(이메일 인증 요청)
    getValues("email");
    setHide(true);
  };
  const handleDoneClick = () => {
    //api 연결(인증코드 인증 요청)
    getValues("code");
    setModal(true);
    navigate("/signuppwd");
  };
  return (
    <>
      <NavBar left={<BackButton />} />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <Title>
            로그인에 사용할
            <br />
            이메일을 입력해주세요.
          </Title>
          <div css={styles.inputBlock}>
            <Input
              type="email"
              placeholder="이메일 주소"
              {...register("email")}
              onChange={handleChange}
            />
            <ValidationMessage message={errors.email?.message} />
            {hide ? (
              <>
                <div css={styles.timerBlock}>5:00</div>
                <div css={styles.code}>
                  <Input placeholder="인증코드" {...register("code")} />
                </div>
                <ValidationMessage message={errors.code?.message} />
              </>
            ) : (
              <button css={styles.button} onClick={handleSubmitClick}>
                인증요청
              </button>
            )}
          </div>
        </section>
        <section css={styles.bottomContainer}>
          <Button
            style={isValid ? "primary" : "gray"}
            size="large"
            onClick={handleDoneClick}
          >
            다음
          </Button>
        </section>
      </section>
    </>
  );
};
