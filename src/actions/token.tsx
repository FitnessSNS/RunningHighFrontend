import instance from "src/libs/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const requestToken = createAsyncThunk(
  "REQUEST_TOKEN",
  async (): Promise<any> => {
    const response = await instance.get("/auth/refresh");
    console.log(response);
    document.cookie = `qstk${response.data.accessToken}`;
    return response.data;
  }
);
