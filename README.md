# MØNTAN1 Academy

**Free. Self-paced. Off zero, in a weekend. Built in West Virginia.**

MØNTAN1 Academy is a free builder's primer that takes you from zero to one: how the web works, how to build with an AI co-pilot, and how to ship real products on the open internet. No experience required, no tuition, no gatekeeping.

Whether you're in Charleston, Morgantown, Huntington, or Mingo County, the same AI tools used by Silicon Valley startups are available right now on any laptop. This is how we close the gap. This is how we punch above our weight class.

[Live site](https://m0ntan1.github.io/m0ntan1-academy/)

---

## The Curriculum

Twelve sections plus a setup checklist. Each section runs 30 to 90 minutes and ends with a real build. A focused person finishes the whole primer in a weekend.

- **Section 00**: Setup (GitHub, VS Code, Claude, Netlify, Replit)
- **Part I :: Foundations** (Sections 01-04): how the internet works, CSS, JavaScript, and AI as your coding co-pilot
- **Part II :: Build Things** (Sections 05-08): real websites, landing pages, live APIs, and an AI-powered app
- **Part III :: Ship It** (Sections 09-12): the no-code + code hybrid stack, automations, a capstone product, and what comes next

Every section has its own page under `sections/`, with progress tracked locally in your browser.

---

## Who This Is For

Anyone. Seriously. If you've never written a line of code, you're exactly who this was built for. If you're a developer who wants to level up with AI tools, there's something here for you too.

---

## Free Forever

This curriculum is and will always be free for West Virginians. It's a resource, not a product.

---

## Certificate

Finish all twelve sections and the claim panel on Section 12 unlocks: enter your name and email and the request goes to the desk. Certificates are made out by hand and mailed back, signed and checked.

Issuer tool: open `certificate.html?name=Jane%20Doe&date=June%2014%2C%202026` (or use the black bar at the top of that page), then print to PDF. Letter landscape, ready to send.

## After the Primer

Section 12 hands graduates to Anthropic Academy's free certified courses: Claude 101, Claude Code 101, and Claude Platform 101 (anthropic.skilljar.com). The communities list is still building until there are rooms we would send a neighbor to.

---

## Repo Layout

- `index.html`: home and curriculum index
- `setup.html`: Section 00
- `sections/section-01.html` through `section-12.html`: one page per lesson, full content ported from the legacy weeks
- `certificate.html`: print-ready certificate issuer (not linked publicly)
- `assets/academy.css` / `assets/academy.js`: shared design system, progress tracking, certificate claim
- `build-sections.mjs`: generator; section metadata lives here and lesson bodies are ported from `weeks/` at build time. Edit, then `node build-sections.mjs` to regenerate.
- `weeks/`: legacy 12-week pages, the canonical content source for the port (includes `week0-setup.html`, the original setup page)

---

Part of [MØNTAN1](https://m0ntan1.com) :: Morgantown, WV :: Montani Semper Liberi
