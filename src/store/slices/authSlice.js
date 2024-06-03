import { createSlice } from "@reduxjs/toolkit";
// import { initializeAuthState, checkUserStatus, handleAuthStateChange } from "../thunks/authThunks";
// import { AUTH_STATUS_CHECKED, AUTH_STATUS_HANDLED, AUTH_STATUS_INITIALIZED } from "../constants/authConstants";

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
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.user = null;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { login, logout, openModal, closeModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
