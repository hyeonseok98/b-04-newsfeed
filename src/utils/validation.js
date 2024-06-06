import supabase from "../supabase/supabaseClient";

export const validateCredentials = async (credentials, isLoginPage, setErrorMessage) => {
  let isValid = true;
  const errorMessages = { email: "", password: "", nickname: "" };
  if (!credentials.email.trim()) {
    const emailErrorMessage = "이메일 주소를 입력해주세요.";
    errorMessages.email = emailErrorMessage;
    isValid = false;
  } else if (!isLoginPage) {
    const { data } = await supabase.from("User").select("*").eq("email", credentials.email).single();
    if (data) {
      const emailErrorMessage = "이미 가입이 되어있는 이메일입니다.";
      errorMessages.email = emailErrorMessage;
      isValid = false;
    }
  }
  if (!credentials.password.trim()) {
    const passwordErrorMessage = "비밀번호를 입력해주세요.";
    errorMessages.password = passwordErrorMessage;
    isValid = false;
  } else if (credentials.password.trim().length < 8) {
    const passwordErrorMessage = "비밀번호는 최소 8자리여야 합니다.";
    errorMessages.password = passwordErrorMessage;
    ``;
    isValid = false;
  }
  if (!isLoginPage) {
    if (credentials.nickname.trim().length < 2) {
      const nicknameErrorMessage = "두 자리 이상의 닉네임을 입력해주세요.";
      errorMessages.nickname = nicknameErrorMessage;
      isValid = false;
    } else if (/[^a-zA-Z0-9가-힣]/.test(credentials.nickname.trim())) {
      const nicknameErrorMessage = "닉네임에 특수문자는 사용할 수 없습니다.";
      errorMessages.nickname = nicknameErrorMessage;
      isValid = false;
    } else {
      const { data } = await supabase.from("User").select("*").eq("nickname", credentials.nickname).single();
      if (data) {
        const nicknameErrorMessage = "이미 존재하는 닉네임입니다.";
        errorMessages.nickname = nicknameErrorMessage;
        isValid = false;
      }
    }
  }

  setErrorMessage(errorMessages);
  return isValid;
};
