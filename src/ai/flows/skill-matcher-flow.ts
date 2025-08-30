'use server';
/**
 * @fileOverview An AI flow to match user skills with relevant side hustles.
 *
 * - matchSkillsToHustles - A function that takes user skills and returns a list of matching hustle IDs.
 * - SkillMatcherInput - The input type for the matchSkillsToHustles function.
 * - SkillMatcherOutput - The return type for the matchSkillsToHustles function.
 */

import { ai } from '@/ai/genkit';
import { allHustles } from '@/lib/hustle-data';
import { z } from 'genkit';
import { geminiPro } from 'genkit/models';

// Prepare a summarized list of hustles for the AI prompt
// This is crucial to avoid exceeding token limits and to focus the AI.
const hustleSummary = allHustles.map(hustle => ({
  id: hustle.id,
  title: hustle.title,
  category: hustle.category,
  skills: hustle.skillsToLearn // 'skillsToLearn' is the most relevant field for matching
}));

const SkillMatcherInputSchema = z.object({
  userSkills: z.string().describe('A comma-separated string or a descriptive sentence of the user\'s skills.'),
});
export type SkillMatcherInput = z.infer<typeof SkillMatcherInputSchema>;

const SkillMatcherOutputSchema = z.object({
  recommendedHustleIds: z.array(z.object({
    id: z.string().describe('The ID of the recommended hustle.'),
    reason: z.string().describe('A brief explanation of why this hustle matches the user\'s skills.')
  })).describe('A list of recommended hustle IDs that best match the provided skills, along with a reason for each recommendation. Return up to 10 recommendations.'),
});
export type SkillMatcherOutput = z.infer<typeof SkillMatcherOutputSchema>;


const skillMatcherPrompt = ai.definePrompt({
  name: 'skillMatcherPrompt',
  model: 'gemini-1.5-flash-latest',
  input: { schema: SkillMatcherInputSchema },
  output: { schema: SkillMatcherOutputSchema },
  prompt: `You are an expert career counselor specializing in side hustles. Your task is to match a user's skills with the most relevant side hustles from the provided list.

Analyze the user's skills:
User's skills: {{{userSkills}}}

Here is the list of available side hustles with their titles, categories, and required skills:
{{{json hustleSummary}}}

Based on the user's skills, identify the top 10 most relevant hustles from the list. For each recommendation, provide a brief, one-sentence reason explaining why it's a good match.
Return the result as a list of objects, each containing the hustle 'id' and a 'reason'. Do not recommend hustles that are not in the provided list. Focus on matching the user's skills to the 'skills' field of the hustles.
`,
  // Pass the hustle summary as part of the prompt context, not as an input field
  context: {
    hustleSummary: hustleSummary
  }
});


const matchSkillsToHustlesFlow = ai.defineFlow(
  {
    name: 'matchSkillsToHustlesFlow',
    inputSchema: SkillMatcherInputSchema,
    outputSchema: SkillMatcherOutputSchema,
  },
  async (input) => {
    const { output } = await skillMatcherPrompt(input);
    // The prompt now directly returns the desired output format, so no extra processing is needed.
    // Ensure output is not null before returning.
    return output || { recommendedHustleIds: [] };
  }
);

// Export a wrapper function to be called from the client-side component.
export async function matchSkillsToHustles(input: SkillMatcherInput): Promise<SkillMatcherOutput> {
  return await matchSkillsToHustlesFlow(input);
}
