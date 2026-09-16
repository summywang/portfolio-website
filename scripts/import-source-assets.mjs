import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const source = process.argv[2];
if (!source) throw new Error('Pass the browser asset bundle directory.');
const mapping = {
  '09ae3722a812a088': 'fonts/open-runde-regular.woff2',
  '76bca5fb261bddb4': 'fonts/open-runde-medium.woff2',
  '9b504e15a85171bb': 'fonts/open-runde-semibold.woff2',
  '9326496a9a05e82d': 'fonts/open-runde-bold.woff2',
  '44f54661e7366ad0': 'media/satellite.mp4',
  '57048b8b0693f4d0': 'media/prototype.mp4',
  '8ec181a5fad8618e': 'media/emergency-call.mp4',
  '176f1508d9dc31b1': 'media/emergency-response.mp4',
  'c90c9f01facaa0da': 'media/emergency-questions.png',
};
const manifest = JSON.parse(await readFile(path.join(source, 'manifest.json'), 'utf8'));
const assets = Array.isArray(manifest) ? manifest : manifest.assets;
if (!assets) throw new Error('Unexpected browser bundle manifest.');
const records = [];
for (const asset of assets) {
  const destination = mapping[asset.id];
  if (!destination) continue;
  const target = path.join('public/assets', destination);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(asset.path, target);
  records.push({ file: `/assets/${destination}`, source: asset.url, kind: asset.kind });
}
await mkdir('docs', { recursive: true });
await writeFile('docs/asset-manifest.json', JSON.stringify(records, null, 2) + '\n');
console.log(`Imported ${records.length} source assets.`);
