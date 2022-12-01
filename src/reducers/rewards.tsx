import { createSlice } from "@reduxjs/toolkit";

import {
  getRewardUser,
  getRewardType,
  rewardRunningStart,
  rewardRunningCheck,
  rewardRunningStop,
  rewardRunningEnd,
} from "../actions/rewards";

export interface RewardState {
  isLoading: boolean;
  user: any;
  userLoading: boolean;
  userDone: boolean;
  userError: any;
  type: any;
  typeLoading: boolean;
  typeDone: boolean;
  typeError: any;
  start: any;
  startLoading: boolean;
  startDone: boolean;
  startError: any;
  check: any;
  checkLoading: boolean;
  checkDone: boolean;
  checkError: any;
  stop: any;
  stopLoading: boolean;
  stopDone: boolean;
  stopError: any;
  end: any;
  endLoading: boolean;
  endDone: boolean;
  endError: any;
}

const initialState: RewardState = {
  isLoading: false,
  user: null,
  userLoading: false,
  userDone: false,
  userError: null,
  type: null,
  typeLoading: false,
  typeDone: false,
  typeError: null,
  start: null,
  startLoading: false,
  startDone: false,
  startError: null,
  check: null,
  checkLoading: false,
  checkDone: false,
  checkError: null,
  stop: null,
  stopLoading: false,
  stopDone: false,
  stopError: null,
  end: null,
  endLoading: false,
  endDone: false,
  endError: null,
};

const rewardSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRewardUser.pending, (state, action) => {
        state.userLoading = true;
        state.userDone = false;
      })
      .addCase(getRewardUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userLoading = false;
        state.userDone = true;
        state.userError = null;
      })
      .addCase(getRewardUser.rejected, (state, action) => {
        state.userLoading = false;
        state.userDone = false;
        state.userError = action.payload;
      })
      .addCase(getRewardType.pending, (state, action) => {
        state.typeLoading = true;
        state.typeDone = false;
      })
      .addCase(getRewardType.fulfilled, (state, action) => {
        state.type = action.payload;
        state.typeLoading = false;
        state.typeDone = true;
        state.typeError = null;
      })
      .addCase(getRewardType.rejected, (state, action) => {
        state.typeLoading = false;
        state.typeDone = false;
        state.typeError = action.payload;
      })
      .addCase(rewardRunningStart.pending, (state, action) => {
        state.startLoading = true;
        state.startDone = false;
      })
      .addCase(rewardRunningStart.fulfilled, (state, action) => {
        state.start = action.payload;
        state.startLoading = false;
        state.startDone = true;
        state.startError = null;
      })
      .addCase(rewardRunningStart.rejected, (state, action) => {
        state.startLoading = false;
        state.startDone = false;
        state.startError = action.payload;
      })
      .addCase(rewardRunningCheck.pending, (state, action) => {
        state.checkLoading = true;
        state.checkDone = false;
      })
      .addCase(rewardRunningCheck.fulfilled, (state, action) => {
        state.check = action.payload;
        state.checkLoading = false;
        state.checkDone = true;
        state.checkError = null;
      })
      .addCase(rewardRunningCheck.rejected, (state, action) => {
        state.checkLoading = false;
        state.checkDone = false;
        state.checkError = action.payload;
      })
      .addCase(rewardRunningStop.pending, (state, action) => {
        state.stopLoading = true;
        state.stopDone = false;
      })
      .addCase(rewardRunningStop.fulfilled, (state, action) => {
        state.stop = action.payload;
        state.stopLoading = false;
        state.stopDone = true;
        state.stopError = null;
      })
      .addCase(rewardRunningStop.rejected, (state, action) => {
        state.stopLoading = false;
        state.stopDone = false;
        state.stopError = action.payload;
      })
      .addCase(rewardRunningEnd.pending, (state, action) => {
        state.endLoading = true;
        state.endDone = false;
        state.endError = action.payload;
      })
      .addCase(rewardRunningEnd.fulfilled, (state, action) => {
        state.end = action.payload;
        state.endLoading = false;
        state.endDone = true;
        state.endError = null;
      })
      .addCase(rewardRunningEnd.rejected, (state, action) => {
        state.stopLoading = false;
        state.stopDone = false;
        state.stopError = action.payload;
      });
  },
});

export default rewardSlice.reducer;
