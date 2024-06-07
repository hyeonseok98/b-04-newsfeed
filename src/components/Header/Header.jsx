import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Navbar from "./Navbar";
import AuthModal from "../Auth/AuthModal";
import { setSearchQuery } from "../../store/slices/searchQuerySlice";
import SearchForm from "../SearchForm";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isModalOpen = useSelector((state) => state.auth.isModalOpen);

  return (
    <StHeader>
      <Container>
        <Title onClick={() => navigate("/")}>Faker</Title>
        <SearchForm />

        <Navbar />
        {isModalOpen && <AuthModal open={isModalOpen} />}
      </Container>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1320px;
  height: 68px;
  padding: 0 1rem;
`;

const Title = styled.h1`
  position: relative;
  cursor: pointer;
  color: var(--primary-red-color);
  font-size: 4.5rem;
  font-weight: 900;
`;
