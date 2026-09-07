# Lemon Mind References - Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/Users/salaheddinemimouni/Downloads/ChatGPT Image Sep 7, 2026, 05_47_57 PM.png`
- Source prompt path: `/Users/salaheddinemimouni/.codex/attachments/20abd7db-99de-4dea-9f67-46e15ee4c5e0/pasted-text.txt`
- Implementation route: `http://127.0.0.1:4323/agence/references`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-1440-final.png`
- Reference normalized path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-reference-main-1440.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-overlay-1440-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-diff-1440-final.png`
- Side-by-side path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-side-by-side-1440-final.png`
- Viewport: 1440px wide, desktop.

## Required Fidelity Surfaces

- Structure: `/agence/references` is implemented with real Astro sections for hero, official logo wall, sector filters, collaborations, contribution, final CTA and shared footer.
- Shared system: existing Header, agency submenu, expertise mega menu, Footer, Lemon Mind logo, typography, buttons, icon language, containers and motion patterns are reused.
- Content integrity: direct Lemon Mind client claims from the mockup were adjusted to group-level wording as requested by the source prompt; the page uses 42 official references with `attribution: "group"`.
- Assets: all logos and collaboration visuals are existing local assets; no flattened screenshot section, full mockup background, canvas recreation or invented logo/client/result/testimonial was added.
- Motion: scroll reveal, hero image/card movement, logo/filter interactions, collaboration cards and CTA hover states are active with reduced-motion fallbacks.
- SEO/GEO: canonical `/agence/references`, one H1, Morocco/Casablanca context, `Organization`, `CollectionPage`, `BreadcrumbList` and `ItemList` schemas are present. Review schema is intentionally omitted because no validated testimonials were supplied.

## QA Evidence

- Responsive screenshots:
  - 1440px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-1440-final.png`
  - 1280px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-1280-final.png`
  - 1024px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-1024-final.png`
  - 768px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-768-final.png`
  - 390px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-390-final.png`
- Responsive contact sheet: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/references/references-responsive-contact-sheet-final.png`
- Metrics: 1440, 1280, 1024, 768 and 390px returned `scrollWidth === viewportWidth`, 42 logo cards and loaded collaboration visuals.
- HTML checks: route returned HTTP 200, no bare `href="#"`, no forbidden illustrative brand names, 42 `ItemList` entries and no Review/AggregateRating schema.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: the mockup contains illustrative client names and testimonials; these are intentionally replaced or omitted to respect the validated official source.
- P3 accepted: the page is taller than the visual mockup because it displays the full set of 42 official references instead of a small illustrative logo sample.
- P3 fixed: Range Rover and Jaguar logos used the normalized full assets after the display variants rendered too thin in the wall.
- P3 fixed: mobile QA capture used stitched viewport screenshots after offscreen lazy-painted images appeared gray in a single full-page capture; the live source was not affected.

## Validation

- Typecheck: `npm run check` passed with 0 errors, 0 warnings and 0 hints.
- Production build: `npm run build` passed with the Astro Node server adapter.
- Diff hygiene: `git diff --check` passed.
- Lint: no `lint` script configured in `package.json`; `npm run lint --if-present` completed as a no-op.
- Tests: no `test` script configured in `package.json`; `npm run test --if-present` completed as a no-op.

---

# Lemon Mind L'Agence — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/Users/salaheddinemimouni/Downloads/ChatGPT Image Sep 7, 2026, 05_07_24 PM.png`
- Source prompt path: `/Users/salaheddinemimouni/.codex/attachments/0fed3a3b-e0b4-44c8-b3b9-9be04da47192/pasted-text.txt`
- Implementation route: `http://127.0.0.1:4323/agence`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agence-1440-full-final.png`
- Reference normalized path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agency-reference-normalized-1440-final.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agency-1440-overlay-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agency-1440-diff-final.png`
- Side-by-side path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agency-1440-side-by-side-final.png`
- Viewport: 1440px wide, desktop.
- Source pixels: 795 x 1978.
- Normalized source pixels: 1440 x 3583.
- Implementation pixels: 1440 x 4117.

## Required Fidelity Surfaces

- Structure: `/agence` route implemented with real Astro components for hero, purpose, differentiators, integrated model, group strength, team preview, trust and final CTA.
- Shared system: existing Header, agency submenu, expertise mega menu, Footer, Lemon Mind logo, typography tokens, button styles, icon language and motion patterns are reused.
- Content integrity: prompt text, section order, CTAs and service/expertise wording are preserved without inventing clients, figures, certifications, profiles or testimonials.
- Assets: only local Lemon Mind assets are used; missing team/certification assets remain clean placeholders.
- Motion: scroll reveal, line-by-line hero reveal, image mask reveal, timeline progression, hover depth/zoom and final CTA gradient animation are present with reduced-motion fallbacks.
- Navigation: `L'agence` is active on `/agence`; first agency submenu link targets `/agence`; no bare `#` links were introduced.

## QA Evidence

- Responsive screenshots:
  - 1440px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agence-1440-full-final.png`
  - 1280px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agence-1280-top-final-v2.png`
  - 1024px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agence-1024-top-final-v2.png`
  - 768px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agence-768-top-final-v2.png`
  - 390px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/agency/agence-390-top-final-v2.png`
- Responsive metrics: 1440, 1280, 1024, 768 and 390px returned `scrollWidth === viewportWidth`, 0 actionable overflow elements, 0 small interactive targets and 1 H1.
- SEO/GEO: title, meta description, canonical `/agence`, Open Graph image, `Organization`, `AboutPage`, `BreadcrumbList`, Maroc/Casablanca context and internal links are present.
- Accessibility: all images have alt text; menu states use `aria-current`, `aria-expanded`, `aria-controls` and `aria-hidden`; mobile menu appears below 1024px.
- Routes: all internal links collected from `/agence` returned HTTP 200.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: the exact generated office/agency hero visual from the mockup is not present in the local asset set, so the closest existing Lemon Mind meeting asset is used.
- P3 accepted: four team profiles and all certifications are placeholders because validated names, roles, portraits and badges were not provided.
- P3 accepted: implementation is taller than the normalized mock because it preserves real semantic sections, placeholders instead of invented proof, and the shared global footer.

## Validation

- Typecheck: `npm run check` passed with 0 errors, 0 warnings and 0 hints.
- Production build: `npm run build` passed with the Astro Node server adapter.
- Verify: `npm run verify` passed.
- Diff hygiene: `git diff --check` passed.
- Lint: no `lint` script configured in `package.json`; `npm run lint --if-present` completed as a no-op.
- Tests: no `test` script configured in `package.json`; `npm run test --if-present` completed as a no-op.

---

# Lemon Mind Header Mega Menu — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-7b6a1d32-9404-4103-ad0b-4c22f0e01977.png`
- Source prompt path: `/Users/salaheddinemimouni/.codex/attachments/6930c6c5-215c-415f-8e97-5a9aa8bafe6a/pasted-text.txt`
- Implementation route: `http://127.0.0.1:4323/`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-1440-final.png`
- Full-view comparison path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-1440-final-comparison.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-1440-final-overlay.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-1440-final-diff.png`
- Viewport/state: 1440px wide, desktop header, `Nos expertises` mega menu open by hover.
- Source pixels: 1774 x 887.
- Normalized source pixels: 1440 x 720.
- Implementation pixels: 1440 x 900.
- Density normalization: source resized proportionally to 1440px width; comparison uses the top 720px to match the visible menu state.

