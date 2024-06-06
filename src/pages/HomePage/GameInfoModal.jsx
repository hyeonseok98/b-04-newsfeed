import styled from "styled-components";

const GameInfoModal = ({ onClose, data }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{data.title}</h2>
        <ModalImage src={data.image_url} alt={data.title} />
        <h3>{data.description}</h3>
        <hr />
        <p>🎥장르: {data.genre}</p>
        <p>🕹️기종: {data.platform}</p>
        <p>💿🗃️배급: {data.distribution}</p>
        <p>🏆메타크리틱점수:{data.rating}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default GameInfoModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(192, 188, 188, 0.5); /* 배경을 뿌옇게 설정합니다. */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 모달의 z-index를 설정합니다. 안하면 가려짐 */
`;

const ModalContent = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 800px;
  max-width: 100%; /* 최대 너비 추가 */

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h3 {
    padding-top: 20px;
    margin-left: 85px;
    margin-right: 85px;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5;
  }
  hr {
    margin-top: 20px;
  }
  p {
    padding: 5px;
    font-size: 1.8rem;
    margin-top: 10px;
    text-align: left;
    padding-left: 80px;
  }

  /* 미디어 쿼리 추가 */
  @media (max-width: 768px) {
    width: 90%; /* 화면 크기가 작을 때 너비 조정 */
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
`;
