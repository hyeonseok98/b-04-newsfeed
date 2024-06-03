import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/slices/authSlice";
import AuthModal from "../Auth/AuthModal/AuthModal";
import { StHeader } from "./Header.styled";
import { signOut } from "../../supabase/auth";

const Header = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);
  // const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);
  // const displayName = user?.user_metadata?.displayName;
  const [isLoggedin, setIsLoggedin] = useState(() => localStorage.getItem("isLoggedin") === "true");
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedin(localStorage.getItem("isLoggedin") === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <StHeader>
      {!isLoggedin && <button onClick={() => dispatch(openModal())}>Login</button>}
      {isLoggedin && <button onClick={signOut()}>Logout</button>}
      {isModalOpen && <AuthModal open={isModalOpen} />}
      {/* {displayName && <span>{displayName}</span>} */}
    </StHeader>
  );
};

export default Header;
