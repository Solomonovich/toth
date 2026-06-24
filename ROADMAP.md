# Feature Roadmap — Treasure of the Hills

A menu of future enhancements to discuss with the client as the site evolves.
Grouped by effort so it's easy to pick the next quick win versus a bigger project.
Nothing here is required for launch — the site is production-ready today.

## Quick wins (hours)

- **Social media links** — drop the center's Facebook/Instagram URLs into
  `src/lib/site-config.ts` (`social`); the footer and JSON-LD pick them up automatically.
- **Real "from" email + domain** — verify the center's domain in Resend and set
  `CONTACT_FROM_EMAIL` so inquiry emails come from `@toth-seniors.com`.
- **Downloadable monthly calendar (PDF)** — add the PDF to `/public` and link it
  from the calendar page (currently a "call us" prompt).
- **Privacy Policy / Terms pages** — add `/privacy` and `/terms` routes (often
  required before running ads or collecting emails).
- **Google Analytics / Plausible** — add a privacy-friendly analytics snippet to
  track visits and the most popular activities.

## Medium (days)

- **Events RSVP / sign-ups** — let members reserve a spot for trips and special
  events; reuses the existing form + email pipeline.
- **Auto-reply confirmation emails** — send the submitter a friendly confirmation
  in addition to notifying staff.
- **Photo gallery CMS** — move gallery photos out of code so volunteers can add
  pictures without a developer (e.g. Sanity, Cloudinary, or a simple uploads folder).
- **Activities schedule / weekly grid** — a real timetable of recurring classes
  (the data model already supports recurrence in `calendar-events.json`).
- **Testimonials / member stories** — a short rotating quotes section for warmth
  and social proof.
- **Newsletter integration** — connect the footer sign-up to Mailchimp/Resend
  Audiences so addresses flow straight into the mailing list.

## Larger (weeks)

- **Online membership payment** — pay the $30/$50 dues online via Stripe and
  capture member details into a database.
- **Volunteer portal** — sign-in for volunteers to view shifts, training, and
  internal documents.
- **Member accounts** — logins for renewals, event history, and saved preferences.
- **Spanish translation (i18n)** — bilingual site for the broader Cedar Park community.
- **Google Calendar sync** — pull events from a shared Google Calendar the staff
  already maintain, instead of editing JSON.

## Polish & quality (ongoing)

- **WCAG 2.1 AA audit** — formal accessibility pass (contrast, screen-reader,
  keyboard) — especially valuable for a senior audience.
- **Lighthouse performance pass** — image sizing, font loading, Core Web Vitals.
- **Automated tests** — component/e2e tests (Playwright) for the forms and calendar.
- **Image optimization** — re-export the largest photos in `/public/images`
  (several are multiple MB) to shrink page weight.
