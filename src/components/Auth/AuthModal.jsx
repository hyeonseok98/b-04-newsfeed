import { useState } from "react";
import EmailAuth from "./EmailAuth";
import SignInWithOAuth from "./SignInWithOAuth";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/authSlice";
import styled from "styled-components";

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
    <Backdrop onClick={handleClose}>
      <StDialog open={open}>
        <Container>
          <Title>{isLoginPage ? "로그인" : "회원가입"}</Title>
          <EmailAuth isLoginPage={isLoginPage} togglePage={toggleModalPage} />
          <StBtn onClick={toggleModalPage}>{isLoginPage ? "계정이 없으신가요?" : "이미 회원이신가요?"}</StBtn>
          {isLoginPage && <SignInWithOAuth />}
        </Container>
      </StDialog>
    </Backdrop>
  );
};

export default AuthModal;

const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StDialog = styled.dialog`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 320px;
  background-color: var(--color-black-50);
  padding: 40px;
  border-radius: 16px;
  border: none;
  z-index: 1000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--secondary-color);
`;

const StBtn = styled.button`
  font-size: 1.4rem;
  text-align: center;
  color: var(--secondary-color);
  font-weight: 500;
  background-color: transparent;
  border: none;
  &:hover {
    filter: brightness(1.1);
  }
`;
