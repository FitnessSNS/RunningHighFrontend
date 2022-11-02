import * as yup from "yup";

const nicknameRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
const pwdRegExp =
  /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

export const myInfoValidation = yup.object({
  nickname: yup
    .string()
    .trim()
    .min(6, "최소 6자 이상 입력해주세요.")
    .max(12, "최대 12자를 입력해주세요.")
    .matches(nicknameRegExp, "닉네임 양식에 맞지 않습니다.")
    .required("닉네임을 입력해주세요."),
  password: yup
    .string()
    .trim()
    .matches(pwdRegExp, "비밀번호 양식에 맞지 않습니다.")
    .min(8, "최소 8자 이상 입력해주세요.")
    .max(20, "최대 20자를 입력해주세요.")
    .required("비밀번호를 입력해주세요."),
  passwordConfirm: yup
    .string()
    .trim()
    .oneOf(
      [yup.ref("password"), null],
      "비밀번호가 일치하지 않습니다. 다시 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),
});
