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
    items: [
      {
        id: 'visible-target', label: 'Alignment Guidance', title: 'Give alignment a visible target',
        blocks: [
          { type: 'text', paragraphs: ['The satellite-and-circle relationship suggests an alignment goal. In this simulation, the target communicates where to go but may still leave the physical movement ambiguous, so directional text explains how to move while the graphic keeps the destination visible.'] },
          { type: 'media', media: { type: 'video', src: '/assets/media/prototype.mp4', alt: 'Handheld prototype with a satellite alignment target', caption: 'Reference prototype footage; it supports the visible form and prototype context, not the simulated comparison or test history.' } },
          { type: 'text', paragraphs: ['This is simulated reasoning from S02. The reference media does not establish that this comparison was explored or tested in the original project.'] },
        ],
      },
      {
        id: 'stop-cue', label: 'Alignment Feedback', title: 'Put the stop cue in the alignment target',
        blocks: [
          { type: 'text', paragraphs: ['In the simulated iteration, changing only the title did not make people stop moving. The revised concept changes the target into a blue wave ring and pairs it with Connecting and hold-steady guidance, placing the transition where attention is already focused.', 'The simulated observation is that people stopped moving after the change. Shape, color and wording changed together, so the exercise cannot isolate one element or claim a measured improvement.'] },
        ],
      },
      {
        id: 'connection-state', label: 'Connection States', title: 'Separate alignment from connection',
        blocks: [
          { type: 'text', paragraphs: ['Blue Connecting means the phone is aligned but still needs to be held steady. Green Connected confirms the connection, while Sending remains a separate in-progress state. The simulated rationale is to avoid presenting alignment as task completion.', 'Reference screens A02–A04 support the visible state differences. The reasoning comes from simulation S03 and does not establish the original design process.'] },
        ],
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
