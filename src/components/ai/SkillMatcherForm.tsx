
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, AlertTriangle, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { matchSkillsToHustles, type SkillMatcherInput, type SkillMatcherOutput } from '@/ai/flows/skill-matcher-flow';
import HustleCard from '@/components/hustles/HustleCard';
import { allHustles } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import AnimatedDiv from '../animations/AnimatedDiv';

const SkillMatcherForm = () => {
  const [userSkills, setUserSkills] = useState('');
  const [recommendedHustles, setRecommendedHustles] = useState<Hustle[]>([]);
  const [recommendationReasons, setRecommendationReasons] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userSkills.trim()) {
      setError('Please enter your skills.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setRecommendedHustles([]);
    setRecommendationReasons({});

    try {
      const input: SkillMatcherInput = { userSkills };
      const result = await matchSkillsToHustles(input);
      
      const reasons: Record<string, string> = {};
      const foundHustles = result.recommendedHustleIds
        .map(recommendation => {
          const hustle = allHustles.find(h => h.id === recommendation.id);
          if (hustle) {
            reasons[hustle.id] = recommendation.reason;
          }
          return hustle;
        })
        .filter((h): h is Hustle => h !== undefined); // Type guard to filter out undefined

      setRecommendedHustles(foundHustles);
      setRecommendationReasons(reasons);

      if (foundHustles.length > 0) {
        toast({
          title: "Here are your matches!",
          description: "We found some hustles that fit your skills.",
        });
      } else {
        setError("We couldn't find any specific matches. Try broadening your skills description.");
      }

    } catch (err) {
      console.error('AI Skill Matcher Error:', err);
      const displayMessage = 'Failed to find matches. This could be due to a server configuration issue (e.g., a missing AI API key) or a temporary problem. Please try again later.';
      setError(displayMessage);
      toast({
        title: "Match Failed",
        description: displayMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setUserSkills(prev => prev ? `${prev}, ${suggestion}` : suggestion);
  };

  const skillSuggestions = [
    "Writing", "Graphic Design", "Video Editing", "Customer Service", 
    "Social Media", "Data Entry", "Coding", "Teaching", "Sales"
  ];

  return (
    <>
      <Card className="w-full max-w-xl md:max-w-2xl mx-auto shadow-xl">
        <form onSubmit={handleSubmit}>
          <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
            <CardTitle className="text-xl sm:text-2xl font-semibold">Your Skills</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Enter skills you have, like "creative writing, photo editing, social media marketing", or "I'm good with people and organizing events." The more detail, the better!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
            <div className="space-y-2">
              <Textarea
                id="user-skills"
                placeholder="e.g., JavaScript, React, public speaking, content creation..."
                value={userSkills}
                onChange={(e) => setUserSkills(e.target.value)}
                rows={4}
                className="resize-y text-sm"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Or click to add some common skills:</p>
                <div className="flex flex-wrap gap-2">
                    {skillSuggestions.map(skill => (
                        <Button key={skill} type="button" variant="outline" size="sm" onClick={() => handleSuggestionClick(skill)} disabled={isLoading}>
                            {skill}
                        </Button>
                    ))}
                </div>
            </div>
          </CardContent>
          <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4">
            <Button type="submit" disabled={isLoading || !userSkills.trim()} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-2.5">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Finding Matches...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Find My Hustles
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {error && (
        <div className="mt-8 flex items-center justify-center p-4 rounded-md bg-destructive/10 text-destructive text-sm max-w-2xl mx-auto">
          <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {recommendedHustles.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-primary">Your Recommended Hustles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedHustles.map((hustle, index) => (
                <AnimatedDiv 
                    key={hustle.id} 
                    animationClasses="fade-in zoom-in-95" 
                    durationClass="duration-500"
                    delayClass={`delay-${index * 100}`}
                    className="h-full flex flex-col"
                >
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center mb-2 shadow-sm">
                        <p className="text-xs sm:text-sm font-medium text-primary flex items-start">
                            <Lightbulb className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="flex-grow text-left">{recommendationReasons[hustle.id] || 'This is a good match for your skills.'}</span>
                        </p>
                    </div>
                    <div className="flex-grow">
                        <HustleCard hustle={hustle} />
                    </div>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillMatcherForm;
