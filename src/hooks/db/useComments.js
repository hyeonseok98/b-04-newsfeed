import supabase from "../../supabase/supabaseClient";

const useComments = () => {
  const createComment = async (comment) => {
    const { error } = await supabase.from("comment").insert([comment]);
    if (error) {
      console.error("Create comment error:", error);
    }
  };

  const updateComment = async (comment_id, newUpdates) => {
    const { error } = await supabase.from("comment").update(newUpdates).eq("comment_id", comment_id);
    if (error) {
      console.error("Update comment error:", error);
    }
  };

  const deleteComment = async (comment_id) => {
    const { error } = await supabase.from("comment").delete().eq("comment_id", comment_id);
    if (error) {
      console.error("Delete comment error:", error);
    }
  };

  return {
    createComment,
    updateComment,
    deleteComment,
  };
};

export default useComments;
