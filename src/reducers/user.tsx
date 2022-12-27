import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs/promises";
import {
  changePwdEmailVerification,
  changePwdEmailVerificationCode,
  emailVerification,
  emailVerificationCode,
  checkNickname,
  localSignUp,
  localLogin,
  localLogout,
  socialLogin,
  socialSignUp,
} from "../actions/user";

export interface UserState {
  password: string;
  init: boolean;
  pwdEmail: any;
  pwdEmailLoading: boolean;
  pwdEmailDone: boolean;
  pwdEmailError: any;
  pwdEmailCode: any;
  pwdEmailCodeLoading: boolean;
  pwdEmailCodeDone: boolean;
  pwdEmailCodeError: any;
  email: any;
  emailLoading: boolean;
  emailDone: boolean;
  emailError: any;
  emailCode: any;
  emailCodeLoading: boolean;
  emailCodeDone: boolean;
  emailCodeError: any;
  nickname: any;
  nicknameLoading: boolean;
  nicknameDone: boolean;
  nicknameError: any;
  signUp: any;
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: any;
  login: any;
  loginLoading: boolean;
  loginDone: boolean;
  loginError: any;
  logout: any;
  logoutLoading: boolean;
  logoutDone: boolean;
  logoutError: any;
  socialCode: any;
  socialCodeLoading: boolean;
  socialCodeDone: boolean;
  socialCodeError: any;
  socialInfo: any;
  socialInfoLoading: boolean;
  socialInfoDone: boolean;
  socialInfoError: any;
}

const initialState: UserState = {
  password: "",
  init: false,
  pwdEmail: null,
  pwdEmailLoading: false,
  pwdEmailDone: false,
  pwdEmailError: null,
  pwdEmailCode: null,
  pwdEmailCodeLoading: false,
  pwdEmailCodeDone: false,
  pwdEmailCodeError: false,
  email: null,
  emailLoading: false,
  emailDone: false,
  emailError: null,
  emailCode: null,
  emailCodeLoading: false,
  emailCodeDone: false,
  emailCodeError: false,
  nickname: null,
  nicknameLoading: false,
  nicknameDone: false,
  nicknameError: null,
  signUp: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  login: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logout: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  socialCode: null,
  socialCodeLoading: false,
  socialCodeDone: false,
  socialCodeError: null,
  socialInfo: null,
  socialInfoLoading: false,
  socialInfoDone: false,
  socialInfoError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getPassword: (state, action) => {
      state.password = action.payload;
    },
    initTimer: (state, action) => {
      state.init = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePwdEmailVerification.pending, (state, action) => {
        state.pwdEmailLoading = true;
        state.pwdEmailDone = false;
      })
      .addCase(changePwdEmailVerification.fulfilled, (state, action) => {
        state.pwdEmail = action.payload;
        state.pwdEmailLoading = false;
        state.pwdEmailDone = true;
        state.pwdEmailError = null;
      })
      .addCase(changePwdEmailVerification.rejected, (state, action) => {
        state.pwdEmailLoading = false;
        state.pwdEmailDone = false;
        state.pwdEmailError = action.payload;
      })
      .addCase(changePwdEmailVerificationCode.pending, (state, action) => {
        state.pwdEmailCodeLoading = true;
        state.pwdEmailCodeDone = false;
      })
      .addCase(changePwdEmailVerificationCode.fulfilled, (state, action) => {
        state.pwdEmailCode = action.payload;
        state.pwdEmailCodeLoading = false;
        state.pwdEmailCodeDone = true;
        state.pwdEmailCodeError = null;
      })
      .addCase(changePwdEmailVerificationCode.rejected, (state, action) => {
        state.pwdEmailCodeLoading = false;
        state.pwdEmailCodeDone = false;
        state.pwdEmailCodeError = action.payload;
      })
      .addCase(emailVerification.pending, (state, action) => {
        state.emailLoading = true;
        state.emailDone = false;
      })
      .addCase(emailVerification.fulfilled, (state, action) => {
        state.email = action.payload;
        state.emailLoading = false;
        state.emailDone = true;
        state.emailError = null;
      })
      .addCase(emailVerification.rejected, (state, action) => {
        state.emailLoading = false;
        state.emailDone = false;
        state.emailError = action.payload;
      })
      .addCase(emailVerificationCode.pending, (state, action) => {
        state.emailCodeLoading = true;
        state.emailCodeDone = false;
      })
      .addCase(emailVerificationCode.fulfilled, (state, action) => {
        state.emailCode = action.payload;
        state.emailCodeLoading = false;
        state.emailCodeDone = true;
        state.emailCodeError = null;
      })
      .addCase(emailVerificationCode.rejected, (state, action) => {
        state.emailCodeLoading = false;
        state.emailCodeDone = false;
        state.emailCodeError = action.payload;
      })
      .addCase(checkNickname.pending, (state, action) => {
        state.nicknameLoading = true;
        state.nicknameDone = false;
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
      .addCase(localSignUp.pending, (state, action) => {
        state.signUpLoading = true;
        state.signUpDone = false;
      })
      .addCase(localSignUp.fulfilled, (state, action) => {
        state.signUp = action.payload;
        state.signUpLoading = false;
        state.signUpDone = true;
        state.signUpError = null;
      })
      .addCase(localSignUp.rejected, (state, action) => {
        state.signUpLoading = false;
        state.signUpDone = false;
        state.signUpError = action.payload;
      })
      .addCase(localLogin.pending, (state, action) => {
        state.loginLoading = true;
        state.loginDone = false;
      })
      .addCase(localLogin.fulfilled, (state, action) => {
        state.login = action.payload;
        state.loginLoading = false;
        state.loginDone = true;
        state.loginError = null;
      })
      .addCase(localLogin.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginDone = false;
        state.loginError = action.payload;
      })
      .addCase(localLogout.pending, (state, action) => {
        state.logoutLoading = true;
        state.logoutDone = false;
      })
      .addCase(localLogout.fulfilled, (state, action) => {
        state.logout = action.payload;
        state.logoutLoading = false;
        state.logoutDone = false;
        state.loginError = null;
      })
      .addCase(localLogout.rejected, (state, action) => {
        state.logoutLoading = false;
        state.logoutDone = false;
        state.logoutError = action.payload;
      })
      .addCase(socialLogin.pending, (state, action) => {
        state.socialCodeLoading = true;
        state.socialCodeDone = false;
      })
      .addCase(socialLogin.fulfilled, (state, action) => {
        state.socialCode = action.payload;
        state.socialCodeLoading = false;
        state.socialCodeDone = true;
        state.socialCodeError = null;
      })
      .addCase(socialLogin.rejected, (state, action) => {
        state.socialCodeLoading = false;
        state.socialCodeDone = false;
        state.socialCodeError = action.payload;
      })
      .addCase(socialSignUp.pending, (state, action) => {
        state.socialInfoLoading = true;
        state.socialInfoDone = false;
      })
      .addCase(socialSignUp.fulfilled, (state, action) => {
        state.socialInfo = action.payload;
        state.socialInfoLoading = false;
        state.socialInfoDone = true;
        state.socialInfoError = null;
      })
      .addCase(socialSignUp.rejected, (state, action) => {
        state.socialInfoLoading = false;
        state.socialInfoDone = false;
        state.socialInfoError = action.payload;
      });
  },
});

export const { getPassword, initTimer } = userSlice.actions;

export default userSlice.reducer;
