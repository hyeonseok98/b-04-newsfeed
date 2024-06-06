import { Link } from "react-router-dom";
// import Follow from "../../components/Follow/Follow";
import { StContainer, StFeedHeader, StFeedList, StFeedContent, StFeedTop } from "./FeedPageStyle";

const FeedPage = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const userId = "b09457db-b561-4064-95ff-0bdc0f0f1681";
  // const targetUserId = "8cd6570c-63b1-412f-9cbb-2cc9db832dc8";

  return (
    <StContainer>
      <StFeedHeader>
        <div className="left-spacer" />
        <Link to="/" className="title">
          Gaming<span>Nerd</span>
        </Link>
        <div className="login-buttons">
          <button>글 쓰기</button>
          <button>로그아웃</button>
        </div>
      </StFeedHeader>

      <StFeedList>
        <div>최신글</div>
        <div>찜한글</div>
      </StFeedList>
      {/* <Follow userId={userId} targetUserId={targetUserId} /> */}
      <StFeedContent>{/* 내용 */}</StFeedContent>

      <StFeedTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StFeedTop>
    </StContainer>
  );
};

export default FeedPage;
