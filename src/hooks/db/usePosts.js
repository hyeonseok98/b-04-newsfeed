import supabase from "../../supabase/supabaseClient";

const usePosts = () => {
  const createPost = async (post) => {
    const { error } = await supabase.from("post").insert([post]);
    if (error) {
      console.error("Create post error:", error);
    }
  };

  const updatePost = async (post_id, newUpdates) => {
    const { error } = await supabase.from("post").update(newUpdates).eq("post_id", post_id);
    if (error) {
      console.error("Update post error:", error);
    }
  };

  const deletePost = async (post_id) => {
    const { error } = await supabase.from("post").delete().eq("post_id", post_id);
    if (error) {
      console.error("Delete post error:", error);
    }
  };

  return {
    createPost,
    updatePost,
    deletePost,
  };
};

export default usePosts;
