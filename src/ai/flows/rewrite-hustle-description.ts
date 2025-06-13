
// src/ai/flows/rewrite-hustle-description.ts
'use server';
/**
 * @fileOverview Rewrites a hustle description using AI to improve understanding.
 *
 * - rewriteHustleDescription - A function that rewrites a hustle description.
 * - RewriteHustleDescriptionInput - The input type for the rewriteHustleDescription function.
 * - RewriteHustleDescriptionOutput - The return type for the rewriteHustleDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteHustleDescriptionInputSchema = z.object({
  description: z
    .string()
    .describe('The hustle description to rewrite.'),
});
export type RewriteHustleDescriptionInput = z.infer<typeof RewriteHustleDescriptionInputSchema>;

const RewriteHustleDescriptionOutputSchema = z.object({
  rewrittenDescription: z.string().describe('The rewritten hustle description.'),
});
export type RewriteHustleDescriptionOutput = z.infer<typeof RewriteHustleDescriptionOutputSchema>;

export async function rewriteHustleDescription(
  input: RewriteHustleDescriptionInput
): Promise<RewriteHustleDescriptionOutput> {
  return rewriteHustleDescriptionFlow(input);
}

const rewriteHustleDescriptionPrompt = ai.definePrompt({
  name: 'rewriteHustleDescriptionPrompt',
  input: {schema: RewriteHustleDescriptionInputSchema},
  output: {schema: RewriteHustleDescriptionOutputSchema},
  config: { // Specify the model within the config object for the prompt
    model: 'googleAI/gemini-1.0-pro', 
  },
  prompt: `Rewrite the following hustle description to be more easily understandable, especially for non-native English speakers. Simplify the language and clarify the benefits. Do not add any new information, just rephrase the existing description.\n\nOriginal Description: {{{description}}}`,
});

const rewriteHustleDescriptionFlow = ai.defineFlow(
  {
    name: 'rewriteHustleDescriptionFlow',
    inputSchema: RewriteHustleDescriptionInputSchema,
    outputSchema: RewriteHustleDescriptionOutputSchema,
  },
  async input => {
    const {output} = await rewriteHustleDescriptionPrompt(input);
    return output!;
  }
);
