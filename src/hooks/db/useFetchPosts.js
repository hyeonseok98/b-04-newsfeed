import { useCallback, useEffect, useState } from "react";
import supabase from "../../supabase/supabaseClient";

const useFetchPosts = (userId, postId) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("post").select("*").eq("user_id", userId).eq("id", postId).single();
      if (error) {
        console.error("Fetch posts error:", error);
      } else {
        setPosts(data);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
    setLoading(false);
  }, [userId, postId]);

  useEffect(() => {
    if (userId && postId) {
      fetchPosts();
    }
  }, [fetchPosts, userId, postId]);

  return {
    posts,
    loading,
    fetchPosts,
  };
};

export default useFetchPosts;
