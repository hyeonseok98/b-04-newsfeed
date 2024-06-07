import supabase from "../supabase/supabaseClient";

const checkEmailExists = async (email) => {
  const { data } = await supabase.from("User").select("*").eq("email", email).single();
  return !!data;
};

const checkNicknameExists = async (nickname) => {
  const { data } = await supabase.from("User").select("*").eq("nickname", nickname).single();
  return !!data;
};

export const validateCredentials = async (credentials, isLoginPage, setErrorMessage) => {
  const errorMessages = { email: "", password: "", nickname: "" };
  let isValid = true;

  const { email, password, nickname } = credentials;

  //이메일
  if (!email.trim()) {
    errorMessages.email = "이메일 주소를 입력해주세요.";
    isValid = false;
  } else if (isLoginPage) {
    if (!(await checkEmailExists(email))) {
      errorMessages.email = "회원가입이 필요합니다.";
      isValid = false;
    }
  } else if (await checkEmailExists(email)) {
    errorMessages.email = "이미 가입이 되어있는 이메일입니다.";
    isValid = false;
  }

  // 비밀번호
  if (!password.trim()) {
    errorMessages.password = "비밀번호를 입력해주세요.";
    isValid = false;
  } else if (password.trim().length < 8) {
    errorMessages.password = "비밀번호는 최소 8자리여야 합니다.";
    isValid = false;
  } else if (isLoginPage && !(await checkEmailExists(email))) {
    const { data } = await supabase.from("User").select("*").eq("email", email).single();
    if (data && data.password !== password.trim()) {
      errorMessages.password = "비밀번호가 잘못되었습니다.";
      isValid = false;
    }
  }

  // 닉네임
  if (!isLoginPage) {
    if (nickname.trim().length < 2) {
      errorMessages.nickname = "두 자리 이상의 닉네임을 입력해주세요.";
      isValid = false;
    } else if (/[^a-zA-Z0-9가-힣]/.test(nickname.trim())) {
      errorMessages.nickname = "사용할 수 없는 닉네임입니다";
      isValid = false;
    } else if (await checkNicknameExists(nickname)) {
      errorMessages.nickname = "이미 존재하는 닉네임입니다.";
      isValid = false;
    }
  }

  setErrorMessage(errorMessages);
  return isValid;
};
