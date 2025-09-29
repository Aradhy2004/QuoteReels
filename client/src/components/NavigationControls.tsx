import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onPlayPause: () => void;
  isPlaying: boolean;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

export default function NavigationControls({
  onPrevious,
  onNext,
  onPlayPause,
  isPlaying,
  canGoPrevious,
  canGoNext
}: NavigationControlsProps) {
  return (
    <>
      {/* Invisible tap zones for mobile */}
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="absolute left-0 top-0 h-full w-1/3 z-10 opacity-0 cursor-pointer disabled:cursor-not-allowed"
        data-testid="button-previous-zone"
        aria-label="Previous quote"
      />
      
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="absolute right-0 top-0 h-full w-1/3 z-10 opacity-0 cursor-pointer disabled:cursor-not-allowed"
        data-testid="button-next-zone"
        aria-label="Next quote"
      />

      {/* Visible controls for desktop */}
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="bg-background/20 backdrop-blur-sm hover:bg-background/40"
          data-testid="button-previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onPlayPause}
          className="bg-background/20 backdrop-blur-sm hover:bg-background/40"
          data-testid="button-play-pause"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={!canGoNext}
          className="bg-background/20 backdrop-blur-sm hover:bg-background/40"
          data-testid="button-next"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}