import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state) => {
      state.isLoggedin = true;
    },
    logout: (state) => {
      state.isLoggedin = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
