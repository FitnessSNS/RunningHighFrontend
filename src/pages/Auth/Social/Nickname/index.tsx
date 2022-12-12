/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "src/components/NavBar";
import Title from "src/components/Title";
import Input from "src/components/Input";
import Button from "src/components/Button";
import ValidationMessage from "src/components/ValidationMessage";
import ModalAlert from "src/components/ModalAlert";

import * as styles from "./styles";
import { nicknameValidation } from "src/libs/validations/nicknameValidation";
import { socialSignUp } from "src/actions/user";
import { AppDispatch, RootState } from "src/app/store";

type formData = {
  nickname: string;
};

type changeData = {
  name: any;
  value: string;
};

export const SocialNickname = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [nicknameAction, setNicknameAction] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { socialInfo } = useSelector((state: RootState) => state.user);

  const {
    register,
    setValue,
    getValues,
    reset,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(nicknameValidation),
    mode: "onChange",
  });

  const handleChange = ({ name, value }: changeData) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleSubmitClick = () => {
    dispatch(socialSignUp({ nickname: getValues("nickname") }));
    setNicknameAction(true);
    reset();
  };

  const handleModal = useCallback(() => {
    setModal(!modal);
    if (nicknameAction) {
      setNicknameAction(false);
    }
    navigate("/login");
  }, [modal, navigate, nicknameAction]);

  useEffect(() => {
    if (nicknameAction) {
      if (socialInfo?.code === 1000) {
        setModal(true);
        setModalTitle(socialInfo?.message);
      } else {
        setMessage(socialInfo?.message);
      }
    }
  }, [nicknameAction, socialInfo]);

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
            <Input
              placeholder="닉네임"
              {...register("nickname")}
              onChange={handleChange}
            />
            <ValidationMessage
              message={errors.nickname ? errors.nickname.message : message}
            />
          </div>
        </section>
        <section css={styles.bottomContainer}>
          <Button
            style={isValid ? "primary" : "gray"}
            size="large"
            onClick={handleSubmitClick}
            disabled={!isValid}
          >
            시작하기
          </Button>
        </section>
      </section>
      <ModalAlert
        isOpen={modal}
        title={modalTitle}
        buttonConfirmTitle="확인"
        onConfirm={handleModal}
      />
    </>
  );
};
