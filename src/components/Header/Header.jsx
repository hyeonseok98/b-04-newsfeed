import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";
import { useSelector } from "react-redux";
import useSignOut from "../../hooks/useSignOut";

const Header = () => {
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const { handleSignOut } = useSignOut();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header>
      {!isLoggedin && <button onClick={() => setIsModalOpen(true)}>Login</button>}
      {isLoggedin && <button onClick={handleSignOut}>Logout</button>}
      {isModalOpen && <AuthModal open={isModalOpen} onClose={closeModal} />}
    </header>
  );
};

export default Header;
