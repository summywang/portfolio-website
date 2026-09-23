import { useState, useRef, type CSSProperties } from 'react';
import type { Media } from '../data/schema';
import { ManagedVideo, YouTubeEmbed } from './Media';

export function CaseMedia({ media, eager = false, paused = false, controls = true }: {
  media?: Media; eager?: boolean; paused?: boolean; controls?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [failed, setFailed] = useState(false);
  if (!media) return null;
  const style = { '--media-fit': media.fit ?? 'contain', '--media-scale': media.scale ?? 1 } as CSSProperties;
  return <figure className="case-media" style={style}>
    {media.type === 'image' && (failed
      ? <div className="image-fallback">{media.alt}</div>
      : <img src={media.src} alt={media.alt} role="button" tabIndex={0} aria-label={`放大圖片：${media.alt}`} onClick={() => dialog.current?.showModal()} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); dialog.current?.showModal(); } }} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} />)}
    {media.type === 'video' && <ManagedVideo src={media.src} label={media.alt} poster={media.poster} eager={eager} groupPaused={paused} controls={controls} />}
    {media.type === 'youtube' && <YouTubeEmbed id={media.id} title={media.alt} start={media.start} />}
    {media.type === 'image' && <dialog ref={dialog} className="media-dialog" onKeyDown={event => event.stopPropagation()} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button type="button" onClick={() => dialog.current?.close()} autoFocus>關閉圖片</button>
      <img src={media.src} alt={media.alt} loading="lazy" />
      <p>{media.caption}</p>
    </dialog>}
    {media.caption && <figcaption>{media.caption}</figcaption>}
  </figure>;
}

export function MediaList({ items }: { items?: Media[] }) {
  if (!items?.length) return null;
  return <div className="media-list">{items.map((media, i) => <CaseMedia key={media.type === 'youtube' ? media.id : media.src + i} media={media} />)}</div>;
}
