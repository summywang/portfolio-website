import type { Decision, Evidence } from '../data/schema';
import { CaseMedia } from './CaseMedia';

export function EvidenceNote({ evidence }: { evidence: Evidence }) {
  return <aside className="evidence-note">
    <p>{evidence.text}</p>
    {evidence.limitation && <p className="evidence-limit">{evidence.limitation}</p>}
  </aside>;
}
export function KeyDecision({ decision }: { decision: Decision }) {
  return <section className="key-decision" aria-labelledby={`decision-${decision.id}`}>
    <p className="section-label">{decision.label}</p>
    <h2 id={`decision-${decision.id}`} className="type-headline">{decision.title}</h2>
    <div className="decision-blocks">{decision.blocks.map((block, index) => block.type === 'text'
      ? <div className="decision-copy" key={index}>{block.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>
      : block.type === 'list' ? <ul key={index}>{block.items.map(item => <li key={item}>{item}</li>)}</ul>
      : <CaseMedia media={block.media} key={index} />)}</div>
  </section>;
}
