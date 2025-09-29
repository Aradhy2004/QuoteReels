import QuoteViewer from "@/components/QuoteViewer";

export default function Home() {
  //todo: remove mock functionality - replace with real data from API
  const quotes = [
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
    },
    {
      id: '6',
      text: 'Be yourself; everyone else is already taken.',
      author: 'Oscar Wilde',
      book: 'The Picture of Dorian Gray',
      isLiked: false
    },
    {
      id: '7',
      text: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
      author: 'Albert Einstein',
      book: 'Letters to Solovine',
      isLiked: false
    },
    {
      id: '8',
      text: 'A room without books is like a body without a soul.',
      author: 'Marcus Tullius Cicero',
      book: 'Letters to Atticus',
      isLiked: false
    },
    {
      id: '9',
      text: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
      author: 'Dr. Seuss',
      book: 'Oh, the Places You\'ll Go!',
      isLiked: false
    },
    {
      id: '10',
      text: 'So many books, so little time.',
      author: 'Frank Zappa',
      book: 'The Real Frank Zappa Book',
      isLiked: false
    }
  ];

  return <QuoteViewer quotes={quotes} />;
}