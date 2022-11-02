import * as yup from "yup";

export const loginValidation = yup.object({
  email: yup
    .string()
    .email("이메일 양식에 맞지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .trim()
    .min(8, "비밀번호 양식에 맞지 않습니다.")
    .max(20, "비밀번호 양식에 맞지 않습니다.")
    .required("비밀번호를 입력해주세요."),
});
