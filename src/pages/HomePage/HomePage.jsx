import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GameRankFetchData from "../../api/GameRankFetchData";
import UserPosts from "../../api/UserPosts";
import { setGameSortBy, setSortBy } from "../../store/slices/searchQuerySlice";
import GenreDropdown from "./GenreDropdown";

const HomePage = () => {
  const dispatch = useDispatch();
  const { searchQuery = "", gameSortBy = "", sortBy = null } = useSelector((state) => state.searchQuery || {});

  const handleGenreSelect = (genre) => {
    if (genre === "전체") {
      dispatch(setGameSortBy(""));
    } else {
      dispatch(setGameSortBy(genre));
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortByLatest = () => {
    dispatch(setSortBy("latest"));
  };

  return (
    <StMain>
      <StNews>
        <GenreDropdown onGenreSelect={handleGenreSelect} />

        <GameRankFetchData gameSortBy={gameSortBy} sortBy={sortBy} />
      </StNews>

      <StCommunity>
        <StSearchMiddleContainer>
          <button onClick={handleSortByLatest}>최신 글</button>

          <StFeedButton to="/feed">내 피드</StFeedButton>
        </StSearchMiddleContainer>

        <UserPosts searchQuery={searchQuery} sortBy={sortBy} />
      </StCommunity>

      <StMoveTop onClick={handleScrollToTop}>
        <button>↑</button>
      </StMoveTop>
    </StMain>
  );
};

export default HomePage;

const StMain = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StNews = styled.div`
  padding: 20px 20px 70px;
  background-color: var(--color-black-90);
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 4px var(--color-black-70);
  position: relative;
`;

const StCommunity = styled.div`
  padding-top: 45px;
  box-shadow: 0 2px 4px var(--color-black-10);
  width: 100%;
  max-width: 1320px;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StSearchMiddleContainer = styled.div`
  position: relative;
  left: 0px;
  right: 20px;
  display: flex;
  gap: 0px;

  button {
    height: 48px;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 20px;
    padding: 5px 25px;
    border: none;
    border-radius: 25px;
    background-color: var(--secondary-color);
    color: var(--white);
    cursor: pointer;

    &:hover {
      background-color: var(--color-black-30);
    }
  }
`;

const StMoveTop = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-red-40);
  border-radius: 50%;
  box-shadow: 0 2px 4px var(--color-black-10);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-red-30);
  }

  button {
    border: none;
    background: none;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;
  }
`;

export const StFeedButton = styled(Link)`
  height: 48px;
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
  padding: 0px 25px;
  border: none;
  border-radius: 25px;
  background-color: var(--secondary-color);
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--secondary-color);
  }
`;
