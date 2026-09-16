import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPause, faPlay, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { satellite } from '../data/case-study';
import { ManagedVideo } from './Media';
import { IconButton } from './ui';

export function StepCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(Boolean(reduced));
  useEffect(() => setPaused(Boolean(reduced)), [reduced]);

  const move = (index: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(index, satellite.steps.length - 1));
    const cards = Array.from(el.children) as HTMLElement[];
    el.scrollTo({ left: cards[next].offsetLeft - cards[0].offsetLeft, behavior: reduced ? 'instant' : 'smooth' });
    setActive(next);
  };
  const sync = () => {
    const el = track.current;
    if (!el) return;
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) { setActive(3); return; }
    const cards = Array.from(el.children) as HTMLElement[];
    const distances = cards.map(card => Math.abs(card.offsetLeft - cards[0].offsetLeft - el.scrollLeft));
    setActive(distances.indexOf(Math.min(...distances)));
  };
  const keyboard = (e: KeyboardEvent) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    move(e.key === 'Home' ? 0 : e.key === 'End' ? 3 : active + (e.key === 'ArrowRight' ? 1 : -1));
  };
  return <section className="flow-section" aria-labelledby="how-it-works" aria-roledescription="輪播">
    <h2 id="how-it-works" className="article-width type-title flow-title" lang="en">How it works</h2>
    <div className="carousel-track" ref={track} onScroll={sync} onKeyDown={keyboard} tabIndex={0} aria-label="四步驟衛星求救流程，使用左右方向鍵切換">
      {satellite.steps.map((step, index) => <article className="step-card" key={step.title} role="group" aria-roledescription="投影片" aria-label={`步驟 ${index + 1}，共 4 步：${step.title}`}>
        <div className="step-visual" style={{ '--media-scale': step.scale } as React.CSSProperties}>
          {step.type === 'video' ? <ManagedVideo src={step.src} label={step.title} controls={false} groupPaused={paused} /> : <img src={step.src} alt="手機顯示緊急狀況問答，讓使用者選擇求救原因" loading="lazy" />}
        </div>
        <div className="step-copy" lang="en"><span className="type-title step-number">{String(index + 1).padStart(2, '0')}</span><p>{step.text}</p></div>
      </article>)}
    </div>
    <div className="carousel-controls article-width">
      <div className="carousel-dots" role="group" aria-label="選擇流程步驟">
        {satellite.steps.map((step, index) => <button key={step.title} type="button" aria-label={`前往步驟 ${index + 1}`} aria-current={active === index ? 'step' : undefined} onClick={() => move(index)}><span /></button>)}
      </div>
      <div className="carousel-actions">
        <IconButton icon={paused ? faPlay : faPause} label={paused ? '播放流程動畫' : '暫停流程動畫'} onClick={() => setPaused(!paused)} />
        <IconButton icon={faChevronLeft} label="上一個步驟" disabled={active === 0} onClick={() => move(active - 1)} />
        <IconButton icon={faChevronRight} label="下一個步驟" disabled={active === 3} onClick={() => move(active + 1)} />
      </div>
    </div>
    <p className="sr-only" aria-live="polite" aria-atomic="true">目前為步驟 {active + 1}，共 4 步</p>
    <p className="flow-caption article-width" lang="en"><FontAwesomeIcon icon={faWandMagicSparkles} aria-hidden="true" /> Videos created with Google Veo and After Effects.</p>
  </section>;
}
