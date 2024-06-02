import useAuthWithEmail from "../../hooks/useAuthWithEmail";

const Login = ({ isLoginPage, togglePage }) => {
  const { credentials, setCredentials, handleAuthWithEmail } = useAuthWithEmail(isLoginPage);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuthWithEmail();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>{isLoginPage ? "로그인" : "회원가입"}</h3>
      <input name="email" type="email" value={credentials.email} onChange={handleInputChange} />
      <input name="password" type="password" value={credentials.password} onChange={handleInputChange} />
      {!isLoginPage && <input name="nickname" type="text" value={credentials.nickname} onChange={handleInputChange} />}
      <button>ㅇㅇㅇ</button>
      <span onClick={togglePage}>{isLoginPage ? "회원가입 하러가기" : "로그인 하러가기"}</span>
    </form>
  );
};

export default Login;
