import { useState, useRef, type CSSProperties } from 'react';
import type { Media } from '../data/schema';
import { ZoomableImage } from './ZoomableImage';
import { ManagedVideo, YouTubeEmbed } from './Media';

export function CaseMedia({ media, eager = false, paused = false, controls = true, showCaption = true }: {
  media?: Media; eager?: boolean; paused?: boolean; controls?: boolean; showCaption?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const openImage = () => { setOpen(true); dialog.current?.showModal(); };
  const [failed, setFailed] = useState(false);
  const [ratio, setRatio] = useState<number>();
  if (!media) return null;
  const style = { '--media-fit': media.fit ?? 'contain', '--media-scale': media.scale ?? 1 } as CSSProperties;
  return <figure className="case-media" data-fit={media.fit ?? 'contain'} style={{ ...style, ...(ratio ? { '--ratio': ratio } : {}) } as CSSProperties}>
    {media.type === 'image' && (failed
      ? <div className="image-fallback">{media.alt}</div>
      : <img src={media.src} alt={media.alt} role="button" tabIndex={0} aria-label={`放大圖片：${media.alt}`} onClick={openImage} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openImage(); } }} loading={eager ? 'eager' : 'lazy'} onLoad={event => setRatio(event.currentTarget.naturalWidth / event.currentTarget.naturalHeight)} onError={() => setFailed(true)} />)}
    {media.type === 'video' && <ManagedVideo src={media.src} label={media.alt} poster={media.poster} eager={eager} groupPaused={paused} controls={controls} />}
    {media.type === 'youtube' && <YouTubeEmbed id={media.id} title={media.alt} start={media.start} />}
    {media.type === 'image' && <dialog ref={dialog} className="media-dialog" aria-label="圖片放大檢視" onClose={() => setOpen(false)} onKeyDown={event => event.stopPropagation()} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button type="button" onClick={() => dialog.current?.close()} autoFocus>關閉圖片</button>
      {open && <ZoomableImage src={media.src} alt={media.alt} />}
      {showCaption && media.caption && <p>{media.caption}</p>}
    </dialog>}
    {showCaption && media.caption && <figcaption>{media.caption}</figcaption>}
  </figure>;
}

export function MediaList({ items, layout = 'stack' }: { items?: Media[]; layout?: 'stack' | 'comparison' }) {
  if (!items?.length) return null;
  return <div className={`media-list media-list--${layout}`}>{items.map((media, i) => <CaseMedia key={media.type === 'youtube' ? media.id : media.src + i} media={media} />)}</div>;
}
