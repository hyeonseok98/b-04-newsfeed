import { useRef } from "react";
import styled from "styled-components";
import useFetchPosts from "../../hooks/db/useFetchPosts";

const USER_ID = "b7597b6f-8cb9-4965-a8eb-4d2fb416f3c5";
const POST_ID = 9;

const DetailPage = () => {
  const { posts, loading } = useFetchPosts(USER_ID, POST_ID);
  const commentInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Article>
        <Title>{posts.title}</Title>
        <Subtitle>
          <div>
            <span>{posts.nickname} </span>· 약 14시간 전
          </div>
          <FollowButton>팔로우</FollowButton>
        </Subtitle>
        <Content dangerouslySetInnerHTML={{ __html: posts?.contents }} />

        <UserInfoContainer>
          <div>{posts.nickname}</div>
          <FollowButton>팔로우</FollowButton>
        </UserInfoContainer>
        <CommentContainer>
          <StForm onSubmit={handleSubmit}>
            <div>n개의 댓글</div>
            <textarea type="text" ref={commentInputRef} placeholder="댓글을 작성하세요"></textarea>
            <ButtonWrapper>
              <button>댓글 작성</button>
            </ButtonWrapper>
          </StForm>
        </CommentContainer>
      </Article>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: var(--color-black-10);
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 768px;
  background-color: var(--white);
  margin-top: 48px;
  padding: 48px 40px;
  row-gap: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  color: #777;
  margin: 10px 0px 20px 0;
  text-align: start;

  span {
    color: var(--black);
    font-weight: 600;
  }
`;

const FollowButton = styled.button`
  width: 96px;
  height: 32px;
  padding: 1px 6px;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-red-30);
  border: 1px solid var(--color-red-20);
  border-radius: 1.6rem;
  background-color: var(--white);
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
  font-size: 1.8rem;
  line-height: 1.5;
  text-align: left;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  margin: 20px 0;

  div {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

const CommentContainer = styled.section`
  width: 100%;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  div {
    font-size: 1.8rem;
    font-weight: 600;
  }

  textarea {
    width: 100%;
    max-width: 728px;
    height: 120px;
    padding: 20px;
    border: 1px solid var(--color-black-20);
    border-radius: 0.4rem;
    outline: none;
    resize: none;
    font-size: 1.6rem;
    line-height: 1.75;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 110px;
    height: 32px;
    padding: 0 2rem;
    border: none;
    border-radius: 0.4rem;
    background-color: var(--color-red-20);
    font-weight: 600;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
