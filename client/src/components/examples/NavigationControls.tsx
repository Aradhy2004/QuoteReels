import { useState } from "react";
import NavigationControls from '../NavigationControls';

export default function NavigationControlsExample() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalQuotes = 5;

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
    console.log('Previous triggered');
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(totalQuotes - 1, prev + 1));
    console.log('Next triggered');
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log('Play/Pause triggered:', !isPlaying);
  };

  return (
    <div className="h-screen bg-background relative flex items-center justify-center">
      <p className="text-center">Quote {currentIndex + 1} of {totalQuotes}</p>
      <NavigationControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        onPlayPause={handlePlayPause}
        isPlaying={isPlaying}
        canGoPrevious={currentIndex > 0}
        canGoNext={currentIndex < totalQuotes - 1}
      />
    </div>
  );
}