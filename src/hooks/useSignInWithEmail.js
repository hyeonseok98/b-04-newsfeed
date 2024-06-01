import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { signInWithEmail } from "../supabase/auth";

const initialCredentials = { email: "", password: "" };
const initialStatus = {
  error: "",
  loading: false,
};

const useSignInWithEmail = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState(initialCredentials);
  const [status, setStatus] = useState(initialStatus);

  const handleSignIn = async () => {
    setStatus({ error: "", loading: true });
    const { email, password } = credentials;
    const { error } = await signInWithEmail(email, password);
    if (error) {
      setStatus({ error: error.message, loading: false });
      alert(status.error);
    } else {
      dispatch(login());
      alert("로그인 완료");
      setStatus(initialStatus);
    }
  };

  return {
    ...credentials,
    setCredentials,
    status,
    handleSignIn,
  };
};

export default useSignInWithEmail;
