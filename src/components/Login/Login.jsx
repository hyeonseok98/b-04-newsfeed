import useSignInWithEmail from "../../hooks/useSignInWithEmail";

const Login = ({ togglePage }) => {
  const { email, password, setCredentials, handleSignIn } = useSignInWithEmail();

  return (
    <form onSubmit={handleSignIn}>
      <h3>로그인</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
      />
      <button>ㅇㅇㅇ</button>
      <span onClick={togglePage}>회원가입 어쩌구</span>
    </form>
  );
};

export default Login;
