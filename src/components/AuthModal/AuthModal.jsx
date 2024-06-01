import { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const AuthModal = ({ open, onClose }) => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const toggleModalPage = () => setIsLoginPage((prev) => !prev);
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <dialog onClick={handleClose} open={open}>
        {isLoginPage && <Login togglePage={toggleModalPage} />}
        {!isLoginPage && <Signup togglePage={toggleModalPage} />}
      </dialog>
    </div>
  );
};

export default AuthModal;
