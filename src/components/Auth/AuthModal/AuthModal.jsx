import { useState } from "react";
import EmailAuth from "../EmailAuth/EmailAuth";
import SignInWithOAuth from "../SignInWithOAuth/SignInWithOAuth";
import { StDialog, StDiv } from "./AuthModal.styled";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slices/authSlice";

const AuthModal = ({ open }) => {
  const dispatch = useDispatch();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const toggleModalPage = () => setIsLoginPage((prev) => !prev);
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };
  return (
    <StDiv onClick={handleClose}>
      <StDialog open={open}>
        <EmailAuth isLoginPage={isLoginPage} togglePage={toggleModalPage} />
        {isLoginPage && <SignInWithOAuth />}
      </StDialog>
    </StDiv>
  );
};

export default AuthModal;
