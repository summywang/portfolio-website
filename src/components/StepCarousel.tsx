import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useReducedMotion } from 'motion/react';
import { faChevronLeft, faChevronRight, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import type { ExperienceStep } from '../data/schema';
import { CaseMedia } from './CaseMedia';
import { IconButton } from './ui';

export function StepCarousel({ steps, caption }: { steps: ExperienceStep[]; caption?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(Boolean(reduced));
  useEffect(() => setPaused(Boolean(reduced)), [reduced]);

  const move = (index: number) => {
    const el = track.current;
    if (!el) return;
    if (!steps.length) return;
    const next = Math.max(0, Math.min(index, steps.length - 1));
    const cards = Array.from(el.children) as HTMLElement[];
    el.scrollTo({ left: cards[next].offsetLeft - cards[0].offsetLeft, behavior: reduced ? 'instant' : 'smooth' });
    setActive(next);
  };
  const sync = () => {
    const el = track.current;
    if (!el) return;
    if (!steps.length) return;
    if (el.scrollWidth <= el.clientWidth + 2) { setActive(0); return; }
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) { setActive(steps.length - 1); return; }
    const cards = Array.from(el.children) as HTMLElement[];
    const distances = cards.map(card => Math.abs(card.offsetLeft - cards[0].offsetLeft - el.scrollLeft));
    setActive(distances.indexOf(Math.min(...distances)));
  };
  const keyboard = (e: KeyboardEvent) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    move(e.key === 'Home' ? 0 : e.key === 'End' ? steps.length - 1 : active + (e.key === 'ArrowRight' ? 1 : -1));
  };
  if (!steps.length) return null;
  return <section className="flow-section" aria-label="Product walkthrough" aria-roledescription="carousel">
    <div className="carousel-track" ref={track} onScroll={sync} onKeyDown={keyboard} tabIndex={0} aria-label={`${steps.length} steps; use left and right arrow keys`}>
      {steps.map((step, index) => <article className="step-card" key={step.id} role="group" aria-roledescription="slide" aria-label={`Step ${index + 1} of ${steps.length}: ${step.title}`}>
        {step.media && <div className="step-visual"><CaseMedia media={step.media} controls={false} paused={paused} /></div>}
        <div className="step-copy"><span className="type-title step-number">{String(index + 1).padStart(2, '0')}</span><h3 className="type-title">{step.title}</h3><p>{step.text}</p>{step.media?.caption && <p className="step-caption">{step.media.caption}</p>}</div>
      </article>)}
    </div>
    <div className="carousel-controls article-width">
      <div className="carousel-dots" role="group" aria-label="選擇流程步驟">
        {steps.map((step, index) => <button key={step.id} type="button" aria-label={`前往步驟 ${index + 1}`} aria-current={active === index ? 'step' : undefined} onClick={() => move(index)}><span /></button>)}
      </div>
      <div className="carousel-actions">
        {steps.some(step => step.media?.type === 'video') && <IconButton icon={paused ? faPlay : faPause} label={paused ? '播放流程動畫' : '暫停流程動畫'} onClick={() => setPaused(!paused)} />}
        <IconButton icon={faChevronLeft} label="上一個步驟" disabled={active === 0} onClick={() => move(active - 1)} />
        <IconButton icon={faChevronRight} label="下一個步驟" disabled={active === steps.length - 1} onClick={() => move(active + 1)} />
      </div>
    </div>
    <p className="sr-only" aria-live="polite" aria-atomic="true">目前為步驟 {active + 1}，共 {steps.length} 步</p>
    {caption && <p className="flow-caption article-width">{caption}</p>}
  </section>;
}