## Required Fidelity Surfaces

- Structure: the existing shared `Header.astro` now owns the mega menu; no second header was introduced.
- Desktop: the menu is centered under the header, uses a 1360px panel at 1440px viewport with 40px side gutters, six equal cards and a separate right-side approach column.
- Responsive: 1280px keeps the premium desktop composition, 1024px switches to a compact 3-column menu with internal scroll, and 768/390px use the mobile menu accordion instead of the desktop panel.
- Typography/copy: all requested labels, card titles, descriptions, CTA text, checks and routes are preserved.
- Assets: all card images come from existing local Lemon Mind assets; no flattened screenshot, mockup background, custom logo, invented client or invented result was added.
- Motion/accessibility: hover, click, keyboard open, Escape close, overlay close, close delay, `aria-expanded`, `aria-controls`, `aria-hidden`, focus-visible states and reduced-motion fallback are present.

## QA Evidence

- Responsive screenshots:
  - 1440px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-1440-final.png`
  - 1280px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-1280-final.png`
  - 1024px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-1024-final.png`
  - 768px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-768-final.png`
  - 390px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/mega-menu/mega-menu-390-final.png`
- Metrics: 1440, 1280, 1024, 768 and 390px returned no horizontal overflow.
- Interaction checks: true mouse movement opens the desktop menu; moving away closes it; click opens; overlay closes; keyboard Enter opens; Escape closes and restores focus on the trigger.
- Mobile checks: the existing mobile menu exposes a `Nos expertises` accordion with six compact expertise rows and no horizontal overflow.
- Routes: all six expertise links, the strategy anchor and the global contact CTA returned HTTP 200.
- Console: no suspected browser errors after filtering Vite dev connection logs.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: the card images do not match the generated mockup exactly because the task required using only existing project assets.
- P3 accepted: the implementation keeps the current Lemon Mind shared header spacing and logo sizing, so it is visually aligned with the live site system rather than copying a standalone mockup header pixel-for-pixel.

## Comparison History

- Initial implementation produced the requested structure, but the 1280px title/card density was tight.
- Fix made: compacted card typography and side-column spacing between 1200px and 1280px, then recaptured 1280px and 1440px states.
- Post-fix evidence: final desktop comparison and responsive screenshots listed above show no structural mismatch, clipping or overflow.

## Validation

- Typecheck: `npm run check` passed with 0 errors, 0 warnings and 0 hints.
- Production build: `npm run build` passed with the Astro Node server adapter.
- Diff hygiene: `git diff --check` passed.
- Lint: no `lint` script configured in `package.json`; `npm run lint --if-present` completed as a no-op.
- Tests: no `test` script configured in `package.json`; `npm run test --if-present` completed as a no-op.

---

# Lemon Mind UGC & Creator Content — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-8e397ae9-7208-46d5-86e8-1b9d717c47cb.png`
- Source prompt path: `/Users/salaheddinemimouni/.codex/attachments/21e07e63-c759-4443-a043-aa47042a5fc3/pasted-text.txt`
- Implementation route: `http://127.0.0.1:4323/expertises/ugc-creator-content-maroc`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/ugc/ugc-1440-full-stitched.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/ugc/ugc-1440-reference-overlay.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/ugc/ugc-1440-reference-diff.png`
- Viewport: 1440px wide, desktop.
- Source pixels: 836 x 1881.
- Normalized source pixels: 1440 x 3240.
- Implementation pixels: 1440 x 4345.
- Density normalization: source resized proportionally to 1440px width before overlay/diff.

## Required Fidelity Surfaces

- Structure: `/expertises/ugc-creator-content-maroc` route implemented with real Astro sections for hero, UGC explanation, benefits, process, creator casting, formats, activation/rights, UGC projects, FAQ, final CTA and shared footer.
- Shared system: existing Header, Footer, Lemon Mind logo, buttons, typography tokens, containers, icon language and motion patterns are reused.
- Content: supplied titles, CTAs, table rows, benefits, process steps, criteria, formats, usages, rights, neutral project examples and FAQ are preserved from the prompt.
- Integrity: no full mockup background, no flattened screenshot section, no canvas recreation, no OCR source and no invented client, creator, statistic, result or testimonial.
- Internal links: contextual links are present for influence, production video, UGC Ads, social media, realisations and contact with `?projet=production-ugc`.
- Motion: hero reveal/parallax, section reveals, timeline line, card hover, image zoom, FAQ accordion and CTA gradient animation are active; reduced-motion CSS is present.

## QA Evidence

- Responsive screenshots:
  - 1440px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/ugc/ugc-1440-full-stitched.png`
  - 1280px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/ugc/ugc-1280-full-stitched.png`
  - 1024px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/ugc/ugc-1024-full-stitched.png`
  - 768px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/ugc/ugc-768-full-stitched.png`
  - 390px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/ugc/ugc-390-full-stitched.png`
- Metrics: 1440, 1280, 1024, 768 and 390px returned no global horizontal overflow.
- Navigation: shared header marks `Nos expertises` active with `aria-current="page"`; mobile menu opens at 390px and exposes the expected links.
- Conversion: UGC CTAs route to `/contact?projet=production-ugc`; the Contact page pre-selects `Production UGC`.
- FAQ: 8 visible questions match the JSON-LD `FAQPage`; clicking one question opens it and closes the previous question.
- SEO/GEO: one H1, target title/meta description/canonical, Open Graph image, JSON-LD `Organization`, `Service`, `BreadcrumbList` and `FAQPage`; Maroc/Casablanca context reused from site data.
- Console: no browser errors found during the final QA pass.
- Hover: format card hover changes image transform and CTA arrow color as expected.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: the exact generated hero creator photo is not available in the approved local asset set, so the page uses the closest existing Lemon Mind assets without inventing visuals.
- P3 accepted: implementation is taller than the normalized mock because it preserves all prompt text, accessible semantic sections, visible internal links and the shared global footer.
- P3 accepted: platform icons are loaded from Simple Icons CDN because no local platform-logo asset set exists.

## Validation

- Lint: no `lint` script configured in `package.json`; `npm run lint --if-present` completed as a no-op.
- Tests: no `test` script configured in `package.json`; `npm run test --if-present` completed as a no-op.
- Typecheck: `npm run check` passed with 0 errors, 0 warnings and 0 hints.
- Production build: `npm run build` passed with the Astro Node server adapter.
- Diff hygiene: `git diff --check` passed.

