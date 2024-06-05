import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import usePosts from "../../hooks/db/usePosts";
import CustomToolbar from "./CustomToolBar/CustomToolBar";

const FORMATS = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "color",
  "background",
  "size",
];

const USER_ID = "b7597b6f-8cb9-4965-a8eb-4d2fb416f3c5";

function NewPost() {
  const navigator = useNavigate();
  const { createPost } = usePosts();

  const [contents, setContents] = useState("");
  const quillRef = useRef(null);
  const titleRef = useRef(null);
  const url = useParams();

  console.log(url);
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
      },
    };
  }, []);

  const handleResizeHeight = () => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = titleRef.current.scrollHeight + "px";
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!quillRef.current || !titleRef.current.value) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const title = titleRef.current.value;
    const content = quillRef.current.getEditor().getText();
    // createPost({ user_id: USER_ID, title, contents });
    // console.log(title, content, contents);
    navigator("/write/preview");
  };

  const handleGoBack = () => {
    if (window.confirm("정말 메인 페이지로 가시겠습니까? 컨텐츠는 저장되지 않습니다.")) {
      navigator("/");
    }
  };

  return (
    <Container>
      <StForm onSubmit={onSubmit}>
        <div>
          <TitleArea placeholder="제목을 입력하세요" ref={titleRef} onChange={handleResizeHeight} rows={1} />
          <hr />
        </div>
        <ContentWrapper>
          <CustomToolbar />
          <StyledReactQuill
            ref={(element) => {
              if (element !== null) {
                quillRef.current = element;
              }
            }}
            modules={modules}
            formats={FORMATS}
            value={contents}
            onChange={setContents}
            theme="snow"
            placeholder="내용을 입력해주세요"
          />
        </ContentWrapper>
        <ButtonWrapper>
          <button onClick={handleGoBack} type="button">
            이전
          </button>
          <button type="submit">작성완료</button>
        </ButtonWrapper>
      </StForm>
    </Container>
  );
}
export default NewPost;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
`;

const StForm = styled.form`
  width: 800px;
  font-size: 1.6rem;
`;

const TitleArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  margin-top: 48px;
  padding: 0;
  font-size: 3.6rem;
  font-weight: 600;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  margin: 20px 0;
`;

const StyledReactQuill = styled(ReactQuill)`
  width: 100%;
  height: 630px;

  & .ql-editor {
    font-family: inherit;
    font-size: inherit;
  }

  & .ql-editor strong {
    font-weight: bold;
  }

  & .ql-editor em {
    font-style: italic;
  }

  & .ql-editor u {
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 110px;
    margin-left: 10px;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:nth-child(1) {
      background-color: var(--color-black-10);
    }

    &:nth-child(2) {
      background-color: var(--secondary-color);
    }
  }
`;
