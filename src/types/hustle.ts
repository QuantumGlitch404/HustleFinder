export interface Hustle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string; // For data-ai-hint
  category: string;
  detailsLink: string;
  // New fields for the starting guide
  stepsToStart: string;
  successProofLink: string;
  successTip: string;
  skillsToLearn: string;
}
