import { useState, useEffect } from "react";
import supabase from "../supabase/supabaseClient";
import { useNavigate } from "react-router-dom";

const useAuthState = () => {
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

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("session 조회실패", error.message);
      } else if (data && data.session) {
        localStorage.setItem("user", JSON.stringify(data.session.user));
      }
    };

    if (isLoggedin) {
      getSession();
    }
  }, [isLoggedin]);

  return { isLoggedin, setIsLoggedin };
};

export default useAuthState;
