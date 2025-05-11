import RewriteForm from '@/components/ai/RewriteForm';
import { BrainCircuit } from 'lucide-react';

export const metadata = {
  title: 'AI Description Enhancer | Hustle Finder',
  description: 'Use our AI tool to rewrite and improve your hustle descriptions for better clarity.',
};

export default function RewriteDescriptionPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <BrainCircuit className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">AI Hustle Description Enhancer</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Let AI help you craft clearer and more engaging descriptions for your side hustles.
        </p>
      </div>
      <RewriteForm />
    </div>
  );
}
