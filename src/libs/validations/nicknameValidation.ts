import * as yup from "yup";

const nicknameRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

export const nicknameValidation = yup.object({
  nickname: yup
    .string()
    .trim()
    .min(1, "최소 1자 이상 입력해주세요.")
    .max(10, "최대 10자를 입력해주세요.")
    .matches(nicknameRegExp, "닉네임 양식에 맞지 않습니다.")
    .required("닉네임을 입력해주세요."),
});
