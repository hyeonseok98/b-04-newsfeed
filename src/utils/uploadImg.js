import supabase from "../supabase/supabaseClient";

const uploadImg = async (imgFile, userId, imgStorage) => {
  const timestamp = new Date().getTime();
  const encodedFileName = encodeURIComponent(`${timestamp}-${imgFile.name}`);
  const filePath = `${userId}/${encodedFileName}`;

  // 캐시 저장시간: 30분, 중복 업로드(덮어쓰기) 금지
  const { error } = await supabase.storage.from(imgStorage).upload(filePath, imgFile, {
    cacheControl: "1800",
    upsert: false,
  });

  if (error) {
    console.error(error);
    return null;
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(imgStorage).getPublicUrl(filePath);

  return publicUrl;
};

export default uploadImg;
