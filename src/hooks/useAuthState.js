import { useState, useEffect } from "react";
import supabase from "../supabase/supabaseClient";

const useAuthState = () => {
  const [isLoggedin, setIsLoggedin] = useState(() => localStorage.getItem("isLoggedin") === "true");
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUserById = async (id) => {
      const { data, error } = await supabase.from("User").select("*").eq("id", id).single();
      if (error) {
        console.error("fetch 에러", error.message);
        return null;
      }
      return data;
    };

    const insertSocialUser = async (user) => {
      const { error } = await supabase
        .from("User")
        .insert({
          id: user.id,
          email: user.email,
          nickname: user.email.split("@")[0],
          user_name: user.email.split("@")[0],
        })
        .single();
      if (error) {
        console.error("insert 에러", error.message);
      }
    };

    const getSessionAndHandleUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("session 조회실패", error.message);
      } else if (data?.session) {
        const sessionUser = data.session.user;

        if (!sessionUser.user_metadata.displayName) {
          const existingUser = await fetchUserById(sessionUser.id);

          if (!existingUser) {
            await insertSocialUser(sessionUser);
            setUser(await fetchUserById(sessionUser.id));
          }

          if (existingUser) {
            setUser(existingUser);
            console.log(existingUser);
          }
        } else {
          setUser(await fetchUserById(sessionUser.id));
        }
      }
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        setIsLoggedin(true);
        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("user", JSON.stringify(session.user)); // user 값을 로컬스토리지로 불러오는 부분 로직 변경 후 삭제
        // await getSessionAndHandleUser();   이 줄의 코드는 지워질 코드이지만 확인할게 있어 남겨두었습니다. 확인 후 삭제하겠습니다
      } else {
        localStorage.removeItem("isLoggedin");
        localStorage.removeItem("user"); // user 값을 로컬스토리지로 불러오는 부분 로직 변경 후 삭제
        setIsLoggedin(false);
        setUser(null);
      }
    });

    if (isLoggedin) {
      getSessionAndHandleUser();
    }

    return () => authListener.subscription.unsubscribe();
  }, [isLoggedin]);

  return { isLoggedin, user };
};

export default useAuthState;