---

# Lemon Mind Social Media Management — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-cbff20c4-5285-4f6d-9c8c-54ff26e42a93.png`
- Implementation route: `http://127.0.0.1:4323/expertises/social-media-management-maroc`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-1440-final.png`
- Normalized source path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/reference-social-media-normalized-1440.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-1440-overlay-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-1440-diff-final.png`
- Side-by-side path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-1440-side-by-side-final.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- State: page loaded, all reveal scenes triggered, FAQ closed by default.
- Source pixels: 832 x 1890.
- Normalized source pixels: 1440 x 3271.
- Implementation pixels: 1440 x 3707.
- Density normalization: source resized proportionally to 1440px width before overlay/diff.

## Required Fidelity Surfaces

- Structure: `/expertises/social-media-management-maroc` route implemented with real Astro sections for hero, vision, services, platform expertise, method, réalisations, FAQ, final CTA and shared footer.
- Shared system: existing Header, Footer, buttons, typography tokens, containers, icon language, page motion and footer treatment are reused.
- Content: supplied titles, CTAs, order, service names, platform names, project categories and FAQ are preserved without inventing clients, logos, numeric results, testimonials or missing visuals.
- Assets: only available local project assets are used for content imagery; social platform icons use Simple Icons CDN because no local platform-logo asset set exists. No complete mockup image, flattened screenshot section or canvas recreation is used.
- Motion: hero collage, service cards, platform cards, method steps, project cards, FAQ and CTA have load/scroll reveal; media/cards have hover depth and image movement; FAQ is keyboard/click accessible.

## QA Evidence

- Responsive screenshots:
  - 1440px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-1440-final.png`
  - 1280px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-1280-final.png`
  - 1024px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-1024-final.png`
  - 768px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-768-final.png`
  - 390px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-390-final.png`
- QA report: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/social-media/social-media-qa-report.json`
- Metrics: 1440, 1280, 1024, 768 and 390px returned no horizontal overflow, no measured text overflow, no failed images, no missing alt attributes, no browser errors and 8/8 social media scenes visible.
- Navigation: shared header marks `Nos expertises` active; mobile menu opens at 390px and exposes the expected links.
- SEO/GEO: one H1, canonical URL, target meta description, Open Graph image, JSON-LD `Service`, `BreadcrumbList` and `FAQPage`; Lemon Mind contact data and Maroc/Casablanca context are reused through the shared site data.
- Accessibility: all content images have alt text, FAQ items expose `aria-expanded`/`aria-controls`, and interaction tests confirm one FAQ item opens while the previous item closes.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: the exact social-media-manager hero portrait and some generated mockup imagery are not present in the local approved asset set, so the closest Lemon Mind assets are used without inventing visuals.
- P3 accepted: implementation is +436px taller than the normalized mock because it preserves the shared Lemon Mind header/footer and fully responsive non-flattened sections.
- P3 accepted: platform logos are loaded from Simple Icons CDN; local platform logos were not present in the project assets.

## Validation

- Typecheck: `npm run check` passed with 0 errors, 0 warnings and 0 hints.
- Production build: `npm run build` passed with the Astro Node server adapter.
- Diff hygiene: `git diff --check` passed.
- Lint: no `lint` script configured in `package.json`; `npm run lint --if-present` completed as a no-op.
- Tests: no `test` script configured in `package.json`; `npm test --if-present` completed as a no-op, and a dedicated headless QA script passed all page checks.

---

# Lemon Mind Contact / Parler de votre projet — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-47d6efa5-6299-4c61-8e7c-345b8fd09f4a.png`
- Implementation route: `http://127.0.0.1:4323/contact`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-1440-final.png`
- Normalized source path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/reference-contact-normalized-1440.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-1440-overlay-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-1440-diff-final.png`
- Side-by-side path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-1440-side-by-side-final.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- State: page loaded, all reveal scenes visible, FAQ closed by default.
- Source pixels: 1024 x 1536.
- Normalized source pixels: 1440 x 2490.
- Implementation pixels: 1440 x 2490.
- Density normalization: source resized to the final implementation height for visual overlay and diff.

## Required Fidelity Surfaces

- Structure: `/contact` route implemented with real Astro sections for hero, project form, need picker, post-submit process, direct contact, FAQ, final CTA and shared footer.
- Shared system: existing Header, Footer, buttons, typography tokens, containers, icon language, contact data and reveal/hover motion are reused.
- Content: the validated contact page titles, CTAs, form labels, FAQ, order and service choices are preserved without inventing logos, clients, coordinates or results.
- Assets: only local project assets are used. No complete mockup image is used as a background, no flattened section is used and no canvas recreation is used.
- Form behavior: client and server validation are both active, honeypot anti-spam is present, file upload accepts PDF/PPT/PPTX/DOC/DOCX/ZIP up to 10MB and the success state honestly opens a prefilled email because no mail service is configured.
- Motion: page sections animate on load/scroll, project choice cards and direct-contact/map surfaces have hover depth, and mobile uses the same interactions without horizontal overflow.

## QA Evidence

- Responsive screenshots:
  - 1440px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-1440-final.png`
  - 1280px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-1280-final.png`
  - 1024px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-1024-final.png`
  - 768px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-768-final.png`
  - 390px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/contact/contact-390-final.png`
- Metrics: 1440, 1280, 1024, 768 and 390px returned no horizontal overflow, no measured text overflow, no missing image alt attributes and no browser console errors.
- Navigation: shared desktop header and mobile menu expose the Contact route and preserve the existing page system.
- SEO/GEO: one H1, canonical URL, target meta description, Open Graph image, JSON-LD `ContactPage`, `Organization`, `BreadcrumbList` and `FAQPage`; Casablanca, Maroc and the real phone/email are reused.
- Accessibility: required fields, errors, `aria-invalid`, `aria-describedby`, accessible FAQ panels and visible focus states are present.
- Functional tests: API rejects missing fields, invalid file type and honeypot submissions; valid submissions return a prefilled `mailto:`; project choice cards prefill the form; FAQ opens one item at a time; phone, email and WhatsApp links resolve to the real Lemon Mind contact data.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: the hero visual differs from the generated mock because the exact woman-at-laptop visual is not present in the local asset set; the closest approved local Lemon Mind production/meeting assets are used instead.
- P3 accepted: the shared Lemon Mind header/footer are intentionally reused and therefore do not copy the mock's temporary standalone wordmark/header treatment.
- P3 accepted: no external booking or transactional email provider is configured, so booking anchors to the form and the validated submit opens an email draft instead of showing a fake sent state.

## Validation

- Typecheck: `npm run check` passed with 0 errors and 0 warnings.
- Production build: `npm run build` passed with the Astro Node server adapter.
- Diff hygiene: `git diff --check` passed.
- Lint: no `lint` script configured in `package.json`.
- Tests: no `test` script configured in `package.json`; dedicated Playwright/API smoke checks were run locally for this page.

---

# Lemon Mind Production de contenu — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/Users/salaheddinemimouni/Downloads/ChatGPT Image Sep 6, 2026, 11_24_21 PM.png`
- Implementation route: `http://127.0.0.1:4323/expertises/production-contenu-maroc`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-1440-final.png`
- Normalized source path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/reference-production-normalized-1440.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-1440-overlay-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-1440-diff-final.png`
- Side-by-side path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-1440-side-by-side-final.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- State: page loaded, all reveal scenes visible, FAQ closed by default.
- Source pixels: 824 x 1908.
- Normalized source pixels: 1440 x 3334.
- Implementation pixels: 1440 x 4210.
- Density normalization: source resized proportionally to 1440px width before overlay/diff.

