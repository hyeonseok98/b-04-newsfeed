import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuthState, checkUserStatus, handleAuthStateChange } from "../../store/thunks/authThunks";
import { openModal } from "../../store/slices/authSlice";
import AuthModal from "../AuthModal/AuthModal";
import useSignOut from "../../hooks/useSignOut";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const displayName = user?.user_metadata?.displayName;
  console.log(user);
  const { handleSignOut } = useSignOut();

  useEffect(() => {
    dispatch(initializeAuthState());
    dispatch(checkUserStatus());
    dispatch(handleAuthStateChange());
  }, [dispatch]);

  return (
    <header>
      {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
      {isLoggedin && <button onClick={handleSignOut}>Logout</button>}
      {isModalOpen && <AuthModal open={isModalOpen} />}
      {displayName && <span>{displayName}</span>}
    </header>
  );
};

export default Header;
