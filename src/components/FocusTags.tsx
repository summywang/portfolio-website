// Pseudorandom distribution, stable across renders and page reloads.
export function focusTone(label: string) {
  return [...label].reduce((hash, char) => (hash * 31 + char.codePointAt(0)!) >>> 0, 7) % 6;
}
export function FocusTags({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return <ul className="focus-tags" aria-label="Project focus">
    {[...new Set(tags)].map(tag => <li key={tag} className={`focus-tag tone-${focusTone(tag)}`}>{tag}</li>)}
  </ul>;
}
