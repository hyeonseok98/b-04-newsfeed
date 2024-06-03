import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../slices/authSlice";
import supabase from "../../supabase/supabaseClient";
import {
  AUTH_INITIALIZE_AUTH_STATE,
  AUTH_CHECK_USER_STATUS,
  AUTH_HANDLE_AUTH_STATE_CHANGE,
} from "../constants/authConstants";

export const initializeAuthState = createAsyncThunk(AUTH_INITIALIZE_AUTH_STATE, async (_, { dispatch }) => {
  const isLoggedin = localStorage.getItem("isLoggedin") === "true";
  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;

  if (isLoggedin && parsedUser) {
    dispatch(login(parsedUser));
  } else {
    dispatch(logout());
  }
});

export const checkUserStatus = createAsyncThunk(AUTH_CHECK_USER_STATUS, async (_, { dispatch }) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    dispatch(login(user));
  } else {
    dispatch(logout());
  }
});

export const handleAuthStateChange = createAsyncThunk(AUTH_HANDLE_AUTH_STATE_CHANGE, async (_, { dispatch }) => {
  supabase.auth.onAuthStateChange((_, session) => {
    if (session) {
      dispatch(login(session.user));
    } else {
      dispatch(logout());
    }
  });
});
