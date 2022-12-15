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
import AuthTimer from "src/components/AuthTimer";
import ModalAlert from "src/components/ModalAlert";

import * as styles from "./styles";
import { emailValidation } from "src/libs/validations/emailValidation";

type formData = {
  email: string;
  code: string;
};

export const FindPassword = () => {
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
    //api 연결(이메일 인증 요청)s
    getValues("email");
    setHide(true);
  };
  const handleDoneClick = () => {
    //api 연결(인증코드 인증 요청)
    getValues("code");
    setModal(true);
  };
  return (
    <>
      <NavBar left={<BackButton />} />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <Title>
            인증코드를 받을
            <br />
            이메일을 입력해주세요.
          </Title>
          <div css={styles.inputBlock}>
            <Input
              placeholder="이메일 주소"
              type="email"
              {...register("email")}
              onChange={handleChange}
            />
            <ValidationMessage message={errors.email?.message} />
            {hide ? (
              <>
                <div css={styles.timerBlock}>
                  <AuthTimer />
                </div>
                <div css={styles.code}>
                  <Input placholder="인증코드" {...register("code")} />
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
            인증 완료하기
          </Button>
        </section>
      </section>
      <ModalAlert
        isOpen={modal}
        title={"이메일로 임시 비밀번호가 \n발급되었어요."}
        size="modal"
        description="마이페이지에서 비밀번호 변경이 가능해요."
        buttonConfirmTitle="로그인하기"
        onConfirm={() => {
          setModal(!modal);
          navigate("/login");
        }}
      />
    </>
  );
};
