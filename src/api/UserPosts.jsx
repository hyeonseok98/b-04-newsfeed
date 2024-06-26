import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useFetchAllPosts from "../hooks/db/useFetchAllPosts";
import useInfinityScroll from "../hooks/useInfinityScroll"; // useInfinityScroll 훅 추가
import { filterDataByQuery } from "../utils/filterDataByQuery";

const UserPosts = ({ searchQuery, sortBy }) => {
  const navigate = useNavigate();
  const { posts, loading } = useFetchAllPosts();
  const [visiblePosts, setVisiblePosts] = useState([]);

  // 필터링된 데이터를 상태에 저장
  const filteredData = useMemo(() => {
    return filterDataByQuery(posts, searchQuery);
  }, [posts, searchQuery]);

  useEffect(() => {
    let sortedData = filteredData;

    if (sortBy === "latest") {
      sortedData = sortedData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    setVisiblePosts(sortedData.slice(0, 8)); // 초기에 8개의 포스트만 보이도록 설정
  }, [filteredData, sortBy]);

  // 무한 스크롤 이벤트 핸들러
  useInfinityScroll(() => {
    setVisiblePosts((prevVisiblePosts) => {
      const nextVisiblePosts = posts.slice(0, prevVisiblePosts.length + 8);
      return nextVisiblePosts;
    });
  });

  if (loading) return <div>Loading...</div>;

  const handleMoveDetailPage = (postId) => {
    navigate(`/detail/${postId}`);
  };

  return (
    <StFetchList>
      {visiblePosts.length > 0 ? (
        visiblePosts.map((post) => (
          <StCard key={post.id} onClick={() => handleMoveDetailPage(post.id)}>
            <h2>{post.title}</h2>
            <h4>{post.nickname}</h4>
            {post.img && <img src={post.img} alt={post.title} />}
            <h3>{post.description}</h3>
          </StCard>
        ))
      ) : (
        <p>글이 없습니다</p>
      )}
    </StFetchList>
  );
};

export default UserPosts;

const StFetchList = styled.div`
  margin-top: -10px;
  margin-bottom: 150px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;

const StCard = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-black-50);
  box-shadow: 0 2px 4px var(--color-black-70);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 2rem;
  text-align: left;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(odd) {
    margin-top: 50px;
  }

  img {
    width: calc(100% - 10px);
    border-radius: 8px;
    aspect-ratio: 2 / 1.5;
    object-fit: fill;
    margin: 10px 0;
    background-color: var(--white);
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  h2,
  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--white);
    padding: 10px;
  }

  h3 {
    height: 150px;
    padding: 10px 0;
    margin-left: 5px;
    font-size: 1.6rem;
    line-height: 1.66;
    color: var(--white);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
  }

  h4 {
    font-size: 1.4rem;
  }
`;
