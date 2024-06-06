import { useState, useEffect } from "react";
import Follow from "../../components/Follow/Follow";
import { StContainer, StFeedList, StFeedContent, StFeedTop, StImageWrapper } from "./FeedPageStyle";

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

  const userIdString = localStorage.getItem("user");
  const userIdJSON = JSON.parse(userIdString);
  const userId = userIdJSON ? [userIdJSON.id] : null;

  const targetUserId = "4b94a233-a41b-4023-a765-8fe506dc74aa"; // 예시용 타겟 유저 ID

  return (
    <StContainer>
      <StImageWrapper>
        <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </StImageWrapper>
      <StFeedList>
        <div>최신글</div>
        <div>찜한글</div>
      </StFeedList>

      {userId && <Follow userId={userId} targetUserId={targetUserId} />}
      <StFeedContent>{/* 내용 */}</StFeedContent>

      <StFeedTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StFeedTop>
    </StContainer>
  );
};

export default FeedPage;
