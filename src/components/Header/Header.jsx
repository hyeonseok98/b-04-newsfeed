import { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  return (
    <header>
      <button onClick={() => setIsModalOpen(true)}>Login</button>
      {isModalOpen && <AuthModal open={isModalOpen} onClose={closeModal} />}
    </header>
  );
};

export default Header;
