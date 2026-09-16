import { useEffect, useRef, type ReactNode } from 'react';
import { FocusTags } from './FocusTags';
import { Toolbar } from './ui';

function Slot({ label, optional = false }: { label: string; optional?: boolean }) {
  return <div className="template-slot"><span>{label}</span>{optional && <small>Optional</small>}</div>;
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
      <div className="hero-width"><Slot label="Hero media" optional /></div>
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

        <ReferenceSection label="Fast context" title="Context title"><p>Optional background, environment, scale, constraints, or relationships needed before the problem.</p><Slot label="Supporting context" optional /></ReferenceSection>
        <ReferenceSection label="Problem framing" title="Problem framing title"><p>State the central tension and why the existing experience falls short.</p><div className="template-list"><span>Pain point</span><span>Pain point</span><span>Pain point</span></div></ReferenceSection>
        <ReferenceSection label="Strategic direction" title="Strategic direction title"><p>Connect the key insight to the principle or direction that guides the work.</p></ReferenceSection>

        <div className="decision-list article-width" aria-label="Key decisions template">
          <section className="key-decision"><p className="section-label">Feature label</p><h2 className="type-headline">Action title</h2><div className="decision-blocks"><div className="decision-copy"><p>Decision narrative, reasoning, constraints, and evidence boundaries in a natural reading order.</p></div><Slot label="Image or video" optional /><div className="decision-copy"><p>Optional continuation after the media. Add, remove, and reorder blocks to match <code>案例.md</code>.</p></div></div></section>
          <section className="key-decision"><p className="section-label">Feature label</p><h2 className="type-headline">Another action title</h2><div className="decision-blocks"><div className="decision-copy"><p>Each project may have a different number of decisions. No chapter intro or numbering is shown.</p></div></div></section>
        </div>

        <ReferenceSection label="Real product experience" title="Experience walkthrough title"><p>Show the final user flow or state sequence without repeating decision rationale.</p><div className="template-flow"><Slot label="Step 1" /><Slot label="Step 2" /><Slot label="Step 3" optional /></div></ReferenceSection>
        <ReferenceSection label="Impact" title="Impact title"><p>Use only confirmed outcomes. Name the evidence type, source, attribution, and limitations.</p><Slot label="Evidence note" optional /></ReferenceSection>
        <ReferenceSection label="Reflection" title="Reflection title"><p>Close with author-confirmed learning, tradeoffs, or unresolved questions.</p><Slot label="Supporting media" optional /></ReferenceSection>
      </article>
      <footer className="case-footer article-width"><p>Fixed: Hero and Snapshot · Flexible: chapter length, decision count, text and media order</p></footer>
    </main>
  </div>;
}
