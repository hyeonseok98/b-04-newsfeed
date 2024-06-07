import { useEffect, useState } from "react";
import styled from "styled-components";

const FeedPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageUrls = ["https://ifh.cc/g/WYf4A4.jpg", "https://ifh.cc/g/bRD8Hs.png", "https://ifh.cc/g/xFm0Hy.png"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    // 컴포넌트가 unmount 될 때 clearInterval 호출하여 interval 제거
    return () => clearInterval(intervalId);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StContainer>
      <StImageWrapper>
        <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </StImageWrapper>

      <StFeedContent>{/* 내용 */}</StFeedContent>

      <StFeedTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StFeedTop>
    </StContainer>
  );
};

export default FeedPage;

const StContainer = styled.div`
  width: 1320px;
  margin: 0 auto;
`;

const StImageWrapper = styled.div`
  img {
    width: 100%;
    height: 300px;
  }
`;

const StFeedContent = styled.div`
  width: 1320px;
  height: 1500px;
  background-color: gray;
  margin: 40px auto 0;
`;

const StFeedTop = styled.div`
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
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }
`;
