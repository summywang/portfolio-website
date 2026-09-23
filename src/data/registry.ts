import { dealerPortal } from './cases/dealer-portal';
import { satellite } from './cases/satellite';
import type { CaseStudyData } from './schema';
export { satellite };
/** Real and demo cases only. Template reference is a separate non-case route. */
export const caseStudies: CaseStudyData[] = [dealerPortal, satellite];
