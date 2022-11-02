/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
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

import * as styles from "./styles";
import { nicknameValidation } from "src/libs/validations/nicknameValidation";
import { checkNickname, signupUser } from "src/actions/user";
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
  const {
    nickname,
    nicknameDone,
    nicknameError,
    password,
    signup,
    signupDone,
    signupError,
  } = useSelector((state: RootState) => state.user);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (nicknameDone) {
      console.log(nickname);
    }
  }, [nicknameDone]);

  useEffect(() => {
    if (signupDone) {
      console.log(signup);
      navigate("/signupend");
    }
  }, [signupDone]);

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(nicknameValidation),
  });

  const handleChange = ({ name, value }: changeData) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleSubmitClick = (data: formData) => {
    //api 연결
    dispatch(checkNickname(data));
    reset();
  };

  const handleBtnClick = () => {
    //api 연결
    dispatch(
      signupUser({
        nickname: "",
        password: password,
      })
    );
  };

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
              onClick={handleSubmit(handleSubmitClick)}
              disabled={!isValid}
            >
              인증요청
            </button>
            <ValidationMessage message={errors.nickname?.message} />
          </div>
        </section>
        <section css={styles.bottomContainer}>
          <Button
            style={nicknameDone ? "primary" : "gray"}
            size="large"
            onClick={handleBtnClick}
            disabled={!nicknameDone}
          >
            회원가입 완료
          </Button>
        </section>
      </section>
    </>
  );
};
