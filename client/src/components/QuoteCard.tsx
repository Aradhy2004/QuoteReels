import { motion } from "framer-motion";

interface QuoteCardProps {
  quote: {
    id: string;
    text: string;
    author: string;
    book: string;
    isLiked?: boolean;
  };
  isActive: boolean;
}

export default function QuoteCard({ quote, isActive }: QuoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : 100,
        scale: isActive ? 1 : 0.95
      }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center"
      data-testid={`quote-card-${quote.id}`}
    >
      <div className="max-w-4xl mx-auto">
        <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed text-foreground mb-8">
          "{quote.text}"
        </blockquote>
        
        <div className="space-y-2">
          <p className="font-sans text-lg font-medium text-foreground" data-testid="text-author">
            {quote.author}
          </p>
          <p className="font-sans text-sm italic text-muted-foreground" data-testid="text-book">
            {quote.book}
          </p>
        </div>
      </div>
    </motion.div>
  );
}