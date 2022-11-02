import { createSlice } from "@reduxjs/toolkit";
import {
  socialLogin,
  localLogin,
  checkNickname,
  signupUser,
  logoutUser,
  signoutUser,
} from "../actions/user";

export interface UserState {
  url: any;
  urlDone: boolean;
  loginLoading: boolean;
  loginDone: boolean;
  loginError: any;
  nickname: any;
  nicknameLoading: boolean;
  nicknameDone: boolean;
  nicknameError: any;
  password: string;
  signup: any;
  signupLoading: boolean;
  signupDone: boolean;
  signupError: any;
}

const initialState: UserState = {
  url: null, //리다이렉트 url
  urlDone: false, //리다이렉트 url 완료
  loginLoading: false, //로그인 시도 중
  loginDone: false, //로그인 완료
  loginError: null, //로그인 오류
  nickname: null, //닉네임
  nicknameLoading: false, //닉네임 체크 시도 중
  nicknameDone: false, //닉네임 체크 완료
  nicknameError: null, //닉네임 체크 오류
  password: "",
  signup: null, //회원가입
  signupLoading: false, //회원가입 시도 중
  signupDone: false, //회원가입 완료
  signupError: null, //회원가입 오류
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getPassword: (state, action) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(socialLogin.fulfilled, (state, action) => {
        state.urlDone = true;
        state.url = action.payload;
      })
      .addCase(localLogin.pending, (state, action) => {
        state.loginLoading = true;
        state.loginDone = false;
        state.loginError = null;
      })
      .addCase(localLogin.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.loginDone = true;
        state.loginError = null;
      })
      .addCase(localLogin.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginDone = false;
        state.loginError = action.payload;
      })
      .addCase(checkNickname.pending, (state, action) => {
        state.nicknameLoading = true;
        state.nicknameDone = false;
        state.nicknameError = null;
      })
      .addCase(checkNickname.fulfilled, (state, action) => {
        state.nickname = action.payload;
        state.nicknameLoading = false;
        state.nicknameDone = true;
        state.nicknameError = null;
      })
      .addCase(checkNickname.rejected, (state, action) => {
        state.nicknameLoading = false;
        state.nicknameDone = false;
        state.nicknameError = action.payload;
      })
      .addCase(signupUser.pending, (state, action) => {
        state.signupLoading = true;
        state.signupDone = false;
        state.signupError = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.signup = action.payload;
        state.signupLoading = false;
        state.signupDone = true;
        state.signupError = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupDone = false;
        state.signupError = action.payload;
      });
  },
});

export const { getPassword } = userSlice.actions;

export default userSlice.reducer;
