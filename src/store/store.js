import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import gameRankReducer from "./slices/gameRankSlice";
import searchQueryReducer from "./slices/searchQuerySlice";
import { loginUserReducer } from "./slices/loginUserSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gameRank: gameRankReducer,
    searchQuery: searchQueryReducer,
    loginUser: loginUserReducer,
  },
});

export default store;
