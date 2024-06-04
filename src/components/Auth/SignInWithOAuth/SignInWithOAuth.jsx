import { OAUTH_PROVIDERS } from "../../../constants/constants";
import useSignInWithOAuth from "../../../hooks/useSignInwithOAuth";

const SignInWithOAuth = () => {
  const { handleSignInWithOAuth } = useSignInWithOAuth();
  return (
    <>
      <button onClick={() => handleSignInWithOAuth(OAUTH_PROVIDERS.GOOGLE)}>구글</button>
      <button onClick={() => handleSignInWithOAuth(OAUTH_PROVIDERS.GITHUB)}>깃헙</button>
    </>
  );
};

export default SignInWithOAuth;
