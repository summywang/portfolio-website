# Prototype Instructions

## Case study template

Start new project work with [content-to-website handoff](docs/content-to-website.md). Use the content repository's existing `案例.md` and its sources; do not create a second content draft here.

Hero and Snapshot have a fixed anatomy. Following chapters retain the eight editorial responsibilities while adapting media and decision count to the project. Keep the shared renderer data-driven; never embed project text or media paths in it.

The Snapshot field is **Focus**, shown as small, soft-colored tags with stable automatically assigned colors, wrapping on narrow screens. Tags describe project domains / capabilities; My role separately identifies responsibility.

The Pixel sample is a labeled simulation with reference assets, not the owner's portfolio experience. Preserve this distinction. Do not transfer its narrative, people, statistics or outcomes into new projects.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

Before Git/GitHub operations, cross-device restoration, secret handling, or adding large media, read and follow the canonical `Git與跨電腦還原規範.md` in the sibling portfolio content repository. Never commit secrets, local settings, `node_modules/`, or `dist/`. Keep the current small UI-demo MP4 files in this repository; reassess external video hosting only when media becomes substantially larger or longer.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
