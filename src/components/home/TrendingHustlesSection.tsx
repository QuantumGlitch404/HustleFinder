
'use client';
import { useState, useEffect } from 'react';
import { allHustles } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import HustleCard from '@/components/hustles/HustleCard';
import { TrendingUp } from 'lucide-react';
import AnimatedDiv from '@/components/animations/AnimatedDiv';

const TrendingHustlesSection = () => {
  const [trendingHustles, setTrendingHustles] = useState<Hustle[]>([]);

  useEffect(() => {
    // Hardcoded IDs for trending hustles. Ensure these IDs exist.
    // These are selected to be somewhat diverse and likely to exist.
    const trendingHustleIds = [
      'hustle-3',   // Example: Freelance Graphic Designer
      'hustle-8',   // Example: Local Dog Walker
      'hustle-125', // Example: Online English/Local Language Tutor (from remoteBatch1)
      'hustle-245', // Example: Online Language Conversation Partner (from remoteBatch2)
      'hustle-485', // Example: Podcast Intro/Outro Music Composer (from remoteBatch4, assuming IDs are sequential)
    ];

    const foundHustles = trendingHustleIds
      .map(id => allHustles.find(hustle => hustle.id === id))
      .filter(hustle => hustle !== undefined) as Hustle[];
    
    setTrendingHustles(foundHustles);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount

  if (trendingHustles.length === 0) {
    return null; // Or a placeholder if desired
  }

  return (
    <section className="w-full">
      <AnimatedDiv animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" delayClass="delay-200" once={false}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary flex items-center justify-center">
          <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 mr-3 text-accent" />
          Trending Hustles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {trendingHustles.map((hustle, index) => (
            <AnimatedDiv 
              key={hustle.id} 
              animationClasses="fade-in zoom-in-95" 
              durationClass="duration-500"
              delayClass={`delay-${index * 100 + 300}`}
              className="h-full"
              once={false}
            >
              <HustleCard hustle={hustle} />
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedDiv>
    </section>
  );
};

export default TrendingHustlesSection;
