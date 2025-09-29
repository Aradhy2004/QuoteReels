# Book Quote Shorts - Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by social media content platforms (Instagram Stories, TikTok) combined with reading app aesthetics (Kindle, Goodreads). This creates an engaging, swipeable experience that treats quotes as premium content.

## Core Design Principles
- **Quote-First Design**: Typography and readability are paramount
- **Minimal Distraction**: Clean interface that doesn't compete with content
- **Fluid Interaction**: Smooth, intuitive navigation mimicking social media reels
- **Literary Elegance**: Sophisticated aesthetic befitting book content

## Color Palette
**Dark Mode Primary (Default):**
- Background: 20 8% 12% (deep charcoal)
- Content Cards: 25 10% 18% (warm dark gray)
- Primary Text: 30 5% 92% (warm white)
- Secondary Text: 30 4% 65% (muted gray)
- Accent: 210 100% 70% (soft blue for interactions)

**Light Mode:**
- Background: 30 15% 96% (warm off-white)
- Content Cards: 0 0% 100% (pure white)
- Primary Text: 25 8% 15% (dark brown-black)
- Secondary Text: 25 6% 45% (warm gray)

## Typography
**Primary Font:** Crimson Text (Google Fonts) - serif for quotes, elegant and readable
**Secondary Font:** Inter (Google Fonts) - sans-serif for UI elements, author names
**Hierarchy:**
- Quote Text: 1.75rem (mobile) / 2.25rem (desktop), leading-relaxed
- Author Name: 1rem, font-medium
- Book Title: 0.875rem, italic, opacity-80
- UI Elements: 0.875rem, font-medium

## Layout System
**Spacing Units:** Tailwind 4, 6, 8, 12, 16 (consistent spacing rhythm)
**Container:** Full viewport height cards, centered content with 4-6 unit padding
**Mobile-First:** Vertical stack, thumb-friendly tap zones
**Desktop:** Maintain mobile proportions, center in viewport

## Component Library

### Quote Card
- Full-height container with centered quote
- Subtle shadow and rounded corners (rounded-lg)
- Quote text with generous line spacing
- Author/book info positioned at bottom
- Gradient overlay on background if using book cover images

### Navigation Controls
- Invisible tap zones (left/right 30% of screen)
- Optional floating arrow indicators on desktop
- Progress indicators at top (thin bars showing position in sequence)

### Social Actions
- Floating action bar at bottom right
- Heart icon for likes with micro-animation
- Share icon with simple modal/toast feedback
- Minimal, semi-transparent background

### Transitions
- Slide transitions for navigation (transform-x)
- Fade transitions for text changes
- Spring-based animations (duration-300, ease-out)
- Subtle scale effects for user interactions

## Images
**Background Treatment:** Optional subtle book cover images with heavy overlay (opacity-20) to maintain text readability. Keep images minimal - the focus should be on typography.

**No Large Hero Image:** This is a quote-focused application where each quote acts as its own "hero" moment.

## Responsive Behavior
- Mobile: Touch-friendly, full-screen quotes
- Tablet: Larger typography, maintain single-column
- Desktop: Keyboard navigation (arrow keys), mouse click zones
- All sizes: Auto-play toggle in settings

## Interaction Design
- **Gesture Support:** Swipe left/right on mobile, click zones on desktop
- **Auto-play:** Optional 8-second intervals with pause on interaction
- **Like Animation:** Heart scales and fills with color
- **Loading States:** Skeleton text blocks while loading new quotes
- **Error States:** Gentle message with retry option

This design creates an immersive, literature-focused experience that feels both modern and respectful of the content's intellectual nature.