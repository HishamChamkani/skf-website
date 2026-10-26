# SKF — Sikandar Khattak Films

Website for SKF, built from the Figma design.

**Stack:** Next.js 16 (App Router, static generation) · React 19 · TypeScript · Tailwind CSS v4 · self-hosted fonts · `next/image` (AVIF/WebP).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
npm run lint
```

## Deploy

One click on [Vercel](https://vercel.com/new): import this repo, no settings needed.

## Structure

```
src/app/                 routes (page.tsx = home), API route for the newsletter
src/components/          header, footer, CTA banner, shared UI
src/components/home/     home page sections
src/lib/site.ts          contact details, nav and social links (edit here)
public/images/           optimized images and icons from the Figma file
src/fonts/               self-hosted fonts (SIL Open Font License)
```

## Configuration

| Env var | Purpose |
| --- | --- |
| `CONTACT_WEBHOOK_URL` | Where contact form submissions are POSTed (name, company, phone, email, service, message), e.g. a Zapier/Make webhook that emails the team. Without it the form shows the studio email and phone instead. |
| `NEWSLETTER_WEBHOOK_URL` | Where newsletter emails are POSTed (`{ email, source }`), e.g. a Mailchimp, Brevo or Zapier webhook. Without it the form tells visitors sign-up isn't connected yet. |

## Notes

- Service labels use **Optima** (as in the design). Optima isn't a free web font, so it shows on Mac/iOS and falls back to Candara/Segoe UI elsewhere. Add a licensed Optima `.woff2` to `src/fonts` to make it universal.
- Security headers (CSP, HSTS, frame, referrer, permissions) are set in `next.config.ts`.
- Social links in `src/lib/site.ts` are placeholders (`#`).
- Work page projects live in `src/lib/projects.ts` (currently the "Solstice" placeholders from the design). The "See more" button appears once there are more than 8 projects in a filter.
