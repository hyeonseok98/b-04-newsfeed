import { createSlice } from "@reduxjs/toolkit";
import { initializeAuthState, checkUserStatus, handleAuthStateChange } from "../thunks/authThunks";
import { AUTH_STATUS_CHECKED, AUTH_STATUS_HANDLED, AUTH_STATUS_INITIALIZED } from "../constants/authConstants";

const initialState = {
  isLoggedin: false,
  isModalOpen: false,
  user: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      state.isLoggedin = true;
      state.user = action.payload;
      localStorage.setItem("isLoggedin", "true");
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.user = null;
      localStorage.removeItem("isLoggedin");
      localStorage.removeItem("user");
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeAuthState.fulfilled, (state) => {
        state.status = AUTH_STATUS_INITIALIZED;
      })
      .addCase(checkUserStatus.fulfilled, (state) => {
        state.status = AUTH_STATUS_CHECKED;
      })
      .addCase(handleAuthStateChange.fulfilled, (state) => {
        state.status = AUTH_STATUS_HANDLED;
      });
  },
});

export const { login, logout, openModal, closeModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
