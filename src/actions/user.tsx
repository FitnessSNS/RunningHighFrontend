import instance from "src/libs/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const emailVerification = createAsyncThunk(
  "CHECK_EMAIL",
  async (data: { email: string }): Promise<any> => {
    const response = await instance.post(
      "/auth/signUp/emailVerification",
      data
    );
    return response.data;
  }
);

export const emailVerificationCode = createAsyncThunk(
  "CHECK_EMAIL_CODE",
  async (data: { email: string; code: string }): Promise<any> => {
    const response = await instance.post(
      "/auth/signUp/emailVerification/code",
      data
    );
    return response.data;
  }
);

export const checkNickname = createAsyncThunk(
  "CHECK_NICKNAME",
  async (data: { nickname: string }): Promise<any> => {
    const response = await instance.post("/auth/signUp/nickname", data);
    return response.data;
  }
);

export const localSignUp = createAsyncThunk(
  "LOCAL_SIGNUP",
  async (data: {
    email: string;
    nickname: string;
    password: string;
  }): Promise<any> => {
    const response = await instance.post("/auth/signUp", data);
    return response.data;
  }
);

export const localLogin = createAsyncThunk(
  "LOCAL_LOGIN",
  async (data: { email: string; password: string }): Promise<any> => {
    const response = await instance.post("/auth/signIn/local", data);
    document.cookie = `rwtS${response.data.result.accessToken}`;
    return response.data;
  }
);

export const socialLogin = createAsyncThunk(
  "SOCIAL_LOGIN",
  async (): Promise<any> => {
    const response = await instance.get(
      "/auth/oauth/authorization?provider=kakao"
    );
    return response.data;
  }
);

export const socialSignUp = createAsyncThunk(
  "SOCIAL_SIGNUP",
  async (data: { nickname: string }): Promise<any> => {
    const response = await instance.post("/auth/oauth/addInfo", data);
    return response.data;
  }
);
