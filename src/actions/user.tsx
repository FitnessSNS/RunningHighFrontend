import instance from "src/libs/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
export interface Login {
  email: string;
  password: string;
}

export interface Signup {
  nickname: string;
  password: string;
}

export interface Nickname {
  nickname: string;
}

export const socialLogin = createAsyncThunk(
  "SOCIAL_LOGIN",
  async (): Promise<any> => {
    const response = await instance.get("/auth/kakao/authorize");
    return response.data;
  }
);

export const localLogin = createAsyncThunk(
  "LOCAL_LOGIN",
  async (data: Login): Promise<any> => {
    const response = await instance.post("/auth/signin", data);
    return response.data;
  }
);

export const checkNickname = createAsyncThunk(
  "CHECK_NICKNAME",
  async (data: Nickname): Promise<any> => {
    const response = await instance.post("/auth/signup/nv", data);
    return response.data;
  }
);

export const signupUser = createAsyncThunk(
  "SIGNUP_USER",
  async (data: Signup): Promise<any> => {
    const response = await instance.post("/auth/signup", data);
    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  "LOGOUT_USER",
  async (): Promise<any> => {
    const response = await instance.post("/auth/common/logout");
    return response.data;
  }
);

export const signoutUser = createAsyncThunk(
  "SIGNOUT_USER",
  async (): Promise<any> => {
    const response = await instance.post("/auth/signout");
    return response.data;
  }
);
