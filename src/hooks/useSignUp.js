import { useState } from "react";
import { signUp } from "../supabase/auth";

const initialCredentials = { email: "", password: "" };
const initialStatus = {
  error: "",
  loading: false,
};

const useSignUp = () => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [status, setStatus] = useState(initialStatus);

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatus({ error: "", loading: true });
    const { email, password } = credentials;
    const { error } = await signUp(email, password);
    if (error) {
      setStatus({ error: error.message, loading: false });
    } else {
      alert("이메일 확인......");
      setStatus(initialStatus);
    }
  };

  return {
    ...credentials,
    setCredentials,
    status,
    handleSignup,
  };
};

export default useSignUp;
