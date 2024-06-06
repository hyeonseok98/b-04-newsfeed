import { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import uploadImg from "../../utils/uploadImg";
import CustomToolbar from "./CustomToolBar/CustomToolBar";

const FORMATS = [
  "font",
  "header",
  "bold",
  "underline",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "align",
  "color",
  "background",
  "size",
  "image",
];

const USER_ID = "b7597b6f-8cb9-4965-a8eb-4d2fb416f3c5";

function NewPost() {
  const navigate = useNavigate();

  const quillRef = useRef(null);
  const titleRef = useRef(null);

  const [title, setTitle] = useState(() => sessionStorage.getItem("title") || "");
  const [contents, setContents] = useState(() => sessionStorage.getItem("contents") || "");

  // 새로고침 혹은 페이지를 떠날 때 작동하는 event(세션 스토리지 비움)
  useEffect(() => {
    const clearSessionStorage = () => {
      sessionStorage.removeItem("contents");
      sessionStorage.removeItem("title");
    };

    window.addEventListener("clearSessionStorage", clearSessionStorage);

    return () => {
      window.removeEventListener("clearSessionStorage", clearSessionStorage);
    };
  }, []);

  const imageHandler = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const imageUrl = await uploadImg(file, USER_ID, null, "images");

      if (!imageUrl) {
        console.error("Error uploading image");
        return;
      }

      const publicUrl = imageUrl.data.publicUrl;
      console.log("Image URL: ", publicUrl);

      const quillEditor = quillRef.current.getEditor();
      let range = quillEditor.getSelection(); // 현재 커서 위치 파악

      if (!range) {
        range = {
          index: quillEditor.getLength(), // 커서 위치가 없으면 문서 끝에 삽입
          length: 0,
        };
      }

      console.log("Inserting image at range: ", range);

      quillEditor.insertEmbed(range.index, "image", publicUrl); // 올바른 URL 전달
      quillEditor.setSelection(range.index + 1, 0); // 커서를 이미지 다음으로 이동
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: "#toolbar",
        handlers: {
          image: imageHandler,
        },
      },

      clipboard: {
        matchVisual: false,
      },
    }),
    [],
  );

  const handleResizeHeight = () => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = titleRef.current.scrollHeight + "px";
    }
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    sessionStorage.setItem("title", value);
    handleResizeHeight();
  };

  const handleContentsChange = (value) => {
    setContents(value);
    sessionStorage.setItem("contents", value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!quillRef.current || !titleRef.current.value) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    navigate("/write/preview");
  };

  const handleGoBack = () => {
    if (window.confirm("정말 메인 페이지로 가시겠습니까? 컨텐츠는 저장되지 않습니다.")) {
      navigate("/");
    }
  };

  return (
    <Container>
      <StForm onSubmit={onSubmit}>
        <div>
          <TitleArea
            placeholder="제목을 입력하세요"
            ref={titleRef}
            value={title}
            onChange={handleTitleChange}
            rows={1}
          />
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
            onChange={handleContentsChange}
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
