import supabase from "../../../supabase/supabaseClient";
import { useSelector } from "react-redux";
import {
  BtnWrapper,
  Container,
  LiContentWrapper,
  Line,
  PostsSection,
  StDiv,
  StLi,
  UserInfoSection,
} from "./MyPageContentStyle";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyPageContent = ({ setIsEditModalOpen, loginUserId }) => {
  const navigate = useNavigate();
  const loginUserInfo = useSelector((state) => state.loginUser.loginUserInfo);
  const loginUserPosts = useSelector((state) => state.loginUser.loginUserPosts);
  const [usedPostId, setUsedPostId] = useState([]);

  useEffect(() => {
    const fetchCommentCount = async () => {
      const { data, error } = await supabase.from("comment").select("*");
      if (error) {
        console.log(error);
      } else {
        setUsedPostId(data.map((e) => e.post_id));
      }
    };
    fetchCommentCount();
  }, []);

  const handleDeletUser = () => {
    const deletUser = async () => {
      const { data, error } = await supabase.from("User").delete().eq("id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    };
    if (confirm("정말 탈퇴하시겠습니까?")) {
      deletUser();
      localStorage.clear();
      navigate("/");
    }
  };

  const commentCount = (id) => {
    let count = 0;
    for (let check of usedPostId) {
      if (id === check) {
        count++;
      }
    }
    return count;
  };

  return (
    <Container>
      <UserInfoSection>
        <StDiv>
          <h3>{loginUserInfo.nickname}</h3>
          <p>{loginUserInfo.introduction}</p>
        </StDiv>
        <BtnWrapper>
          <button onClick={handleDeletUser}>회원탈퇴</button>
          <button onClick={() => setIsEditModalOpen(true)}>프로필 수정</button>
        </BtnWrapper>
      </UserInfoSection>
      <Line></Line>
      <PostsSection>
        {loginUserPosts.map((post) => {
          return (
            <StLi
              key={post.id}
              onClick={() => {
                navigate(`/detail/${post.id}`);

              }}
            >
              <LiContentWrapper>
                <div>
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                </div>
                <div className="date">
                  <p>{post.created_at.slice(0, 10)}</p>
                  <p>댓글 {commentCount(post.id)}개</p>

                </div>
              </LiContentWrapper>
            </StLi>
          );
        })}
      </PostsSection>
    </Container>
  );
};

export default MyPageContent;
