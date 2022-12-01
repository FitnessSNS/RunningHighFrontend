import { createSlice } from "@reduxjs/toolkit";
import { requestToken } from "src/actions/token";
import { RootState } from "src/app/store";

interface tokenState {
  accessToken: string;
  tokenLoading: boolean;
  tokenDone: boolean;
  tokenError: any;
}

const initialState: tokenState = {
  accessToken: "",
  tokenLoading: false,
  tokenDone: false,
  tokenError: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestToken.pending, (state, action) => {
        state.tokenLoading = true;
        state.tokenDone = false;
      })
      .addCase(requestToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        state.tokenLoading = false;
        state.tokenDone = true;
        state.tokenError = null;
      })
      .addCase(requestToken.rejected, (state, action) => {
        state.tokenLoading = false;
        state.tokenDone = false;
        state.tokenError = action.payload;
      });
  },
});

export const { setToken } = tokenSlice.actions;
export const selectToken = (state: RootState) => state.token.accessToken;
export default tokenSlice.reducer;
