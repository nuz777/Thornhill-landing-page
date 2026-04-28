# Thornhill - Official Fan Landing Page

## Description

Official fan landing page for the **Thornhill** band named "Lily & The Moon". This project was built with **semantic HTML5**, **modular CSS3**, and **vanilla JavaScript**, without external dependencies. The page showcases the band's identity, music catalog, upcoming events, multimedia section, and content gallery.

## Technologies Used

- **HTML5** - Semantic structure (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<table>`, lists)
- **CSS3** - Custom properties (CSS variables), Flexbox, CSS Grid, keyframe animations, media queries
- **JavaScript** - DOM manipulation for mobile menu and interactive functionality
- **Google Fonts** - "Bebas Neue" for headings and "Roboto" for body text

## Project Structure

```
Thornhill-landing-page/
├── index.html
├── README.md
├── .gitignore
│
├── src/
│   ├── css/
│   │   ├── index.css                 [MAIN ENTRY] Imports all stylesheets
│   │   ├── general.css               CSS variables, reset, and base styles
│   │   ├── header&navegation.css     Header, navigation, and hamburger menu
│   │   ├── hero.css                  Hero section with background image
│   │   ├── events.css                Events and concert table
│   │   ├── about.css                 Band information and members
│   │   ├── disco.css                 Discography and album grid
│   │   ├── media.css                 Multimedia section and videos
│   │   ├── footer.css                Footer
│   │   └── responsive.css            Media queries (tablet, mobile, small mobile)
│   │
│   └── js/
│       └── main.js                   Mobile menu toggle, carousel, scroll animations
│
└── public/
    └── images/
        └── hero.jpg                  Background image for hero section
```

### CSS Architecture

| File | Purpose | Type |
|------|---------|------|
| `general.css` | Global variables and reset | Base |
| `header&navegation.css` | Header and navigation | Component |
| `hero.css` | Main section | Section |
| `events.css` | Events and table | Section |
| `about.css` | Band information | Section |
| `disco.css` | Discography | Section |
| `media.css` | Multimedia | Section |
| `footer.css` | Footer | Section |
| `responsive.css` | Media queries | Utility |

## How to Run Locally

1. Download or clone the repository to your computer.
2. Make sure to maintain the folder structure.
3. Open `index.html` directly in your browser (Chrome, Firefox, Edge, Safari).
4. Done! No server or build process required.

## Key Features

- Responsive header with fixed navigation
- Hamburger menu for mobile devices
- Hero section with gradient overlay
- Events list with concert table
- About page with band information
- Responsive discography gallery
- Multimedia section with videos
- Song carousel with auto-play
- Smooth CSS animations
- Fully responsive design
- Scroll reveal animations

## Customization

### CSS Variables

Edit `src/css/general.css` to customize the theme:

```css
:root { 
    --color-bg: #050505;
    --color-bg-light: #0f0a0a;
    --color-bg-card: #1a0505;
    --color-accent: #a51515;
    --color-accent-soft: #8b0000;
    --color-text: #f5f5f5;
    --color-text-muted: #8a7b7b;
    --color-border: #3d0000;
    --color-ethereal: #ff2e2e;
    
    --font-title: 'Bebas Neue', cursive;
    --font-body: 'Roboto', sans-serif;
    --transition: all 0.3s ease;
}
```

### Color Palette

| Color | Value | Usage |
|-------|-------|-------|
| Background | `#050505` | Main background |
| Accent | `#a51515` | Highlight color |
| Text | `#f5f5f5` | Main text |
| Borders | `#3d0000` | Separators |

## Responsive Design

| Device | Width | Changes |
|--------|-------|---------|
| Desktop | ≥ 1024px | Full interface, multiple columns |
| Tablet | 768px - 1024px | Adapted grids, reduced fonts |
| Mobile | 480px - 768px | Hamburger menu, collapsible navigation |
| Small Mobile | < 480px | Vertical layout, compact elements |

All media queries are centralized in `src/css/responsive.css`

## JavaScript Functionality

Implemented in `src/js/main.js` without external libraries:

### Mobile Menu Toggle
- Activation on viewports < 768px
- Animation of hamburger lines
- Auto-close when clicking links

### Song Carousel
- Auto-play every 5 seconds
- Manual navigation with previous/next buttons
- Visual indicators (dots)

### Scroll Animations
- Elements animate when entering viewport
- Smooth transitions

**Technical Stack:**
- DOM manipulation with `querySelector`
- Efficient event listeners
- CSS animations for optimal performance
- Modular and commented code

## Notes

- Fan-made project for educational purposes
- Recommended images: minimum 1920x1080px in `public/images/`
- Styles organized modularly for easy maintenance
- Compatible with modern browsers (Chrome, Firefox, Safari, Edge)
- Performance optimized with CSS animations
- No external dependencies

## Development

### Add new section

1. Create CSS file in `src/css/new-section.css`
2. Import in `src/css/index.css`
3. Add media queries in `src/css/responsive.css`

### Modify global styles

- Edit variables in `src/css/general.css`
- Changes apply automatically across the site

## License

Educational project and frontend practice. Built with HTML5, CSS3, and vanilla JavaScript.
