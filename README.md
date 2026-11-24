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
