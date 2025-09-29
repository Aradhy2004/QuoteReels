import QuoteViewer from '../QuoteViewer';
import { Toaster } from "@/components/ui/toaster";

export default function QuoteViewerExample() {
  //todo: remove mock functionality
  const mockQuotes = [
    {
      id: '1',
      text: 'It is during our darkest moments that we must focus to see the light.',
      author: 'Aristotle',
      book: 'Nicomachean Ethics',
      isLiked: false
    },
    {
      id: '2',
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
      book: 'Stanford Commencement Address',
      isLiked: false
    },
    {
      id: '3',
      text: 'In the middle of difficulty lies opportunity.',
      author: 'Albert Einstein',
      book: 'The World As I See It',
      isLiked: false
    },
    {
      id: '4',
      text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      author: 'Winston Churchill',
      book: 'My Early Life',
      isLiked: false
    },
    {
      id: '5',
      text: 'The future belongs to those who believe in the beauty of their dreams.',
      author: 'Eleanor Roosevelt',
      book: 'Tomorrow Is Now',
      isLiked: false
    }
  ];

  return (
    <>
      <QuoteViewer quotes={mockQuotes} />
      <Toaster />
    </>
  );
}