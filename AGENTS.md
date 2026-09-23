# Portfolio Website Instructions

## Case study template

Start new project work with [content-to-website implementation](docs/content-to-website.md). The editable `src/data/cases/<slug>.ts` is the sole reader-facing copy source. Read project notes in the content repository for evidence and boundaries; do not create or sync a Markdown case draft.

Hero and Snapshot have a fixed anatomy. Following chapters retain the eight editorial responsibilities while adapting media and decision count to the project. Keep the shared renderer data-driven; never embed project text or media paths in it.

Hero screenshots use their intrinsic aspect ratio with no added letterboxing or cropping, and a very subtle shadow. Videos and neutral template placeholders retain a 16:9 frame. Template reference previews must resemble final components: supporting context uses context cards, Problem Framing uses the real pain-point list, Real Product Experience uses the working carousel, and Impact / Reflection visibly support optional media. Do not replace these with generic wireframe boxes.

The Snapshot field is **Focus**, shown as small, soft-colored tags with stable automatically assigned colors, wrapping on narrow screens. Tags describe project domains / capabilities; My role separately identifies responsibility.

The Pixel Satellite SOS route is a **Demo case**, not the template and not the owner's portfolio experience. Preserve this distinction. Do not transfer its narrative, labels, people, statistics, media, or outcomes into new projects. `#/template-reference` is the neutral visual anatomy reference; it is not registered in `caseStudies` and its prompts are never project copy.

For every real project, read `portfolio-content/projects/<project>/專案筆記.md` and the cited source boundaries, create a new `src/data/cases/<slug>.ts` with `entryType: 'case-study'`, and register that file. Reuse only shared schema, components, and layout—never duplicate `satellite.ts` as a content starter.

Key Decisions render without a visible chapter intro or numbering. Each decision starts with a short feature label and a reader-facing action title, followed by text and media blocks in the exact sequence defined by the editable case data. Do not generate fixed `The decision` / `Why this direction` rows or separate Design intent cards.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

Before Git/GitHub operations, cross-device restoration, secret handling, or adding large media, read and follow the canonical `Git與跨電腦還原規範.md` in the sibling portfolio content repository. Never commit secrets, local settings, `node_modules/`, or `dist/`. Keep the current small UI-demo MP4 files in this repository; reassess external video hosting only when media becomes substantially larger or longer.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Direct website authoring

After discovery, author the Chinese case directly in `src/data/cases/<slug>.ts` using production components. The author edits this same file. Before every edit, read the current file and Git diff; preserve user edits, make scoped changes, and never regenerate copy from old Markdown or notes. The Markdown-to-website sync script is removed. Keep private evidence, asset boundaries and open questions in project notes, not rendered copy. Chinese stays in the website; add English only after Chinese confirmation and track translation staleness. If a text export is requested, export one-way from website data; it is not an editing source. Do not recreate 案例.md. Review actual responsive layout, media and carousel alongside the copy.
