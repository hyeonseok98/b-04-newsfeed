// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { login, logout } from "../slices/authSlice";
// import supabase from "../../supabase/supabaseClient";
// import {
//   AUTH_INITIALIZE_AUTH_STATE,
//   AUTH_CHECK_USER_STATUS,
//   AUTH_HANDLE_AUTH_STATE_CHANGE,
// } from "../constants/authConstants";

// const setUserMetadata = (user) => {
//   const userMetadata = { ...user.user_metadata };

//   if (!userMetadata.displayName) {
//     userMetadata.displayName = userMetadata.name ?? "기본닉네임";
//   }

//   return { ...user, user_metadata: userMetadata };
// };

// export const initializeAuthState = createAsyncThunk(AUTH_INITIALIZE_AUTH_STATE, async (_, { dispatch }) => {
//   const isLoggedin = localStorage.getItem("isLoggedin") === "true";
//   const user = localStorage.getItem("user");
//   const parsedUser = user ? JSON.parse(user) : null;

//   if (isLoggedin && parsedUser) {
//     dispatch(login(parsedUser));
//   } else {
//     dispatch(logout());
//   }
// });

// export const checkUserStatus = createAsyncThunk(AUTH_CHECK_USER_STATUS, async (_, { dispatch }) => {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   if (user) {
//     const updatedUser = setUserMetadata(user);
//     dispatch(login(updatedUser));
//   } else {
//     dispatch(logout());
//   }
// });

// export const handleAuthStateChange = createAsyncThunk(AUTH_HANDLE_AUTH_STATE_CHANGE, async (_, { dispatch }) => {
//   supabase.auth.onAuthStateChange((event, session) => {
//     if (session) {
//       const user = session.user;
//       const updatedUser = setUserMetadata(user);
//       dispatch(login(updatedUser));
//     } else {
//       dispatch(logout());
//     }
//   });
// });