## Required Fidelity Surfaces

- Structure: `/expertises/production-contenu-maroc` route implemented with real Astro sections for hero, vision, production capabilities, method, UGC creators, platform formats, showreel/coulisses, production projects, FAQ, final CTA and shared footer.
- Shared system: existing Header, Footer, buttons, typography tokens, containers, colors and motion language are reused.
- Content: supplied titles, CTAs, FAQ, order and service/prestation names are preserved without inventing clients, logos, numeric results, testimonials or missing visuals.
- Assets: only available local project assets are used. No full-page screenshot background, no canvas recreation and no OCR text source are used.
- Motion: sections reveal on load/scroll with a fallback for long mobile captures; cards/media retain hover depth and image movement; FAQ remains an accessible one-at-a-time accordion.

## QA Evidence

- Responsive screenshots:
  - 1440px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-1440-final.png`
  - 1280px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-1280-final.png`
  - 1024px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-1024-final.png`
  - 768px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-768-final.png`
  - 390px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-content/production-390-final.png`
- Metrics: 1440, 1280, 1024, 768 and 390px returned no global horizontal overflow, no measured text overflow, no missing image alt attributes and no console/page errors.
- Reveal: 10/10 animated page scenes are visible after the final capture pass at all tested widths.
- SEO/accessibility: one H1, active `Nos expertises` nav state on the nested route, canonical URL, target meta description, JSON-LD `Service`, `BreadcrumbList` and `FAQPage`, no `href="#"`.
- Header/hero: logo and hero eyebrow no longer overlap after the final spacing pass.
- FAQ: all items are closed on load to match the source visual; clicking one item opens it and closes the others.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: implementation is +876px taller than the normalized low-resolution full mock. The page was tightened from 5949px to 4210px while preserving the existing shared header/footer, real responsive sections, accessible FAQ and readable copy.
- P3 accepted: some imagery differs from the generated mock where exact production/camera visuals are not available in the local approved asset set.
- P3 accepted: the showreel CTA links to existing realisations because no real video asset is available; no inactive video modal or fake playable video was added.

## Validation

- Typecheck: `npm run check` passed with 0 errors and 0 warnings.
- Production build: `npm run build` passed and generated `/expertises/production-contenu-maroc/index.html`.
- Lint: no `lint` script configured in `package.json`.
- Tests: no `test` script configured in `package.json`.

---

# Lemon Mind Nos Réalisations — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-62dafa05-3a95-45d0-8c66-a6749434fdf9.png`
- Implementation route: `http://127.0.0.1:4323/realisations`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-1440-qa-final.png`
- Normalized source path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/reference-realisations-normalized-1440.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-1440-overlay-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-1440-diff-final.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- State: page loaded, scroll-revealed sections triggered, counters completed.
- Source pixels: 750 x 2097.
- Normalized source pixels: 1440 x 4026.
- Implementation pixels: 1440 x 4611.
- Density normalization: source resized proportionally to 1440px width before overlay/diff.

## Required Fidelity Surfaces

- Structure: `/realisations` route implemented with real Astro components for hero, filters, featured project, project grid, impact numbers, behind-the-scenes, contribution, testimonial, final CTA and shared footer.
- Shared system: existing header, footer, buttons, typography tokens, CSS variables and motion language are reused.
- Content: supplied titles, CTAs, order, statistics and neutral placeholder handling are preserved without inventing clients, logos, testimonials or missing visuals.
- Assets: only available project assets are used. The unavailable automobile visual is represented by a clean `Visuel à intégrer` placeholder.
- Motion: hero collage, filters, project cards, impact counters, behind-scenes frames, contribution cards, testimonial controls and CTA have load/hover/interactivity states.

## QA Evidence

- Responsive screenshots:
  - 1440px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-1440-qa-final.png`
  - 1280px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-1280-qa-final.png`
  - 1024px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-1024-qa-final.png`
  - 768px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-768-qa-final.png`
  - 390px: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-390-qa-final.png`
  - 390px menu open: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/realisations/realisations-390-menu-open-final.png`
- Metrics: 1440, 1280, 1024, 768 and 390px returned no global horizontal overflow.
- Reveal: 8/8 animated sections became visible after the scroll pass on every tested width.
- Counters: final values verified as `120+`, `500+`, `300+`, `350M+`, `15+`, `+4,8%`.
- Filters: keyboard activation on `Production` shows 4 matching cards: Marque sportive, Marque FMCG, Institution, Marque automobile.
- SEO/accessibility: one H1, active `Nos réalisations` nav state, canonical URL, meta description, JSON-LD, no `href="#"`, no missing image alt attributes.
- Mobile navigation: shared details/summary menu opens at 390px, exposes all mobile nav links and has an explicit aria label.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: the page is +585px taller than the normalized low-resolution full mock because it keeps reusable site header/footer, accessible real sections and non-flattened animation states.
- P3 accepted: some photography differs from the mockup where matching validated assets are not present in the local project.

## Validation

- Typecheck: `npm run check` passed with 0 errors and 0 warnings.
- Production build: `npm run build` passed and generated `/realisations/index.html`.
- Lint: no `lint` script configured in `package.json`.
- Tests: no `test` script configured in `package.json`.

---

# Lemon Mind Influence Marketing — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/Users/salaheddinemimouni/Downloads/ChatGPT Image Sep 6, 2026, 10_34_29 PM.png`
- Implementation route: `http://127.0.0.1:4323/expertises/influence-marketing-maroc`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/influence-1440-final-candidate.png`
- Full-view comparison path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/compare-1440-final.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/overlay-1440-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/diff-1440-final.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- State: loaded page with scroll-revealed sections; FAQ first item open by default.
- Source pixels: 719 x 2186.
- Normalized source pixels: 1440 x 4378.
- Implementation pixels: 1440 x 4891.
- Density normalization: source resized proportionally to 1440px width before overlay/diff.

## Required Fidelity Surfaces

- Fonts and typography: existing Anton + Manrope stack reused; one H1 only; titles use the same condensed uppercase language as the Lemon Mind site; no measured text overflow at 1440, 1280, 1024, 768 or 390px.
- Spacing and layout rhythm: section order, dark/light alternation, large editorial media, 1360px desktop container and no global horizontal overflow verified. The implementation remains taller than the normalized generated mock because it preserves real footer/header components and avoids flattening the mockup.
- Colors and visual tokens: Lemon yellow, black, off-white, mint, violet and coral reuse project variables; gradients are CSS-generated, not raster sections.
- Image quality and asset fidelity: only official/project assets are used. Exact mockup portraits are not reused as flattened imagery; this is an accepted asset constraint rather than a code defect.
- Copy and content: all supplied page copy, CTA labels, FAQ questions/answers, section order and neutral no-fake-results rule are implemented from the prompt text.

## Full-View Comparison Evidence

- Hero, vision, process, casting, production, formats, amplification, réalisations, FAQ, CTA and footer appear in the required order.
- The desktop page uses real HTML/CSS/JS sections with no full-page mock background, no canvas recreation and no OCR text extraction.
- Header marks `Nos expertises` active on the nested route.
- Main content has no `href="#"` or empty CTA destination.
- SEO metadata, canonical, Open Graph/Twitter inherited from `BaseLayout`, and JSON-LD `Service`, `BreadcrumbList`, `FAQPage` are present.

## Focused Region Comparison Evidence

- Hero: preserved dark cinematic composition, left editorial copy, right media, phone, badges and performance card. Image subjects differ because only validated project images are allowed.
- Casting/Production: responsive collages use project media with object-fit/object-position and hover depth; no image is stretched.
- Amplification: dashboard is neutral and does not publish invented numeric performance values.
- FAQ: accordion is semantic and keyboard-opened in QA; exactly one item is open after interaction.
- Mobile: menu opens inside the 390px viewport; reduced-motion leaves no hidden reveal content.

## Findings

- No remaining actionable P0/P1/P2 issues after the final pass.
- P3 accepted: implementation height is +513px versus the normalized low-resolution mock. The visual rhythm was tightened from 7598px to 4891px and remains acceptable because real reusable components, full FAQ answers and validated assets are preserved.
- P3 accepted: hero/campaign imagery differs from the mockup where the mock shows generated portraits and dashboard values that are not available as approved project assets.

## Comparison History

- v1: implementation 1440 x 7598. Main issue: excessive vertical rhythm and unrevealed full-page capture without auto-scroll.
- v2: implementation 1440 x 5898. Fixed section density and captured with all scroll reveals triggered.
- v3: implementation 1440 x 5110. Further compacted hero, production, formats, amplification, projects and FAQ.
- v4: implementation 1440 x 4891. Final tightening; no measured horizontal overflow or text out of viewport.

## Responsive QA

- 1440px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/influence-1440-qa.png`
- 1280px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/influence-1280-qa.png`
- 1024px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/influence-1024-qa-v2.png`
- 768px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/influence-768-qa-v2.png`
- 390px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/influence-390-qa-v2.png`
- Mobile menu + reduced-motion screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-marketing/influence-390-menu-reduced-motion.png`
- Metrics: 1440, 1280, 1024, 768 and 390px returned `overflow: 0`, no bad text bounds, one H1, no empty main links and no console errors.

## Validation

- Lint: no `lint` script configured in `package.json`.
- Typecheck: `npm run check` passed.
- Tests: no `test` script configured in `package.json`.
- Production build: `npm run build` passed and generated `/expertises/influence-marketing-maroc/index.html`.

---

# Lemon Mind Homepage — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/tmp/lemonmind_codex_handoff_read/lemonmind_codex_handoff/reference/lemonmind-homepage-approved-1448x4344.png`
- Normalized source path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/reference-approved-normalized-1440.png`
- Implementation screenshot path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/homepage-phase2-1440.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/homepage-phase2-overlay-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/homepage-phase2-diff-final.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- State: homepage initial state, no hover, no interaction.
- Source pixels: 1448 x 4344.
- Normalized source pixels: 1440 x 4320.
- Final implementation pixels: 1440 x 4323.
- Density normalization: source resized proportionally from 1448px to 1440px width before overlay/diff.

## Full-View Comparison Evidence

- Final structural height delta is +3px versus the normalized reference.
- Section order and color alternation match the approved visual: dark hero, multicolor KPIs, light logos, pastel services, dark influence, mint production, light process, dark realizations, light testimonial, multicolor CTA, dark footer.
- The 1360px desktop container and approximate 40px gutters are preserved for primary grid sections.
- No full-page mockup image, OCR output, or canvas recreation is used.

## Focused Region Comparison Evidence

- Header/Hero: hero H1 now starts at x=80 and uses the same four-line structure as the approved visual. CTA row, dark background and right collage are aligned structurally.
- KPI/Trust/Services: card row, logo band and 3x2 services grid match the intended widths and sequence. Icon fidelity remains limited by missing official icon assets.
- Influence: section height is 448px, matching the normalized crop target. Cards and summary column retain the approved hierarchy while avoiding invented creator data.
- Production/Process: combined section block is aligned to the source crop rhythm after reducing livrable-card and collage dimensions.
- Realisations/Testimonial/CTA/Footer: block boundaries align within the final +3px page delta. The CTA highlight on `grande réussite ?` now matches the reference treatment.

## Findings

- No remaining actionable P0/P1/P2 structural mismatches after iteration v6.
- Responsive QA completed at 1280px, 1024px, 768px and 390px. All tested viewports report `scrollWidth == clientWidth` and no measured horizontal overflow offenders.
- Mobile navigation opens inside the 390px viewport, with visible links and CTA.

## Accepted Constraints / P3 Follow-Up Polish

- Image and logo fidelity differs where the approved mockup shows assets that are not present in the project. These are tracked in `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/MISSING_ASSETS.md`.
- Realisation cards remain intentionally marked as missing data rather than inventing campaign names, clients, images or results.
- Creator cards keep explicit placeholder labels where names, portraits and stats are not supplied.
- Some icon details are simplified because no official icon set or exact vector assets were provided.

## Comparison History

- v1: implementation 1440 x 4699, normalized source 1440 x 4320, delta +379px. Main issue: excessive vertical rhythm in Production, Process, Realisations, CTA and Footer.
- v2: implementation 1440 x 4365, delta +45px. Fixed section heights and reduced oversized central/footer areas.
- v3: implementation 1440 x 4279, delta -41px. Identified Production + Process as too short after tightening.
- v4: implementation 1440 x 4323, delta +3px. Restored natural Production/Process padding to align section boundaries.
- v5/v6: preserved 1440 x 4323 and corrected hero H1 line breaks plus CTA yellow emphasis.

## Implementation Checklist

- Check desktop source at 1440px: complete.
- Create normalized reference: complete.
- Create overlay and diff: complete.
- Correct container/gutter/section-height/column/title/spacing/card/CTA structural drift: complete.
- Build responsive compositions for 1280, 1024, 768 and 390px: complete.
- Capture responsive screenshots at 1440, 768 and 390px: complete.
- Run Astro checks and production build: complete.

## Responsive QA

- 1440px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/responsive-homepage-1440.png`
- 1280px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/responsive-homepage-1280.png`
- 1024px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/responsive-homepage-1024.png`
- 768px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/responsive-homepage-768.png`
- 390px screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/responsive-homepage-390.png`
- Mobile menu open screenshot: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/responsive-mobile-nav-390-open.png`
- Metrics: 1440, 1280, 1024, 768 and 390px all returned zero DOM overflow offenders after the final pass.
- Validation: `npm run check` passed; `npm run build` passed.
- Project scripts not configured: `npm run lint`, `npm run typecheck`, and `npm test`.

## Services Hover QA

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_ahc5kw/Screenshot 2026-09-06 at 16.19.41.png`
- Implementation normal state: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/services-hover-normal-1440.png`
- Implementation hover state: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/services-hover-active-1440.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- State tested: first service card hovered with pointer inside the card.
- Result: passed.

Findings:
- The services title is reduced from the previous global 54px section-heading scale to a dedicated 46px desktop scale.
- The hover state is visible without breaking the card grid: the card lifts, receives a pointer-following light field, the number mark scales/rotates, and the arrow button becomes active.
- Browser metrics report `overflowX: 0`, title font size `46px`, and no console errors.

Comparison history:
- v1: added the service title class and pointer-aware hover animation.
- v2: corrected selector specificity so the service title overrides the global heading size.
- v3: added responsive title sizes and reduced-motion/touch safeguards.

## Influence Slider QA

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_2E6QBn/Screenshot 2026-09-06 at 16.20.28.png`
- Previous implementation reference: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_NsfmEO/Screenshot 2026-09-06 at 16.20.36.png`
- Implementation initial state: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-slider-final-1440-initial.png`
- Implementation after 3 seconds: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-slider-final-1440-after-3s.png`
- Implementation after 6 seconds: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-slider-final-1440-after-6s.png`
- Implementation hover state: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-slider-final-1440-hover.png`
- Comparison preview: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/influence-slider-final-comparison-preview.jpg`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- Result: passed.

