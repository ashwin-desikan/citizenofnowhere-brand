# CLAUDE.md

Context for future sessions working on the citizenofnowhere.org brand site. Keep this file current when the architecture or voice shifts meaningfully.

## What this repo is

The apex brand hub at https://citizenofnowhere.org. Astro 5, Tailwind 4, static output. Intentionally minimal. The Work section points outward to companion projects; the Writing section pulls from Substack at build time; the About section reclaims the "citizen of nowhere" insult as the site's thesis.

This repo is deliberately not a monorepo. It is one of two sibling projects:

| Repo | Domain | Project |
|---|---|---|
| citizenofnowhere-brand (this one) | citizenofnowhere.org, www.citizenofnowhere.org | Astro brand hub |
| metro-power-rankings | rankings.citizenofnowhere.org | Next.js rankings app |

Keeping them separate means a homepage redeploy never risks the rankings app, and the rankings app can stay in whatever stack serves the data UI best without polluting the brand build.

## Domain and DNS topology

All DNS lives in Cloudflare on the citizenofnowhere.org zone. All apps run on Vercel under the same team (`ashwin-desikans-projects`).

- `citizenofnowhere.org` (apex) attached to this project, 307 redirects to www
- `www.citizenofnowhere.org` attached to this project, serves the brand site
- `rankings.citizenofnowhere.org` attached to the `metro-power-rankings` project

Because both Vercel projects are in the same team, moving the apex and www between them uses Vercel's in-team domain transfer flow (Domains settings → Add Existing). No Cloudflare edit is needed during that kind of move. Cross-team transfers would require a DNS change to a new per-project CNAME target. If you ever need to bring a domain in from outside Vercel or the same team, expect a CNAME update and an SSL reissuance pause.

## Content pipeline (Writing section)

The Writing section on the homepage is hydrated at build time from the Substack RSS feed at `https://citizenofnowhere.substack.com/feed`. Implementation lives in the frontmatter of `src/pages/index.astro` and uses `rss-parser`.

Design choices:

- Build-time fetch, not client-side. Keeps the site static, keeps the homepage fast, avoids client JS.
- Top five posts, filtered to drop the default Substack welcome post whose slug is `/p/coming-soon`.
- Summary is the `description` field (Substack's subtitle), not a truncated body. Much cleaner than excerpting `content:encoded`.
- Date is rendered as `Apr 2026` style via `toLocaleDateString`.
- Titles link out to Substack. The site does not mirror content. Substack owns subscriptions, comments, and network effects; citizenofnowhere.org owns the canonical brand.
- A "Read and subscribe on Substack" CTA appears under the list only when the feed fetch succeeded. If the fetch fails, the section falls back to the original "Coming soon" placeholder notes rather than crashing the build.

New Substack posts will not appear until the site rebuilds. Substack does not expose webhooks, so the practical options for freshness are: (1) trigger a manual Vercel redeploy after each post, (2) add a GitHub Action with a cron that hits a Vercel Deploy Hook daily, or (3) convert the Writing section into an Astro 5 Server Island that re-fetches on request with edge caching. Option 2 is the recommended default for a weekly cadence.

## Voice and visual system

- Dark ink background (`--color-ink: #0a0a0b`) with paper foreground (`--color-paper: #f5f4ee`) and a teal accent (`--color-accent: #5eead4`). The teal echoes the rankings app.
- Newsreader serif for display and body, JetBrains Mono for eyebrows and nav, Inter as the default sans fallback.
- Tone is thoughtful, slightly erudite, first person where natural. Not marketing-y. Avoid em dashes, Gen Z slang, and generic filler.
- Positioning line: "A studio for ideas, indices, and interfaces." Use this when you need a one-liner.
- Thesis line: "Cities are the unit of civilization. Countries are accidents of it." Hero headline; avoid diluting by rewording unless there's a strong reason.

## Known gotchas

These cost real debugging time. Worth writing down.

1. **Astro frontmatter treats TS generics in call expressions as JSX.** `.map<Note>((item) => ...)` breaks the esbuild TSX parser. Use return-position annotations instead: `.map((item): Note => ...)`. Same hazard applies to any `Foo<T>(...)` call syntax inside `.astro` frontmatter. Type assertions like `value as Foo` are fine; the `as any` cast is fine; it's specifically the angle-bracket-before-paren pattern that breaks.

2. **Windows-to-Linux mount permissions block some tooling.** The Cowork sandbox mounts this repo from Windows. `npm install` works but leaves EPERM warnings on esbuild platform binaries (harmless). `astro build` can fail mid-way on `node_modules/.vite/deps/_metadata.json` unlink. Git operations can leave stale `.git/index.lock` and `.git/HEAD.lock` files that the sandbox can't remove. Recovery: `Get-ChildItem .git -Recurse -Filter "*.lock" | Remove-Item -Force` from PowerShell. Run actual builds and pushes from the Windows terminal.

3. **Substack RSS only returns roughly the most recent 20 items.** This is fine today; if the archive grows beyond that, the Writing section will stop showing older pieces. Revisit the pipeline when that matters.

4. **Substack paywalled posts return only a teaser in the `description` field.** If paywalled content becomes the norm, the summary field may look unhelpfully short. Currently all posts are free.

## Deploy flow

- Any push to `main` on GitHub auto-deploys to Vercel production.
- Preview deployments are created automatically for non-main branches and pull requests.
- No separate staging environment. Use branches and preview URLs when the change is risky.
- The Vercel project is named `citizenofnowhere-brand` in team `ashwin-desikans-projects`.

## Backlog (ordered by leverage)

1. **Open Graph image**. The site currently has no `og:image`. Link previews on Twitter, LinkedIn, iMessage are plain. A single 1200x630 PNG with the hero thesis line and the wordmark would noticeably upgrade every share. A dynamic Astro OG image route is overkill for now; a static file in `/public/og.png` is enough.

2. **Nightly rebuild via GitHub Action + Vercel Deploy Hook**. Fifteen-minute setup. Ensures new Substack posts appear on the homepage within a day without manual redeploys.

3. **Sitemap**. Add `@astrojs/sitemap` once writing pages or project detail pages exist in-repo. Not urgent while the Writing section is an outbound link list.

4. **Own-site writing**. If the intent is to eventually host long-form on citizenofnowhere.org rather than Substack, scaffold a content collection at `src/content/writing/` with Astro's content config and a dynamic route at `src/pages/writing/[slug].astro`. MDX is the right call for mixed prose plus embedded components (charts, maps). Do not do this prematurely; Substack's distribution is worth keeping.

5. **Analytics**. Vercel Analytics is free and adequate. Plausible or Fathom if privacy-preserving pageviews matter more than the marginal cost.

6. **Newsletter portability**. If Substack is ever the venue for a mailing list you want to own, start planning a Beehiiv or Buttondown migration before audience gets large. Easier to move 500 subscribers than 5,000.

## Files worth knowing

- `src/pages/index.astro`: Homepage. All content lives here except the layout shell.
- `src/layouts/Layout.astro`: HTML shell, meta tags, font loading.
- `src/styles/global.css`: Tailwind 4 `@theme` tokens (colors, fonts). Change design tokens here, not inline.
- `public/favicon.svg`: The CN monogram favicon. Teal on ink.
- `astro.config.mjs`: Sets `site: "https://citizenofnowhere.org"` and registers the Tailwind Vite plugin.
