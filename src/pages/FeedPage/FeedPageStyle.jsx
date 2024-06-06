import styled from "styled-components";

export const StContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto; /* 화면 가운데 정렬을 위해 추가 */
`;
export const StFeedList = styled.div`
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬로 설정합니다. */
  gap: 20px; /* 아이템 간격을 20px로 설정합니다. */
  position: relative;
  top: 280px; /* 텍스트를 아래로 내리기 위해 추가합니다. */
`;

export const StFeedContent = styled.div`
  max-width: 1320px;
  height: 1500px;
  background-color: gray; /* 배경색 설정 */
  margin: 300px auto 0; /* 페이지 중앙 정렬을 위해 margin을 auto로 설정하고 위쪽에 300px 마진 추가 */
`;

export const StFeedHeader = styled.div`
  position: sticky;
  top: 0;
  max-width: 1320px;
  height: 100px;
  background-color: #121212;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  margin: 0 auto; /* 수평 가운데 정렬 */

  .title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    margin-left: 45%;
  }
  span {
    font-weight: normal;
  }
  .login-buttons {
    display: flex;
    gap: 10px;
    margin-left: auto; /* 우측으로 이동 */

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

export const StFeedTop = styled.div`
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
