# Ajay Pandey — Personal Portfolio

This is a minimal, responsive personal portfolio website for Ajay Pandey.

Files:
- `index.html` — main page
- `css/styles.css` — styles and responsive layout
- `js/main.js` — small scripts for reveal animations, nav toggle, and contact form handling

How to preview locally:
1. Open `index.html` in a browser, or serve with a simple static server.

Example with Python 3:

```bash
python -m http.server 8000
```

Open http://localhost:8000

Notes:
- Contact form uses `mailto:` as a fallback; integrate with an email service or server endpoint to receive messages automatically.
- Colors: blue, light blue, white, dark gray. Typography: Inter.

What's included and next steps:

- Responsive layout with mobile-first navigation and smooth reveal animations.
- Contact form uses `mailto:` as a fallback; to receive messages automatically, add a backend endpoint or integrate a service like Formspree, Netlify Forms, or an SMTP endpoint.
- To deploy on GitHub Pages: create a repository, push these files to the `gh-pages` branch (or enable Pages from `main`/`docs/`), and set the site to use `/` root.

Quick preview (Python):

```bash
python -m http.server 8000
```

Open http://localhost:8000

If you'd like, I can:
- Add a simple Node/Express endpoint to accept contact form posts and send email via SMTP.
- Create a GitHub Pages deploy workflow.
- Generate optimized images, favicon, and meta tags for SEO and social sharing.
