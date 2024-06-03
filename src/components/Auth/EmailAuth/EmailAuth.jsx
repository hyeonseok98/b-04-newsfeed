import { useEffect, useState } from "react";
// import useAuthWithEmail from "../../../hooks/useAuthWithEmail";
import { validateCredentials } from "../../../utils/validation";
import { signInWithEmail, signUp } from "../../../supabase/auth";

const initialCredentials = { email: "", password: "", displayName: "" };

const Login = ({ isLoginPage, togglePage }) => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [errorMessage, setErrorMessage] = useState("");

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
    const { email, password, displayName } = credentials;
    isLoginPage ? signInWithEmail(email, password) : signUp(email, password, displayName);
    setCredentials(initialCredentials);
  };

  useEffect(() => {
    const isLoggedin = localStorage.getItem("isLoggedIn");
    console.log(isLoggedin);
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <h3>{isLoginPage ? "로그인" : "회원가입"}</h3>
      <input name="email" type="email" value={credentials.email} onChange={handleInputChange} />
      <input name="password" type="password" value={credentials.password} onChange={handleInputChange} />
      {!isLoginPage && (
        <input name="displayName" type="text" value={credentials.displayName} onChange={handleInputChange} />
      )}
      <button type="submit">{isLoginPage ? "로그인" : "회원가입"}</button>
      <span onClick={togglePage}>{isLoginPage ? "회원가입 하러가기" : "로그인 하러가기"}</span>
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default Login;
