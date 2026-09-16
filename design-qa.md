# Design QA — Template reference component fidelity

## Evidence

- Source visual truth:
  - `/var/folders/97/mx5fckhx2m9fg0q959f9j3lh0000gp/T/TemporaryItems/NSIRD_screencaptureui_vhVTkC/截圖 2026-09-16 下午1.54.47.png` — supporting-context cards, 1828 × 308 px.
  - `/var/folders/97/mx5fckhx2m9fg0q959f9j3lh0000gp/T/TemporaryItems/NSIRD_screencaptureui_jotI1P/截圖 2026-09-16 下午1.57.09.png` — pain-point row, 1056 × 228 px.
  - `/var/folders/97/mx5fckhx2m9fg0q959f9j3lh0000gp/T/TemporaryItems/NSIRD_screencaptureui_rGHsIv/截圖 2026-09-16 下午1.57.41.png` — experience card, 1198 × 1374 px.
  - `/var/folders/97/mx5fckhx2m9fg0q959f9j3lh0000gp/T/TemporaryItems/NSIRD_screencaptureui_gLRxZa/截圖 2026-09-16 下午1.58.48.png` — optional content surface, 1194 × 376 px.
- Browser-rendered implementation:
  - `/private/tmp/template-context.png`
  - `/private/tmp/template-pain.png`
  - `/private/tmp/template-experience.png`
  - `/private/tmp/template-impact.png`
- Route: `#/template-reference`, light theme.
- Browser viewport and captures: 602 × 755 CSS px at 1× density; no horizontal overflow.
- Normalization: the supplied references are focused component crops at mixed desktop widths, so comparison used component anatomy, spacing, radius, hierarchy, and behavior rather than identical full-page coordinates. The implementation deliberately stacks the three context cards below 768 px.

## Full-view comparison

The template retains the existing portfolio hierarchy, Open Runde typography, white canvas, soft-gray surfaces, rounded corners, and restrained icon treatment. The fixed Hero media area now uses the same 16:9 silhouette as real case media. Page rhythm and section widths remain consistent with the finished Satellite case.

## Focused region comparison

- Supporting context: now uses the production three-card grid, icons, strong headline, and optional supporting copy. At the captured 602 px viewport the cards stack responsively; at desktop width they render in three columns like the source.
- Problem framing: now uses the production `constraint-list` with warning icons, title/body hierarchy, padding, and gray grouped surface shown in the source.
- Real product experience: now uses the production carousel, media area, numbered card copy, pagination dots, keyboard support, and previous/next controls. The next control was exercised and advanced the live state from step 1 to step 2.
- Impact and Reflection: both visibly expose 16:9 optional image/video surfaces. Impact also demonstrates the existing evidence-note component instead of presenting media as a replacement for evidence.

## Required fidelity surfaces

- Fonts and typography: passed. Existing Open Runde family, weights, line heights, labels, headings, and body hierarchy are preserved.
- Spacing and layout rhythm: passed. Card padding, 24–32 px radii, section gaps, 16:9 media ratio, and responsive stacking align with the final-site components.
- Colors and visual tokens: passed. Existing background, surface, foreground, muted text, border, warning, and focus tokens are reused in light and dark themes.
- Image quality and asset fidelity: passed for a structural reference. The template intentionally uses labeled neutral media surfaces; the real Satellite case continues to use source media without substitution.
- Copy and content: passed. Template copy remains neutral, while Satellite supporting-context statements come from A02–A06 and introduce no unsupported statistics.

## Findings

- No actionable P0, P1, or P2 mismatch found.
- P3: the reference crops are desktop-sized while the active in-app preview was 602 px wide, so the context cards appear stacked in the captured implementation. This is the intended responsive behavior, not design drift.

## Interaction and runtime checks

- Carousel next control advances the active step and updates the live region.
- No horizontal overflow at 602 px.
- Browser console: no errors.

## Comparison history

- Pass 1: no P0/P1/P2 findings; no visual correction loop required.

## Implementation checklist

- [x] Fixed 16:9 Hero media anatomy.
- [x] Production-style supporting-context cards.
- [x] Production-style pain-point list.
- [x] Working product-experience carousel.
- [x] Optional media in Impact and Reflection.
- [x] Satellite supporting context without invented statistics.

final result: passed
