import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/slices/authSlice";
import { signInWithEmail, signUp } from "../supabase/auth";

const initialCredentials = { email: "", password: "", nickname: "" };
const initialStatus = { error: "", loading: false };

const useAuthWithEmail = (isSignIn = false) => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState(initialCredentials);
  const [status, setStatus] = useState(initialStatus);

  const handleAuthWithEmail = async () => {
    setStatus({ error: "", loading: true });
    const { email, password, nickname } = credentials;
    const { error } = isSignIn ? await signInWithEmail(email, password) : await signUp(email, password, nickname);

    if (error) {
      setStatus({ error: error.message, loading: false });
      alert(status.error);
    } else {
      setCredentials(initialCredentials);
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
    credentials,
    setCredentials,
    status,
    handleAuthWithEmail,
  };
};

export default useAuthWithEmail;
