# Paws of Persistence — Design Preview

An independent mobile-first homepage mockup inspired by editorial photography layouts. This repository does not modify or deploy the production website.

## Run

Requires Node.js 20 or later.

```sh
npm ci
npm run dev
```

Check and build: `npm run typecheck` followed by `npm run build`.

## Included

- Warm cream, charcoal and muted gold colours; existing dog and trainer photographs.
- Responsive hero, programme cards, trainer profile, original testimonials, process, FAQ and contact section.
- Mobile menu and fixed call/WhatsApp bar.
- No displayed prices or paused Board & Train offer.
- Original testimonial data copied unchanged; the homepage displays the first three reviews verbatim.

This is a homepage prototype. Programme, profile and policy links open the existing production website. WhatsApp and telephone links are real contact actions. No backend connection, lead submission, analytics or advertising scripts are included. The preview HTML requests noindex/nofollow; this is not access control, and this repository is public.

## Lovable

This pull request targets only GovindRajPoP/Remix. GitHub repository creation alone does not establish Lovable sync. Confirm which repository the separate Lovable project actually uses before expecting a merge to appear there. Keep the production domain on the original project.

## Review status

TypeScript checking and the standalone production build are checked before this PR is opened. Visual browser review is still pending. Review at 320, 375, 390, 430, 768 and 1280 px, including menu, FAQ, photo crops, keyboard focus and contact controls before approving the design. Adapting this design to the production app will require preserving its routes, SEO, tracking and enquiry delivery.
