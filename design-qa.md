**Findings**
- No actionable P0/P1/P2 findings remain for the Certifications & Partenaires page.
- No actionable P0/P1/P2 findings remain for the Insights listing page.
- No actionable P0/P1/P2 findings remain for the Insights detail template.

**Evidence**
- Certifications visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-b0cdbb1c-3bd3-4ac9-be86-05b00207b09e.png`.
- Certifications route: `http://127.0.0.1:4324/agence/certifications`.
- Certifications captures: `qa/certifications/certifications-1440-final4.png`, `qa/certifications/certifications-1280-final3.png`, `qa/certifications/certifications-1024-final3.png`, `qa/certifications/certifications-768-final3.png`, `qa/certifications/certifications-390-final4.png`.
- Insights listing source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-51b9a60f-af23-41d4-b025-8e4320896166.png`.
- Insights listing route: `http://127.0.0.1:4323/insights`.
- Insights listing captures: `qa/insights/insights-1440.png`, `qa/insights/insights-1280.png`, `qa/insights/insights-1024.png`, `qa/insights/insights-768.png`, `qa/insights/insights-390.png`.
- Targeted lazy-load captures: `qa/insights/insights-390-latest.png`, `qa/insights/insights-390-experts.png`, `qa/insights/insights-768-latest.png`, `qa/insights/insights-1440-resources.png`.
- Current Insights detail visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-be68e5ab-9b76-4030-aebf-4dc84316f061.png`.
- Current Insights detail captures: `qa/insight-detail-current/detail-1440-final.png`, `qa/insight-detail-current/detail-1280.png`, `qa/insight-detail-current/detail-1024.png`, `qa/insight-detail-current/detail-768.png`, `qa/insight-detail-current/detail-390-final.png`.
- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-1153fbbf-0b3d-4f2b-b422-3d98b06ef5bf.png`.
- Implementation route: `http://127.0.0.1:4323/insights/combien-coute-campagne-influence-maroc`.
- Viewport captures: `qa/insight-detail/detail-1440-playwright.png`, `qa/insight-detail/detail-390-playwright.png`.
- Full-page captures: `qa/insight-detail/detail-1440-full-fix.png`, `qa/insight-detail/detail-1280-full-fix.png`, `qa/insight-detail/detail-1024-full-fix.png`, `qa/insight-detail/detail-768-full-fix.png`, `qa/insight-detail/detail-390-full-fix.png`.

**Required Fidelity Surfaces**
- Certifications page route `/agence/certifications` is integrated with global Header/Footer, active `L'agence` menu state, real submenu/footer links, six requested certifications, group attribution, and no invented verification URL or logo.
- Certification logos are rendered as text fallbacks because official badge files are not present in `public/assets`; the missing files and verification proofs are tracked in `MISSING_ASSETS.md`.
- Route: dynamic template is available at `/insights/[slug]`; first article is `/insights/combien-coute-campagne-influence-maroc`.
- Header/Footer: global components are reused, with `Insights` active through the existing navigation logic.
- Hero: dark editorial layout, breadcrumb, category pill, three-line H1 on desktop, author metadata, cover asset, handwritten annotation, and Lemon Mind location chip.
- Content model: reusable structured data now covers article metadata, keywords, cover image, introduction, key takeaways, sections, table, optional quote, FAQ, related articles, expertise links, optional resource, SEO fields, and status.
- Editorial integrity: no generated author identity, no fictive quote, no non-validated price, no fake resource download, and no associated-article links to draft pages.
- Body layout: desktop uses a real CSS two-column grid with sticky sidebar; tablet/mobile stack the content and expose the sommaire as an accessible accordion.
- Table: semantic table with configurable `budgetRange`; current unvalidated range displays `Selon le profil, les livrables et les droits`.
- Detail hero uses a dedicated `heroExcerpt`, preserving the longer article chapô while keeping the listing excerpt short.
- SEO/schema: article renders `Organization`, `BreadcrumbList`, `Person`, `BlogPosting`, and visible `FAQPage`; no `AggregateRating` or `Review`.

**Interactions Tested**
- Certifications route `/agence/certifications` returns `200`, keeps one H1, marks `L'agence` active, exposes `/agence/certifications` in the agency submenu and footer, and has no horizontal overflow at 1440, 1280, 1024, 768, and 390 px.
- Certifications schema was checked for `Organization`, `AboutPage`, `BreadcrumbList`, and `ItemList` usage with no `AggregateRating`, `Review`, or fake partner entity.
- Insights listing returns `200`, uses the global Header/Footer, and marks `Insights` active through the existing navigation logic.
- The nine editorial subjects and requested slugs are present in structured data.
- The published article `/insights/combien-coute-campagne-influence-maroc` is crawlable; all eight draft slugs redirect to `/insights` and are not linked from draft cards.
- Filters update `aria-pressed`, filter without reload, and keep article/expertise links in the HTML. Keyboard arrow, Home, and End navigation is implemented for the filter group.
- Responsive QA for the listing completed at 1440, 1280, 1024, 768, and 390 px with no horizontal overflow.
- Listing images were checked through section-targeted captures and direct asset responses.
- Route detail and route `/insights` return `200`.
- Author route `/insights/auteurs/amal-amazouz` returns `200`.
- Internal destinations tested: `/`, `/insights`, `/expertises/influence-marketing-maroc`, `/expertises/ugc-creator-content-maroc`, `/expertises/media-amplification-maroc`, `/realisations`, `/contact?projet=campagne-influence`.
- Detail page tested with no horizontal overflow at 1440, 1280, 1024, 768, and 390 px.
- Detail FAQ keyboard navigation supports Arrow Up, Arrow Down, Home, and End; accordion keeps one panel open at a time.
- Reading progress bar responds to article scroll position.
- Newsletter endpoint validates email and consent; valid submissions currently return the existing server-side configuration message because `NEWSLETTER_WEBHOOK_URL` is not configured.
- Responsive visual QA completed at 1440, 1280, 1024, 768, and 390 px with Chrome local via Playwright CLI.

**Validation**
- `npm run verify`: passed.
- `astro check`: 0 errors, 0 warnings, 0 hints.
- Production build: passed.

**Known Gaps**
- The downloadable guide card is hidden until a real PDF or landing page exists.
- Related article cards are hidden because the recommended articles remain draft and have no published detail pages yet.
- Newsletter submissions are not live until `NEWSLETTER_WEBHOOK_URL` is configured server-side.

final result: passed
