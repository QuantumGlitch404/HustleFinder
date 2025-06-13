import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Check for API key and log a warning if not found
// This log will appear in your Vercel function logs during startup or first invocation.
if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
  console.warn(
    'CRITICAL_WARNING: GEMINI_API_KEY (or GOOGLE_API_KEY) is not set in environment variables. ' +
    'Google AI features, such as description rewriting, will NOT work. ' +
    'Please set this environment variable in your Vercel project settings.'
  );
}

export const ai = genkit({
  plugins: [
    googleAI({
      // Genkit will automatically look for GEMINI_API_KEY or GOOGLE_API_KEY
      // in process.env if apiKey is not explicitly provided here.
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
