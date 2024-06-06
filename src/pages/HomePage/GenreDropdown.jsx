import styled from "styled-components";

const GenreDropdown = ({ onGenreSelect }) => {
  const genres = ["전체", "action", "rpg", "horror", "fps", "3인칭", "adventure", "openworld"];

  const handleChange = (event) => {
    onGenreSelect(event.target.value);
  };

  return (
    <StGenreDropdown>
      <select onChange={handleChange}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </StGenreDropdown>
  );
};

export default GenreDropdown;

const StGenreDropdown = styled.div`
  select {
    margin-top: 10px;
    margin-left: 210px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #ffbf00;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #e6b800;
    }

    option {
      color: black;
    }
  }
`;
