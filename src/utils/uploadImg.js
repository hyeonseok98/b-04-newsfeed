import supabase from "../supabase/supabaseClient";

const uploadImg = async (imgFile, userId, postId = null, imgStorage) => {
  const filePath = `${userId}/${postId}/${imgFile.name}`;

  // 캐시 저장시간: 30분, 중복 업로드 금지
  const { error } = supabase.storage.from(imgStorage).upload(filePath, imgFile, {
    cacheControl: "1800",
    upsert: false,
  });

  if (error) {
    console.error(error);
  }

  const url = supabase.storage.from(imgStorage).getPublicUrl(filePath);

  return url;
};

export default uploadImg;
