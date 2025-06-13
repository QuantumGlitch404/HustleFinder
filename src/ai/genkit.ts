
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Attempt to get the API key from environment variables
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

// Log a warning if the API key is not found. This is crucial for debugging.
if (!apiKey) {
  console.warn(
    'CRITICAL_WARNING: GEMINI_API_KEY (or GOOGLE_API_KEY) is not set in environment variables. ' +
    'Google AI features, such as description rewriting, will NOT work. ' +
    'Please ensure this environment variable is correctly set in your Vercel project settings (for deployed app) or your local .env file (for local development).'
  );
}

// Configure the Google AI plugin.
// If an API key is found, pass it explicitly.
// Otherwise, initialize googleAI() without an explicit key,
// relying on its default behavior (which might include other auth methods or fail if no key is found and it's required).
const googleAIPlugin = apiKey ? googleAI({ apiKey }) : googleAI();

export const ai = genkit({
  plugins: [googleAIPlugin],
  model: 'gemini-1.5-flash', // Changed model
});

