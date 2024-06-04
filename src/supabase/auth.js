import supabase from "./supabaseClient";

export const signUp = async (email, password, nickname) => {
  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        displayName: nickname,
      },
    },
  });
  if (error) {
    alert("회원가입 에러", error.message);
    return;
  }
  const userId = user?.id;

  if (!user) {
    alert("회원가입 성공했지만 데이터 못받음");
    return;
  } else {
    const userName = email.split("@")[0];
    const { error: insertError } = await supabase.from("User").insert({
      id: userId,
      password,
      email,
      nickname,
      user_name: userName,
    });
    if (insertError) {
      alert("테이블 업데이트 에러", insertError);
    } else {
      alert("회원가입 성공 및 정보 저장 완료");
    }
  }
};
export const signInWithEmail = async (email, password) => {
  const { data: user, error: userError } = await supabase.from("User").select("id").eq("email", email).single();

  if (userError) {
    console.log("사용자 조회 에러", userError.message);
    alert("회원가입이 필요합니다.");
    return { user: null, error: userError };
  }

  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });

  if (authError) {
    console.log("로그인 에러", authError.message);
    alert("로그인 실패: ", authError.message);
    return { user: null, error: authError };
  }

  if (!authData || !authData.user) {
    console.log("로그인 실패: 데이터 없음");
    alert("로그인 실패: 데이터를 받지 못했습니다.");
    return { user: null, error: new Error("로그인 실패: 데이터를 받지 못했습니다.") };
  }

  localStorage.setItem("isLoggedin", "true");
  alert("로그인 성공");
  return { user: authData.user, error: null };
};

export const signInWithOAuth = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider });
  if (error) {
    console.log("로그인에러", error);
  } else if (data) {
    localStorage.setItem("isLoggedin", "true");
  }
  return { data, error };
};

export const signOut = async () => {
  const { data, error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    alert("로그아웃실패");
    return;
  } else {
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("user");
    alert("로그아웃성공");
  }
};
