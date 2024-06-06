import supabase from "../supabase/supabaseClient";

const uploadImg = async (imgFile, userId, postId = null, imgStorage) => {
  const timestamp = new Date().getTime();
  const encodedFileName = encodeURIComponent(`${timestamp}-${imgFile.name}`);
  const filePath = postId ? `${userId}/${postId}/${encodedFileName}` : `${userId}/${encodedFileName}`;

  // 캐시 저장시간: 30분, 중복 업로드(덮어쓰기) 금지
  const { error } = await supabase.storage.from(imgStorage).upload(filePath, imgFile, {
    cacheControl: "1800",
    upsert: false,
  });

  if (error) {
    console.error(error);
    return null;
  }

  const url = supabase.storage.from(imgStorage).getPublicUrl(filePath);

  return url;
};

export default uploadImg;
