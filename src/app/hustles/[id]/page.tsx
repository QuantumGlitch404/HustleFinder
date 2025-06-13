
'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { getHustleById } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Briefcase, 
  Layers, 
  ChevronDown, 
  ChevronUp,
  ListChecks,
  Link as LinkIcon, 
  Lightbulb,
  GraduationCap,
  ExternalLink
} from 'lucide-react';

export default function HustleDetailsPage() {
  const routeParams = useParams<{ id: string }>();
  const hustleId = routeParams.id;

  const hustle: Hustle | undefined = getHustleById(hustleId);
  const [showStartingGuide, setShowStartingGuide] = useState(false);

  if (!hustle) {
    notFound();
  }

  // TypeScript knows hustle is defined here due to the notFound() call
  if (!hustle) return null;


  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-3xl mx-auto shadow-xl rounded-lg overflow-hidden">
        <CardHeader className="p-0 relative">
          <div className="relative w-full h-72 sm:h-96">
            <Image
              src={hustle.imageUrl}
              alt={hustle.title}
              fill 
              style={{objectFit:"cover"}}
              className="rounded-t-lg" 
              data-ai-hint={hustle.imageHint}
              priority 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" /> 
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6"> 
            <CardTitle className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2 drop-shadow-md">{hustle.title}</CardTitle>
            <Badge variant="secondary" className="text-sm py-1 px-3 bg-accent text-accent-foreground shadow">
              <Layers className="h-4 w-4 mr-2" />
              {hustle.category}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 pt-8">
          <div className="flex items-center text-muted-foreground mb-3"> 
            <Briefcase className="h-6 w-6 mr-3 text-primary" /> 
            <h2 className="text-2xl font-semibold text-primary">About this Hustle</h2> 
          </div>
          <CardDescription className="text-base text-foreground leading-relaxed">
            {hustle.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t"> 
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/hustles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hustles
            </Link>
          </Button>
          <Button 
            onClick={() => setShowStartingGuide(!showStartingGuide)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
          >
            {showStartingGuide ? 'Hide Starting Guide' : 'Show Starting Guide'}
            {showStartingGuide ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>

        {showStartingGuide && (
          <section aria-labelledby="starting-guide-heading"> 
            <CardContent className="p-6 pt-6 border-t bg-secondary/10"> 
              <h2 id="starting-guide-heading" className="sr-only">Starting Guide</h2> 
              <div className="space-y-8"> 
                
                <div className="p-4 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <ListChecks className="h-5 w-5 mr-2" />
                    Steps to Start
                  </h3>
                  <p className="text-foreground leading-relaxed whitespace-pre-line">{hustle.stepsToStart}</p>
                </div>

                <div className="p-4 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <LinkIcon className="h-5 w-5 mr-2" />
                    Proof of Success
                  </h3>
                  <Button asChild variant="link" className="text-accent p-0 h-auto hover:text-accent/80 inline-flex items-center group text-base">
                    <a
                      href={hustle.successProofLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Success Stories / Resources
                      <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>

                <div className="p-4 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Tip for Success
                  </h3>
                  <p className="text-foreground leading-relaxed">{hustle.successTip}</p>
                </div>

                <div className="p-4 rounded-lg border bg-card shadow-sm">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    What to Learn
                  </h3>
                  <p className="text-foreground leading-relaxed">{hustle.skillsToLearn}</p>
                </div>

              </div>
            </CardContent>
          </section>
        )}
      </Card>
    </div>
  );
}

