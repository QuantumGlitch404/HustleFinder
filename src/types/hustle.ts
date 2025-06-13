
export interface Testimonial {
  id: string;
  reviewerName: string;
  starRating: number; // 1-5
  quote: string;
  location?: string; // e.g., "Mumbai, India"
  // videoUrl?: string; // For future video testimonials - not implemented yet
}

export interface EarningPotential {
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  range: string; // e.g., "₹5,000 - ₹15,000 / month"
  description?: string; // Optional additional context
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export type DifficultyLevel = 'Beginner Friendly' | 'Intermediate' | 'Advanced';

export interface Hustle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  detailsLink: string;
  stepsToStart: string;
  successProofLink: string;
  successTip: string;
  skillsToLearn: string;

  // New fields
  testimonials: Testimonial[];
  earningPotentials: EarningPotential[];
  timeRequired: string;
  toolsNeeded: string[];
  difficultyLevel: DifficultyLevel;
  difficultyEmoji: '🔰' | '⚙️' | '🧠';
  faqs: FAQ[];
  redFlags: string[];
}
