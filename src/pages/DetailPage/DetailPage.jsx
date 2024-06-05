import { useRef } from "react";
import styled from "styled-components";
import useFetchPosts from "../../hooks/db/useFetchPosts";

const USER_ID = "b7597b6f-8cb9-4965-a8eb-4d2fb416f3c5";
const POST_ID = 7;

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
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra massa nec lectus consectetur, in
          pharetra orci feugiat. Cras tincidunt dui sem, non semper ligula cursus a. Pellentesque condimentum venenatis
          felis, et vehicula ipsum varius eu. Aenean iaculis pretium justo, scelerisque malesuada est ultrices at.
          Suspendisse potenti. Nunc ultricies justo eu purus sollicitudin tempus. Pellentesque sagittis eros sit amet
          est pellentesque lobortis. Etiam vehicula turpis sem, quis luctus nisi euismod vel. Cras blandit enim nec dui
          posuere varius. Curabitur ultricies felis non lacus pellentesque, ac vehicula quam fringilla. Mauris eget sem
          arcu. Proin euismod eu elit quis feugiat. Nullam viverra nunc vitae mauris dignissim, in varius nisi posuere.
          Morbi faucibus, risus a tincidunt varius, justo ante posuere nibh, in tempus nunc tortor id tortor. Nulla eu
          nulla sit amet elit porttitor posuere nec vitae mauris. Sed ultricies rhoncus velit vel rutrum. Nam
          sollicitudin, neque a semper efficitur, massa mi lacinia urna, nec accumsan tellus ipsum ac mi. Curabitur quam
          ipsum, pulvinar ac ultrices vel, cursus ut dui. Donec ac tellus pulvinar, laoreet arcu id, convallis magna.
          Donec dignissim purus vel urna semper pharetra. Nullam ut nunc quam. Proin tincidunt sit amet ipsum nec
          faucibus. Nam sed condimentum enim. Quisque molestie augue vitae tortor commodo, ut pulvinar diam venenatis.
          Curabitur nec gravida elit. Praesent sollicitudin hendrerit felis, id tempor nulla faucibus in. Maecenas
          accumsan tempus aliquam. Vivamus id cursus nunc, et pharetra orci. Quisque suscipit, urna ut consequat
          aliquet, eros orci lobortis sapien, sed dignissim lectus lectus a nulla. Integer condimentum nec ante at
          pulvinar. Proin eu feugiat sapien. Nam a ex id ipsum maximus consequat at eu ex. Sed ultricies consectetur
          orci. Phasellus accumsan urna a pulvinar volutpat. Vivamus ut pretium lorem. Donec molestie mattis ipsum, in
          commodo quam efficitur gravida. Morbi in bibendum leo. Aliquam sit amet nulla at massa viverra ultricies et at
          urna. Phasellus non nibh in diam sagittis malesuada eu nec magna. Nullam dignissim sodales gravida. Etiam eget
          lectus magna. Vivamus dignissim porta urna, a pretium ligula convallis vitae. Sed aliquam ligula eu nibh
          mollis, at accumsan quam vehicula. Praesent volutpat at leo vitae ultricies. In tempus, mi nec aliquam
          viverra, urna tellus porttitor leo, ac pretium sem purus at ante. Vivamus magna diam, mattis non lacus nec,
          posuere pharetra ligula. Phasellus auctor scelerisque urna, at faucibus metus eleifend sit amet. Etiam varius
          libero pharetra commodo elementum. Pellentesque diam nisi, volutpat in mi vel, sagittis sodales dolor. Fusce
          pretium, purus in porta condimentum, ex tellus faucibus sapien, vel eleifend nisi diam sit amet magna. Quisque
          et metus quis justo fringilla rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          ullamcorper ex auctor blandit tincidunt. Vivamus sed auctor nisi. Sed bibendum semper erat ac condimentum.
          Aenean faucibus metus a scelerisque varius. Vestibulum erat dui, pharetra nec ipsum id, euismod cursus dui.
          Nulla id tristique elit. Nam volutpat ornare velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Duis pharetra massa nec lectus consectetur, in pharetra orci feugiat. Cras tincidunt dui sem, non semper
          ligula cursus a. Pellentesque condimentum venenatis felis, et vehicula ipsum varius eu. Aenean iaculis pretium
          justo, scelerisque malesuada est ultrices at. Suspendisse potenti. Nunc ultricies justo eu purus sollicitudin
          tempus. Pellentesque sagittis eros sit amet est pellentesque lobortis. Etiam vehicula turpis sem, quis luctus
          nisi euismod vel. Cras blandit enim nec dui posuere varius. Curabitur ultricies felis non lacus pellentesque,
          ac vehicula quam fringilla. Mauris eget sem arcu. Proin euismod eu elit quis feugiat. Nullam viverra nunc
          vitae mauris dignissim, in varius nisi posuere. Morbi faucibus, risus a tincidunt varius, justo ante posuere
          nibh, in tempus nunc tortor id tortor. Nulla eu nulla sit amet elit porttitor posuere nec vitae mauris. Sed
          ultricies rhoncus velit vel rutrum. Nam sollicitudin, neque a semper efficitur, massa mi lacinia urna, nec
          accumsan tellus ipsum ac mi. Curabitur quam ipsum, pulvinar ac ultrices vel, cursus ut dui. Donec ac tellus
          pulvinar, laoreet arcu id, convallis magna. Donec dignissim purus vel urna semper pharetra. Nullam ut nunc
          quam. Proin tincidunt sit amet ipsum nec faucibus. Nam sed condimentum enim. Quisque molestie augue vitae
          tortor commodo, ut pulvinar diam venenatis. Curabitur nec gravida elit. Praesent sollicitudin hendrerit felis,
          id tempor nulla faucibus in. Maecenas accumsan tempus aliquam. Vivamus id cursus nunc, et pharetra orci.
          Quisque suscipit, urna ut consequat aliquet, eros orci lobortis sapien, sed dignissim lectus lectus a nulla.
          Integer condimentum nec ante at pulvinar. Proin eu feugiat sapien. Nam a ex id ipsum maximus consequat at eu
          ex. Sed ultricies consectetur orci. Phasellus accumsan urna a pulvinar volutpat. Vivamus ut pretium lorem.
          Donec molestie mattis ipsum, in commodo quam efficitur gravida. Morbi in bibendum leo. Aliquam sit amet nulla
          at massa viverra ultricies et at urna. Phasellus non nibh in diam sagittis malesuada eu nec magna. Nullam
          dignissim sodales gravida. Etiam eget lectus magna. Vivamus dignissim porta urna, a pretium ligula convallis
          vitae. Sed aliquam ligula eu nibh mollis, at accumsan quam vehicula. Praesent volutpat at leo vitae ultricies.
          In tempus, mi nec aliquam viverra, urna tellus porttitor leo, ac pretium sem purus at ante. Vivamus magna
          diam, mattis non lacus nec, posuere pharetra ligula. Phasellus auctor scelerisque urna, at faucibus metus
          eleifend sit amet. Etiam varius libero pharetra commodo elementum. Pellentesque diam nisi, volutpat in mi vel,
          sagittis sodales dolor. Fusce pretium, purus in porta condimentum, ex tellus faucibus sapien, vel eleifend
          nisi diam sit amet magna. Quisque et metus quis justo fringilla rhoncus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Duis ullamcorper ex auctor blandit tincidunt. Vivamus sed auctor nisi. Sed
          bibendum semper erat ac condimentum. Aenean faucibus metus a scelerisque varius. Vestibulum erat dui, pharetra
          nec ipsum id, euismod cursus dui. Nulla id tristique elit. Nam volutpat ornare velit.
        </Content>
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
