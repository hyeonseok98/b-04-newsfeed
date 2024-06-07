import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUserInfo: {},
  loginUserPosts: [],
};

const loginUserSlice = createSlice({
  initialState,
  name: "loginUser",
  reducers: {
    setLoginUserInfo: (state, action) => {
      state.loginUserInfo = action.payload;
    },
    setLoginUserPosts: (state, action) => {
      state.loginUserPosts = action.payload;
    },
  },
});

export const { setLoginUserInfo, setLoginUserPosts } = loginUserSlice.actions;
export const loginUserReducer = loginUserSlice.reducer;
