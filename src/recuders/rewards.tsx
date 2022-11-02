import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
// import { getRewardAsync } from "../actions/rewards";

export interface RewardState {
  isLoading: boolean;
  process: string;
}

const initialState: RewardState = {
  isLoading: false,
  process: "main",
};

const rewardSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    changeProcess: (state, action) => {
      state.process = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { changeProcess } = rewardSlice.actions;

export default rewardSlice.reducer;
