import { useCallback, useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";

// userId: 게시글 작성자의 닉네임, 작성 시간을 알기 위해 필요
// postId: 해당 게시글 작성자의 게시글 목록 중 어떤 게시글인지 알기 위해 사용
const useFetchPosts = (postId) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("post").select("*").eq("id", postId).single();
      if (error) {
        console.error("Fetch posts error:", error);
      } else {
        setPosts(data);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
    setLoading(false);
  }, [postId]);

  useEffect(() => {
    if (postId) {
      fetchPosts();
    }
  }, [fetchPosts, postId]);

  return {
    posts,
    loading,
    fetchPosts,
  };
};

export default useFetchPosts;
