
import { Sparkles } from 'lucide-react';
import AnimatedDiv from '@/components/animations/AnimatedDiv';
import SkillMatcherForm from '@/components/ai/SkillMatcherForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Skill Matcher | Hustle Finder',
  description: 'Enter your skills and let our AI recommend the perfect side hustles for you.',
};


export default function SkillMatcherPage() {
  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <AnimatedDiv animationClasses="fade-in slide-in-from-top-8" durationClass="duration-500">
        <div className="text-center mb-6 sm:mb-8">
            <Sparkles className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-accent mb-3 sm:mb-4" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
                AI-Powered Skill Matcher
            </h1>
            <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us what you're good at, and we'll find the best hustles for you.
            </p>
        </div>
      </AnimatedDiv>

      <AnimatedDiv animationClasses="fade-in zoom-in-95" durationClass="duration-500" delayClass='delay-100'>
        <SkillMatcherForm />
      </AnimatedDiv>
    </div>
  );
}
