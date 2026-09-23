import { useEffect, useRef, type ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FocusTags } from './FocusTags';
import { StepCarousel } from './StepCarousel';
import { Toolbar } from './ui';

function MediaSlot({ label = 'Image or video', optional = true, className = '' }: { label?: string; optional?: boolean; className?: string }) {
  return <div className={`template-media-surface ${className}`}><span>{label}</span>{optional && <small>Optional</small>}</div>;
}

function ReferenceSection({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return <section className="article-width article-section template-section">
    <p className="section-label">{label}</p>
    <h2 className="type-headline">{title}</h2>
    {children}
  </section>;
}

export function TemplateReference() {
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    document.title = 'Case study template — Reference';
    document.documentElement.lang = 'en';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Neutral reference for the portfolio case study template');
  }, []);
  return <div className="case-shell">
    <a className="skip-link" href="#template-content" onClick={event => { event.preventDefault(); title.current?.focus(); }}>Skip to template</a>
    <Toolbar onClose={() => { location.hash = '/projects'; }} />
    <main className="case-scroll" id="template-content" lang="en">
      <header className="case-header article-width">
        <div className="header-copy"><p className="template-anatomy">Fixed hero</p><h1 ref={title} tabIndex={-1} className="type-display">Project title</h1><p className="type-subtitle">One-line project promise or outcome</p></div>
        <span className="glass status-badge">Template reference</span>
      </header>
      <div className="hero-width template-hero-media"><MediaSlot label="Hero image or video" /></div>
      <article className="article-body">
        <section className="snapshot article-width" aria-label="Fixed project snapshot">
          <p className="reference-notice">Structure guide only · Replace every prompt with facts from the project’s <code>案例.md</code>. This page is not a case study and is never copied as project content.</p>
          <div className="intro"><p>Project summary: what this is, who it serves, and why it matters.</p><p>Keep the Hero and Snapshot anatomy consistent across projects.</p></div>
          <dl className="metadata">
            <div className="meta-item"><dt>Product</dt><dd>Product or platform</dd></div>
            <div className="meta-item"><dt>My role</dt><dd>Your responsibility</dd></div>
            <div className="meta-item"><dt>Timeline</dt><dd>Project period</dd></div>
            <div className="meta-item meta-focus"><dt>Focus</dt><dd><FocusTags tags={['Domain tag', 'Capability tag', 'Method tag']} /></dd></div>
            <div className="meta-item meta-team"><dt>Team</dt><dd>Collaborators, when relevant</dd></div>
          </dl>
        </section>

        <ReferenceSection label="Product background" title="Product background title"><p>Short narrative: what the product is, who relies on it, and why this project mattered, so a busy reader sees a shipped, validated product at a glance.</p><div className="evidence-grid metric-grid">
          {['Markets or brands supported', 'Number of active users', 'Annual usage volume'].map(item => <aside className="evidence-note" key={item}><p>{item}</p></aside>)}
        </div></ReferenceSection>
        <ReferenceSection label="Problem framing" title="Problem framing title"><p>State the central tension and why the existing experience falls short.</p><ul className="constraint-list">
          {['Pain point title', 'Another pain point', 'Constraint or state gap'].map((item, index) => <li key={item}><FontAwesomeIcon icon={faCircleExclamation} aria-hidden="true" /><div><h3>{item}</h3><p>{index === 0 ? 'Explain the user difficulty in one concise sentence.' : 'Add only the tensions needed to frame the problem.'}</p></div></li>)}
        </ul></ReferenceSection>
        <ReferenceSection label="Strategic direction" title="Strategic direction title"><p>Connect the key insight to the principle or direction that guides the work.</p></ReferenceSection>

        <div className="decision-list article-width" aria-label="Key decisions template">
          <section className="key-decision"><p className="section-label">Feature label</p><h2 className="type-headline">Action title</h2><div className="decision-blocks"><div className="decision-copy"><p>Decision narrative, reasoning, constraints, and evidence boundaries in a natural reading order.</p></div><MediaSlot /><div className="decision-copy"><p>Optional continuation after the media. Add, remove, and reorder blocks to match <code>案例.md</code>.</p></div></div></section>
          <section className="key-decision"><p className="section-label">Feature label</p><h2 className="type-headline">Another action title</h2><div className="decision-blocks"><div className="decision-copy"><p>Each project may have a different number of decisions. No chapter intro or numbering is shown.</p></div></div></section>
        </div>

        <ReferenceSection label="Real product experience" title="Experience walkthrough title"><p>Show the final user flow or state sequence without repeating decision rationale.</p><StepCarousel showMediaPlaceholder steps={[
          { id: 'reference-step-1', title: 'Step title', text: 'Describe the user action or visible state.' },
          { id: 'reference-step-2', title: 'Next step title', text: 'Continue the end-to-end sequence.' },
          { id: 'reference-step-3', title: 'Final step title', text: 'Close the flow or show the outcome.' },
        ]} caption="The number of cards follows the actual product flow." /></ReferenceSection>
        <ReferenceSection label="Impact" title="Impact title"><p>Use only confirmed outcomes. Name the evidence type, source, attribution, and limitations.</p><div className="evidence-grid">{[1, 2, 3].map(item => <aside className="evidence-note" key={item}><p>Confirmed result with attribution and limitations.</p></aside>)}</div><MediaSlot /></ReferenceSection>
        <ReferenceSection label="Reflection" title="Reflection title"><p>Close with author-confirmed learning, tradeoffs, or unresolved questions.</p><MediaSlot /></ReferenceSection>
      </article>
      <footer className="case-footer article-width"><p>Fixed: Hero and Snapshot · Flexible: chapter length, decision count, text and media order</p></footer>
    </main>
  </div>;
}
