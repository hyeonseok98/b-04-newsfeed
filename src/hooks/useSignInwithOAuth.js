import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/slices/authSlice";
import { signInWithOAuth } from "../supabase/auth";

const initialStatus = {
  error: "",
  loading: false,
};

const useSignInwithOAuth = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(initialStatus);

  const handleSignInwithOAuth = async (provider) => {
    setStatus({ error: "", loading: true });
    const { error } = await signInWithOAuth(provider);
    if (error) {
      setStatus({ error: error.message, loading: false });
      alert(error.message);
    } else {
      dispatch(closeModal());
      setStatus(initialStatus);
    }
  };

  return {
    handleSignInwithOAuth,
    status,
  };
};

export default useSignInwithOAuth;
