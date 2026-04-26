# CLAUDE.md

Guidance for Claude Code (and any AI agent) when working in this repo.

## Project

Personal portfolio site for **Nishant Notani**, a Lead Data Engineer. Hosted on GitHub Pages from this repo. The repo is named `nishant-notani.github.io`, which makes GitHub Pages serve it from the root domain `https://nishant-notani.github.io/`.

## Stack

Pure static site. No build step, no framework, no package.json.

- `index.html` — single page; all sections live here.
- `styles.css` — all styling. CSS custom properties for theming. Light is default; `[data-theme="dark"]` overrides for dark mode.
- `script.js` — vanilla JS. Theme toggle (persists to localStorage), animated typing in hero, IntersectionObserver scroll-reveal, mobile nav.
- `resume.pdf` — public résumé. Linked from hero CTA and footer.
- `profile.png` — hero photo.
- `.nojekyll` — empty file that disables Jekyll on GitHub Pages so files starting with `_` are not hidden.
- `robots.txt`, `sitemap.xml` — SEO.

## Hard rules

1. **Job title is "Lead Data Engineer", never "Senior Data Engineer".** The user was promoted; the resume PDF still says Senior, but every reference on the live site must say Lead. If updating the résumé file, keep this rule.
2. **Don't break local references.** All asset paths in `index.html` are relative (`resume.pdf`, `profile.png`, `styles.css`, `script.js`). Keep them at the repo root.
3. **No build tooling.** Do not introduce npm, Vite, Tailwind compilation, etc. The point of GitHub Pages here is zero-config deploys. If a third-party library is needed, load it via CDN in `index.html`.
4. **No browser storage assumptions for new features.** `localStorage` is fine (used for theme), but don't depend on it for required functionality — fall back gracefully.

## Run locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Every push to `main` redeploys automatically (GitHub Pages auto-builds for `username.github.io` repos). Workflow:

```bash
git add .
git commit -m "Describe the change"
git push origin main
```

Live URL: https://nishant-notani.github.io/ (1–2 min after push). Check the **Actions** tab on GitHub for the `pages-build-deployment` job if it doesn't appear.

## Section layout (index.html, in order)

1. Header / nav (sticky)
2. Hero — animated typing, photo with floating credential badges, metric strip
3. About — short bio + quick-facts card
4. Experience — vertical timeline (DxFactor: Lead/Senior/Data, then Infosenseglobal)
5. Featured Projects — UGVCL, Enterprise Gym Platform (Fivetran+Snowflake+Iceberg), Microsoft Fabric DW, Mlsense
6. Skills — 8 categorized groups
7. Certifications — DP-700 (934/1000), DP-203 (925/1000)
8. Awards — 4 DxFactor awards + AWS quiz win
9. Contact — email + LinkedIn only (phone deliberately hidden)
10. Footer

## Common tasks

### Update content (new project, new role, etc.)

Edit `index.html` directly. Each section is clearly labeled with an HTML comment (e.g. `<!-- EXPERIENCE -->`). For a new project, copy an existing `.tl-project` block inside the relevant `.tl-item` and swap the content. Keep the chip list (`<div class="chips">`) for tech stack.

### Tweak colors / theme

`:root` block at the top of `styles.css` defines all theme tokens. The accent gradient is `--gradient: linear-gradient(135deg, #3b5bff 0%, #8b5cf6 50%, #ec4899 100%);`. The `[data-theme="dark"]` block overrides them for dark mode.

### Change the typing phrases

`script.js` → `phrases` array inside the typing block.

### Update résumé

Replace `resume.pdf` at the repo root with the new file (keep the filename). The hero "Download résumé" button and footer link both point to `/resume.pdf`.

### Update photo

Replace `profile.png`. Keep it square-ish — the photo frame is `aspect-ratio: 1 / 1` and uses `object-fit: cover`, so non-square images will crop to center.

## Contact info policy

Public on the site: email (`nishantnotani.nn@gmail.com`), LinkedIn, GitHub.
**Not** on the site: phone number. If asked to add it, confirm with the user first — public phone numbers attract spam.

## SEO notes

- `<title>`, meta description, Open Graph, Twitter card, JSON-LD Person schema all set in `index.html` `<head>`.
- `sitemap.xml` lists the homepage; update it if multi-page is ever introduced.
- The site targets the search query "Nishant Notani Lead Data Engineer" — keep that phrase in the title, h1 area, and About copy.

## Known not-implemented (intentional)

- No analytics (no Google Analytics / Plausible). Add only if user requests.
- No contact form. Email + LinkedIn buttons only.
- No blog. Site is single-page.
- No CI checks. Lint/format manually if making large edits.
