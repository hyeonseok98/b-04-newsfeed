import { OAUTH_PROVIDERS } from "../../constants/constants";
import useSignInwithOAuth from "../../hooks/useSignInwithOAuth";

const SignInWithOAuth = () => {
  const { handleSignInwithOAuth } = useSignInwithOAuth();
  return (
    <>
      <button onClick={() => handleSignInwithOAuth(OAUTH_PROVIDERS.GOOGLE)}>구글</button>
      <button onClick={() => handleSignInwithOAuth(OAUTH_PROVIDERS.GITHUB)}>깃헙</button>
    </>
  );
};

export default SignInWithOAuth;
