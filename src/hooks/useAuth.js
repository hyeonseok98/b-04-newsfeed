import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmail, signInWithOAuth, signOut, signUp } from "../supabase/auth";
import { closeModal } from "../store/slices/authSlice";
import { EMAIL_SIGN_IN, EMAIL_SIGN_UP, OAUTH, SIGN_OUT } from "../constants/constants";

const useAuth = (action) => {
  const dispatch = useDispatch();

  const handleAuth = useCallback(
    async (credentials = {}, provider) => {
      if (action === EMAIL_SIGN_UP) {
        await signUp(credentials.email, credentials.password, credentials.nickname);
      } else if (action === EMAIL_SIGN_IN) {
        await signInWithEmail(credentials.email, credentials.password);
      } else if (action === SIGN_OUT) {
        await signOut();
      } else if (action === OAUTH) {
        await signInWithOAuth(provider);
      }
      dispatch(closeModal());
    },
    [action, dispatch],
  );

  return { handleAuth };
};

export default useAuth;
