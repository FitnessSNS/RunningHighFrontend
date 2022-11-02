/** @jsxImportSource @emotion/react */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import NavBar from "src/components/NavBar";
import BackButton from "src/components/BackButton";
import Title from "src/components/Title";
import CheckBox from "src/components/CheckBox";
import Button from "src/components/Button";

import * as styles from "./styles";
import { termsValidation } from "src/libs/validations/termsValidation";

type formData = {
  all: boolean;
  service: boolean;
  infoGet: boolean;
  infoHandle: boolean;
  location: boolean;
};

export const SignupTerms = () => {
  const navigate = useNavigate();
  const {
    register,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm<formData>({
    resolver: yupResolver(termsValidation),
  });
  const handleChange = ({ name, checked }: any) => {
    setValue(name, checked, { shouldValidate: true });
  };
  return (
    <>
      <NavBar left={<BackButton />} />
      <section css={styles.container}>
        <section css={styles.topContainer}>
          <Title img={false}>
            인증을 위해
            <br />
            약관 동의가 필요해요.
          </Title>
          <div css={styles.all}>
            <CheckBox
              type="all"
              label="약관 전체 동의"
              id="all"
              {...register("all")}
              onChange={handleChange}
            />
          </div>
          <div>
            <CheckBox
              label="서비스 이용약관(필수)"
              id="service"
              {...register("service")}
              onChange={handleChange}
            />
            <CheckBox
              label="개인정보 수집 및 이용(필수)"
              id="infoGet"
              {...register("infoGet")}
              onChange={handleChange}
            />
            <CheckBox
              label="개인정보 처리방침(필수)"
              id="infoHandle"
              {...register("infoHandle")}
              onChange={handleChange}
            />
            <CheckBox
              label="위치기반 서비스 이용약관(필수)"
              id="location"
              {...register("location")}
              onChange={handleChange}
            />
          </div>
        </section>
        <section css={styles.bottomContainer}>
          <Button
            style={isValid ? "primary" : "gray"}
            size="large"
            disabled={!isValid}
            onClick={() => navigate("/signupemail")}
          >
            동의하고 시작하기
          </Button>
        </section>
      </section>
    </>
  );
};
