import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

export interface ProcessState {
  process: string;
}
const initialState: ProcessState = {
  process: "start",
};

const processSlice = createSlice({
  name: "process",
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

export const { changeProcess } = processSlice.actions;
export default processSlice.reducer;
