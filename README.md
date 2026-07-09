# bulma-test

Angular + Bulma demo: a responsive data grid that uses a single `div`-based template and CSS media queries to switch between a desktop grid layout and mobile card layout.

**Live demo:** https://ggghhhjjj.github.io/bulma-test/

## Features

- **Angular 21** standalone components
- **Bulma 1.x** for styling and design tokens
- **Div-based data grid** — no `<table>`, `<tr>`, or `<td>` tags
- **CSS-first responsive design** — no JavaScript breakpoint detection
- **Desktop (769px+):** CSS Grid row/column layout with striped rows and hover
- **Mobile (768px and below):** each row becomes a card with `data-label` field labels; vertical scroll only
- **GitHub Actions** deployment to GitHub Pages

## Responsive pattern

A single template renders all rows and cells as `div` elements. Responsive behavior is handled entirely in SCSS:

1. Desktop uses `display: grid` with `grid-template-columns: repeat(var(--column-count), 1fr)`
2. Mobile (`max-width: 768px`) hides the header, converts rows to card blocks, and shows field labels via `::before { content: attr(data-label) }`
3. Bulma CSS variables (`--bulma-border`, `--bulma-shadow`, `--bulma-radius`, table striping tokens) keep the look consistent

## Local development

```bash
npm install
npm start
```

Open http://localhost:4200 and resize the browser to see the layout change.

## Build

```bash
npm run build
```

Production output is written to `dist/bulma-test/browser/` with `baseHref` set to `/bulma-test/` for GitHub Pages hosting.

## GitHub Pages deployment

Deployment runs automatically via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) on every push to `main`.

The workflow uses `enablement: true` on `actions/configure-pages` so GitHub Pages is enabled automatically on the first deploy (build source: GitHub Actions).

**If the deploy job still fails with "Get Pages site failed / Not Found":** enable Pages manually once under **Settings → Pages → Build and deployment → Source → GitHub Actions**, then re-run the workflow.

## Project structure

```
src/app/
├── app.ts                          # Shell with navbar and demo section
├── models/task.model.ts            # Column definitions and sample data
└── components/responsive-table/    # Div-based grid with CSS card transform
```

## License

MIT
