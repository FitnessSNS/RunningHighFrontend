import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rewardSlice from "./rewards";
import userSlice from "./user";

//persist type 설정
export const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = {
  rewards: persistReducer(persistConfig, rewardSlice),
  user: userSlice,
};
