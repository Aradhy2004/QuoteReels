# Quote Viewer

A modern, interactive quote viewer application built with React and Express. Display inspirational quotes in a beautiful slideshow format with navigation controls, auto-play functionality, and social interaction features.

## Features

### Core Functionality
- **Interactive Quote Display**: Browse through a collection of inspirational quotes from famous authors
- **Auto-Play Mode**: Automatically advance through quotes with 8-second intervals
- **Navigation Controls**: Previous/next buttons and keyboard navigation (arrow keys, spacebar)
- **Progress Indicator**: Visual progress bar showing current position in the quote collection
- **Like System**: Heart button to like your favorite quotes
- **Share Functionality**: Share quotes with others

### User Experience
- **Keyboard Navigation**: 
  - Left/Right arrow keys for navigation
  - Spacebar to play/pause auto-play mode
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Dark/Light Mode**: Theme support for different viewing preferences

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Wouter** - Lightweight routing
- **TanStack Query** - Server state management
- **Framer Motion** - Smooth animations

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type safety on the backend
- **Drizzle ORM** - Type-safe database toolkit
- **Zod** - Schema validation
- **In-memory Storage** - Development data persistence

### Development Tools
- **ESBuild** - Fast JavaScript bundler
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the development URL (typically `http://localhost:5000`)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   ├── QuoteViewer.tsx    # Main quote viewer component
│   │   │   ├── QuoteCard.tsx      # Individual quote display
│   │   │   ├── NavigationControls.tsx  # Navigation buttons
│   │   │   ├── ProgressIndicator.tsx   # Progress bar
│   │   │   ├── LikeButton.tsx     # Like functionality
│   │   │   └── ShareButton.tsx    # Share functionality
│   │   ├── pages/         # Application pages
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   └── App.tsx        # Main application component
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared code between frontend and backend
│   └── schema.ts         # Database schemas and types
└── package.json          # Project dependencies and scripts
```

## Key Components

### QuoteViewer
The main component that orchestrates the quote viewing experience:
- Manages current quote state
- Handles auto-play functionality
- Processes keyboard navigation
- Coordinates like system

### Quote Navigation
- **Previous/Next**: Navigate through the quote collection
- **Play/Pause**: Toggle auto-play mode
- **Progress Indicator**: Shows current position (X of Y quotes)

### Social Features
- **Like Button**: Animated heart with like counter
- **Share Button**: Share quotes via Web Share API or copy to clipboard

## Data Structure

Each quote contains:
```typescript
interface Quote {
  id: string;
  text: string;
  author: string;
  book: string;
  isLiked?: boolean;
}
```

## Future Enhancements

The application is designed with extensibility in mind. Potential future features include:

- **Database Integration**: Replace in-memory storage with persistent database
- **User Authentication**: Allow users to create accounts and save liked quotes
- **Quote Collections**: Organize quotes by themes, authors, or custom collections
- **Search Functionality**: Find quotes by author, content, or source
- **Admin Panel**: Add, edit, and manage quotes
- **Social Features**: User profiles, quote comments, and sharing
- **API Integration**: Connect to external quote services
- **Offline Support**: Progressive Web App capabilities

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Quote content from various famous authors and books
- Built with modern web technologies and best practices
- Inspired by quote sharing platforms and reading applications