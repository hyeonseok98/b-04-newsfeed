import { useState } from "react";
import GameRankFetchData from "../../api/GameRankFetchData";
import GenreDropdown from "../../components/GenreDropdown";
import SearchTopContainer from "../../components/SearchTopContainer";
import FakeArticle from "../../api/FakeArticle";
import { StCommunity, StHeader, StMain, StMoveTop, StNews, StFeedButton } from "./HomePageStyle";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // 검색 처리 함수
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // 장르 선택 함수
  const handleGenreSelect = (genre) => {
    if (genre === "전체") {
      setSearchQuery("");
    } else {
      setSearchQuery(genre);
    }
  };

  // 스크롤을 최상단으로 이동하는 함수
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StMain>
      <StHeader>
        <h1 className="title" onClick={handleScrollToTop}>
          Gaming<span>Nerd</span>
        </h1>
        <SearchTopContainer onSearch={handleSearch} />
        <div className="login-buttons">
          <button>로그인</button>
          <button>가입</button>
        </div>
      </StHeader>

      <StNews>
        <GenreDropdown onGenreSelect={handleGenreSelect} />

        <GameRankFetchData searchQuery={searchQuery} />
      </StNews>

      <StCommunity>
        <div className="search-MiddleContainer">
          <button>최신 글</button>
          <button>인기 글</button>
          <StFeedButton to="/feed">내 피드</StFeedButton>
        </div>
        <FakeArticle searchQuery={searchQuery} />
      </StCommunity>

      <StMoveTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StMoveTop>
    </StMain>
  );
};

export default HomePage;
