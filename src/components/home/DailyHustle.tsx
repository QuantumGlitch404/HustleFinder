
'use client';
import { useState, useEffect } from 'react';
import { allHustles } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import HustleCard from '@/components/hustles/HustleCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import AnimatedDiv from '@/components/animations/AnimatedDiv';

const DailyHustle = () => {
  const [dailyHustle, setDailyHustle] = useState<Hustle | null>(null);

  useEffect(() => {
    const today = new Date();
    // Simple way to get a "daily" hustle: use day of the year
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    if (allHustles.length > 0) {
      const index = dayOfYear % allHustles.length;
      setDailyHustle(allHustles[index]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount (client-side)

  if (!dailyHustle) {
    return (
      <AnimatedDiv animationClasses="fade-in" durationClass="duration-300">
        <Card className="w-full shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                    <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" />
                    Today's Hustle Spotlight
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Loading today's hustle spotlight...</p>
            </CardContent>
        </Card>
      </AnimatedDiv>
    );
  }

  return (
    <AnimatedDiv animationClasses="fade-in zoom-in-95" durationClass="duration-500">
        <Card className="w-full shadow-xl border-2 border-accent/50 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-2xl sm:text-3xl text-primary">
            <Lightbulb className="h-7 w-7 sm:h-8 sm:w-8 mr-2 sm:mr-3 text-accent animate-pulse" />
            Today's Hustle Spotlight
            </CardTitle>
        </CardHeader>
        <CardContent>
            <HustleCard hustle={dailyHustle} />
        </CardContent>
        </Card>
    </AnimatedDiv>
  );
};

export default DailyHustle;
