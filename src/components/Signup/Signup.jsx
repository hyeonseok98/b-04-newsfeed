import useSignup from "../../hooks/useSignup";

const Signup = ({ togglePage }) => {
  const { email, setEmail, password, setPassword, error, loading, handleSignup } = useSignup();
  console.log(email, password);
  return (
    <form onSubmit={handleSignup}>
      <h3>회원가입</h3>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>ㅇㅇㅇ</button>
      <span onClick={togglePage}>로그인 어쩌구</span>
    </form>
  );
};

export default Signup;
