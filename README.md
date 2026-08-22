# Awakening — Website

Built with Next.js 14 (App Router) + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

- `app/` — one folder per route: `/`, `/about`, `/giving`, `/media`, `/contact`
- `components/` — `SiteHeader` (nav + full-screen menu), `AccordionHero` (the
  expand-on-hover panel section), `Footer`, `ContactForm`, `PageBanner`, `SocialIcons`
- `tailwind.config.js` — all colors/fonts as design tokens (ink, parchment, gold, sage, rust)

## Swapping in real content

- **Name / branding**: search-and-replace "Awakening" everywhere, and swap
  the logo mark SVG in `SiteHeader.js`.
- **Images**: every placeholder block has a dashed note like "Add photo here" —
  drop images into `public/` and replace those `<div>` blocks with `<Image>` from
  `next/image` (or a plain `<img>`), no other markup needs to change.
- **Address / phone / email / socials**: currently hardcoded in `SiteHeader.js`,
  `Footer.js`, and `app/contact/page.js` — update those three spots.
- **Contact form**: `components/ContactForm.js` currently just shows a "sent"
  message on submit. Wire the `handleSubmit` function up to an email service
  (Resend, Formspree, etc.) or an API route.
- **Giving link**: `app/giving/page.js` has a placeholder "Give Now" button —
  point its `href` at your giving platform.

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js team) —
push this to a GitHub repo and import it there, or run `vercel` from this folder.
