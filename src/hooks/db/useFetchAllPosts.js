import { useCallback, useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";

const useFetchAllPosts = (userId = null) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useFetchAllPosts() => 모든 게시글을 가져옴
  // useFetchAllPosts(userId) => userId에 맞는 게시글을 가져옴

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase.from("post").select("*");
      if (userId) {
        query = query.eq("user_id", userId);
      }

      const { data, error } = await query;
      if (error) {
        console.error("Fetch posts error:", error);
      } else {
        11;
        setPosts(data);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    fetchPosts,
  };
};

export default useFetchAllPosts;
