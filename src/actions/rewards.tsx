import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RewardState } from "src/reducers/rewards";

// export const getRewardAsync = createAsyncThunk(
//   "GET_REWARDS",
//   async (reward: RewardState, thunkAPI) => {
//     const response = await axios.get("/rewards/challenge", reward);
//     return response.data;
//   }
// );
