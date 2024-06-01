import useSignUp from "../../hooks/useSignUp";

const SignUp = ({ togglePage }) => {
  const { email, password, setCredentials, handleSignup } = useSignUp();

  return (
    <form onSubmit={handleSignup}>
      <h3>회원가입</h3>
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
      <input type="text" />

      <button>ㅇㅇㅇ</button>
      <span onClick={togglePage}>로그인 어쩌구</span>
    </form>
  );
};

export default SignUp;
