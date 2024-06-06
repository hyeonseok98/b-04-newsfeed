import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/slices/authSlice";
import AuthModal from "../Auth/AuthModal";
import { StHeader } from "./Header.styled";
import useAuth from "../../hooks/useAuth";
import { SIGN_OUT } from "../../constants/constants";
import useAuthState from "../../hooks/useAuthState";

const Header = () => {
  const { handleAuth } = useAuth(SIGN_OUT);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  const { isLoggedin } = useAuthState();

  return (
    <StHeader>
      {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
      {isLoggedin && <button onClick={handleAuth}>Logout</button>}
      {isModalOpen && <AuthModal open={isModalOpen} />}
    </StHeader>
  );
};

export default Header;
