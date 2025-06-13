
'use client';

import { useState, use, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { getHustleById } from '@/lib/hustle-data';
import type { Hustle, Testimonial } from '@/types/hustle';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  ExternalLink,
  Star,
  DollarSign,
  Clock,
  Wrench, 
  BarChart3, 
  HelpCircle,
  AlertTriangle,
  MessageSquarePlus
} from 'lucide-react';
import SubmitReviewForm from '@/components/hustles/SubmitReviewForm'; 

interface HustleDetailsPageProps {
  params: { id: string };
}

export default function HustleDetailsPage({ params }: HustleDetailsPageProps) {
  const resolvedParams = use(params as unknown as Promise<{id: string}>);
  const hustleId = resolvedParams.id;
 
  const hustleData: Hustle | undefined = getHustleById(hustleId);
  
  const [hustle, setHustle] = useState<Hustle | undefined>(hustleData);
  const [showStartingGuide, setShowStartingGuide] = useState(false);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>(hustleData?.testimonials || []);

  useEffect(() => {
    if (hustleData) {
      setHustle(hustleData);
      setDisplayedTestimonials(hustleData.testimonials || []);
    }
  }, [hustleData]);

  if (!hustle) {
    if(!hustleData) notFound();
    return <div className="container mx-auto py-12 px-4 text-center">Loading hustle details...</div>;
  }

  const handleAddNewReview = (newReviewData: Omit<Testimonial, 'id'>) => {
    const newReview: Testimonial = {
      ...newReviewData,
      id: `testimonial-${hustle.id}-client-${Date.now()}`,
    };
    setDisplayedTestimonials(prevTestimonials => [newReview, ...prevTestimonials]);
  };


  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto shadow-xl rounded-lg overflow-hidden">
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
            <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="secondary" className="text-sm py-1 px-3 bg-accent text-accent-foreground shadow">
                <Layers className="h-4 w-4 mr-2" />
                {hustle.category}
                </Badge>
                <Badge 
                    variant={
                        hustle.difficultyLevel === 'Beginner Friendly' ? 'default' :
                        hustle.difficultyLevel === 'Intermediate' ? 'secondary' : 'destructive'
                    } 
                    className="text-sm py-1 px-3 shadow"
                >
                    {hustle.difficultyEmoji} {hustle.difficultyLevel}
                </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 pt-8">
          <div className="flex items-center text-muted-foreground mb-4"> 
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
            aria-expanded={showStartingGuide}
          >
            {showStartingGuide ? 'Hide Details & Guide' : 'Show Details & Guide'}
            {showStartingGuide ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>

        {showStartingGuide && (
          <section aria-labelledby="starting-guide-heading" className="bg-secondary/10"> 
            <h2 id="starting-guide-heading" className="sr-only">Starting Guide and Additional Details</h2>
            <div className="p-6 space-y-8">
                
              <div className="p-4 rounded-lg border bg-card shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <ListChecks className="h-6 w-6 mr-3" />
                  Steps to Start
                </h3>
                <p className="text-foreground leading-relaxed whitespace-pre-line">{hustle.stepsToStart}</p>
              </div>

              <div className="p-4 rounded-lg border bg-card shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <LinkIcon className="h-6 w-6 mr-3" />
                  Proof of Success / Resources
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
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 mr-3" />
                  Tip for Success
                </h3>
                <p className="text-foreground leading-relaxed">{hustle.successTip}</p>
              </div>

              <div className="p-4 rounded-lg border bg-card shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <GraduationCap className="h-6 w-6 mr-3" />
                  What to Learn
                </h3>
                <p className="text-foreground leading-relaxed">{hustle.skillsToLearn}</p>
              </div>

              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-3"><path d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2Z"/><path d="M12 7H8M12 7V2L20 9"/><path d="M16 5H8M12 7v3M4.2 10.2c-.1-.6.3-1.2.9-1.3l7.6-1.2c.9-.1 1.7.6 1.7 1.5V13c0 .8-.7 1.5-1.5 1.5L6.7 15.8c-1 .1-1.8-.7-1.8-1.7Z"/></svg>
                    Key Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-2">
                  <div>
                    <h4 className="text-lg font-semibold text-primary/90 mb-2 flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-primary" /> Earnings Potential
                    </h4>
                    {hustle.earningPotentials.map(ep => (
                      <p key={ep.level} className="text-foreground ml-7">
                        <strong className="font-medium">{ep.level}:</strong> {ep.range} {ep.description && `(${ep.description})`}
                      </p>
                    ))}
                  </div>
                  <hr className="border-border/50"/>
                  <div>
                    <h4 className="text-lg font-semibold text-primary/90 mb-2 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" /> Time Required
                    </h4>
                    <p className="text-foreground ml-7">{hustle.timeRequired}</p>
                  </div>
                  <hr className="border-border/50"/>
                  <div>
                    <h4 className="text-lg font-semibold text-primary/90 mb-2 flex items-center">
                      <Wrench className="h-5 w-5 mr-2 text-primary" /> Tools & Platforms 
                    </h4>
                    <ul className="list-disc list-inside text-foreground space-y-1 ml-7">
                      {hustle.toolsNeeded.map(tool => <li key={tool}>{tool}</li>)}
                    </ul>
                  </div>
                  <hr className="border-border/50"/>
                   <div>
                    <h4 className="text-lg font-semibold text-primary/90 mb-2 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-primary" /> Difficulty Level
                    </h4>
                    <p className="text-foreground ml-7">{hustle.difficultyEmoji} {hustle.difficultyLevel}</p>
                  </div>
                </CardContent>
              </Card>


              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <Star className="h-6 w-6 mr-3" /> Real User Testimonials ({displayedTestimonials.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  {displayedTestimonials && displayedTestimonials.length > 0 ? (
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 rounded-md border p-3 bg-background">
                      {displayedTestimonials.map((testimonial) => (
                        <div key={testimonial.id} className="p-3 border rounded-md bg-card shadow-sm">
                          <div className="flex items-center mb-1 justify-between">
                            <p className="text-sm font-semibold text-foreground">{testimonial.reviewerName}</p>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < testimonial.starRating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} />
                                ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground italic mb-1">"{testimonial.quote}"</p>
                          {testimonial.location && <p className="text-xs text-muted-foreground/80">{testimonial.location}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No testimonials available yet for this hustle. Be the first to review!</p>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <MessageSquarePlus className="h-6 w-6 mr-3" /> Write Your Review
                  </CardTitle>
                  <CardDescription>Share your experience with this hustle. Your feedback helps others!</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <SubmitReviewForm 
                    hustleId={hustle.id} 
                    onSubmitReview={handleAddNewReview} 
                  />
                </CardContent>
                 <CardFooter>
                    <p className="text-xs text-muted-foreground">
                        Note: Reviews submitted are for demonstration purposes and will only be visible during your current session.
                    </p>
                </CardFooter>
              </Card>


              <Card className="shadow-md rounded-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <HelpCircle className="h-6 w-6 mr-3" /> Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  {hustle.faqs && hustle.faqs.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      {hustle.faqs.map((faq) => (
                        <AccordionItem value={faq.id} key={faq.id}>
                          <AccordionTrigger className="text-left hover:no-underline text-base">
                              <span className="font-medium text-foreground">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pt-1 pb-3">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <p className="text-muted-foreground">No FAQs available yet for this hustle.</p>
                  )}
                </CardContent>
              </Card>

              <Card className="shadow-md rounded-lg border-destructive/70 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-destructive">
                    <AlertTriangle className="h-6 w-6 mr-3" /> What to Avoid (Red Flags)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  {hustle.redFlags && hustle.redFlags.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2 text-destructive/90 pl-2">
                      {hustle.redFlags.map((flag, index) => (
                        <li key={index} className="leading-relaxed">{flag}</li>
                      ))}
                    </ul>
                  ) : (
                     <p className="text-muted-foreground">Always practice due diligence and research thoroughly. No specific red flags unique to this hustle have been noted beyond general online safety.</p>
                  )}
                </CardContent>
              </Card>

            </div> 
          </section>
        )}
      </Card>
    </div>
  );
}

