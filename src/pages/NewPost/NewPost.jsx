import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomToolbar from "./CustomToolBar/CustomToolBar";

const formats = [
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

function NewPost() {
  const [contents, setContents] = useState("");
  const quillRef = useRef(null);
  const titleRef = useRef(null);
  const navigator = useNavigate();

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
    if (quillRef.current) {
      console.log(quillRef.current.getEditor().getText()); // 테스트용 console.log
    }
  };

  const handleGoBack = () => {
    navigator("/");
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
            formats={formats}
            value={contents}
            onChange={setContents}
            theme="snow"
            placeholder="내용을 입력해주세요"
          />
        </ContentWrapper>
        <ButtonWrapper>
          <button onClick={handleGoBack}>이전</button>
          <button>작성완료</button>
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
