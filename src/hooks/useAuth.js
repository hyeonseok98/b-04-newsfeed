import { useState, useCallback } from "react";
import { signInWithEmail, signInWithOAuth, signOut, signUp } from "../supabase/auth";
import { ACTIONTYPE } from "../config/constants/constants";
import { useDispatch } from "react-redux";
import { closeModal, login } from "../store/slices/authSlice";
import supabase from "../supabase/supabaseClient";

const useAuth = (action) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const handleAuth = useCallback(
    async (credentials = {}, provider) => {
      setLoading(true);
      setError(null);
      try {
        let result;
        const { SIGN_IN_WITH_EMAIL, SIGN_IN_WITH_OAUTH, SIGN_UP_WITH_EMAIL, SIGN_OUT } = ACTIONTYPE;
        switch (action) {
          case SIGN_IN_WITH_EMAIL:
            result = await signInWithEmail(credentials.email, credentials.password);
            setUser(result.user);
            dispatch(login(result.user));
            dispatch(closeModal());
            break;

          case SIGN_IN_WITH_OAUTH:
            result = await signInWithOAuth(provider);
            if (!result.session) {
              setTimeout(async () => {
                const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
                if (sessionError) {
                  setError(sessionError.message);
                  setLoading(false);
                  alert(sessionError.message);
                  return;
                }
                const user = sessionData.session.user;
                if (user) {
                  dispatch(login(user));
                  dispatch(closeModal());
                }
                setUser(user);
                setLoading(false);
              }, 2000);
            } else {
              const user = result.user;
              if (user) {
                dispatch(login(user));
                dispatch(closeModal());
              }
              setUser(user);
              setLoading(false);
            }
            break;

          case SIGN_UP_WITH_EMAIL:
            result = await signUp(credentials.email, credentials.password, credentials.displayName);
            setUser(result.user);
            dispatch(login(result.user));
            dispatch(closeModal());
            break;

          case SIGN_OUT:
            await signOut();
            setUser(null);
            dispatch(login(null));
            break;

          default:
            throw new Error("Invalid action");
        }
      } catch (error) {
        setError(error.message);
        console.error("Auth Error:", error);
      } finally {
        setLoading(false);
      }
    },
    [action, dispatch],
  );

  return { user, loading, error, handleAuth };
};

export default useAuth;
