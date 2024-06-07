import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import supabase from "../../../supabase/supabaseClient";
import { setLoginUserInfo } from "../../../store/slices/loginUserSlice";
import { BtnWrapper, CloseBtn, Modal, StForm } from "./MyPageModalStyle";

const MyPageModal = ({ setIsEditModalOpen, nicknames, loginUserId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUserInfo = useSelector((state) => state.loginUser.loginUserInfo);

  const handleEditUserProfile = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let nickname;
    let introduction;
    let password;
    if (nicknames.includes(formData.get("nickname"))) {
      alert("이미 사용중인 닉네임 입니다.");
      nickname = loginUserInfo.nickname;
    } else {
      nickname = formData.get("nickname");
    }
    if (formData.get("introduction").length > 60) {
      alert("자기소개는 60자를 넘을 수 없습니다.");
      introduction = loginUserInfo.introduction;
    } else {
      introduction = formData.get("introduction");
    }
    if (formData.get("password").includes(" ")) {
      alert("공백문자가 포함되어 있습니다.");
      password = loginUserInfo.password;
    } else {
      password = formData.get("password");
    }

    const updateUserProfile = async () => {
      const { data, error } = await supabase
        .from("User")
        .update({
          nickname,
          password,
          introduction,
        })
        .eq("id", loginUserId);
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    };

    updateUserProfile();
    dispatch(setLoginUserInfo({ nickname, password, introduction }));
    event.target.reset();
    setIsEditModalOpen(false);
  };

  return (
    <Modal>
      <p>프로필 수정</p>
      <CloseBtn onClick={() => setIsEditModalOpen(false)}>&times;</CloseBtn>
      <StForm onSubmit={handleEditUserProfile}>
        <div>
          <input type="text" defaultValue={loginUserInfo.nickname} name="nickname" placeholder="닉네임" />
        </div>
        <div>
          <input type="password" defaultValue={loginUserInfo.password} name="password" placeholder="비밀번호" />
        </div>
        <div>
          <input type="text" defaultValue={loginUserInfo.introduction} name="introduction" placeholder="자기소개" />
        </div>
        <BtnWrapper>
          <button type="submit">수정</button>
        </BtnWrapper>
      </StForm>
    </Modal>
  );
};

export default MyPageModal;
