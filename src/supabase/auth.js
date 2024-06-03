import supabase from "./supabaseClient";

export const signUp = async (email, password, displayName) => {
  const { data: user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        displayName,
      },
    },
  });

  if (error) {
    console.log("회원가입 에러", error.message);
    console.log("에러 디테일:", error);
    return;
  }

  const userId = user?.id;
  console.log("user", user);

  if (!user) {
    console.log("회원가입에 성공했지만 사용자 정보를 받아오지 못했습니다.");
    return;
  }

  const userName = email.split("@")[0];

  const { data, error: insertError } = await supabase.from("User").insert({
    id: userId,
    email,
    display_name: displayName,
    user_name: userName,
  });

  if (insertError) {
    console.log("테이블 업데이트 에러", insertError);
  } else {
    alert("회원가입 성공 및 정보 저장 완료");
  }
};

export const signInWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    console.log("로그인 에러", error);
  }
  if (!data) {
    console.log("데이터 못받음");
  }
  localStorage.setItem("isLoggedin", "true");
  localStorage.setItem("user", JSON.stringify(data));
  alert("로그인성공");
  return { user: data.user, error };
};

export const signInWithOAuth = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider });

  return { error };
};

export const signOut = async () => {
  const { data, error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    alert("로그아웃실패");
    return;
  }
  localStorage.removeItem("isLoggedin");
  localStorage.removeItem("user");
  alert("로그아웃성공");
};

export const updateUserMetadata = async (metadata) => {
  const { data, error } = await supabase.auth.updateUser({
    data: metadata,
  });
  return { data, error };
};
