// Pseudorandom distribution, stable across renders and page reloads.
export function focusTone(label: string) {
  return [...label].reduce((hash, char) => (hash * 31 + char.codePointAt(0)!) >>> 0, 7) % 6;
}
// Tags in one list never share a color: a collision moves to the next free tone.
export function distinctTones(tags: string[]) {
  const used = new Set<number>();
  return tags.map(tag => {
    let tone = focusTone(tag);
    while (used.has(tone) && used.size < 6) tone = (tone + 1) % 6;
    used.add(tone);
    return [tag, tone] as const;
  });
}
export function FocusTags({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return <ul className="focus-tags" aria-label="Project focus">
    {distinctTones([...new Set(tags)]).map(([tag, tone]) => <li key={tag} className={`focus-tag tone-${tone}`}>{tag}</li>)}
  </ul>;
}
