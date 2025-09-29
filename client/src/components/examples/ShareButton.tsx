import ShareButton from '../ShareButton';
import { Toaster } from "@/components/ui/toaster";

export default function ShareButtonExample() {
  const mockQuote = {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    book: 'Stanford Commencement Address'
  };

  return (
    <>
      <div className="h-screen bg-background flex items-center justify-center">
        <ShareButton quote={mockQuote} />
      </div>
      <Toaster />
    </>
  );
}