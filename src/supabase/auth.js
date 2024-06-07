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
    console.error(error.message);
    return;
  }
  const userId = user?.id;
  const userName = email.split("@")[0];

  const { error: insertError } = await supabase.from("User").insert({
    id: userId,
    password,
    email,
    nickname,
    user_name: userName,
  });
  if (insertError && insertError.code !== "23505") {
    alert("테이블 업데이트 에러", insertError);
    console.log("테이블 업데이트 에러", insertError);
  } else {
    alert("회원가입 성공 및 정보 저장 완료");
  }

  if (!user) {
    alert("회원가입 성공했지만 데이터 못받음");
    return;
  }
};
export const signInWithEmail = async (email, password) => {
  const { error: userError } = await supabase.from("User").select("id").eq("email", email).single();
  if (userError) {
    console.log("사용자 조회 에러", userError.message);

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

  return { user: authData.user, error: null };
};

export const signInWithOAuth = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider });
  if (error) {
    console.log("로그인에러", error);
  }
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    alert("로그아웃실패");
  }
};
