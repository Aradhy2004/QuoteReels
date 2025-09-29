import { useState, useEffect, useCallback } from "react";
import QuoteCard from "./QuoteCard";
import NavigationControls from "./NavigationControls";
import ProgressIndicator from "./ProgressIndicator";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";

interface Quote {
  id: string;
  text: string;
  author: string;
  book: string;
  isLiked?: boolean;
}

interface QuoteViewerProps {
  quotes: Quote[];
}

export default function QuoteViewer({ quotes }: QuoteViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [quoteLikes, setQuoteLikes] = useState<Record<string, boolean>>({});

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || quotes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= quotes.length - 1) {
          setIsPlaying(false); // Stop at the end
          return prev;
        }
        return prev + 1;
      });
    }, 8000); // 8 seconds per quote

    return () => clearInterval(interval);
  }, [isPlaying, quotes.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
    setIsPlaying(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(quotes.length - 1, prev + 1));
    setIsPlaying(false);
  }, [quotes.length]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleLike = useCallback(() => {
    const currentQuoteId = quotes[currentIndex]?.id;
    if (currentQuoteId) {
      setQuoteLikes(prev => ({
        ...prev,
        [currentQuoteId]: !prev[currentQuoteId]
      }));
      console.log('Quote liked:', currentQuoteId);
    }
  }, [quotes, currentIndex]);

  if (quotes.length === 0) {
    return (
      <div className="h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-lg">No quotes available</p>
      </div>
    );
  }

  const currentQuote = quotes[currentIndex];
  const currentQuoteIsLiked = quoteLikes[currentQuote.id] || false;

  return (
    <div className="h-screen bg-background relative overflow-hidden" data-testid="quote-viewer">
      {/* Progress Indicator */}
      <ProgressIndicator currentIndex={currentIndex} total={quotes.length} />

      {/* Navigation Controls */}
      <NavigationControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        onPlayPause={handlePlayPause}
        isPlaying={isPlaying}
        canGoPrevious={currentIndex > 0}
        canGoNext={currentIndex < quotes.length - 1}
      />

      {/* Social Actions */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-20">
        <LikeButton
          isLiked={currentQuoteIsLiked}
          onLike={handleLike}
          likeCount={currentQuoteIsLiked ? 1 : 0} // Mock count for demo
        />
        <ShareButton quote={currentQuote} />
      </div>

      {/* Quote Cards */}
      <div className="relative h-full">
        {quotes.map((quote, index) => (
          <QuoteCard
            key={quote.id}
            quote={quote}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      {/* Status indicator for auto-play */}
      {isPlaying && (
        <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm z-20">
          Auto-playing...
        </div>
      )}
    </div>
  );
}