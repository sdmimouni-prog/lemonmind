**Findings**
- No actionable P0/P1/P2 findings remain.

**Evidence**
- Source visual truth path: `/var/folders/0c/xkrqjtv17ss72wnz_qd97zd80000gn/T/codex-clipboard-add6f681-7a58-452c-bcad-2bae5f5a0b35.png`
- Source pixels: `1024 x 1536`.
- Implementation route: `http://127.0.0.1:4323/agence/carrieres`.
- Implementation 1440 screenshot: `qa/careers-1440-final.png`.
- Implementation stitched page evidence: `qa/careers-1440-stitch.png`.
- Normalized comparison input: `qa/careers-comparison-1440.png`.
- Responsive captures: `qa/careers-1280.png`, `qa/careers-1024.png`, `qa/careers-768.png`, `qa/careers-390.png`.
- Viewport and density: desktop QA at `1440 x 1600` and stitch segments at `1440 x 900`; browser `devicePixelRatio: 2`; document width remained equal to viewport width.
- State: default page state, no active jobs in data, FAQ closed, empty opportunities state visible.

**Required Fidelity Surfaces**
- Fonts and typography: existing Lemon Mind fonts are reused (`Anton` for display, `Manrope` for body). Desktop H1 was corrected to two lines. No cut text or negative letter spacing found.
- Spacing and layout rhythm: page follows the maquette sections and Lemon Mind page rhythm. The footer is taller than the maquette because the global Footer component is reused as requested.
- Colors and visual tokens: Lemon yellow, dark hero, off-white sections, pastel cards, mint process band, and multicolor application gradient are present using site tokens.
- Image quality and asset fidelity: only existing Lemon Mind assets are used. The illustrative fake team/offers in the mock were not published as real content.
- Copy and content: requested page copy, FAQ copy, process copy, no-offer empty state, and form labels are present. No invented offers, dates, testimonials, clients, numbers, or team photos were added.

**Comparison History**
- Pass 1 found a P2 desktop hero issue: H1 wrapped into three lines and the hero was taller than the reference. Fixed by widening the desktop copy column, reducing the max display size, and tightening hero spacing.
- Pass 2 found a P2 tablet issue: 1024 px stacked the hero too early and made the top section too tall. Fixed by keeping the hero in two columns through 1024 px and stacking only on smaller mobile widths.
- Post-fix evidence: `qa/careers-1440-final.png`, `qa/careers-1024.png`, and `qa/careers-390.png`.

**Interactions Tested**
- Hero anchor to `#opportunites`.
- Department filter from métier cards and filter bar.
- Empty opportunities state with filtered message.
- Application modal open/close.
- Client validation for required fields, CV and consent.
- Careers API valid PDF submission with synthetic data.
- Careers API invalid file rejection.
- FAQ accordion with one question open at a time.
- Header active state: `L’agence` and submenu `Carrières`.
- Console warnings/errors checked: none reported.

**Open Questions**
- Real job cards are intentionally absent until confirmed offers are added to `src/data/careers-data.ts`.
- CVs are validated but not stored; the current flow prepares a `mailto:` handoff because no dedicated recruitment upload/email service exists in the project.

**Follow-up Polish**
- Replace the existing culture/hero assets if Lemon Mind supplies a confirmed careers-specific office, workshop, or team photo set.
- Add real active job data when roles are validated, which will automatically enable job cards and JobPosting schema.

final result: passed
