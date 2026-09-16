import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faSignal, faTree, faGamepad, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { satellite } from './data/case-study';
import { ExternalLink, IconButton, StatusBadge, ThemeProvider, ThemeSwitch, Toolbar } from './components/ui';
import { ManagedVideo, YouTubeEmbed } from './components/Media';
import { StepCarousel } from './components/StepCarousel';
import { BrandMark } from './components/BrandMark';

const english = new URLSearchParams(location.search).get('lang') === 'en';
const navigate = (route: string) => { location.hash = route; };
const getRoute = () => location.hash.replace(/^#\/?/, '') || 'satellite-sos';

function Section({ id, title, children, className = '' }: { id: string; title: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`article-width article-section ${className}`} aria-labelledby={`${id}-title`} lang="en">
    <h2 id={`${id}-title`} className="type-headline">{title}</h2>{children}
  </section>;
}
function Paragraphs({ content }: { content: string[] }) { return <>{content.map(p => <p key={p}>{p}</p>)}</>; }

function CaseStudy() {
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    document.title = `${english ? satellite.titleEn : satellite.title} — Case Study`;
    const escape = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && !document.fullscreenElement) navigate('/projects');
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, []);
  return <div className="case-shell">
    <a className="skip-link" href="#case-content" onClick={e => { e.preventDefault(); title.current?.focus(); }}>跳至案例內容</a>
    <Toolbar onClose={() => navigate('/projects')} />
    <main className="case-scroll" id="case-content">
      <header className="case-header article-width">
        <div className="header-copy" lang={english ? 'en' : 'zh-Hant'}>
          <h1 ref={title} tabIndex={-1} className="type-display">{english ? satellite.titleEn : satellite.title}</h1>
          <p className="type-subtitle">{english ? satellite.subtitleEn : satellite.subtitle}</p>
        </div>
        <StatusBadge english={english} />
      </header>
      <div className="hero-width"><ManagedVideo src="/assets/media/satellite.mp4" label="衛星 SOS 示範影片" eager /></div>
      <article className="article-body">
        <div className="intro article-width" lang="en"><Paragraphs content={satellite.intro} /><div className="external-links">{satellite.links.map(link => <ExternalLink href={link.href} key={link.label}>{link.label}</ExternalLink>)}</div></div>
        <dl className="metadata article-width" lang="en">{satellite.metadata.map(item => <div key={item.label} className={`meta-item meta-${item.label.toLowerCase().replace(' ', '-')}`}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
        <Section id="overview" title="Overview"><Paragraphs content={satellite.overview} /></Section>
        <Section id="stats" title="Some stats"><div className="stats-grid">{satellite.stats.map(stat => <div className={`stat-card ${stat.icon ? '' : 'stat-text'}`} key={stat.text}>{stat.icon && <FontAwesomeIcon icon={stat.icon === 'signal' ? faSignal : faTree} aria-hidden="true" />}<p>{stat.text}</p></div>)}</div></Section>
        <Section id="constraints" title="A constellation of constraints"><p>Communicating through satellite still came with a lot of technical challenges and limitations our team had to design around</p><ul className="constraint-list">{satellite.constraints.map(item => <li key={item.title}><FontAwesomeIcon icon={faCircleExclamation} aria-hidden="true" /><div><h3>{item.title}</h3><p>{item.body}</p></div></li>)}</ul></Section>
        <Section id="prototype" title="Prototyping in uncharted territories…"><p>{satellite.prototype}</p><figure className="prototype-figure"><ManagedVideo src="/assets/media/prototype.mp4" label="Protopie 原型影片" /><figcaption><FontAwesomeIcon icon={faGamepad} aria-hidden="true" /> A Protopie prototype loaded on a Pixel device simulating the satellite connection experience</figcaption></figure></Section>
        <Section id="workshop" title="Leading an ideation workshop across multiple teams at Google"><Paragraphs content={satellite.workshop} /></Section>
        <Section id="collaboration" title="A true joint effort"><Paragraphs content={satellite.collaboration} /></Section>
        <StepCarousel />
        <Section id="demo" title="DEMO" className="embedded-section"><p>Real-life satellite connection testing on the Pixel 9 Pro and dummy text conversation with emergency services</p><YouTubeEmbed id="2X3_7cqgshs" title="Satellite SOS DEMO on Pixel 9" /></Section>
        <Section id="education" title="User educational video" className="embedded-section"><YouTubeEmbed id="P9bQGBCGc1w" title="Get help in an emergency with Satellite SOS on your Pixel phone" /></Section>
        <Section id="impact" title="Impact: Giving peace of mind to millions" className="embedded-section"><Paragraphs content={satellite.impact} /><YouTubeEmbed id="N_y2tP9of8A" start={1737} title="Made by Google ’24: Keynote" /></Section>
      </article>
      <footer className="case-footer article-width"><BrandMark /><p>參考案例 · <a href={satellite.source} target="_blank" rel="noreferrer">Dousan Miao</a></p></footer>
    </main>
  </div>;
}

function Projects() {
  useEffect(() => { document.title = 'Case studies'; }, []);
  return <div className="case-shell"><Toolbar /><main className="projects-scroll"><div className="projects-content">
    <h1 className="type-headline">Case studies</h1>
    <a href="#/satellite-sos" className="project-card"><div className="project-preview"><ManagedVideo src="/assets/media/satellite.mp4" label="Pixel 衛星 SOS" controls={false} /><StatusBadge /></div><div className="project-description"><h2 className="type-title">{satellite.title}</h2><p>{satellite.subtitle}</p><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></div></a>
    <p className="project-credit">版型參考：<a href={satellite.source} target="_blank" rel="noreferrer">Dousan Miao</a></p>
  </div></main></div>;
}

function DesignSystem() {
  const colors = ['background', 'foreground', 'muted-foreground', 'surface', 'border', 'success', 'warning', 'focus-ring'];
  const types = [['display', 'Pixel 衛星 SOS'], ['headline', 'A constellation of constraints'], ['title', 'How it works'], ['subtitle', '讓資訊清楚，讓操作自然。'], ['body', 'A calm, considered reading experience. 以清楚的層級呈現內容。'], ['label', 'PRODUCT · ANDROID'], ['caption', '媒體說明與輔助資訊 / Media captions']];
  return <div className="case-shell"><Toolbar onClose={() => navigate('/satellite-sos')} /><main className="system-scroll"><div className="system-content">
    <header><p className="system-eyebrow">PORTFOLIO / FOUNDATIONS</p><h1 className="type-display">Design system</h1><p className="type-subtitle">共用的顏色、文字與互動元件</p></header>
    <section><h2 className="type-headline">Color</h2><p>使用右上角切換淺色與深色主題。</p><div className="color-grid">{colors.map(color => <div className="color-item" key={color}><div className="color-swatch" style={{ background: `var(--${color})` }} /><code>{color}</code></div>)}</div></section>
    <section><h2 className="type-headline">Typography</h2><div className="type-list">{types.map(([type, text]) => <div className="type-row" key={type}><code>{type}</code><div className={`type-${type}`}>{text}</div></div>)}</div></section>
    <section><h2 className="type-headline">Controls</h2><div className="component-shelf"><StatusBadge /><ThemeSwitch /><IconButton icon={faArrowLeft} label="停用的上一頁" disabled /><IconButton icon={faArrowRight} label="開啟案例" onClick={() => navigate('/satellite-sos')} /><ExternalLink href={satellite.source}>參考案例</ExternalLink></div><p>主要觸控區至少 44px；Tab 可檢查焦點，Space / Enter 可操作按鈕。</p></section>
    <section><h2 className="type-headline">Surfaces & spacing</h2><div className="surface-examples"><div className="stat-card"><h3 className="type-title">Article surface</h3><p>24px 圓角，21px 內距。</p></div><div className="stat-card"><h3 className="type-title">Semantic tokens</h3><p>背景、文字、卡片、邊框、成功、警示與焦點。</p></div></div><p>正文寬度 860px · 首部媒體 1100px · 章節間距 42px · 手機內距 16px</p></section>
    <section><h2 className="type-headline">Media</h2><ManagedVideo src="/assets/media/satellite.mp4" label="設計系統影片" /><p>16:9 · 可暫停 · 離開畫面停止播放 · 減少動態偏好</p></section>
    <a className="glass link-pill" href="#/satellite-sos">返回案例 <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
  </div></main></div>;
}

export function App() {
  const [route, setRoute] = useState(getRoute);
  const reduced = useReducedMotion();
  useEffect(() => { const update = () => setRoute(getRoute()); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update); }, []);
  return <ThemeProvider><AnimatePresence mode="wait"><motion.div className="route-view" key={route} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reduced ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.18 }}>
    {route === 'projects' ? <Projects /> : route === 'design-system' ? <DesignSystem /> : <CaseStudy />}
  </motion.div></AnimatePresence></ThemeProvider>;
}
