// import { useEffect, useState } from "react";

// const Follow = ({ userId, targetUserId }) => {
//   const [isFollowing, setIsFollowing] = useState(false);

//   useEffect(() => {
//     checkFollowStatus();
//   }, [userId, targetUserId]); // userId와 targetUserId가 변경될 때마다 팔로우 상태를 확인합니다.

//   const checkFollowStatus = async () => {
//     const { data, error } = await supabase
//       .from("follows")
//       .select("*")
//       .eq("follower_id", userId)
//       .eq("following_id", targetUserId); // 필드 이름 유지

//     if (error) {
//       console.error("Error fetching follow status:", error);
//     } else {
//       setIsFollowing(data.length > 0);
//     }
//   };

//   const handleFollow = async () => {
//     if (isFollowing) {
//       // 언팔로우 로직
//       const { error } = await supabase
//         .from("follows")
//         .delete()
//         .eq("follower_id", userId)
//         .eq("following_id", targetUserId); // 필드 이름 유지

//       if (error) {
//         console.error("Error unfollowing:", error);
//       } else {
//         setIsFollowing(false);
//       }
//     } else {
//       // 팔로우 로직
//       const { data, error } = await supabase
//         .from("follows")
//         .insert([{ follower_id: userId, following_id: targetUserId }]); // 필드 이름 유지

//       if (error) {
//         console.error("Error following:", error);
//         console.error("Supabase insert error data:", data); // 추가된 로그
//       } else {
//         console.log("Follow success:", data); // 추가된 로그
//         setIsFollowing(true);
//       }
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleFollow}>{isFollowing ? "Unfollow" : "Follow"}</button>
//     </div>
//   );
// };

// export default Follow;

// 콘솔이 더러워져서 잠시 주석 했습니다
