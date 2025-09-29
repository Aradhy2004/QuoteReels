interface ProgressIndicatorProps {
  currentIndex: number;
  total: number;
}

export default function ProgressIndicator({ currentIndex, total }: ProgressIndicatorProps) {
  return (
    <div className="absolute top-4 left-4 right-16 z-20">
      <div className="flex gap-1">
        {Array.from({ length: total }, (_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              index <= currentIndex 
                ? "bg-primary" 
                : "bg-background/30"
            }`}
            data-testid={`progress-bar-${index}`}
          />
        ))}
      </div>
    </div>
  );
}