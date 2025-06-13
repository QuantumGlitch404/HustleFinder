
import RewriteForm from '@/components/ai/RewriteForm';
import { BrainCircuit } from 'lucide-react';

export const metadata = {
  title: 'AI Description Enhancer | Hustle Finder',
  description: 'Use our AI tool to rewrite and improve your hustle descriptions for better clarity.',
};

export default function RewriteDescriptionPage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <BrainCircuit className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary mb-3 sm:mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">AI Hustle Description Enhancer</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          Let AI help you craft clearer and more engaging descriptions for your side hustles.
        </p>
      </div>
      <RewriteForm />
    </div>
  );
}