Findings:
- The static 3-card influence row has been replaced with a real 5-card slider using a masked viewport, animated track, previous/next controls, and accessible dot buttons.
- Two new generic IA-generated WebP assets were added for the 4th and 5th contents: `/assets/lemon/influence-ai-beauty-creator.webp` and `/assets/lemon/influence-ai-food-creator.webp`.
- The section now better matches the source proportions: 520px desktop section height, 3 visible cards, larger 318px creator cards, compact summary card, dark grid background and yellow/magenta lighting.
- Autoplay moved the track after 3 seconds and again after 6 seconds. The hover state lifts the visible card by 8px and zooms the image to 1.08.
- Browser metrics report 5 total slides, 5 dots, 3 visible cards at 1440px, and `overflowX: 0`.

Responsive check:
- 1440px: 3 visible cards, section height 520px, no overflow.
- 1024px: 2 visible cards, no overflow.
- 768px: 2 visible cards with summary stacked below, no overflow.
- 390px: 1 visible card, no overflow.

Comparison history:
- v1: current implementation had a static row with only 3 placeholder-style cards.
- v2: rebuilt the section as a slider and added 2 IA-generated content assets.
- v3: recalibrated card/section proportions to better match the supplied PJ and removed visible "Concept IA" copy from the page.

## Production Block Motion QA

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_gYuoIw/Screenshot 2026-09-06 at 16.21.29.png`
- Previous implementation reference: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_uBp2tl/Screenshot 2026-09-06 at 16.21.37.png`
- Implementation viewport capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/viewport-iab-1440-current.png`
- Implementation hover capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/production-redone-1440-hover.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- Result: passed.

Findings:
- The Production block keeps the approved left copy, the central 1+2 image collage and the 4 right deliverable boxes while giving the section a more dynamic PJ1-style rhythm.
- The section now animates in when it enters view, with staggered copy, image and card reveals.
- The deliverable boxes and collage images are linked on pointer hover: hovering a box activates the matching visual, adds a yellow focus edge and gently zooms the image.
- Browser metrics report a 1360px grid inside the 1440px viewport and `horizontalOverflow: false`.
- Validation: `npm run check` passed; `npm run build` passed.

## Process Timeline Motion QA

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_R5CHsy/Screenshot 2026-09-06 at 16.22.18.png`
- Previous implementation reference: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_RAVLZK/Screenshot 2026-09-06 at 16.22.49.png`
- Implementation normal capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/process-redone-1440-viewport.png`
- Implementation hover capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/process-redone-1440-hover.png`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- Result: passed.

Findings:
- The oversized full-width title from the previous implementation has been replaced by a compact left intro matching the PJ1 hierarchy.
- The process steps now use local Richmedia SVG icon assets copied into `/assets/lemon/process-icons/`.
- The timeline uses dotted connectors with arrow heads, then reveals in sequence when the section enters view.
- Hovering a step enlarges the node, warms the icon, highlights the active copy and lights the already-crossed connectors.
- Browser metrics report a 1360px layout inside the 1440px viewport, 5 loaded icons and `horizontalOverflow: false` for the process state.
- Validation: `npm run check` passed; `npm run build` passed.

## Projects Slider Recut QA

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_ksQ1rm/Screenshot 2026-09-06 at 16.23.01.png`
- Previous implementation reference: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_u1JJA4/Screenshot 2026-09-06 at 16.23.21.png`
- Implementation initial capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/projects-slider-final-1440-recut-initial.jpg`
- Implementation after 3 seconds: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/projects-slider-final-1440-recut-after-3s.jpg`
- Implementation hover capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/projects-slider-final-1440-hover.jpg`
- Comparison preview: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/projects-slider-comparison-pj1-vs-implementation.jpg`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- Result: passed.

Findings:
- The placeholder grid from PJ2 has been replaced with a real horizontal image slider using local Richmedia project assets only.
- The section now follows the PJ1 composition: compact title area, yellow CTA on the right, four large image cards, side controls and centered pagination dots.
- Autoplay is active every 3 seconds: dot index moved from `0` to `1`, with the track translated by one card step.
- Mouse over is active on visible cards: hovered image scales to `1.08`, card edge warms to yellow and the pointer-following light pass appears.
- Browser metrics report 4 visible cards at 1440px, each approximately `327px x 270px`, with `overflowX: 0`.

Accepted constraints / P3 polish:
- Card photography differs from PJ1 where Lemon Mind-specific réalisation visuals were not supplied. The implementation uses real local Richmedia assets rather than invented clients, fake campaign data or placeholder boxes.

## Testimonial Recut QA

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_lVdsrA/Screenshot 2026-09-06 at 16.23.45.png`
- Previous implementation reference: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_ZA5IP7/Screenshot 2026-09-06 at 16.24.04.png`
- Implementation clean capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/testimonial-redone-1440-final-best.jpg`
- Implementation hover capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/testimonial-redone-1440-final-best-hover.jpg`
- Comparison preview: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/testimonial-comparison-pj1-vs-implementation-best.jpg`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- Result: passed.

