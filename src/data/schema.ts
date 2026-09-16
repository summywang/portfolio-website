/** Eight editorial chapters. Missing chapters must carry an omission reason. */
export type Media = (
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string; poster?: string }
  | { type: 'youtube'; id: string; alt: string; start?: number }
) & { caption?: string; fit?: 'contain' | 'cover'; scale?: number };
export interface Link { label: string; href: string }
export interface Chapter { title: string; paragraphs?: string[]; media?: Media[] }
export type OptionalChapter<T> = { content: T; omitted?: never } | { omitted: string; content?: never };
export interface Evidence {
  kind: 'design-intent' | 'observation' | 'feedback' | 'shipped' | 'measured';
  text: string; source: string; limitation?: string;
}
export type DecisionBlock =
  | { type: 'text'; paragraphs: string[] }
  | { type: 'media'; media: Media };
export interface Decision {
  id: string;
  /** Short generic feature or workstream name, rendered as an eyebrow. */
  label: string;
  /** Reader-facing action title. */
  title: string;
  /** Ordered directly from 案例.md; text and media may repeat in any sequence. */
  blocks: DecisionBlock[];
}
export interface ExperienceStep { id: string; title: string; text: string; media?: Media }
export interface CaseStudyData {
  slug: string;
  language: 'en' | 'zh-Hant';
  provenance: { kind: 'original' | 'reference' | 'simulation'; notice?: string; source?: Link };
  /** 1. Fixed Hero; status describes the product, never writing progress. */
  hero: { title: string; subtitle: string; media?: Media; status?: string };
  /** 2. Fixed Snapshot, then optional background context. */
  snapshot: {
    summary: string[]; product?: string; role?: string; timeline?: string; team?: string;
    focus: string[]; links?: Link[];
    context?: Chapter & { stats?: { text: string; source: Link }[] };
  };
  /** 3. Tension + pain points. */
  problem: OptionalChapter<Chapter & { pains: { title: string; body: string }[] }>;
  /** 4. Insight -> principles and priorities. */
  strategy: OptionalChapter<Chapter>;
  /** 5. Choices and reasoning, not a product tour. */
  decisions: OptionalChapter<{ items: Decision[] }>;
  /** 6. Ordered usage / state transitions without repeating reasoning. */
  experience: OptionalChapter<Chapter & { steps: ExperienceStep[]; caption?: string }>;
  /** 7. Evidence and attribution. */
  impact: OptionalChapter<Chapter & { evidence: Evidence[] }>;
  /** 8. Author-confirmed learning and limitations. */
  reflection: OptionalChapter<Chapter>;
}
export const chapterLabels = {
  problem: 'Problem framing', strategy: 'Strategic direction',
  experience: 'Real product experience', impact: 'Impact', reflection: 'Reflection',
} as const;
