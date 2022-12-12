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
import { initTimer } from "src/reducers/user";
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
  const [again, setAgain] = useState<boolean>(false);

  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(emailValidation),
  });

  const { email, emailCode, init } = useSelector(
    (state: RootState) => state.user
  );
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
    setAgain(false);
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
      setModal(true);
      setModalTitle(email?.message);
      if (!email?.isSuccess) {
        setHide(false);
      } else if (email?.isSuccess) {
        setHide(true);
      }
    }
  }, [emailAction, email]);

  useEffect(() => {
    if (codeAction) {
      if (emailCode?.code === 1000) {
        setHide(false);
        navigate("/signuppwd");
      } else {
        setModal(true);
        setModalTitle(emailCode?.message);
      }
    }
  }, [codeAction, emailCode, navigate]);

  useEffect(() => {
    if (init) {
      setAgain(true);
      setHide(false);
      dispatch(
        initTimer({
          init: false,
        })
      );
    }
  }, [dispatch, init]);

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
                {again ? "재요청" : "인증요청"}
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
        size="modal"
        buttonConfirmTitle="확인"
        onConfirm={handleModal}
      />
    </>
  );
};
