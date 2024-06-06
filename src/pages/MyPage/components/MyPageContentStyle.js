import styled from "styled-components";

export const Container = styled.div`
  width: 920px;
  padding: 30px;
  margin: 8rem auto;
`;
export const UserInfoSection = styled.section`
  background-color: var(--color-black-50);
  color: var(--secondary-color);
  border: 1px solid var(--black);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  padding-bottom: 3rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  button {
    display: flex;
    align-items: end;
    background-color: transparent;
    border: none;
    color: var(--color-black-30);
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const StDiv = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  p {
    color: var(--white);
    font-size: 1.6rem;
    line-height: 1.5;
    margin-left: 2rem;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--black);
  margin-top: 4rem;
  margin-bottom: 6rem;
`;

export const PostsSection = styled.ul`
  font-size: 2rem;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StLi = styled.li`
  background-color: var(--color-black-20);
  color: var(--black);
  width: 80%;
  height: 10rem;
  overflow: hidden;
  // border: 1px solid var(--black);
  border-radius: 16px;
  margin: 1.2rem;
  padding: 2rem 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0.6px 1px 2px 1px var(--color-black-30);
  &:hover {
    cursor: pointer;
    scale: 1.02;
  }
`;

export const LiContentWrapper = styled.div`
  h4 {
    font-weight: 600;
  }
  p {
    font-size: 1.8rem;
    line-height: 2.4rem;
    margin-top: 1.2rem;
    margin-left: 1.2rem;
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  div.date {
    display: flex;
    width: 20rem;
    margin-left: auto;
  }
  p {
    font-size: 1.6rem;
  }
`;
