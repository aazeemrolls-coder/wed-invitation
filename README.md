# Wedding Invitation Website

A responsive, single-page React wedding invitation built with Vite, GSAP, Framer Motion, Lenis and Lucide icons.

## Requirements
- Node.js 20+
- npm

## Install and run
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Customize the wedding
Edit:
- `src/data/weddingData.js` for names, date, venue, contact and theme.
- `src/data/eventsData.js` for ceremony schedule.
- Replace images in `public/assets/images/` and update paths in `weddingData.js` or section components.

## Netlify
This project includes `netlify.toml` and `public/_redirects`.
- Build command: `npm run build`
- Publish directory: `dist`

## Notes
- The opening screen starts with a "Reveal invitation" button. This avoids unexpected audio or motion before a guest interacts.
- Music is optional and starts only after the guest presses the music control. Add an audio file at `public/assets/music/wedding.mp3` or change `musicSrc` in `weddingData.js`.
- Replace all sample names, dates, addresses, phone numbers and image assets before publishing.