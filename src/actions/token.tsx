import instance from "src/libs/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const requestToken = createAsyncThunk(
  "REQUEST_TOKEN",
  async (): Promise<any> => {
    const response = await instance.get("/auth/refresh");
    instance.defaults.headers["x-access-token"] = response.data.accessToken;
    return response.data;
  }
);
