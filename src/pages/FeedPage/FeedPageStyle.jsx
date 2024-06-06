import styled from "styled-components";

export const StContainer = styled.div`
  width: 1320px;
  margin: 0 auto; /* 화면 가운데 정렬을 위해 추가 */
`;

export const StImageWrapper = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
`;

export const StFeedList = styled.div`
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬로 설정합니다. */
  gap: 20px; /* 아이템 간격을 20px로 설정합니다. */
  position: relative;
  top: 40px; /* 텍스트를 아래로 내리기 위해 추가합니다. */
`;

export const StFeedContent = styled.div`
  width: 1320px;
  height: 1500px;
  background-color: gray; /* 배경색 설정 */
  margin: 40px auto 0; /* 페이지 중앙 정렬을 위해 margin을 auto로 설정하고 위쪽에 300px 마진 추가 */
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
