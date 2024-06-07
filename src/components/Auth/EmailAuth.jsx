import { useEffect, useState } from "react";
import { validateCredentials } from "../../utils/validation";
import useAuth from "../../hooks/useAuth";
import { EMAIL_SIGN_IN, EMAIL_SIGN_UP } from "../../constants/constants";
import styled from "styled-components";

const initialState = { email: "", password: "", nickname: "" };
const EmailAuth = ({ isLoginPage }) => {
  const [credentials, setCredentials] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(initialState);
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

    const isValid = await validateCredentials(credentials, isLoginPage, setErrorMessage);
    if (!isValid) {
      return;
    }
    await handleAuth(credentials);
    setCredentials(initialState);
  };

  useEffect(() => {
    setCredentials(initialState);
    setErrorMessage(initialState);
  }, [isLoginPage]);

  return (
    <StForm onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="이메일을 입력해주세요"
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <span>{errorMessage.email}</span>
      </div>
      <div>
        <input
          placeholder="비밀번호를 입력해주세요"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <span>{errorMessage.password}</span>
      </div>

      {!isLoginPage && (
        <div>
          <input
            placeholder="닉네임을 입력해주세요"
            name="nickname"
            type="text"
            value={credentials.nickname}
            onChange={handleInputChange}
          />
          <span>{errorMessage.nickname}</span>
        </div>
      )}
      <button type="submit">{isLoginPage ? "로그인" : "회원가입"}</button>
    </StForm>
  );
};

export default EmailAuth;

export const StForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 15px;

  div {
    position: relative;
    display: flex;
    width: 100%;
  }

  input {
    font-size: 1.8rem;
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--color-black-50);
    color: var(--white);
    border-bottom: 1px solid var(--white);
    margin-top: 2rem;
    padding: 5px 10px;
    transition: all 250ms ease-in;
    &:focus {
      border-color: var(--secondary-color);
    }
  }

  button {
    font-size: 2.3rem;
    font-weight: 500;
    width: 80%;
    height: 45px;
    border-radius: 10px;
    border: none;
    margin-top: 5px;
    font-weight: 700;
    color: var(--white);
    background-color: var(--secondary-color);
    &:hover {
      filter: brightness(1.05);
    }
  }

  span {
    color: var(--color-red-40);
    margin-left: 4px;
    font-weight: 500;
    font-size: 1.4rem;
    position: absolute;
    bottom: -20px;
    left: 0px;
  }
`;
