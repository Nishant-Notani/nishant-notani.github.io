# CLAUDE.md

Guidance for Claude Code (and any AI agent) when working in this repo.

## Project

Personal portfolio site for **Nishant Notani**, a **Lead Data Engineer** at DxFactor. Hosted on GitHub Pages from this repo. The repo is named `nishant-notani.github.io`, which makes GitHub Pages serve it from the root domain `https://nishant-notani.github.io/`.

GitHub username: **`Nishant-Notani`** (case-sensitive on GitHub display; URLs are case-insensitive).

**Status:** ✅ Live at https://nishant-notani.github.io/ as of Apr 2026.

## Stack

Pure static site. No build step, no framework, no package.json.

- `index.html` — single page; all sections live here.
- `styles.css` — all styling. CSS custom properties for theming. Light is default; `[data-theme="dark"]` overrides for dark mode.
- `script.js` — vanilla JS. Theme toggle (persists to localStorage), animated typing in hero, IntersectionObserver scroll-reveal, mobile nav.
- `profile.png` — hero photo.
- `.nojekyll` — empty file that disables Jekyll on GitHub Pages so files starting with `_` are not hidden.
- `.gitignore` — excludes OS/editor cruft.
- `robots.txt`, `sitemap.xml` — SEO.
- `resume.pdf` and `Nishant Notani Resume May 2026.pdf` — résumé files. **NOT linked from the public site** (deliberate — see Hard Rule #2). They live in the repo for personal use; the user shares the dated copy directly via email/LinkedIn.
- `github-profile/README.md` — the GitHub *profile* README (for the special `Nishant-Notani/Nishant-Notani` repo). Stored alongside this repo for convenience; not part of the deployed site.
- `CLAUDE.md` — this file.

## Hard rules

1. **Job title is "Lead Data Engineer", never "Senior Data Engineer".** The user was promoted. Every reference on the live site and in any new document must say "Lead Data Engineer". The current PDFs in this repo already use the correct title.
2. **No résumé link on the public site.** The footer used to have a "Résumé" link — it was deliberately removed. Do not re-add a link to `resume.pdf` from `index.html` (header, hero, footer, or any section) without an explicit ask. The PDFs stay in the repo for the user's own access; visitors don't see them.
3. **Phone number is NOT on the website.** Email and LinkedIn only. The phone number IS on the resume PDF (private send) but never on the site.
4. **Don't break local references.** All asset paths in `index.html` are relative (`profile.png`, `styles.css`, `script.js`). Keep them at the repo root.
5. **No build tooling.** Do not introduce npm, Vite, Tailwind compilation, etc. GitHub Pages here is zero-config. If a third-party library is needed, load it via CDN in `index.html`.
6. **No browser storage assumptions for new features.** `localStorage` is fine (used for theme), but don't depend on it for required functionality — fall back gracefully.
7. **Cert exam scores (934/925) are intentionally hidden on the website but kept on the resume.** The site shows "DP-700 Certified" / "DP-203 Certified" as cred pills and "Certified · Mar 2026 / Mar 2025" on the cert cards — no scores. The resume PDF keeps the scores. Don't propagate scores to the website.
8. **Team-leadership wording is deliberate and different across documents:**
   - **Website:** *"Currently leading the entire data team — data engineers and analysts — at DxFactor"*. No specific count exposed.
   - **Resume:** *"Currently leading the entire data engineering team at DxFactor"*. No composition breakdown, no count.
   - **GitHub profile README:** mirrors the resume framing.
   The phrase **"X+ direct reports"** has been deliberately removed from all surfaces — the user found it weak. Do not re-introduce a numeric direct-reports phrasing without an explicit ask. The metric strip on the website is the only place a count appears: `8+ / data warehouse projects led` (this is project-led count, *not* people-led).
9. **References section is intentionally minimal.** Section 07 has the title `Need a Reference from Me?`, an icon, and one button (`Open the reference form`). Description copy was deliberately stripped. Do not re-add explanatory paragraphs; the title carries the message and the button is the only CTA. The diplomatic framing matters because a DxFactor HR person scanning this site should read it as Nishant providing references *to others* — not as Nishant looking around for opportunities.

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

Live URL: https://nishant-notani.github.io/ (1–2 min after push, sometimes up to 10 min for CDN propagation).

If the live site doesn't reflect a push:

1. Check the **Actions** tab on GitHub for the latest `pages-build-deployment` run.
   - 🟢 Green → deployed; CDN cache may still be old. Wait, then hard-refresh (`Ctrl+Shift+R`) or open in incognito.
   - 🟡 Yellow → still running. Wait until it finishes.
   - 🔴 Red → click in to read the error. Common cause: the submodule trap below.
2. If still wrong after a green deploy + 10 minutes, force a rebuild: Settings → Pages → switch Source to "None" → save → switch back to "Deploy from a branch / main / root" → save.

## Section layout (index.html, in order)

1. Header / nav (sticky)
2. **Hero** — animated typing, profile photo (clean, no floating badges), credential pills on the text side ("DP-700 Certified", "DP-203 Certified", "5.5+ yrs experience"), single CTA ("Get in touch"), social icons (GitHub / LinkedIn / Email).
3. **Metric strip** (under hero) — five numbers: `8+ data warehouse projects led` · `1,000+ pipelines built` · `1B+ records processed/day` · `500+ dashboards delivered` · `4+ company awards`.
4. **About (#01)** — three paragraphs: leadership scope, career stats, "project starter" closer. Includes the "Quick facts" card on the right.
5. **Experience (#02)** — vertical timeline. DxFactor (Lead Data Engineer 2024–Present, with sub-projects: Microsoft Fabric DW, Fivetran/Snowflake/Iceberg, UGVCL, Synapse), Data Engineer 2023–2024, Infosenseglobal 2021–2023.
6. **Featured Projects (#03)** — four project cards (UGVCL, Enterprise Gym Platform, Microsoft Fabric DW, Mlsense).
7. **Skills (#04)** — 8 categorized groups (Languages, AWS, Azure, Data Platforms, Databases, Orchestration, BI, Web/API).
8. **Certifications (#05)** — DP-700, DP-203 (no scores on the site; just "Certified · date").
9. **Awards (#06)** — 4 DxFactor awards + AWS quiz win.
10. **References (#07)** — minimal section: title `Need a Reference from Me?` + icon + `Open the reference form` button only. Description copy intentionally removed (see Hard Rule #9). Form: `https://docs.google.com/forms/d/1gs2O7cdMnhNPrs3f86rafCYJgWuZA6uIz8T3P7djS4M/viewform`.
11. **Contact (#08)** — email + LinkedIn buttons only.
12. Footer — GitHub, LinkedIn, Email links. **No résumé link.**

## Key numbers used across the site

These are the canonical values. If they change, update *all* the places listed:

| Number | Where it appears |
|---|---|
| 5.5+ years | Hero subtitle, hero cred pill, About paragraph, About card "Quick facts", `<meta description>`, OG/Twitter |
| 8+ data warehouse projects led | Metric strip only (the team-leadership statement on hero/about no longer carries a count) |
| "the entire data team" framing | Hero subtitle, About paragraph, `<meta>` tags |
| 1,000+ pipelines | Hero subtitle, About paragraph, metric strip, `<meta>` tags |
| 1B+ records/day | Hero subtitle, About paragraph, metric strip, `<meta>` tags |
| 500+ dashboards | Hero subtitle, About paragraph, metric strip, `<meta>` tags |
| 4+ company awards | Hero subtitle, About paragraph, metric strip, `<meta>` tags |
| 2x Microsoft Certified | Hero subtitle (in copy), About paragraph, cred pills (broken into two: DP-700 + DP-203) |

## Common tasks

### Update content (new project, new role, etc.)

Edit `index.html` directly. Each section is clearly labeled with an HTML comment (e.g. `<!-- EXPERIENCE -->`). For a new project, copy an existing `.tl-project` block inside the relevant `.tl-item` and swap the content. Keep the chip list (`<div class="chips">`) for tech stack.

### Tweak colors / theme

`:root` block at the top of `styles.css` defines all theme tokens. The accent gradient is `--gradient: linear-gradient(135deg, #3b5bff 0%, #8b5cf6 50%, #ec4899 100%);`. The `[data-theme="dark"]` block overrides them for dark mode.

### Change the typing phrases

`script.js` → `phrases` array inside the typing block.

### Update résumé

The PDFs are produced by a Python script using ReportLab. The script lives outside the repo (in the user's session-temporary outputs folder); rebuild from this CLAUDE.md if it's lost. The script writes both `resume.pdf` and `Nishant Notani Resume May <month> <year>.pdf` so the user has a clean filename for sharing. **Do not link the resume from the site** (see Hard Rule #2).

If the user asks to update the resume content:
- Title is "Lead Data Engineer" everywhere (header + DxFactor work entry)
- Summary says **"leading the entire data engineering team at DxFactor"** — no count, no composition breakdown
- UGVCL bullet says "Ingested 1B+ raw records/day via Kafka and filtered to 50M+ records/day stored in S3 raw layer" — this preserves the per-project accuracy while the summary aggregates 1B+/day across all platforms
- Leadership Contributions block has 4 bullets: (1) currently leading the entire data engineering team across concurrent projects, (2) "project starter" — architect, build foundation, deliver first reports, structured KT to juniors, (3) own code reviews + Git merge/release, (4) POC → 2-year contract conversion
- Cert scores (934, 925) are kept on the resume
- Phone is kept on the resume
- 2 pages, A4 page size

### Update photo

Replace `profile.png`. Keep it square-ish — the photo frame is `aspect-ratio: 1 / 1` and uses `object-fit: cover`, so non-square images will crop to center.

### Update the References section form

Section 07's form URL is hard-coded in `index.html` (search for `docs.google.com/forms`). The current title is `Need a Reference from Me?` — chosen for diplomatic framing (see Hard Rule #9). If retitling, preserve that diplomatic framing. Do not add description paragraphs back without an explicit ask.

## Contact info policy

**Public on the site:** email (`nishantnotani.nn@gmail.com`), LinkedIn (`https://www.linkedin.com/in/nishant-notani-79b719172`), GitHub (`https://github.com/Nishant-Notani`).

**NOT on the site:**
- Phone number (kept on the resume only — public phone numbers attract spam)
- Resume PDF link (file exists in repo but is unlinked; user shares manually)

## SEO notes

- `<title>`, meta description, Open Graph, Twitter card, JSON-LD Person schema all set in `index.html` `<head>`.
- `sitemap.xml` lists the homepage; update it if multi-page is ever introduced.
- The site targets the search query "Nishant Notani Lead Data Engineer" — keep that phrase in the title, h1 area, and About copy.
- JSON-LD `sameAs` includes LinkedIn and GitHub. Email is in `email` field. The schema `jobTitle` is "Lead Data Engineer".

## Known not-implemented (intentional)

- No analytics (no Google Analytics / Plausible). Add only if user requests.
- No contact form. Email + LinkedIn buttons only. (The Google Form in the References section is for *incoming reference requests*, not for general contact.)
- No blog. Site is single-page.
- No CI checks. Lint/format manually if making large edits.
- No résumé link on the site (deliberate — see Hard Rule #2).

## Common gotchas (from setup history)

These bit us during initial setup. Document so we don't repeat:

### 1. Multi-account git auth

The user has two GitHub accounts: `Nishant-Notani` (personal, used for this repo) and `nishantdxfactor` (work). The first push to this repo silently used the work account's cached credentials in Windows Credential Manager and was rejected with `Permission to Nishant-Notani/... denied to nishantdxfactor`.

Fix:
- Embed the personal username in the remote URL so Git Credential Manager keys creds per-username:
  ```
  git remote set-url origin https://Nishant-Notani@github.com/Nishant-Notani/nishant-notani.github.io.git
  ```
- Set per-repo commit author so commits attribute correctly:
  ```
  git config user.email "<personal-email>"
  ```
- For long-term hygiene, use `[includeIf "gitdir:..."]` in the global `.gitconfig` to switch identities by directory.

### 2. The submodule trap with `github-profile/`

When the `github-profile/` folder was first added, it had a hidden `.git/` subdirectory inside it (likely from an aborted local init). Git registered the folder as a *gitlink* (mode 160000) in the index without writing any `.gitmodules` config. Subsequent pushes succeeded but every GitHub Actions `pages-build-deployment` run failed with:

```
Error: fatal: No url found for submodule path 'github-profile' in .gitmodules
Error: The process '/usr/bin/git' failed with exit code 128
```

Fix:
```bash
# Remove the hidden .git inside the folder
Remove-Item -Recurse -Force github-profile\.git
# Detach the broken submodule pointer
git rm --cached github-profile
# Re-add as a regular file
git add github-profile/README.md
git commit -m "Replace github-profile submodule with regular folder"
git push
```

If `git ls-files --stage github-profile` shows mode `160000`, you're hitting this. If it shows `100644 ... github-profile/README.md`, you're fine.

**Prevention:** never run `git init` inside a subdirectory of a tracked repo, and check `ls -Force` for stray `.git` folders before adding new directories.

### 3. GitHub Pages cache propagation

After a successful build (green Actions run), the live URL can serve stale HTML for up to ~10 minutes due to CDN edge caching. Cache busters that work:
- Hard refresh: `Ctrl+Shift+R` (forces browser to bypass its cache)
- Incognito window
- Append a dummy query string: `https://nishant-notani.github.io/?v=2`

If still stale after 10 minutes, the build probably failed silently — check the Actions tab. The raw file content at `https://raw.githubusercontent.com/Nishant-Notani/nishant-notani.github.io/main/index.html` is the source of truth and bypasses Pages CDN.

## GitHub setup notes

- The user has two GitHub accounts: `Nishant-Notani` (personal, used for this repo) and `nishantdxfactor` (work). Do not assume credentials.
- The repo's remote is `https://github.com/Nishant-Notani/nishant-notani.github.io.git` (or with the `Nishant-Notani@` auth prefix — see Common Gotcha #1).
- Local commits must be authored under the personal account's email; the global git config may point to the work email, so use `git config user.email <personal-email>` per-repo if needed.
- The site at https://github.com/Nishant-Notani/Nishant-Notani is the *profile README* repo (separate from this one). Its source lives in `github-profile/README.md` here for reference. Setup: create empty repo on github.com named exactly `Nishant-Notani`, paste the README content via the web UI, commit.
