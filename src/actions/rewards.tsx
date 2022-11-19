import instance from "src/libs/config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRewardUser = createAsyncThunk(
  "GET_REWARD_USER",
  async (): Promise<any> => {
    const response = await instance.get("/rewards/user");
    return response.data;
  }
);

export const getRewardType = createAsyncThunk(
  "GET_REWARD_TYPE",
  async (type: string): Promise<any> => {
    const response = await instance.get(
      `/rewards/running/exercise?type=${type}`
    );
    return response.data;
  }
);

export const rewardRunningStart = createAsyncThunk(
  "REWARD_RUNNING_START",
  async (data: { longitude: string; latitude: string }): Promise<any> => {
    const response = await instance.post("/rewards/running/start", data);
    return response.data;
  }
);

export const rewardRunningCheck = createAsyncThunk(
  "REWARD_RUNNING_CHECK",
  async (data: { longitude: string; latitude: string }): Promise<any> => {
    const response = await instance.post("/rewards/running/check", data);
    return response.data;
  }
);

export const rewardRunningStop = createAsyncThunk(
  "REWARD_RUNNING_STOP",
  async (data: { longitude: string; latitude: string }): Promise<any> => {
    const response = await instance.post("/rewards/running/stop", data);
    return response.data;
  }
);

export const rewardRunningEnd = createAsyncThunk(
  "REWARD_RUNNING_END",
  async (data: { longitude: string; latitude: string }): Promise<any> => {
    const response = await instance.post("/rewards/running/end", data);
    return response.data;
  }
);
