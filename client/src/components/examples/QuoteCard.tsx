import QuoteCard from '../QuoteCard';

export default function QuoteCardExample() {
  const mockQuote = {
    id: '1',
    text: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
    book: 'Nicomachean Ethics',
    isLiked: false
  };

  return (
    <div className="h-screen bg-background relative">
      <QuoteCard quote={mockQuote} isActive={true} />
    </div>
  );
}