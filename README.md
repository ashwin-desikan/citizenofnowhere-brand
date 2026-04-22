# citizenofnowhere-brand

Brand hub at https://citizenofnowhere.org. Built with Astro 5 and Tailwind 4.

## Local dev

```
npm install
npm run dev
```

Opens at http://localhost:4321.

## Deploy to Vercel (first time)

1. `git init && git add . && git commit -m "Initial commit"`
2. Create a new repo on GitHub (e.g. `citizenofnowhere-brand`) and push.
3. In Vercel, Add New Project, Import Git Repository, select the repo.
4. Framework preset: Astro (auto-detected).
5. Keep all defaults. Deploy.
6. Once deployed, attach `citizenofnowhere.org` and `www.citizenofnowhere.org` in the new project's Domains settings. You will first need to detach them from the `metro-power-rankings` project.

## Structure

```
src/
  layouts/Layout.astro    # <html> shell, fonts, meta
  pages/index.astro       # Homepage
  styles/global.css       # Tailwind v4 theme tokens
public/
  favicon.svg
astro.config.mjs
package.json
tsconfig.json
```

## Voice and style

- Serif display (Newsreader) for long text and headlines.
- Monospace (JetBrains Mono) for eyebrows, nav, metadata.
- Dark ink background with a teal accent that echoes the rankings app.
- Tone is thoughtful and slightly erudite, not marketing-y. Keep prose in first person where natural.

## Adding writing later

Create a content collection under `src/content/writing/` using Astro's content config, or just add MDX pages at `src/pages/writing/slug.astro`. For a lightweight blog, MDX with a content collection is the right call.
