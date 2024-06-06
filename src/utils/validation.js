export const validateCredentials = (credentials, isLoginPage, setErrorMessage) => {
  let isValid = true;
  const errorMessages = { email: "", password: "", nickname: "" };
  if (!credentials.email.trim()) {
    const emailErrorMessage = "이메일 주소를 입력해주세요.";
    errorMessages.email = emailErrorMessage;
    isValid = false;
  }
  if (!credentials.password.trim()) {
    const passwordErrorMessage = "비밀번호를 입력해주세요.";
    errorMessages.password = passwordErrorMessage;
    isValid = false;
  } else if (credentials.password.trim().length < 8) {
    const passwordErrorMessage = "비밀번호는 최소 8자리여야 합니다.";
    errorMessages.password = passwordErrorMessage;
    isValid = false;
  }
  if (!isLoginPage && credentials.nickname.trim().length < 2) {
    const nicknameErrorMessage = "두 자리 이상의 닉네임을 입력해주세요.";
    errorMessages.nickname = nicknameErrorMessage;
    isValid = false;
  }
  setErrorMessage(errorMessages);
  return isValid;
};
