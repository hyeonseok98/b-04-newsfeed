import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/slices/authSlice";
import AuthModal from "../Auth/AuthModal/AuthModal";
import { StHeader } from "./Header.styled";
import useAuth from "../../hooks/useAuth";
import { SIGN_OUT } from "../../constants/constants";
import supabase from "../../supabase/supabaseClient";
import { useNavigate } from "react-router-dom";
import useAuthState from "../../hooks/useAuthState";

const Header = () => {
  const { handleAuth } = useAuth(SIGN_OUT);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const { isLoggedin, setIsLoggedin } = useAuthState();

  const handleSignOut = async () => {
    await handleAuth();
    setIsLoggedin(false);
  };

  return (
    <StHeader>
      {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
      {isLoggedin && <button onClick={handleSignOut}>Logout</button>}
      {isModalOpen && <AuthModal open={isModalOpen} />}
    </StHeader>
  );
};

export default Header;
