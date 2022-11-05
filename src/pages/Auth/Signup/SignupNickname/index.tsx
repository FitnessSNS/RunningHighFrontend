/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useCallback } from "react";
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
import ModalAlert from "src/components/ModalAlert";

import * as styles from "./styles";
import { nicknameValidation } from "src/libs/validations/nicknameValidation";
import { checkNickname, localSignUp } from "src/actions/user";
import { AppDispatch, RootState } from "src/app/store";

type formData = {
  nickname: string;
};

type changeData = {
  name: any;
  value: string;
};

export const SignupNickname = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [nicknameAction, setNicknameAction] = useState<boolean>(false);
  const [signupAction, setSignupAction] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");

  const { email, nickname, password, signUp } = useSelector(
    (state: RootState) => state.user
  );

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(nicknameValidation),
  });

  const handleChange = ({ name, value }: changeData) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleSubmitClick = () => {
    dispatch(checkNickname({ nickname: getValues("nickname") }));
    setNicknameAction(true);
    reset();
  };

  const handleBtnClick = () => {
    dispatch(
      localSignUp({
        email: email.result.userEmail,
        nickname: nickname.result.nickname,
        password: password,
      })
    );
    setSignupAction(true);
  };

  const handleModal = useCallback(() => {
    setModal(!modal);
    if (nicknameAction) {
      setNicknameAction(false);
    } else if (signupAction) {
      setSignupAction(false);
      navigate("/login");
    }
  }, [modal, navigate, nicknameAction, signupAction]);

  useEffect(() => {
    if (nicknameAction) {
      if (!nickname?.isSuccess) {
        setModal(true);
        setModalTitle(nickname?.message);
      }
    }
  }, [nicknameAction, nickname]);

  useEffect(() => {
    if (signupAction) {
      if (!signUp?.isSuccess) {
        setModal(true);
        setModalTitle(signUp?.message);
      } else if (signUp?.isSuccess) {
        navigate("/signupend");
      }
    }
  }, [signupAction, signUp, navigate]);

  return (
    <>
      <NavBar left={<BackButton />} />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <Title>
            사용하실 닉네임을
            <br />
            입력해주세요.
          </Title>
          <div css={styles.inputBlock}>
            <Input
              placeholder="닉네임"
              {...register("nickname")}
              onChange={handleChange}
            />
            <button
              css={styles.button}
              onClick={handleSubmitClick}
              disabled={!isValid}
            >
              인증요청
            </button>
            <ValidationMessage message={errors.nickname?.message} />
          </div>
        </section>
        <section css={styles.bottomContainer}>
          <Button
            style={nickname?.isSuccess ? "primary" : "gray"}
            size="large"
            onClick={handleBtnClick}
            disabled={!nickname?.isSuccess}
          >
            회원가입 완료
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
