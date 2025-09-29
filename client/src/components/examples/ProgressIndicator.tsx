import { useState, useEffect } from "react";
import ProgressIndicator from '../ProgressIndicator';

export default function ProgressIndicatorExample() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % total);
    }, 1000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="h-screen bg-background relative flex items-center justify-center">
      <p className="text-center">Progress Demo - Quote {currentIndex + 1} of {total}</p>
      <ProgressIndicator currentIndex={currentIndex} total={total} />
    </div>
  );
}