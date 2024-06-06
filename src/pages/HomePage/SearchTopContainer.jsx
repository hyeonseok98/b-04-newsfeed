import { useState } from "react";
import styled from "styled-components";

const SearchTopContainer = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // 검색 입력값 변경 핸들러
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // 검색 버튼 클릭 핸들러
  const handleSearch = () => {
    if (!query.trim()) {
      alert("검색어를 입력해주세요");
      return;
    }
    onSearch(query);
  };

  // 엔터 키를 눌렀을 때 검색 버튼 클릭 핸들러
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <StSearchContainer>
      <input type="text" placeholder="검색" value={query} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <button onClick={handleSearch}>검색</button>
    </StSearchContainer>
  );
};

export default SearchTopContainer;

const StSearchContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 350px;

  input {
    padding: 0 22px;
    border-radius: 25px;
    height: 48px;
    width: 100%;
    box-sizing: border-box;
    font-size: 1.5rem;
    outline: none;
  }

  button {
    padding: 5px 24px;
    border: none;
    border-radius: 25px;
    background-color: var(--secondary-color);
    color: var(--white);
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1.5rem;
    font-weight: bold;
    transition: 0.4s;

    &:hover {
      background-color: var(--color-black-30);
    }
  }
`;
