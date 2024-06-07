import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearchQuery } from "../store/slices/searchQuerySlice";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  // 검색 입력값 변경 핸들러
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // 검색 버튼 클릭 핸들러
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("검색어를 입력해주세요");
      return;
    }
    dispatch(setSearchQuery(query));
  };

  return (
    // <StSearchContainer>
    //   <input type="text" />
    //   <button onClick={handleSearch}>검색</button>
    // </StSearchContainer>
    <StForm onSubmit={handleSearch}>
      <input type="text" placeholder="검색" value={query} onChange={handleInputChange} />
      <button>
        <StIcon />
      </button>
    </StForm>
  );
};

export default SearchForm;

const StForm = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 35%;

  input {
    border: none;
    width: 100%;
    height: 33px;
    border-radius: 6px;
    background-color: var(--color-black-10);
    outline: none;
    padding: 0 10px;
  }
  @media (max-width: 860px) {
    & {
      position: static;
      transform: none;
    }
  }
  @media (max-width: 700px) {
    & {
      width: 230px;
      /* display: none; */
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
  button {
    background-color: transparent;
    border: none;
  }
`;
const StIcon = styled(FaSearch)`
  margin-left: 5px;
  font-size: 2rem;
`;
