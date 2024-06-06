import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import defaultProfile from "../../../assets/images/default-profile.jpg";
import useComments from "../../../hooks/db/useComments";
import supabase from "../../../supabase/supabaseClient";
import timeFormatter from "../../../utils/timeFormatter";

const Comments = ({ postId }) => {
  const { createComment, updateComment, deleteComment } = useComments();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState("");
  const commentRef = useRef();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("comment")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch comments error:", error);
    } else {
      setComments(data);
    }
    setLoading(false);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (commentRef.current.value.trim() === "") return;
    const newCommentData = {
      post_id: postId,
      user_id: user.id,
      nickname: user.nickname,
      comments: commentRef.current.value,
    };
    await createComment(newCommentData);
    commentRef.current.value = "";
    fetchComments();
  };

  const handleCommentEdit = (commentId, content) => {
    setEditingCommentId(commentId);
    setEditingContent(content);
  };

  const handleCommentUpdate = async (e, comment_Id) => {
    e.preventDefault();
    if (editingContent.trim() === "") return;
    await updateComment(comment_Id, { comments: editingContent });
    setEditingCommentId(null);
    setEditingContent("");
    fetchComments();
  };

  const handleCommentDelete = async (commentId) => {
    await deleteComment(commentId);
    fetchComments();
  };

  return (
    <CommentContainer>
      <CommentForm onSubmit={handleCommentSubmit}>
        <textarea
          ref={commentRef}
          placeholder={user ? "댓글을 작성하세요" : "로그인 후 사용 가능합니다."}
          disabled={!user}
        />
        <ButtonWrapper>
          <button type="submit">댓글 작성</button>
        </ButtonWrapper>
      </CommentForm>

      {loading ? (
        <div>Loading...</div>
      ) : (
        comments.map((comment) => (
          <CommentItem key={comment.comment_id}>
            <CommentHeader>
              <ProfileImage src={defaultProfile} alt="User profile" />
              <CommentInfo>
                <Nickname>{comment.nickname}</Nickname>
                <Date>{timeFormatter(comment.created_at)}</Date>
              </CommentInfo>
              {user && comment.user_id === user.id && (
                <EditWrapper>
                  <span onClick={() => handleCommentEdit(comment.comment_id, comment.comments)}>수정</span>
                  <span onClick={() => handleCommentDelete(comment.comment_id)}>삭제</span>
                </EditWrapper>
              )}
            </CommentHeader>

            {editingCommentId === comment.comment_id ? (
              <Form onSubmit={(e) => handleCommentUpdate(e, comment.comment_id)}>
                <textarea
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                  placeholder="수정할 댓글을 입력하세요"
                />
                <ButtonWrapper>
                  <button type="submit">수정 완료</button>
                  <button type="button" onClick={() => setEditingCommentId(null)}>
                    취소
                  </button>
                </ButtonWrapper>
              </Form>
            ) : (
              <>
                <CommentText>{comment.comments}</CommentText>
              </>
            )}
          </CommentItem>
        ))
      )}
    </CommentContainer>
  );
};

export default Comments;

const CommentContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  padding: 10px;
  border-bottom: 1px solid var(--color-black-20);
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Form = styled.form`
  width: 100%;

  textarea {
    width: 100%;
    max-width: 708px;
    height: 120px;
    padding: 10px;
    margin: 10px;
    border: 1px solid var(--color-black-20);
    border-radius: 0.4rem;
    outline: none;
    resize: none;
    font-size: 1.6rem;
    line-height: 1.75;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 6px;
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 10px 0;
`;

const EditWrapper = styled.div`
  display: flex;
  margin: 10px 0 30px 20px;
  gap: 10px;
  font-size: 1.4rem;
  color: var(--color-black-40);
  cursor: pointer;

  span {
    &:hover {
      font-weight: 600;
      color: var(--color-black-60);
    }
  }
`;

const Nickname = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0;
`;

const Date = styled.span`
  font-size: 1.2rem;
  color: #777;
`;

const CommentText = styled.p`
  font-size: 1.6rem;
  margin: 10px 0;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  textarea {
    width: 100%;
    max-width: 728px;
    height: 120px;
    padding: 10px;
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
  margin-bottom: 20px;

  button {
    width: 110px;
    height: 32px;
    padding: 0 2rem;
    border: none;
    border-radius: 0.4rem;
    margin-right: 18px;
    background-color: var(--secondary-color);
    font-weight: 600;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
