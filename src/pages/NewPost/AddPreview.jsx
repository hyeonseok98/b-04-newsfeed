import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dropbox from "../../assets/images/dropbox.png";
import usePosts from "../../hooks/db/usePosts";
import uploadImg from "../../utils/uploadImg";

const TEXT_LENGTH = 150;
const USER_ID = "b7597b6f-8cb9-4965-a8eb-4d2fb416f3c5";
const NICK_NAME = "i'am tester";
const POST_ID = 16;

function AddPreview() {
  const navigate = useNavigate();
  const { createPost } = usePosts();

  const title = sessionStorage.getItem("title");
  const contents = sessionStorage.getItem("contents");

  const [isActive, setActive] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const [previewImgData, setPreviewImgData] = useState("");
  const [text, setText] = useState("");

  const handleToggleActive = () => setActive(!isActive);

  // 이미지 파일 drag&drop을 위한 함수
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setActive(false);

    const file = event.dataTransfer.files[0];
    setPreviewImgData(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImg(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPreviewImgData(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImg(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    if (value.length <= TEXT_LENGTH) {
      setText(value);
    }
  };

  const handleGoBack = () => {
    if (window.confirm("정말 뒤로 가시겠습니까? 컨텐츠는 저장되지 않습니다.")) {
      navigate(-1);
    }
  };

  const handlePublish = async () => {
    let imgUrl = null;
    if (previewImgData) {
      imgUrl = await uploadImg(previewImgData, USER_ID, POST_ID, "thumbnail");
    }

    await createPost({
      user_id: USER_ID,
      title,
      contents,
      nickname: NICK_NAME,
      img: imgUrl,
      description: text,
    });
    alert("작성한 글이 저장되었습니다.");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <StContainer>
        <PreviewSection>
          <StDiv>
            <div>
              <h2>포스트 미리보기</h2>
            </div>

            <ImgInputWrapper
              $isActive={isActive}
              onDragEnter={handleToggleActive}
              onDragLeave={handleToggleActive}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input type="file" onChange={handleFileChange} />
              {previewImg ? (
                <PreviewImage src={previewImg} alt="미리보기 이미지" />
              ) : (
                <DropImg src={dropbox} alt="이미지를 여기에 놓아주세요" />
              )}
              {!previewImg && <h4>클릭하거나 파일을 이곳에 드롭하세요.</h4>}
              {!previewImg && <h5>최대 5MB의 이미지 파일만 가능</h5>}
            </ImgInputWrapper>
            <TextAreaWraaper>
              <Textarea value={text} onChange={handleTextChange} placeholder="당신의 포스트를 짧게 소개해보세요." />
              <TextLengthCount>
                {text.length}/{TEXT_LENGTH}자
              </TextLengthCount>
            </TextAreaWraaper>

            <ButtonWrapper>
              <button onClick={handleGoBack} type="button">
                이전
              </button>
              <button onClick={handlePublish} type="submit">
                출간하기
              </button>
            </ButtonWrapper>
          </StDiv>
        </PreviewSection>
      </StContainer>
    </>
  );
}

export default AddPreview;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-black-10);
`;

const PreviewSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  min-height: 650px;
  padding: 20px;
  border-radius: 1rem;
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 600px;
  gap: 25px;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`;

const ImgInputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${({ $isActive }) => ($isActive ? "var(--color-black-20)" : "transparent")};
  border: 2px dashed ${({ $isActive }) => ($isActive ? "var(--secondary-color)" : "var(--color-black-30)")};
  cursor: pointer;

  input {
    display: none;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 24px;
  }

  h5 {
    font-size: 1.6rem;
  }
`;

const PreviewImage = styled.img`
  width: 101%;
  height: 100%;
`;

const DropImg = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 10px;
`;

const TextAreaWraaper = styled.div`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: calc(100% - 36px);
  height: 120px;
  padding: 20px;
  font-size: 1.6rem;
  line-height: 1.5;
  border: 1px solid var(--color-black-30);
  border-radius: 5px;
  resize: none;
  outline: none;
`;

const TextLengthCount = styled.div`
  font-size: 1.4rem;
  text-align: right;
  color: var(--color-black-50);
  margin-top: 10px;
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
