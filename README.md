# Maaku — DTC Video Editor Portfolio

Dark, cinematic single-page portfolio built with Vite, React, TypeScript and Framer Motion.
The work section plays the 14 real YouTube videos from Maaku's first portfolio, with local
thumbnail files for the archive, hover previews and the screening-room playlist.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Edit content

- **Videos, copy, services, packages, FAQ:** `src/lib/data.ts`
- **Hero, about, contact, footer:** `src/components/`
- **Colours, type, layout:** `src/styles/global.css`
- **Page title and meta:** `index.html`

## Videos

Each project in `src/lib/data.ts` stores its YouTube ID:

```ts
{
  videoId: 'OWJ9MrYq-MU',
  title: 'Cloud Tech Recap',
  group: 'Long-form',
  ...
}
```

The thumbnail is read from `public/thumbs/<videoId>.jpg`. If you add a new video, drop a
`1280×720` thumbnail at that path (or update `thumbUrl` in `src/lib/data.ts`). The player uses
the privacy-enhanced embed (`youtube-nocookie.com`) automatically.

Some videos may have embedding disabled in their YouTube settings; every modal includes a
direct "Open on YouTube" fallback link.
