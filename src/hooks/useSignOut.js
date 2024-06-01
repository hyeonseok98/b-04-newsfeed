import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { signOut } from "../supabase/auth";

const initialStatus = {
  error: "",
  loading: false,
};

const useSignOut = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(initialStatus);

  const handleSignOut = async () => {
    setStatus({ error: "", loading: true });
    const { error } = await signOut();
    if (error) {
      setStatus({ error: error.message, loading: false });
      alert(status.error);
    } else {
      dispatch(logout());
      alert("로그아웃 완료");
      setStatus(initialStatus);
    }
  };

  return {
    handleSignOut,
    status,
  };
};

export default useSignOut;
