import AuthModal from "../AuthModal/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import useSignOut from "../../hooks/useSignOut";
import { checkUserStatus, initializeAuthState, openModal } from "../../store/slices/authSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const { handleSignOut } = useSignOut();
  useEffect(() => {
    dispatch(initializeAuthState());
    dispatch(checkUserStatus());
  }, [dispatch]);
  return (
    <header>
      {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
      {isLoggedin && <button onClick={handleSignOut}>Logout</button>}
      {isModalOpen && <AuthModal open={isModalOpen} />}
    </header>
  );
};

export default Header;
