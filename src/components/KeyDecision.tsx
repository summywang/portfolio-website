import type { Decision, Evidence } from '../data/schema';
import { MediaList } from './CaseMedia';

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
export function KeyDecision({ decision, index }: { decision: Decision; index: number }) {
  return <section className="key-decision" aria-labelledby={`decision-${decision.id}`}>
    <div className="decision-heading"><span className="decision-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3 id={`decision-${decision.id}`} className="type-headline">{decision.title}</h3></div>
    <p>{decision.tension}</p>
    <dl className="decision-reasoning">
      {decision.alternatives && <div><dt>Explored</dt><dd>{decision.alternatives}</dd></div>}
      <div><dt>The decision</dt><dd>{decision.choice}</dd></div>
      <div><dt>Why this direction</dt><dd>{decision.reasoning}</dd></div>
      {decision.tradeoff && <div><dt>The tradeoff</dt><dd>{decision.tradeoff}</dd></div>}
    </dl>
    <MediaList items={decision.media} />
    {decision.evidence && <EvidenceNote evidence={decision.evidence} />}
  </section>;
}
