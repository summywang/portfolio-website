import { useEffect, useRef, type ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToCircle, faCircleExclamation, faSignal, faTree } from '@fortawesome/free-solid-svg-icons';
import type { CaseStudyData, Chapter, ContextHighlight } from '../data/schema';
import { chapterLabels } from '../data/schema';
import { ExternalLink, Toolbar } from './ui';
import { CaseMedia, MediaList } from './CaseMedia';
import { FocusTags } from './FocusTags';
import { EvidenceNote, KeyDecision } from './KeyDecision';
import { StepCarousel } from './StepCarousel';

function Paragraphs({ items }: { items?: string[] }) {
  return <>{items?.map((text, i) => <p key={i}>{text}</p>)}</>;
}
function Section({ id, label, chapter, children }: { id: string; label: string; chapter: Chapter; children?: ReactNode }) {
  return <section id={id} className="article-width article-section" aria-labelledby={`${id}-title`}>
    <p className="section-label">{label}</p>
    <h2 id={`${id}-title`} className="type-headline">{chapter.title}</h2>
    <Paragraphs items={chapter.paragraphs} />
    {children}
    <MediaList items={chapter.media} />
    <Paragraphs items={chapter.closingParagraphs} />
  </section>;
}
const contextIcons = { signal: faSignal, tree: faTree, connection: faArrowsToCircle } as const;
export function ContextCards({ items }: { items: ContextHighlight[] }) {
  return <div className="stats-grid context-grid">{items.map((item, index) => <article className="stat-card" key={`${item.title}-${index}`}>
    {item.icon && <FontAwesomeIcon icon={contextIcons[item.icon]} aria-hidden="true" />}
    <h3>{item.title}</h3>{item.body && <p>{item.body}</p>}
  </article>)}</div>;
}
export function CaseStudy({ data }: { data: CaseStudyData }) {
  const title = useRef<HTMLHeadingElement>(null);
  const { hero, snapshot, problem, strategy, decisions, experience, impact, reflection } = data;
  useEffect(() => {
    document.title = `${hero.title} — Case Study`;
    document.documentElement.lang = data.language;
    document.querySelector('meta[name="description"]')?.setAttribute('content', hero.subtitle);
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !document.fullscreenElement) location.hash = '/projects';
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [data]);
  const metadata = [
    ['Product', snapshot.product], ['My role', snapshot.role], ['Timeline', snapshot.timeline],
  ].filter(([, value]) => value);
  return <div className="case-shell">
    <a className="skip-link" href="#case-content" onClick={event => { event.preventDefault(); title.current?.focus(); }}>跳至案例內容</a>
    <Toolbar onClose={() => { location.hash = '/projects'; }} />
    <main className="case-scroll" id="case-content" lang={data.language}>
      <header className="case-header article-width">
        <div className="header-copy"><h1 ref={title} tabIndex={-1} className="type-display">{hero.title}</h1><p className="type-subtitle">{hero.subtitle}</p></div>
        {hero.status && <span className="glass status-badge">{hero.status}</span>}
      </header>
      {hero.media && <div className="hero-width hero-media"><CaseMedia media={hero.media} eager showCaption={false} /></div>}
      <article className="article-body">
        <section className="snapshot article-width" aria-label="Project snapshot">
          {data.provenance.notice && <p className="reference-notice">{data.provenance.notice}</p>}
          <div className="intro"><Paragraphs items={snapshot.summary} />
            {!!snapshot.links?.length && <div className="external-links">{snapshot.links.map(link => <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>)}</div>}
          </div>
          <dl className="metadata">
            {metadata.map(([label, value]) => <div key={label} className="meta-item"><dt>{label}</dt><dd>{value}</dd></div>)}
            {!!snapshot.focus.length && <div className="meta-item meta-focus"><dt>Focus</dt><dd><FocusTags tags={snapshot.focus} /></dd></div>}
            {snapshot.team && <div className="meta-item meta-team"><dt>Team</dt><dd>{snapshot.team}</dd></div>}
          </dl>
        </section>
        {snapshot.context && <Section id="context" label="Fast context" chapter={snapshot.context}>
          {!!snapshot.context.stats?.length && <div className="stats-grid">{snapshot.context.stats.map(stat => <div className="stat-card" key={stat.text}><p>{stat.text}</p><a className="stat-source" href={stat.source.href} target="_blank" rel="noreferrer">{stat.source.label}</a></div>)}</div>}
          {!!snapshot.context.highlights?.length && <ContextCards items={snapshot.context.highlights} />}
        </Section>}
        {problem.content && <Section id="problem" label={chapterLabels.problem} chapter={problem.content}>
          {!!problem.content.pains.length && <ul className="constraint-list">{problem.content.pains.map(pain => <li key={pain.title}><FontAwesomeIcon icon={faCircleExclamation} aria-hidden="true" /><div><h3>{pain.title}</h3><p>{pain.body}</p><MediaList items={pain.media} /></div></li>)}</ul>}
        </Section>}
        {strategy.content && <Section id="strategy" label={chapterLabels.strategy} chapter={strategy.content} />}
        {decisions.content && <div id="decisions" className="decision-list article-width" aria-label="Key decisions">
          {decisions.content.items.map(decision => <KeyDecision key={decision.id} decision={decision} />)}
        </div>}
        {experience.content && <Section id="experience" label={chapterLabels.experience} chapter={experience.content}>
          <StepCarousel steps={experience.content.steps} caption={experience.content.caption} />
        </Section>}
        {impact.content && <Section id="impact" label={chapterLabels.impact} chapter={impact.content}>
          <div className="evidence-grid">{impact.content.evidence.map((evidence, i) => <EvidenceNote key={i} evidence={evidence} />)}</div>
        </Section>}
        {reflection.content && <Section id="reflection" label={chapterLabels.reflection} chapter={reflection.content} />}
      </article>
      {data.provenance.source && <footer className="case-footer article-width"><p><a href={data.provenance.source.href} target="_blank" rel="noreferrer">{data.provenance.source.label}</a></p></footer>}
    </main>
  </div>;
}
