/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import Input from "src/components/Input";
import ValidationMessage from "src/components/ValidationMessage";
import Button from "src/components/Button";

import * as styles from "./styles";
import kakao from "src/assets/kakao.svg";
import { loginValidation } from "src/libs/validations/loginValidation";
import { socialLogin, localLogin } from "src/actions/user";
import { AppDispatch, RootState } from "src/app/store";

type formData = {
  email: string;
  password: string;
};

type changeData = {
  name: any;
  value: string;
};

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { url, urlDone, loginError } = useSelector(
    (state: RootState) => state.user
  );
  const [error, setError] = useState<string>("");
  const [social, setSocial] = useState<string>("");

  useEffect(() => {
    if (loginError) {
      setError(loginError.message);
    }
  }, [loginError]);

  useEffect(() => {
    if (urlDone) {
      setSocial(url.redirect_url);
      navigate(social);
    }
  }, [url, social]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(loginValidation),
  });

  const handleChange = ({ name, value }: changeData) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleBtnClick = (data: formData) => {
    //api 연결
    dispatch(localLogin(data));
    reset();
  };
  const handleSocialClick = () => {
    //api연결
    dispatch(socialLogin());
  };
  return (
    <section css={styles.container}>
      <section css={styles.topContainer}>
        <div css={styles.imgBlock}></div>
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
    </section>
  );
};
