import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface LikeButtonProps {
  isLiked: boolean;
  onLike: () => void;
  likeCount?: number;
}

export default function LikeButton({ isLiked, onLike, likeCount = 0 }: LikeButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    setIsAnimating(true);
    onLike();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleLike}
      className="relative"
      data-testid="button-like"
    >
      <motion.div
        animate={{
          scale: isAnimating ? [1, 1.3, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <Heart
          className={`h-6 w-6 transition-colors duration-200 ${
            isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"
          }`}
        />
      </motion.div>
      {likeCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full px-1 min-w-[1rem] h-4 flex items-center justify-center">
          {likeCount > 999 ? '999+' : likeCount}
        </span>
      )}
    </Button>
  );
}