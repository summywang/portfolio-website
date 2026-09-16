import type { CaseStudyData } from '../schema';

// Narrative: portfolio-content/projects/pixel-satellite-sos/案例.md (simulation).
// Media: existing reference assets. No personal attribution or new factual claims.
export const satellite: CaseStudyData = {
  slug: 'satellite-sos', language: 'en',
  provenance: {
    kind: 'simulation',
    notice: 'Template demonstration · Reference media with a simulated design narrative. Roles, decisions and observations are not the portfolio owner’s experience.',
    source: { label: 'Reference case by Dousan Miao', href: 'https://dousanmiao.com/#/satellite-sos' },
  },
  hero: {
    title: 'Pixel Satellite SOS', subtitle: 'Guiding alignment, signaling connection', status: 'Simulation',
    media: { type: 'video', src: '/assets/media/satellite.mp4', alt: 'Reference demonstration of satellite alignment' },
  },
  snapshot: {
    summary: ['This simulated case explores how to guide people from moving a phone into alignment to holding it steady while connecting.', 'The exercise focuses on interaction flow, alignment feedback, motion and prototyping. The reference media illustrates the interface, not the simulated design history.'],
    product: 'Pixel Satellite SOS', role: 'Product designer · simulated role',
    focus: ['Satellite Connectivity', 'Motion Design', 'Interactive Prototyping', 'State Transitions'],
    links: [{ label: 'Reference case', href: 'https://dousanmiao.com/#/satellite-sos' }],
    context: { title: 'An emergency flow that depends on physical movement', paragraphs: ['The visible sequence includes emergency questions, satellite alignment and waiting for a connection. This case concentrates on alignment and waiting.'] },
  },
  problem: { content: {
    title: 'Reaching the target was only half the interaction',
    paragraphs: ['The simulated challenge is to guide people from continuous adjustment to holding still.'],
    pains: [
      { title: 'A target does not explain the movement', body: 'Recognizing the goal may not tell someone how to move the phone.' },
      { title: 'A text change can be missed', body: 'In the simulated scenario, people continue moving after the title asks them to stop.' },
      { title: 'Aligned is not connected', body: 'Alignment, connecting and connected are distinct states; sending can still be in progress.' },
    ],
  } },
  strategy: { content: {
    title: 'Keep the next action visible',
    paragraphs: ['The simulated direction is to answer two questions together: what is the system doing, and what should the person do next? Keep the same visual focus as the required action changes from moving to waiting.'],
  } },
  decisions: { content: {
    title: 'Make each change in state actionable',
    items: [
      {
        id: 'visible-target', title: 'Give alignment a visible target',
        tension: 'A target communicates a destination, but may leave the physical movement ambiguous.',
        choice: 'Pair the satellite-and-circle target with directional text.',
        reasoning: 'The graphic conveys where to aim; the wording describes how to move.',
        tradeoff: 'The graphic stays simple, but cannot explain every physical action on its own.',
        evidence: { kind: 'design-intent', text: 'Connect the on-screen target with a physical movement.', source: 'Pixel simulation S02', limitation: 'Simulated reasoning; no real research result is claimed.' },
        media: [{ type: 'video', src: '/assets/media/prototype.mp4', alt: 'Handheld prototype with a satellite alignment target', caption: 'Reference prototype footage; not evidence of the simulated design history.' }],
      },
      {
        id: 'stop-cue', title: 'Put the stop cue in the alignment target',
        tension: 'In the simulation, a title change does not make people stop moving.',
        alternatives: 'The simulated earlier approach changes only the title.',
        choice: 'Change the target into a blue wave ring when aligned and connecting.',
        reasoning: 'Place the change where attention is already focused, while asking the person to hold steady.',
        tradeoff: 'Shape, color and wording work together; their individual effects cannot be separated.',
        evidence: { kind: 'observation', text: 'In the simulated scenario, people stop moving after the change.', source: 'Pixel simulation S01', limitation: 'Fictional qualitative observation. No participant count or connection-rate improvement is established.' },
      },
      {
        id: 'connection-state', title: 'Separate alignment from connection',
        tension: 'Alignment does not mean a connection or message transmission has completed.',
        choice: 'Distinguish blue Connecting from green Connected, with Sending shown separately.',
        reasoning: 'The simulated rationale is to avoid presenting success before connection.',
        tradeoff: 'More states need clear wording, even when the action remains holding still.',
        evidence: { kind: 'design-intent', text: 'Keep system progress distinct from alignment.', source: 'S03 and reference screens A02–A04', limitation: 'Visible states support the interface description; the reasoning is simulated.' },
      },
    ],
  } },
  experience: { content: {
    title: 'From an emergency entry to messaging',
    paragraphs: ['The reference media shows the main visible steps, not every transition, failure or recovery state.'],
    steps: [
      { id: 'entry', title: 'Report an emergency', text: 'When a call cannot connect, enter Satellite SOS.', media: { type: 'video', src: '/assets/media/emergency-call.mp4', alt: 'Satellite SOS entry in emergency calling', scale: 1.25 } },
      { id: 'questions', title: 'Describe the situation', text: 'Answer questions about the emergency.', media: { type: 'image', src: '/assets/media/emergency-questions.png', alt: 'Emergency questionnaire showing incident categories', scale: 1.17 } },
      { id: 'align', title: 'Align and hold steady', text: 'Follow alignment guidance, then hold steady while connecting.', media: { type: 'video', src: '/assets/media/satellite.mp4', alt: 'Alignment followed by connection feedback', scale: 1.17 } },
      { id: 'message', title: 'Continue messaging', text: 'The reference demonstration continues to emergency messaging.', media: { type: 'video', src: '/assets/media/emergency-response.mp4', alt: 'Reference emergency messaging demonstration', scale: 1.25 } },
    ],
    caption: 'Reference media by Dousan Miao; not evidence of the portfolio owner’s work.',
    media: [
      { type: 'youtube', id: '2X3_7cqgshs', alt: 'Satellite SOS demo on Pixel 9', caption: 'External product demonstration.' },
      { type: 'youtube', id: 'P9bQGBCGc1w', alt: 'Get help in an emergency with Satellite SOS', caption: 'External educational video.' },
    ],
  } },
  impact: { content: {
    title: 'A clearer transition from moving to holding still',
    evidence: [{ kind: 'observation', text: 'The simulated story ends with people stopping after the feedback changes.', source: 'Pixel simulation S01', limitation: 'A writing exercise, not an actual outcome. No rescue impact, launch attribution or quantitative improvement is claimed.' }],
  } },
  reflection: { content: {
    title: 'Prototype the movement, not just the screen',
    paragraphs: ['Simulated reflection: a static target can communicate alignment, while a handheld prototype exposes the change from moving to waiting. A next question is how to communicate recovery after moving out of range.'],
  } },
};
