import { useState, useCallback } from "react";
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

  const handleSignOut = useCallback(async () => {
    setStatus({ error: "", loading: true });
    const { error } = await signOut();
    if (error) {
      setStatus({ error: error.message, loading: false });
      alert(error.message);
    } else {
      dispatch(logout());
      alert("로그아웃 완료");
      setStatus(initialStatus);
    }
  }, [dispatch]);

  return {
    handleSignOut,
    status,
  };
};

export default useSignOut;
