import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { faPause, faPlay, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from './ui';

export function ManagedVideo({ src, label, className = '', controls = true, groupPaused = false, eager = false }: {
  src: string; label: string; className?: string; controls?: boolean; groupPaused?: boolean; eager?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [userStarted, setUserStarted] = useState(false);
  const [hidden, setHidden] = useState(document.hidden);
  const [failed, setFailed] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(ref.current);
    const visibility = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', visibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (visible && !hidden && !userPaused && !groupPaused && (!reduced || userStarted)) {
      void video.play().catch(() => setPlaying(false));
    } else video.pause();
  }, [visible, hidden, userPaused, groupPaused, reduced, userStarted]);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    setUserStarted(true);
    setUserPaused(!video.paused);
    if (video.paused) void video.play().catch(() => setPlaying(false)); else video.pause();
  };
  return <div className={`video-frame ${className}`}>
    <video ref={ref} src={`${src}#t=0.001`} muted loop playsInline preload={eager ? 'auto' : 'metadata'} aria-label={label}
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} />
    {failed ? <div className="media-fallback"><p>影片暫時無法載入</p><a href={src}>開啟影片</a></div> : controls &&
      <IconButton icon={playing ? faPause : faPlay} label={`${playing ? '暫停' : '播放'}${label}`} className="video-toggle" onClick={toggle} />}
  </div>;
}

export function YouTubeEmbed({ id, title, start = 0 }: { id: string; title: string; start?: number }) {
  const [error, setError] = useState(false);
  const watch = `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}` : ''}`;
  return <figure className="youtube-block">
    <div className="youtube-frame">
      {!error && <iframe src={`https://www.youtube.com/embed/${id}?playsinline=1${start ? `&start=${start}` : ''}`} title={title}
        loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen onError={() => setError(true)} />}
      {error && <div className="media-fallback"><p>{title}</p><a href={watch} target="_blank" rel="noreferrer">在 YouTube 觀看</a></div>}
    </div>
    <figcaption className="youtube-link"><a href={watch} target="_blank" rel="noreferrer" aria-label={`在 YouTube 觀看 ${title}（新分頁）`}>YouTube <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a></figcaption>
  </figure>;
}
