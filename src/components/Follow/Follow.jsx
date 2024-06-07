import { useState, useEffect } from "react";
import supabase from "../../supabase/supabaseClient";
import styled from "styled-components";

const Follow = ({ userId, targetUserId }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      checkFollowStatus();
    } else {
      setIsLoading(false);
    }
  }, [userId]);

  const checkFollowStatus = async () => {
    try {
      const { data, error } = await supabase.from("User").select("follow").eq("id", userId).single();

      if (error) {
        throw error;
      }

      const { follow } = data;
      setIsFollowing(follow && follow.includes(targetUserId));
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleFollow = async () => {
    try {
      const { data, error } = await supabase.from("User").select("follow").eq("id", userId).single();

      if (error) {
        throw error;
      }

      let updatedFollow = data.follow ? [...data.follow] : [];

      if (isFollowing) {
        // 언팔로우 로직
        const index = updatedFollow.findIndex((userId) => userId === targetUserId);
        if (index !== -1) {
          updatedFollow.splice(index, 1);
        }
      } else {
        // 팔로우 로직
        if (!updatedFollow.includes(targetUserId)) {
          updatedFollow = [targetUserId]; // 배열을 덮어쓰기
        }
      }

      const { error: updateError } = await supabase.from("User").update({ follow: updatedFollow }).eq("id", userId);

      if (updateError) {
        throw updateError;
      }

      setIsFollowing((prevIsFollowing) => !prevIsFollowing); // 팔로우 상태를 업데이트 이후의 상태로 변경
    } catch (error) {
      console.error("Error updating follow status:", error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <StyledButton onClick={handleFollow}>{isFollowing ? "언팔로우" : "팔로우"}</StyledButton>;
};

export default Follow;

const StyledButton = styled.button`
  width: 96px;
  height: 32px;
  padding: 1px 6px;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-red-30);
  border: 1px solid var(--color-red-20);
  border-radius: 1.6rem;
  background-color: var(--white);
  cursor: pointer;
`;