Findings:
- The testimonial block has been recut from the oversized PJ2 layout into a compact PJ1-style band.
- The left portrait scene now uses the real local leader portrait, a coral outline, yellow block, violet `99` badge and soft hover glow.
- The quote is reduced and widened to 3 readable lines at 1440px, with author attribution kept from the existing content source.
- Mouse over is active on the whole band: the portrait lifts, the image scales to `1.065`, the badge rotates slightly and the decorative elements shift without layout reflow.
- Browser metrics report section height `314px`, portrait `356px x 248px`, quote font `26px`, and `overflowX: 0`.

## Final CTA + Footer Recut QA

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_10tZ5s/Screenshot 2026-09-06 at 16.24.22.png`
- Previous implementation reference: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_bKQHcS/Screenshot 2026-09-06 at 16.24.37.png`
- Implementation capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/cta-footer-redone-1440-v2.jpg`
- Comparison preview: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/cta-footer-comparison-pj1-vs-implementation-v2.jpg`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- Result: passed.

Findings:
- The final CTA and footer have been recut into one compact visual scene based on PJ1, with the dark wave transition restored.
- The CTA title is no longer colliding with the stickers; the button remains centered and prominent.
- The footer brand column is wider and tighter, keeping logo, project question, contact and social links visible inside the block.
- Footer navigation columns are aligned in a 1360px desktop container and the right pixel decoration is restored.
- Browser metrics report CTA height `217px`, footer height `344px` and `overflowX: 0`.
- Validation: `npm run check` passed; `npm run build` passed.

