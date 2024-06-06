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
    onSearch(query);
  };

  return (
    <StSearchContainer>
      <input type="text" placeholder="검색" value={query} onChange={handleInputChange} />
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
    font-size: 15px;
    outline: none;
  }

  button {
    padding: 5px 24px;
    border: none;
    border-radius: 25px;
    background-color: #ffbf00;
    color: #ffffff;
    cursor: pointer;
    flex-shrink: 0;
    font-size: 15px;
    font-weight: bold;
    transition: 0.4s;

    &:hover {
      background-color: #ffcf3e;
    }
  }
`;
