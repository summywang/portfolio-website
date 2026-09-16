import assert from 'node:assert/strict';
import { test, after } from 'node:test';
import { mkdtemp, writeFile, rm, access } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { build } from 'esbuild';

const root = fileURLToPath(new URL('../', import.meta.url));
const scratch = await mkdtemp(path.join(root, '.case-test-'));
after(() => rm(scratch, { recursive: true, force: true }));
const compiled = await build({
  stdin: {
    contents: `
      import React from 'react';
      import { renderToStaticMarkup } from 'react-dom/server';
      import { CaseStudy } from './src/components/CaseStudy';
      export { caseStudies } from './src/data/registry';
      export { focusTone } from './src/components/FocusTags';
      export const render = data => renderToStaticMarkup(React.createElement(CaseStudy, {data}));
    `,
    resolveDir: root, loader: 'tsx',
  },
  bundle: true, packages: 'external', platform: 'node', format: 'esm', write: false,
  jsx: 'automatic',
});
const modulePath = path.join(scratch, 'render.mjs');
await writeFile(modulePath, compiled.outputFiles[0].text);
const { caseStudies, render, focusTone } = await import(pathToFileURL(modulePath));

test('registered cases have unique slugs, usable media and explicit chapter coverage', async () => {
  const slugs = new Set();
  async function walk(value) {
    if (!value || typeof value !== 'object') return;
    if (['image', 'video', 'youtube'].includes(value.type)) {
      assert.ok(value.alt?.trim(), 'media needs an accessible description');
      if (value.src?.startsWith('/')) await access(path.join(root, 'public', value.src));
      if (value.type === 'youtube') assert.match(value.id, /^[\w-]{11}$/);
    }
    for (const child of Object.values(value)) await walk(child);
  }
  for (const data of caseStudies) {
    assert.ok(!slugs.has(data.slug), 'duplicate route');
    slugs.add(data.slug);
    assert.match(data.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(data.hero.title && data.snapshot.summary.length);
    if (data.provenance.kind !== 'original') assert.ok(data.provenance.notice);
    for (const key of ['problem', 'strategy', 'decisions', 'experience', 'impact', 'reflection']) {
      assert.ok(Boolean(data[key].content) !== Boolean(data[key].omitted?.trim()), key);
    }
    const decisions = data.decisions.content?.items ?? [];
    assert.equal(new Set(decisions.map(item => item.id)).size, decisions.length);
    await walk(data);
  }
});

test('sample renders eight chapter responsibilities in order and distinguishes simulation', () => {
  const html = render(caseStudies[0]);
  const anchors = ['case-header', 'snapshot', 'id="problem"', 'id="strategy"', 'id="decisions"', 'id="experience"', 'id="impact"', 'id="reflection"'];
  let previous = -1;
  for (const anchor of anchors) { const at = html.indexOf(anchor); assert.ok(at > previous, anchor); previous = at; }
  assert.match(html, /Template demonstration/);
  assert.match(html, /Focus/);
  assert.doesNotMatch(html, />Skills<|As UX lead|8 separate emergency sessions/);
});

const minimal = {
  slug: 'different-project', language: 'en', provenance: { kind: 'original' },
  hero: { title: 'A different product', subtitle: 'An independent story' },
  snapshot: { summary: ['A text-only case.'], focus: ['AI Search'] },
  ...Object.fromEntries(['problem', 'strategy', 'decisions', 'experience', 'impact', 'reflection'].map(key => [key, { omitted: 'Not applicable to this test fixture' }])),
};
test('another project renders without inherited media, claims or empty omitted sections', () => {
  const html = render(minimal);
  assert.match(html, /A different product/);
  assert.match(html, /AI Search/);
  assert.doesNotMatch(html, /Satellite|Dousan|<video|<img|<iframe|id="reflection"|Not applicable/);
});
test('walkthrough supports one or six text-only steps and captions without fixed four-step assumptions', () => {
  for (const count of [1, 6]) {
    const steps = Array.from({ length: count }, (_, i) => ({ id: 'step-' + i, title: 'Step ' + i, text: 'Action ' + i }));
    const html = render({ ...minimal, experience: { content: { title: 'A different flow', steps, caption: 'Verified sequence' } } });
    assert.match(html, new RegExp('Step ' + count + ' of ' + count));
    assert.equal((html.match(/class="step-card"/g) ?? []).length, count);
    assert.match(html, /Verified sequence/);
    assert.doesNotMatch(html, /<video|<img|<iframe/);
  }
});
test('focus tones stay stable inside the six-color palette', () => {
  for (const label of ['AI Search', '中文標籤', 'Workflow']) {
    assert.equal(focusTone(label), focusTone(label));
    assert.ok(focusTone(label) >= 0 && focusTone(label) < 6);
  }
});