## Hero Phone Overlay Fix QA

- Source issue path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_B8E0nE/Screenshot 2026-09-06 at 17.25.53.png`
- Implementation capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/hero-phone-fixed-1440.jpg`
- Detail crop: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/hero-phone-fixed-crop-1440.jpg`
- Viewport: 1440px wide, desktop, deviceScaleFactor 1.
- Result: passed.

Findings:
- The yellow phone overlay was reduced from a large full-width bar to a compact bottom-right pill.
- The phone metrics `2.4M`, `Vues`, `112K` and `Likes` remain readable.
- Browser metrics report phone pseudo-overlay `96px x 24px` and `overflowX: 0`.
- Validation: `npm run check` passed; `npm run build` passed.

## Nos Expertises Page QA

- Route: `/nos-expertises`
- Full-page 1440px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-qa/nos-expertises-full-1440.jpg`
- Full-page 1024px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-qa/nos-expertises-full-1024.jpg`
- Full-page 768px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-qa/nos-expertises-full-768.jpg`
- Full-page 390px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-qa/nos-expertises-full-390.jpg`
- Mobile results/FAQ crop after fix: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-qa/expertises-09-10-390-v3.jpg`
- Result: passed.

Findings:
- The page contains 11 real HTML/CSS/JS sections plus the shared footer, with `/nos-expertises/index.html` generated in production.
- The desktop composition follows the supplied block references: dark hero, integrated approach, influence, production, complementary expertises, tailored devices, agility, method, results, FAQ and final CTA.
- Influence marketing and production de contenu are preserved as the two signature/highest-value expertise sections.
- All visible content comes from the local data source and existing project assets; missing visuals remain clean placeholders.
- Responsive checks passed at 1440, 1024, 768 and 390px with `scrollWidth` equal to viewport width at every breakpoint.
- Mobile navigation opens inside the 390px viewport with 6 links and no overflow.
- SEO/GEO checks passed: French page title and meta description, canonical `/nos-expertises`, `og:locale=fr_MA`, one JSON-LD Service schema, `areaServed=Maroc`.
- Validation: `npm run lint --if-present` passed with no script defined; `npm test --if-present` passed with no script defined; `npm run check` passed; `npm run build` passed.

## Nos Expertises Final CTA/Footer Polish QA

- Source issue path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_MPcEmi/Screenshot 2026-09-06 at 19.28.57.png`
- Implementation capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-final-cta-footer-polish-1440-final.png`
- Mobile spot-check capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-final-cta-footer-polish-390-final.png`
- Viewport: 1440px wide desktop plus responsive checks at 1024, 768 and 390px.
- Result: passed.

Findings:
- The CTA title now fits as a compact two-line desktop composition in a 1360px container.
- The CTA panel height was reduced to `222px` on desktop and the oversized visual gap before the footer was removed.
- The footer pixel decoration is now self-contained in `global.css`, so it no longer occupies layout space on `/nos-expertises`.
- Desktop footer height is reduced from the previous `437px` measured state to `303px`.
- Responsive checks report `scrollWidth` equal to the viewport at 1440, 1024, 768 and 390px.
- Validation: `npm run check` passed; `npm run build` passed.

## Nos Expertises Pixel QA Final Pass

- Reference mockup: `/Users/salaheddinemimouni/Downloads/Codex Image 6 Sept 2026, 19_23_36.png`
- 1440px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-pixel-qa/final/nos-expertises-1440-final-loaded.png`
- 1024px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-pixel-qa/final/nos-expertises-1024-final-loaded.png`
- 768px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-pixel-qa/final/nos-expertises-768-final-loaded.png`
- 390px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-pixel-qa/final/nos-expertises-390-final-loaded.png`
- Final side-by-side: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-pixel-qa/final/side-by-side-ref-current-1440-final.png`
- Final overlay: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-pixel-qa/final/overlay-ref-current-1440-final.png`
- Final diff: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-pixel-qa/final/diff-ref-current-1440-final.png`
- Result: passed.

Findings:
- The `/nos-expertises` desktop page now measures `1440 x 4348px` against the normalized mockup at `1440 x 4332px`, a final global delta of `+16px`.
- Section banding is aligned to the mockup: hero `632px`, integrated approach `586px`, influence `460px`, devices `420px`, method `240px`, FAQ `287px`, CTA `164px`, footer `281px`.
- The integrated approach block was recut to match the validated composition: title left, explanatory copy right, and three cards in a second row.
- The desktop process was compacted into a short horizontal method band matching the full-page mockup, while the explanatory copy/CTA remains visible on tablet/mobile.
- Final responsive captures at `1440`, `1024`, `768` and `390px` report `scrollWidth` equal to viewport width and `brokenImages: 0`.
- SEO/GEO checks remain valid: one `h1`, French title/meta description, canonical `/nos-expertises`, `og:locale=fr_MA`, and JSON-LD Service schema with `areaServed=Maroc`.
- Remaining visual differences are asset-source differences only: the implementation continues to use real local project assets and clean placeholders instead of inventing missing campaign/client imagery.
- Validation: `npm run check` passed; `npm run build` passed.

## Agility Block Overlap And Motion QA

