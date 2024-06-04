import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuthState, checkUserStatus, handleAuthStateChange } from "../../store/thunks/authThunks";
import { openModal } from "../../store/slices/authSlice";
import AuthModal from "../Auth/AuthModal/AuthModal";
import useSignOut from "../../hooks/useSignOut";
import { StHeader } from "./Header.styled";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const displayName = user?.user_metadata?.displayName;
  const { handleSignOut } = useSignOut();

  useEffect(() => {
    dispatch(initializeAuthState());
    dispatch(checkUserStatus());
    dispatch(handleAuthStateChange());
  }, [dispatch]);

  return (
    <StHeader>
      {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
      {isLoggedin && <button onClick={handleSignOut}>Logout</button>}
      {isModalOpen && <AuthModal open={isModalOpen} />}
      {displayName && <span>{displayName}</span>}
    </StHeader>
  );
};

export default Header;
