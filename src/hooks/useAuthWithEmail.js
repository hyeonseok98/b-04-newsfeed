import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/slices/authSlice";
import { signInWithEmail, signUp } from "../supabase/auth";

const initialStatus = { error: "", loading: false };

const useAuthWithEmail = () => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(initialStatus);

  const handleAuthWithEmail = async (isSignIn = false, credentials) => {
    setStatus({ error: "", loading: true });
    console.log(credentials);
    const { email, password, nickname } = credentials;
    const { error } = isSignIn ? await signInWithEmail(email, password) : await signUp(email, password, nickname);

    if (error) {
      setStatus({ error: error.message, loading: false });
      alert(status.error);
    } else {
      setStatus(initialStatus);
      if (isSignIn) {
        alert("로그인 완료");
      } else {
        alert("이메일 본인확인...");
      }
      dispatch(closeModal());
    }
  };

  return {
    status,
    handleAuthWithEmail,
  };
};

export default useAuthWithEmail;
