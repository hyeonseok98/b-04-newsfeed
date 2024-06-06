import styled, { css } from "styled-components";
import { OAUTH, OAUTH_PROVIDERS } from "../../constants/constants";
import googleLogo from "../../assets/images/social-icons/logo_google.svg";
import githubLogo from "../../assets/images/social-icons/logo_github_white.svg";
import useAuth from "../../hooks/useAuth";

const SignInWithOAuth = () => {
  const { handleAuth } = useAuth(OAUTH);
  return (
    <Container>
      <button onClick={() => handleAuth(null, OAUTH_PROVIDERS.GOOGLE)}>
        <SocialIcon src={googleLogo} alt="" />
      </button>
      <button onClick={() => handleAuth(null, OAUTH_PROVIDERS.GITHUB)}>
        <SocialIcon $type="github" src={githubLogo} alt="" />
      </button>
    </Container>
  );
};

export default SignInWithOAuth;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;

  button {
    background-color: transparent;
    border: none;
  }
`;

const SocialIcon = styled.img`
  width: 48px;
  height: 48px;
  ${(props) =>
    props.$type === "github" &&
    css`
      width: 45px;
      height: 45px;
    `}
`;
