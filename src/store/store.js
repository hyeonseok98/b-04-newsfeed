import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import gameRankReducer from "./slices/gameRankSlice";
import searchQueryReducer from "./slices/searchQuerySlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    gameRank: gameRankReducer,
    searchQuery: searchQueryReducer,
  },
});

export default store;
