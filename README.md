# Treasure of the Hills — Senior Center Website

Marketing and information site for **Treasure of the Hills (TOTH)**, a volunteer-run
senior center in Cedar Park, TX. Built with Next.js 16 (App Router), React 19,
Tailwind CSS v4, and Framer Motion.

Highlights:

- Home, **Calendar** (interactive board/committee schedule), and **Rentals** pages
- Tasteful, scroll-triggered animations that respect `prefers-reduced-motion`
- Working inquiry forms (membership, rental, newsletter) that email the center
- Light/dark themes and adjustable font size for accessibility
- SEO built in: metadata, Open Graph image, sitemap, robots, and LocalBusiness JSON-LD

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Configuration

### Editable content — `src/lib/site-config.ts`

Almost everything a non-developer needs to change lives in one file: the center's
name, address, phone, email, hours, navigation links, activities, membership
tiers, the map embed, and social links. Edit there and the whole site updates.

### Environment variables — `.env.local`

Copy `.env.example` to `.env.local`. **None are required to run the site** — without
them, form submissions are logged on the server and still show a success message
(useful for previews). Add them to enable real email delivery:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Turns on real email via [Resend](https://resend.com) (free tier available). |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries (defaults to the address in `site-config.ts`). |
| `CONTACT_FROM_EMAIL` | The "from" address; use a [verified Resend domain](https://resend.com/domains). |
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO canonical/OG tags and the sitemap. |

> Prefer a different provider? The single route at `src/app/api/contact/route.ts`
> is the only place email is sent — swap Resend for Web3Forms, SendGrid, etc. there.

## How the forms work

All forms (membership, rental, footer newsletter) post to **`/api/contact`**, which
validates the input, blocks bots with a honeypot field, and emails the center.
Shared logic lives in `src/lib/useContactForm.ts`. Submitters' emails are set as the
`reply-to`, so staff can reply directly.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) (framework auto-detected).
3. Add the environment variables above in **Project → Settings → Environment Variables**.
4. Deploy. Set `NEXT_PUBLIC_SITE_URL` to the final domain so SEO tags are correct.

Any Node host that runs `next build` / `next start` works too.

## Project structure

```
src/
├─ app/                 # routes, layout, SEO files (sitemap/robots/manifest/og)
│  ├─ api/contact/      # email route handler
│  ├─ calendar/         # board & committee calendar page
│  └─ rentals/          # facility rentals page
├─ components/
│  ├─ forms/            # membership, rental, newsletter forms
│  ├─ layout/           # navbar, footer
│  ├─ sections/         # hero
│  └─ ui/               # cards, gallery, calendar, animation primitives
├─ data/                # calendar-events.json (recurring events)
└─ lib/                 # site-config, motion variants, form hook, utils
```

See [`ROADMAP.md`](./ROADMAP.md) for planned future features.
