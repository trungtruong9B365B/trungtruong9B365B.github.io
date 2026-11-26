# trungtruong.com

Personal website of Trung Truong, PE: structural engineer in Houston, TX.

**Live:** [trungtruong.com](https://trungtruong.com)

## Stack

Plain HTML, CSS and a little vanilla JavaScript. No build step, no frameworks, hosted on GitHub Pages.

```
index.html            the whole site
404.html              custom "not found" page
favicon.svg           TT monogram (adapts to dark mode)
assets/css/style.css  styles, light + dark theme
assets/js/site.js     theme toggle, photo lightbox, contact form
assets/js/i18n.js     English / Tiếng Việt toggle and the Vietnamese translations
images/               optimized JPG + WebP images
CNAME                 custom domain for GitHub Pages
```

The contact form posts to [Formspree](https://formspree.io).

## Run locally

Paths are root-relative (`/assets/...`), so serve the folder rather than opening the file directly:

```bash
git clone https://github.com/trungtruong9B365B/trungtruong9b365b.github.io.git
cd trungtruong9b365b.github.io
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Adding a project

Copy one of the `<article class="project">` blocks in `index.html`, then add a resized photo (about 1400px wide) to `images/work/` in both `.jpg` and `.webp`.

## Editing text (English / Tiếng Việt)

English text lives in `index.html`. Vietnamese lives in `assets/js/i18n.js`, keyed by the exact English text.
If you change an English sentence in `index.html`, update its key in `i18n.js` too, or that element will stay in English.
Elements marked `data-i18n` are translated; `alt` and `aria-label` text is looked up automatically.
Add `?lang=vi` to a link to open the site in Vietnamese.

The two "Texas Real Estate Commission …" links are required by TREC. Keep that exact wording, keep them in English,
and keep them at 10pt (about 13.3px) or larger.
