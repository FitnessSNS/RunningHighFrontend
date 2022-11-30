import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import processSlice from "./process";
import rewardSlice from "./rewards";
import userSlice from "./user";
import tokenSlice from "./token";

//persist type 설정
export const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = {
  process: persistReducer(persistConfig, processSlice),
  rewards: rewardSlice,
  user: userSlice,
  token: tokenSlice,
};
