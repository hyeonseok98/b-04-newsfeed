export const validateCredentials = (credentials, isLoginPage) => {
  let errorMessage = "";
  if (!credentials.email.trim()) {
    errorMessage = "유효한 이메일 주소를 입력해주세요.";
  }
  if (!credentials.password.trim()) {
    errorMessage = "비밀번호를 입력해주세요.";
  } else if (credentials.password.trim().length < 8) {
    errorMessage = "비밀번호는 최소 8자리여야 합니다.";
  }
  if (!isLoginPage && credentials.nickname.trim().length < 2) {
    errorMessage = "두 자리 이상의 닉네임을 입력해주세요.";
  }
  return errorMessage;
};
