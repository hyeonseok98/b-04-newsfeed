import { useState, useEffect } from "react";
import { StContainer, StFeedContent, StFeedTop, StImageWrapper } from "./FeedPageStyle";

const FeedPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지 URL 배열
  const imageUrls = ["https://ifh.cc/g/WYf4A4.jpg", "https://ifh.cc/g/bRD8Hs.png", "https://ifh.cc/g/xFm0Hy.png"];

  // 이미지 변경 효과 설정
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000); // 10초마다 이미지 전환

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
