import { useState } from "react";
import LikeButton from '../LikeButton';

export default function LikeButtonExample() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    console.log('Like toggled:', !isLiked);
  };

  return (
    <div className="h-screen bg-background flex items-center justify-center">
      <LikeButton isLiked={isLiked} onLike={handleLike} likeCount={likeCount} />
    </div>
  );
}