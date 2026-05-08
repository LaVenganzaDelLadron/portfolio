# TODO - Angular Cyber Portfolio Website

## Step 1 — Repository analysis (done)
- Identified project is Angular 21 standalone + SSR.
- Routing is currently empty.
- Placeholder UI exists in `src/app/app.html`.
- Styling is currently `src/styles.css` wired in `angular.json`.

## Step 2 — Create SCSS theme entry + files
- Create `src/styles.scss` and `src/styles/_variables.scss`, `_mixins.scss`, `_animations.scss`, `global.scss`.
- Update `angular.json` to use `src/styles.scss` instead of `src/styles.css`.

## Step 3 — Implement Angular routing
- Update `src/app/app.routes.ts` with:
  - home page
  - project details
  - not-found route

## Step 4 — Build app shell (navbar/footer + router-outlet)
- Update `src/app/app.ts`, `src/app/app.html`, and styling (SCSS preferred).

## Step 5 — Create required folder structure & starter components
- Generate shared components: navbar, footer, project-card, section-title, loading.
- Generate pages: home (hero/about/skills/projects/certifications/contact), project-details, not-found.
- Generate core/data/animations/effects stubs.

## Step 6 — Implement cyber UI behaviors
- Typing animation on hero.
- Matrix/cyber grid / galaxy background (optional effect components).
- Project card hover effects.
- Smooth transitions and responsive layouts.

## Step 7 — Sample data wiring
- Create sample data in `src/app/data/*`.
- Use it in home/projects sections.

## Step 8 — Verify build
- Run `npm test` / `ng build` (and `ng serve`) to ensure everything compiles.

