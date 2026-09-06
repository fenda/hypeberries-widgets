# Hypeberries Widgets

Landing page for `widgets.hypeberries.com`, built with Astro and SCSS.

## Stack

- Astro
- SCSS
- Static site output
- Minimal JavaScript

## Project structure

```text
src/
  components/   Reusable page sections and widget mockups
  data/         Local content for public and personal widgets
  layouts/      Base page layout
  pages/        Astro routes
  styles/       SCSS partials and global styles
public/
  images/       Local image assets including the Hypeberries logo
```

## Commands

- `npm run dev` starts the local development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the built site locally

## Deploying to DreamHost

The GitHub Actions workflow deploys tagged releases to DreamHost. Add these
repository secrets in GitHub before creating the first release tag:

- `DREAMHOST_SSH_KEY`
- `DREAMHOST_HOST`
- `DREAMHOST_USER`
- `DREAMHOST_TARGET`

Create and push a version tag to deploy:

```sh
git tag v0.1.0
git push origin v0.1.0
```

The deploy syncs `dist/` to `DREAMHOST_TARGET`. It uses `rsync --delete`, so
the target should be the dedicated web root for this site.

## Notes

- Public widgets live in `src/data/site.ts`
- Personal widgets are intentionally marked private and unavailable to download
- Placeholder widget visuals are rendered locally so real screenshots can be swapped in later without restructuring the page
