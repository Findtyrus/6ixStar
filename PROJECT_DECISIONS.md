# 6ixStar Sports Project Decisions

## 2026-04-01

- Chose Next.js App Router as a simple, deploy-ready foundation for a modern single-page marketing site.
- Used a dark, minimal visual style to match a sleek football brand presentation.
- Structured homepage into clear sections: hero, services, roster, and contact for fast edits.
- Added a `rosterSpots` data array in `app/page.tsx` so athlete cards can be updated quickly without redesign work.
- Copied provided logo into `public/logo.png` and integrated it in the site header.
- Updated metadata and README so the project is ready for GitHub push and handoff.
- Added first athlete profile (Ruben Smith) with uploaded image and roster card details.
- Updated roster card rendering to support real athlete photos when an `image` path exists.
- Added second athlete profile (Amare Johnson) with uploaded image and social/college details.
- Added third athlete profile (Glendarious Ford) with uploaded image and position/measurement details.
- Added fourth athlete profile (Khaleb Bridges) with uploaded image and provided school/social details.
- Added fifth athlete profile (Jabari Murphy) with uploaded image and size/social details.
- Added sixth athlete profile (Damion Miller) to complete the initial six-player roster grid.
- Expanded roster beyond six with Tahj Williby, keeping the grid flexible for additional athlete cards.
- Added AJ Howard with a stat-focused profile format to support defensive performance highlights.
- Added Caleb Bryant with transfer-comeback context in the bio line to support recruiting narrative.
- Added a dedicated contact form section connected to the Contact nav anchor with email-draft submit behavior.
