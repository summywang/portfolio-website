import type { Decision, Evidence } from '../data/schema';
import { CaseMedia } from './CaseMedia';

const evidenceLabels: Record<Evidence['kind'], string> = {
  'design-intent': 'Design intent', observation: 'Observed behavior',
  feedback: 'Qualitative feedback', shipped: 'Released', measured: 'Measured outcome',
};
export function EvidenceNote({ evidence }: { evidence: Evidence }) {
  return <aside className="evidence-note">
    <p className="section-label">{evidenceLabels[evidence.kind]}</p>
    <p>{evidence.text}</p>
    {evidence.limitation && <p className="evidence-limit">{evidence.limitation}</p>}
    <p className="evidence-source">Source: {evidence.source}</p>
  </aside>;
}
export function KeyDecision({ decision }: { decision: Decision }) {
  return <section className="key-decision" aria-labelledby={`decision-${decision.id}`}>
    <p className="section-label">{decision.label}</p>
    <h2 id={`decision-${decision.id}`} className="type-headline">{decision.title}</h2>
    <div className="decision-blocks">{decision.blocks.map((block, index) => block.type === 'text'
      ? <div className="decision-copy" key={index}>{block.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>
      : <CaseMedia media={block.media} key={index} />)}</div>
  </section>;
}
