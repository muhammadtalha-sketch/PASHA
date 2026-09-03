# Ahmed Vaseer — P@SHA Elections 2026 campaign site

A single merged React + Tailwind campaign site, combining an earlier
content/branding draft with a more fully-featured structural draft. All copy
lives in `src/data/content.js`.

## Run it locally

```bash
npm install
npm run dev
```

Build for hosting:

```bash
npm run build
npm run preview
```

## How this merge was made

Two earlier drafts existed: one carried the verified content, colors, and
branding; the other carried a more complete page structure (a fact ticker,
a founder's-perspective section, track-record-vs-commitment pillar cards
with tabs, a moments-from-the-trail carousel, a polling protocol grid, and
a working contact form). This version keeps the ink-navy / brass / paper
identity and the verified copy, rebuilt on top of the stronger structure —
one component per section, Tailwind throughout, no leftover code from
either draft.

**One deliberate change:** the structural draft's data file included a few
specific, unflagged claims — a team size, a project count, a named office
expansion, and a named cybersecurity partner. None of those could be
verified against any public source, so they were left out entirely rather
than carried forward as fact. If you can confirm them yourself, they're
worth adding back — just don't take their presence in an earlier draft as
confirmation.

## Before you publish

`src/data/content.js` is the single source of truth. Everything
biographical (bio, focus areas, philosophy/values/vision, regions,
industries, contact details) traces back to a direct read of
ahmedvaseer.com. Everything marked `TODO` does not exist on that site — a
professional bio page, not a campaign page — and needs the official P@SHA
Election Commission notice:

- `candidate.seatLabel` — the specific seat/category being contested.
- `hero.snapshot.polling` and the whole **Polling day** section
  (`votingInfo.steps`) — date, time, venue, eligibility, ballot rules.
- The **"Will do"** column in each pillar (`pillars.items[].will`) — these
  are commitments, and none has been confirmed yet.
- `candidate.officialUrl` currently points to the association's homepage
  (verified live) rather than a guessed elections sub-page — swap in the
  exact 2026 notice URL once it's published.

## Structure

```
src/
  components/   Navbar, Hero, About, Focus, Pillars (+ PillarCard),
                Global, Highlights, Stats, VotingInfo, Contact, Footer,
                Reveal (scroll-reveal wrapper)
  data/         content.js — all copy and structured data
  hooks/        useReveal.js
```
