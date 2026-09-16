import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { caseStudies } from './data/registry';
import { ExternalLink, IconButton, StatusBadge, ThemeProvider, ThemeSwitch, Toolbar } from './components/ui';
import { CaseStudy } from './components/CaseStudy';
import { CaseMedia } from './components/CaseMedia';
import { FocusTags } from './components/FocusTags';
import { TemplateReference } from './components/TemplateReference';

const getRoute = () => location.hash.replace(/^#\/?/, '') || 'projects';
const navigate = (route: string) => { location.hash = route; };

function Projects({ missing = false }: { missing?: boolean }) {
  useEffect(() => {
    document.title = 'Case studies';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Product design case studies');
  }, []);
  return <div className="case-shell"><Toolbar /><main className="projects-scroll"><div className="projects-content">
    <h1 className="type-headline">{missing ? 'Page not found' : 'Portfolio structure'}</h1>
    {!missing && <a href="#/template-reference" className="project-card template-card">
      <div className="template-preview" aria-hidden="true"><span>Hero</span><span>Snapshot</span><span>Flexible chapters</span></div>
      <div className="project-description"><p className="project-kicker">Template reference</p><h2 className="type-title">Case study template</h2><p>Neutral anatomy for fixed and flexible sections.</p><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></div>
    </a>}
    {caseStudies.map(data => <a key={data.slug} href={`#/${data.slug}`} className="project-card">
      {data.hero.media && <div className="project-preview"><CaseMedia media={data.hero.media} controls={false} paused /></div>}
      <div className="project-description"><p className="project-kicker">{data.entryType === 'demo-case' ? 'Demo case' : 'Case study'}</p><h2 className="type-title">{data.hero.title}</h2><p>{data.hero.subtitle}</p><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></div>
    </a>)}
  </div></main></div>;
}

function DesignSystem() {
  const colors = ['background', 'foreground', 'muted-foreground', 'surface', 'border', 'success', 'warning', 'focus-ring'];
  const types = [['display', 'Case study'], ['headline', 'A clear direction'], ['title', 'How it works'], ['subtitle', '讓資訊清楚，讓操作自然。'], ['body', 'A calm, considered reading experience. 以清楚的層級呈現內容。'], ['label', 'PRODUCT · ANDROID'], ['caption', '媒體說明與輔助資訊 / Media captions']];
  const sample = caseStudies[0];
  return <div className="case-shell"><Toolbar onClose={() => navigate('/projects')} /><main className="system-scroll"><div className="system-content">
    <header><p className="system-eyebrow">PORTFOLIO / FOUNDATIONS</p><h1 className="type-display">Design system</h1><p className="type-subtitle">共用的顏色、文字與互動元件</p></header>
    <section><h2 className="type-headline">Color</h2><p>使用右上角切換淺色與深色主題。</p><div className="color-grid">{colors.map(color => <div className="color-item" key={color}><div className="color-swatch" style={{ background: `var(--${color})` }} /><code>{color}</code></div>)}</div></section>
    <section><h2 className="type-headline">Typography</h2><div className="type-list">{types.map(([type, text]) => <div className="type-row" key={type}><code>{type}</code><div className={`type-${type}`}>{text}</div></div>)}</div></section>
    <section><h2 className="type-headline">Focus</h2><FocusTags tags={['AI Search', 'Enterprise Workflow', 'Interactive Prototyping', 'Motion Design', 'Design Systems']} /></section>
    <section><h2 className="type-headline">Controls</h2><div className="component-shelf"><StatusBadge /><ThemeSwitch /><IconButton icon={faArrowLeft} label="停用的上一頁" disabled /><IconButton icon={faArrowRight} label="開啟作品" onClick={() => navigate('/projects')} />{sample?.provenance.source && <ExternalLink href={sample.provenance.source.href}>參考案例</ExternalLink>}</div><p>主要觸控區至少 44px；Tab 可檢查焦點，Space / Enter 可操作按鈕。</p></section>
    <section><h2 className="type-headline">Surfaces & spacing</h2><div className="surface-examples"><div className="stat-card"><h3 className="type-title">Article surface</h3><p>24px 圓角，21px 內距。</p></div><div className="stat-card"><h3 className="type-title">Semantic tokens</h3><p>背景、文字、卡片、邊框、成功、警示與焦點。</p></div></div><p>正文寬度 860px · 首部媒體 1100px · 手機內距 16px</p></section>
    {sample?.hero.media && <section><h2 className="type-headline">Media</h2><CaseMedia media={sample.hero.media} /><p>可暫停 · 離開畫面停止播放 · 減少動態偏好</p></section>}
    <a className="glass link-pill" href="#/projects">返回作品 <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
  </div></main></div>;
}

export function App() {
  const [route, setRoute] = useState(getRoute);
  const reduced = useReducedMotion();
  useEffect(() => { const update = () => setRoute(getRoute()); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update); }, []);
  const data = caseStudies.find(item => item.slug === route);
  return <ThemeProvider><AnimatePresence mode="wait"><motion.div className="route-view" key={route} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.18 }}>
    {route === 'projects' ? <Projects /> : route === 'template-reference' ? <TemplateReference /> : route === 'design-system' ? <DesignSystem /> : data ? <CaseStudy data={data} /> : <Projects missing />}
  </motion.div></AnimatePresence></ThemeProvider>;
}
