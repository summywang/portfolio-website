import { useState, type CSSProperties } from 'react';
import type { Media } from '../data/schema';
import { ManagedVideo, YouTubeEmbed } from './Media';

export function CaseMedia({ media, eager = false, paused = false, controls = true }: {
  media?: Media; eager?: boolean; paused?: boolean; controls?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (!media) return null;
  const style = { '--media-fit': media.fit ?? 'contain', '--media-scale': media.scale ?? 1 } as CSSProperties;
  return <figure className="case-media" style={style}>
    {media.type === 'image' && (failed
      ? <div className="image-fallback">{media.alt}</div>
      : <img src={media.src} alt={media.alt} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} />)}
    {media.type === 'video' && <ManagedVideo src={media.src} label={media.alt} poster={media.poster} eager={eager} groupPaused={paused} controls={controls} />}
    {media.type === 'youtube' && <YouTubeEmbed id={media.id} title={media.alt} start={media.start} />}
    {media.caption && <figcaption>{media.caption}</figcaption>}
  </figure>;
}

export function MediaList({ items }: { items?: Media[] }) {
  if (!items?.length) return null;
  return <div className="media-list">{items.map((media, i) => <CaseMedia key={media.type === 'youtube' ? media.id : media.src + i} media={media} />)}</div>;
}
