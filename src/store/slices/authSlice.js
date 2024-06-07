import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  isModalOpen: false,
  user: JSON.parse(localStorage.getItem("user") ?? null),
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { setUser, openModal, closeModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
