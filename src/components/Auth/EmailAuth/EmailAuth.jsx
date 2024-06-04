import { useEffect, useState } from "react";
import { validateCredentials } from "../../../utils/validation";
import useAuth from "../../../hooks/useAuth";
import { EMAIL_SIGN_IN, EMAIL_SIGN_UP } from "../../../constants/constants";

const initialCredentials = { email: "", password: "", nickname: "" };

const EmailAuth = ({ isLoginPage, togglePage }) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [errorMessage, setErrorMessage] = useState("");
  const actionType = isLoginPage ? EMAIL_SIGN_IN : EMAIL_SIGN_UP;
  const { handleAuth } = useAuth(actionType);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateCredentials(credentials, isLoginPage);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    await handleAuth(credentials);
    setCredentials(initialCredentials);
  };

  useEffect(() => {
    setCredentials(initialCredentials);
  }, [isLoginPage]);

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isLoginPage ? "로그인" : "회원가입"}</h3>
      <input name="email" type="email" value={credentials.email} onChange={handleInputChange} />
      <input name="password" type="password" value={credentials.password} onChange={handleInputChange} />
      {!isLoginPage && <input name="nickname" type="text" value={credentials.nickname} onChange={handleInputChange} />}
      <button type="submit">{isLoginPage ? "로그인" : "회원가입"}</button>
      <span onClick={togglePage}>{isLoginPage ? "회원가입 하러가기" : "로그인 하러가기"}</span>
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default EmailAuth;
