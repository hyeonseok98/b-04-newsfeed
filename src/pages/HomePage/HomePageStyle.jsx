// HomePageStyle.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StMain = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #121212;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  gap: 16px;

  .header-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    flex: 1;

    span {
      font-weight: normal;
    }
    /* text-align: center; 왼쪽으로 붙이기 위해 추가 */
    /* cursor: pointer; 커서를 포인터로 설정하여 클릭 가능하게 보이도록 함 */
  }

  .login-buttons {
    display: flex;
    gap: 10px;

    button {
      padding: 10px 18px;
      border: none;
      border-radius: 25px;
      background-color: #363636;
      color: #ffffff;
      cursor: pointer;
      height: 48px;
      font-size: 15px;
      font-weight: bold;
      transition: 0.4s;

      &:hover {
        background-color: #666666;
      }
    }
  }
`;

export const StNews = styled.div`
  padding: 20px 20px 70px;
  background-color: #121212;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const StCommunity = styled.div`
  padding-top: 45px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1320px;
  box-sizing: border-box;
  height: 100%; /* 이전값 380px */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .search-MiddleContainer {
    position: relative; /* 나중에 버튼 위치 더 세밀조정 필요 */
    /* bottom: 165px; 글목록 생성 이전 썼던 값:165px */
    left: 0px;
    right: 20px;
    display: flex;
    gap: 0px;
  }

  button {
    height: 48px;
    font-size: 15px;
    font-weight: bold;
    margin-left: 20px;
    padding: 5px 25px;
    border: none;
    border-radius: 25px;
    background-color: #ffbf00;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #ffcf3e;
    }
  }
`;

export const StMoveTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #f56263;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d94a53;
  }

  button {
    border: none;
    background: none;
    color: white;
    font-size: 1.5rem; /* 화살표 크기 확장 */
    font-weight: bold; /* 화살표 두께 증가 */
    cursor: pointer;
    outline: none;
  }
`;

// 운성
export const StFeedButton = styled(Link)`
  height: 48px;
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
  padding: 0px 25px;
  border: none;
  border-radius: 25px;
  background-color: #ffbf00;
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex; /* 컨테이너를 플렉스 컨테이너로 설정합니다. */
  align-items: center; /* 수직 정렬을 설정합니다. */
  justify-content: center; /* 수평 정렬을 설정합니다. */
  &:hover {
    background-color: #ffcf3e;
  }
`;

// 운성
