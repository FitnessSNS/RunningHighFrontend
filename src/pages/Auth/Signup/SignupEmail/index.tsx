/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

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
import { emailVerification, emailVerificationCode } from "src/actions/user";
import { AppDispatch, RootState } from "src/app/store";

type formData = {
  email: string;
  code: string;
};

export const SignupEmail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [emailAction, setEmailAction] = useState<boolean>(false);
  const [codeAction, setCodeAction] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [hide, setHide] = useState<boolean>(false);

  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(emailValidation),
  });

  const { email, emailCode } = useSelector((state: RootState) => state.user);
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true });
  };
  const handleSubmitClick = () => {
    dispatch(
      emailVerification({
        email: getValues("email"),
      })
    );
    setEmailAction(true);
  };
  const handleDoneClick = () => {
    dispatch(
      emailVerificationCode({
        email: email.result.userEmail,
        code: getValues("code"),
      })
    );
    setCodeAction(true);
  };

  const handleModal = useCallback(() => {
    setModal(!modal);
    if (emailAction) {
      setEmailAction(false);
    } else if (codeAction) {
      setCodeAction(false);
    }
  }, [codeAction, emailAction, modal]);

  useEffect(() => {
    if (emailAction) {
      if (!email?.isSuccess) {
        setModal(true);
        setModalTitle(email?.message);
        setHide(false);
      } else if (email?.isSuccess) {
        setHide(true);
      }
    }
  }, [emailAction, email]);

  useEffect(() => {
    if (codeAction) {
      if (!emailCode?.isSuccess) {
        setModal(true);
        setModalTitle(emailCode?.message);
      } else if (emailCode?.isSuccess) {
        setHide(false);
        navigate("/signuppwd");
      }
    }
  }, [codeAction, emailCode, navigate]);

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
                <div css={styles.timerBlock}>
                  <AuthTimer />
                </div>
                <div css={styles.code}>
                  <Input
                    placeholder="인증코드"
                    {...register("code")}
                    onChange={handleChange}
                  />
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
      <ModalAlert
        isOpen={modal}
        title={modalTitle}
        buttonTitle="확인"
        onClick={handleModal}
      />
    </>
  );
};
