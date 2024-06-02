import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabase/supabaseClient";

const initialState = {
  isLoggedin: false,
  isModalOpen: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state) => {
      state.isLoggedin = true;
      localStorage.setItem("isLoggedin", "true");
    },
    logout: (state) => {
      state.isLoggedin = false;
      localStorage.removeItem("isLoggedin");
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const checkUserStatus = () => async (dispatch) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    dispatch(login());
  } else {
    dispatch(logout());
  }
  supabase.auth.onAuthStateChange((_, session) => {
    if (session) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  });
};

export const initializeAuthState = () => (dispatch) => {
  const isLoggedin = localStorage.getItem("isLoggedin");
  if (isLoggedin === "true") {
    dispatch(login());
  } else {
    dispatch(logout());
  }
};

export const { login, logout, openModal, closeModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
