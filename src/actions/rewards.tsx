import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRewardUser = createAsyncThunk(
  "GET_REWARD_USER",
  async (): Promise<any> => {
    const response = await axios.get("/rewards/user");
    return response.data;
  }
);

export const getRewardType = createAsyncThunk(
  "GET_REWARD_TYPE",
  async (type: string): Promise<any> => {
    const response = await axios.get(`/rewards/running/exercise?type=${type}`);
    return response.data;
  }
);

export const rewardRunningStart = createAsyncThunk(
  "REWARD_RUNNING_START",
  async (data: { longitude: string; latitude: string }): Promise<any> => {
    const response = await axios.post("/rewards/running/start", data);
    return response.data;
  }
);

export const rewardRunningCheck = createAsyncThunk(
  "REWARD_RUNNING_CHECK",
  async (data: { longitude: string; latitude: string }): Promise<any> => {
    const response = await axios.post("/rewards/running/check", data);
    return response.data;
  }
);

export const rewardRunningStop = createAsyncThunk(
  "REWARD_RUNNING_STOP",
  async (data: { longitude: string; latitude: string }): Promise<any> => {
    const response = await axios.post("/rewards/running/stop", data);
    return response.data;
  }
);

export const rewardRunningEnd = createAsyncThunk(
  "REWARD_RUNNING_END",
  async (data: { longitude: string; latitude: string }): Promise<any> => {
    const response = await axios.post("/rewards/running/end", data);
    return response.data;
  }
);

export const rewardRunningUploadPhoto = createAsyncThunk(
  "REWARD_RUNNING_UPLOAD_PHOTO",
  async (data: { image: File; exercise_id: number }): Promise<any> => {
    const response = await axios.post("/rewards/running/proofimage", data);
    return response.data;
  }
);
