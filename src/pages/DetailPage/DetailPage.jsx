import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import defaultProfile from "../../assets/images/default-profile.jpg";
import useFetchPosts from "../../hooks/db/useFetchPosts";
import timeFormatter from "../../utils/timeFormatter";
import Comments from "./Comments/Comments";
import Follow from "../../components/Follow/Follow";

const DetailPage = () => {
  const { id: POST_ID } = useParams();
  const { posts, loading } = useFetchPosts(POST_ID);
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    if (posts?.contents) {
      setSanitizedHTML(DOMPurify.sanitize(posts?.contents, { ALLOWED_ATTR: ["style", "class"] }));
    }
  }, [posts]);

  if (loading) return <div>Loading...</div>;

  const userIdString = localStorage.getItem("user");
  const userIdJSON = JSON.parse(userIdString);
  const userId = userIdJSON ? [userIdJSON.id] : null;

  const targetUserId = "4b94a233-a41b-4023-a765-8fe506dc74aa";

  return (
    <Container>
      <Article>
        <Title>{posts.title}</Title>
        <Subtitle>
          <div>
            <span>{posts.nickname} </span>· <span>{timeFormatter(posts.created_at)}</span>
          </div>

          {userId && <Follow userId={userId} targetUserId={targetUserId} />}
        </Subtitle>

        {typeof window !== "undefined" && <Content dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />}

        <UserInfoContainer>
          <UserInfoWrapper>
            <ProfileImage src={defaultProfile} alt="User profile" />
            <span>{posts.nickname}</span>
          </UserInfoWrapper>

          {userId && <Follow userId={userId} targetUserId={targetUserId} />}
        </UserInfoContainer>
        <Comments postId={POST_ID} />
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
  color: var(--color-black-40);
  margin: 10px 0px 20px 0;
  text-align: start;

  span {
    &:nth-child(1) {
      color: var(--black);
      font-weight: 600;
    }
    &:nth-child(2) {
      font-size: 1.4rem;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
  font-size: 1.8rem;
  line-height: 1.5;
  text-align: left;

  strong {
    font-weight: bold;
  }

  .ql-size-small {
    font-size: 0.75rem;
  }

  .ql-size-large {
    font-size: 1.5rem;
  }

  .ql-size-huge {
    font-size: 2.5rem;
  }

  .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  .ql-align-justify {
    text-align: justify;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  margin: 40px 0;
  border-bottom: 1px solid var(--color-black-20);
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;
