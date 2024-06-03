import { OAUTH_PROVIDERS } from "../../../constants/constants";

const SignInWithOAuth = () => {
  return (
    <>
      <button onClick={() => handleSignInWithOAuth(OAUTH_PROVIDERS.GOOGLE)}>구글</button>
      <button onClick={() => handleSignInWithOAuth(OAUTH_PROVIDERS.GITHUB)}>깃헙</button>
    </>
  );
};

export default SignInWithOAuth;
