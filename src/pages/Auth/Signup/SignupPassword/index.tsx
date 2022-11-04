/** @jsxImportSource @emotion/react */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavBar from "src/components/NavBar";
import BackButton from "src/components/BackButton";
import Title from "src/components/Title";
import Input from "src/components/Input";
import ValidationMessage from "src/components/ValidationMessage";
import Button from "src/components/Button";

import * as styles from "./styles";
import { signupPwdValidation } from "src/libs/validations/singupPwdValidation";
import { getPassword } from "src/reducers/user";
import { AppDispatch } from "src/app/store";

type formData = {
  password: string;
  passwordConfirm: string;
};

export const SignupPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(signupPwdValidation),
  });
  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true });
  };
  const handleBtnClick = () => {
    //api 연결
    dispatch(getPassword(getValues("passwordConfirm")));
    navigate("/signupnick");
  };
  return (
    <>
      <NavBar left={<BackButton />} />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <Title>
            로그인에 사용할
            <br />
            비밀번호를 입력해주세요.
          </Title>
          <form css={styles.inputBlock}>
            <Input
              type="password"
              placeholder="비밀번호"
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
          </form>
        </section>
        <section css={styles.bottomContainer}>
          <Button
            style={isValid ? "primary" : "gray"}
            size="large"
            onClick={handleBtnClick}
            disabled={!isValid}
          >
            다음
          </Button>
        </section>
      </section>
    </>
  );
};
