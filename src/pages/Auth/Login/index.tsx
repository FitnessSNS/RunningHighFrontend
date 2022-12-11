/** @jsxImportSource @emotion/react */
import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

import { loginValidation } from "src/libs/validations/loginValidation";
import { localLogin, socialLogin } from "src/actions/user";

import Title from "src/components/Title";
import Input from "src/components/Input";
import ValidationMessage from "src/components/ValidationMessage";
import Button from "src/components/Button";
import ModalAlert from "src/components/ModalAlert";

import * as styles from "./styles";
import logo from "src/assets/logo.svg";
import kakao from "src/assets/kakao.svg";

type formData = {
  email: string;
  password: string;
};

type changeData = {
  name: any;
  value: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { login, loginDone, socialCode, socialCodeDone } = useAppSelector(
    (state) => state.user
  );

  const [action, setAction] = useState<boolean>(false);
  const [socialAction, setSocialAction] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(loginValidation),
  });

  const handleChange = ({ name, value }: changeData) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleBtnClick = () => {
    dispatch(
      localLogin({ email: getValues("email"), password: getValues("password") })
    );

    setAction(true);
    reset();
  };
  const handleSocialClick = () => {
    dispatch(socialLogin());
    setSocialAction(true);
  };

  const handleModal = useCallback(() => {
    setModal(!modal);
    setAction(false);
  }, [modal]);

  useEffect(() => {
    if (action && loginDone) {
      if (!login?.isSuccess) {
        setModal(true);
        setModalTitle(login?.message);
      } else if (login?.isSuccess) {
        setAction(false);
        navigate("/");
      }
    }
  }, [action, login, loginDone, navigate]);

  useEffect(() => {
    if (socialAction && socialCodeDone) {
      if (!socialCode?.isSuccess) {
        setModal(true);
        setModalTitle(socialCode?.message);
      } else if (socialCode?.isSuccess) {
        setSocialAction(false);
        window.location.href = socialCode?.result.authURI;
      }
    }
  }, [socialAction, socialCode, socialCodeDone]);

  return (
    <section css={styles.container}>
      <section css={styles.topContainer}>
        <div css={styles.imgBlock}>
          <img src={logo} alt="아이콘" />
        </div>
        <Title img={false}>함께 달릴 준비 되셨나요?</Title>
        <form css={styles.formBlock}>
          <Input
            placeholder="이메일 주소"
            type="email"
            {...register("email")}
            onChange={handleChange}
          />
          <ValidationMessage message={errors.email?.message} />
          <Input
            placeholder="비밀번호"
            type="password"
            {...register("password")}
            onChange={handleChange}
          />
          <ValidationMessage message={errors.password?.message} />
          <div css={styles.checkBlock}>
            <div>
              <input id="auto" type="checkbox" />
              <label htmlFor="auto">자동 로그인</label>
            </div>
            <div>
              <input id="store" type="checkbox" />
              <label htmlFor="store">이메일 저장</label>
            </div>
          </div>
          <Button
            style={isValid ? "primary" : "gray"}
            size="large"
            onClick={handleSubmit(handleBtnClick)}
            disabled={!isValid}
          >
            로그인
          </Button>
        </form>
      </section>
      <section css={styles.bottomContainer}>
        <button css={styles.socialBtn} onClick={handleSocialClick}>
          <div>
            <img src={kakao} alt="카카오" />
            <span>카카오톡으로 로그인하기</span>
          </div>
        </button>
        <div>
          <ul css={styles.list}>
            <Link to="/signupemail">
              <li css={styles.listLine}>회원가입</li>
            </Link>
            <li css={styles.listLine}>이메일 찾기</li>
            <Link to="/findpwd">
              <li>비밀번호 찾기</li>
            </Link>
          </ul>
        </div>
      </section>
      <ModalAlert
        isOpen={modal}
        title={modalTitle}
        buttonConfirmTitle="확인"
        onConfirm={handleModal}
      />
    </section>
  );
};