- Source issue path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/TemporaryItems/NSIRD_screencaptureui_jTUZta/Screenshot 2026-09-06 at 19.29.29.png`
- 1440px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-agility-fix/agility-1440-final.png`
- 1440px hover capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-agility-fix/agility-1440-hover-final.png`
- 1024px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-agility-fix/agility-1024-full.png`
- 768px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-agility-fix/agility-768.png`
- 390px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/expertises-agility-fix/agility-390.png`
- Result: passed.

Findings:
- The group agility block has been restored as real Astro/HTML content using `groupAgility` data and existing local assets.
- The handwritten “Plus loin ensemble.” detail is now positioned above the card stack on desktop and hidden on tablet/mobile where it would not fit cleanly.
- DOM geometry checks at 1440px report no intersection between the handwritten note and any agility card.
- Hover motion is active on the cards with translate/rotate/scale, directional shine and stronger shadow; load motion is active through the existing viewport-triggered `is-visible` pattern.
- Responsive checks at 1024, 768 and 390px report `scrollWidth` equal to viewport width and no overflowing child elements in the agility block.
- Validation: `npm run check` passed; `npm run build` passed.

---

# Lemon Mind Media & Amplification — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-2f222db7-fbbc-4570-a44e-d4a5a63fc8da.png`
- Implementation route: `http://127.0.0.1:4323/expertises/media-amplification-maroc`
- 1440px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/media-amplification-1440-final.png`
- 1280px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/media-amplification-1280-final.png`
- 1024px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/media-amplification-1024-final.png`
- 768px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/media-amplification-768-final.png`
- 390px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/media-amplification-390-final.png`
- Normalized source path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/reference-media-amplification-normalized-1440.png`
- Overlay path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/media-amplification-1440-overlay-final.png`
- Diff path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/media-amplification-1440-diff-final.png`
- Side-by-side path: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/screenshots/media-amplification/media-amplification-1440-side-by-side-final.png`

## Findings

- The `/expertises/media-amplification-maroc` route is implemented with real Astro components for hero, vision, media services, platforms, method, projects, FAQ, final CTA and the shared global footer.
- The shared Lemon Mind header, footer, typography, button styles, container rhythm, icon language and existing motion pattern are reused.
- The page uses only local Lemon Mind assets for campaign imagery and official Simple Icons platform logos; no screenshot, flattened section, canvas, fake client, fake KPI or unvalidated ROAS is published.
- The contact CTA points to `/contact?projectType=Media%20%26%20Amplification#contact-form`, and the contact form now accepts and preselects `Media & Amplification`.
- Responsive captures at 1440, 1280, 1024, 768 and 390px were reviewed; no horizontal scroll, cut text, malformed image ratio or CTA/footer overlap remains visible.
- Browser DOM QA on the live page reports `scrollWidth` equal to viewport width, one H1, five FAQ buttons with `aria-controls`/`aria-expanded`, one JSON-LD block, canonical URL and target meta description.
- Interaction QA passed: the FAQ opens one item at a time, and the contact URL preselects `Media & Amplification` in the existing contact form.
- SEO/GEO checks passed: title, meta description, canonical, Open Graph image, `Organization`, `Service`, `BreadcrumbList`, `FAQPage`, Maroc service area and internal links to Social Media, Influence, Production, Réalisations and Contact.
- P3 accepted: the normalized reference mockup is `1440 x 2357px` while the implementation is `1440 x 2661px`; the height delta comes from preserving the shared Lemon Mind header/footer system, accessible real sections and available local assets instead of flattening or inventing missing visuals.

## Validation

- Typecheck: `npm run check` passed with 0 errors, 0 warnings and 0 hints.
- Production build: `npm run build` passed with the Astro Node server adapter.
- Diff hygiene: `git diff --check` passed.
- Lint: no `lint` script configured in `package.json`; `npm run lint --if-present` completed as a no-op.
- Tests: no `test` script configured in `package.json`; `npm test --if-present` completed as a no-op.

---

# Lemon Mind L’Équipe — Design QA

final result: passed

## Source And Implementation

- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-502e25c5-cd52-4a22-a57d-2ab2d5835009.png`
- Source prompt path: `/Users/salaheddinemimouni/.codex/attachments/c252e955-0cfb-48f8-b5cd-9a5948eef661/pasted-text.txt`
- Source portraits URL used during development only: `https://www.richmedia.ma/equipe/`
- Implementation route: `http://127.0.0.1:4323/agence/equipe`
- Desktop capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-1440-full-final.png`
- 1024px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-1024-full-final.png`
- 768px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-768-full-final.png`
- 390px capture: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-390-full-final.png`
- Mobile section QA: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-mobile-section-contact-sheet.png`
- Normalized reference: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-reference-normalized-1440.png`
- Overlay: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-1440-overlay-final.png`
- Diff: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-1440-diff-final.png`
- Side-by-side: `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/qa/team/equipe-1440-side-by-side-final.png`

## Findings

- The `/agence/equipe` route is implemented with real Astro components for hero, values, leadership, departments, directory, culture and recruitment CTA.
- Shared Header, Footer, Lemon Mind logo, menu order, agency submenu, expertise mega menu, buttons, typography tokens and motion system are reused.
- The page contains the 25 official Richmedia team profiles and the three requested leadership profiles only; no fake names, bios or LinkedIn links were added.
- The 25 official portraits were downloaded locally to `/Users/salaheddinemimouni/Documents/New project/lemon-mind-astro/public/assets/lemon/team/`; no runtime hotlink remains.
- Desktop fixes made during QA: hero H1 reduced to the validated 3-line rhythm, annuaire annotation moved into its own grid column, annuaire title widened, recruitment CTA compacted, and card hover transform restored after reveal animation.
- Responsive fixes made during QA: mobile filters now wrap instead of clipping labels, and the mobile culture carousel no longer shows cut text on adjacent cards.
- Responsive captures at 1440, 1024, 768 and 390px have exact screenshot widths matching the requested viewport widths, so no global horizontal overflow was detected.
- Browser interaction QA passed: directory filters update `aria-pressed`, the Client service filter shows 6 official profiles, card hover now changes shadow and transform, and the agency submenu marks `L’équipe` as current.
- SEO/GEO checks passed: one H1 with exact accessible label, target title/meta description, canonical `/agence/equipe`, Open Graph image, JSON-LD `Organization`, `CollectionPage`, `BreadcrumbList`, `ItemList`, and Maroc/Casablanca context.
- P3 accepted: the reference mockup uses generated collective/team imagery while the implementation is constrained to official available portraits and local Lemon Mind assets, which changes the hero visual and makes the page taller.

## Validation

- Lint: no `lint` script configured in `package.json`; `npm run lint --if-present` completed as a no-op.
- Tests: no `test` script configured in `package.json`; `npm run test --if-present` completed as a no-op.
- Typecheck: `npm run check` passed with 0 errors, 0 warnings and 0 hints.
- Production build: `npm run build` passed with the Astro Node server adapter.
- Diff hygiene: `git diff --check` passed.
