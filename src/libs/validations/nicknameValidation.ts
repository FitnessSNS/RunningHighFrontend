import * as yup from "yup";

const nicknameRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

export const nicknameValidation = yup.object({
  nickname: yup
    .string()
    .trim()
    .min(6, "최소 6자 이상 입력해주세요.")
    .max(12, "최대 12자를 입력해주세요.")
    .matches(nicknameRegExp, "닉네임 양식에 맞지 않습니다.")
    .required("닉네임을 입력해주세요."),
});
