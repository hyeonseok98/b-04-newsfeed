import { useEffect, useState } from "react";
import styled from "styled-components";
import useFind from "../hooks/useFind"; // useSearch로 이름 지은 훅이 임포트시에 에러나서 바꿨습니다 //
import supabase from "../supabase/supabaseClient";
import Pagination from "./../components/Pagination";

const GameRankFetchData = ({ searchQuery }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Test_best100game")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) {
        console.error("Error fetching data: ", error);
      } else {
        setGames(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredGames = useFind(games, searchQuery);
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGames.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <div>Loading...</div>;
  }

  const showRank = searchQuery === "";

  return (
    <StContainer>
      <StFetchGameList>
        {currentItems.length > 0 ? (
          currentItems.map((game, index) => (
            <StGameCard key={game.id}>
              {showRank && <Rank>{indexOfFirstItem + index + 1}</Rank>}
              {game.image_url && <img src={game.image_url} alt={game.title} />}
              <h2>{game.title}</h2>
            </StGameCard>
          ))
        ) : (
          <div>No games found</div>
        )}
      </StFetchGameList>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </StContainer>
  );
};

export default GameRankFetchData;

const StContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StFetchGameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const StGameCard = styled.div`
  background-color: #2a2829;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(25% - 20px);
  box-sizing: border-box;
  text-align: left;
  position: relative; /* 랭킹 번호 위치를 위한 상대적 위치 설정 */
  text-overflow: ellipsis;
  white-space: nowrap;

  img {
    width: 100%;
    border-radius: 8px;
    aspect-ratio: 2 / 1.5;
    object-fit: cover;
  }

  h2,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #ffffff;
    font-size: 20px;
    margin-top: 12px;
    font-weight: bold;
  }

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    white-space: normal;
    color: #ffffff;
  }
`;

const Rank = styled.div`
  position: absolute;
  top: 5px;
  left: 3px;
  font-size: 30px;
  color: #ffffff;
  text-shadow: 0px 0px 20px #000000;
  font-weight: bold;
  letter-spacing: -1.2px;
`;
