import supabase from "../../supabase/supabaseClient";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openModal } from "../../store/slices/authSlice";
import { setLoginUserInfo, setLoginUserPosts } from "../../store/slices/loginUserSlice";
import MyPageContent from "./components/MyPageContent";
import MyPageModal from "./components/MyPageEditModal";
import useAuthState from "../../hooks/useAuthState";

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUserId, setLoginUserId] = useState("");
  const [nicknames, setNicknames] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { isLoggedin } = useAuthState();
  const user = useSelector((state) => state.auth.user);

  const goBackLogin = () => {
    alert("로그인이 필요한 기능입니다.");
    navigate("/");
    dispatch(openModal());
  };

  useEffect(() => {
    if (!isLoggedin) {
      goBackLogin();
    }
    setLoginUserId(user.id);
    if (loginUserId) {
      const fetchLoginUserData = async () => {
        const { data, error } = await supabase.from("User").select("*").eq("id", loginUserId);
        if (error) {
          console.log(error);
        } else {
          dispatch(setLoginUserInfo(data[0]));
        }
      };
      fetchLoginUserData();

      const fetchLoginUserPostData = async () => {
        const { data, error } = await supabase.from("post").select("*").eq("user_id", loginUserId);
        if (error) {
          console.log(error);
        } else {
          dispatch(setLoginUserPosts(data));
        }
      };
      fetchLoginUserPostData();

      const fetchUserNicknames = async () => {
        const { data, error } = await supabase.from("User").select("nickname, id");
        if (error) {
          console.log(error);
        } else {
          setNicknames(data.filter((e) => e.id !== loginUserId).map((el) => el.nickname));
        }
      };
      fetchUserNicknames();
    }
  }, [user]);

  return (
    <>
      {isLoggedin && <MyPageContent setIsEditModalOpen={setIsEditModalOpen} />}
      {isEditModalOpen && (
        <MyPageModal setIsEditModalOpen={setIsEditModalOpen} nicknames={nicknames} loginUserId={loginUserId} />
      )}
    </>
  );
};

export default MyPage;
