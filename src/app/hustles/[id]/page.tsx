
'use client';

import { useState, use, useEffect } from 'react';
import { notFound, usePathname } from 'next/navigation';
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
  MessageSquarePlus,
  KeyRound,
} from 'lucide-react';
import SubmitReviewForm from '@/components/hustles/SubmitReviewForm'; 
import InPageNav from '@/components/hustles/InPageNav';
import BookmarkButton from '@/components/hustles/BookmarkButton';
import ShareHustlePopover from '@/components/hustles/ShareHustlePopover';
import AdPlaceholder from '@/components/ads/AdPlaceholder';
import AnimatedDiv from '@/components/animations/AnimatedDiv';


interface HustleDetailsPageProps {
  params: { id: string };
}

export default function HustleDetailsPage({ params }: HustleDetailsPageProps) {
  const resolvedParams = use(params as unknown as Promise<{id: string}>);
  const hustleId = resolvedParams.id;
 
  const hustleData: Hustle | undefined = getHustleById(hustleId);
  
  const [hustle, setHustle] = useState<Hustle | undefined>(hustleData);
  const [showStartingGuide, setShowStartingGuide] = useState(true);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<Testimonial[]>(hustleData?.testimonials || []);

  const pathname = usePathname();

  useEffect(() => {
    if (hustleData) {
      setHustle(hustleData);
      setDisplayedTestimonials(hustleData.testimonials || []);
    }
  }, [hustleData]);

  if (!hustle) {
    if(!hustleData) notFound();
    return <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">Loading hustle details...</div>;
  }

  const handleAddNewReview = (newReviewData: Omit<Testimonial, 'id'>) => {
    const newReview: Testimonial = {
      ...newReviewData,
      id: `testimonial-${hustle.id}-client-${Date.now()}`, 
    };
    setDisplayedTestimonials(prevTestimonials => [newReview, ...prevTestimonials]);
  };
  
  const shouldShowInPageNav = true; 

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {shouldShowInPageNav && <InPageNav />}
        <main className="w-full lg:flex-grow min-w-0 mt-6 lg:mt-0">
            <Card className="w-full shadow-xl rounded-lg overflow-hidden">
            <CardHeader className="p-0 relative">
              <div className="relative w-full h-60 sm:h-72 md:h-96">
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
                 <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2 bg-card/70 backdrop-blur-sm p-1.5 rounded-lg">
                  <BookmarkButton 
                    hustleId={hustle.id} 
                    size="sm"
                    variant="ghost" 
                    className="h-8 w-8 p-1.5 sm:h-9 sm:w-9 sm:p-2 text-white hover:text-destructive"
                    isIconOnly={true}
                  />
                  <ShareHustlePopover 
                    hustleTitle={hustle.title} 
                    hustleUrl={pathname} 
                    triggerSize="sm"
                    triggerVariant="ghost" 
                    isIconOnly={true}
                    triggerClassName="h-8 w-8 p-1.5 sm:h-9 sm:w-9 sm:p-2 text-white hover:text-primary"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6"> 
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2 drop-shadow-md">{hustle.title}</CardTitle>
                <div className="flex flex-wrap gap-2 items-center">
                    <Badge variant="secondary" className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-accent text-accent-foreground shadow">
                    <Layers className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    {hustle.category}
                    </Badge>
                    <Badge 
                        variant={
                            hustle.difficultyLevel === 'Beginner Friendly' ? 'default' :
                            hustle.difficultyLevel === 'Intermediate' ? 'secondary' : 'destructive'
                        } 
                        className="text-xs sm:text-sm py-1 px-2 sm:px-3 shadow"
                    >
                        {hustle.difficultyEmoji} {hustle.difficultyLevel}
                    </Badge>
                </div>
              </div>
            </CardHeader>

            {/* Ad Placeholder 1 - Top */}
            <AnimatedDiv animationClasses="fade-in" durationClass="duration-500" className="w-full px-4 md:px-6 pt-4 md:pt-6">
              <AdPlaceholder 
                description={`Hustle Page Ad Slot 1 (Top) - ${hustle.title}`}
                adTypeSuggestion="Banner"
                dimensionsSuggestion="Responsive or 728x90px"
              />
            </AnimatedDiv>
            
            <CardContent className="p-4 md:p-6 pt-6 md:pt-8" id="about-hustle">
              <div className="flex items-center text-muted-foreground mb-4"> 
                <Briefcase className="h-6 w-6 md:h-7 md:w-7 mr-3 text-primary" /> 
                <h2 className="text-xl sm:text-2xl font-semibold text-primary">About this Hustle</h2> 
              </div>
              <CardDescription className="text-sm sm:text-base text-foreground leading-relaxed">
                {hustle.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="p-4 md:p-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 border-t"> 
              <Button asChild variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                <Link href="/hustles">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Hustles
                </Link>
              </Button>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <BookmarkButton 
                    hustleId={hustle.id} 
                    size="default" 
                    variant="outline" 
                    isIconOnly={false} 
                    className="w-full sm:w-auto"
                />
                <ShareHustlePopover 
                    hustleTitle={hustle.title} 
                    hustleUrl={pathname} 
                    triggerSize="default" 
                    triggerVariant="outline"
                    isIconOnly={false}
                    triggerClassName="w-full sm:w-auto"
                />
              </div>
              <Button 
                onClick={() => setShowStartingGuide(!showStartingGuide)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-sm sm:text-base"
                aria-expanded={showStartingGuide}
                aria-controls="starting-guide-content"
              >
                {showStartingGuide ? 'Hide Details & Guide' : 'Show Details & Guide'}
                {showStartingGuide ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
            </CardFooter>

            {showStartingGuide && (
              <section aria-labelledby="starting-guide-heading" id="starting-guide-content" className="bg-secondary/10"> 
                <h2 id="starting-guide-heading" className="sr-only">Starting Guide and Additional Details</h2>
                <div className="p-4 md:p-6 space-y-6 md:space-y-8">
                    
                  <div className="p-3 md:p-4 rounded-lg border bg-card shadow-sm" id="steps-to-start">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 md:mb-4 flex items-center">
                      <ListChecks className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                      Steps to Start
                    </h3>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">{hustle.stepsToStart}</p>
                  </div>

                  <div className="p-3 md:p-4 rounded-lg border bg-card shadow-sm" id="proof-resources">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 md:mb-4 flex items-center">
                      <LinkIcon className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                      Proof of Success / Resources
                    </h3>
                    <Button asChild variant="link" className="text-accent p-0 h-auto hover:text-accent/80 inline-flex items-center group text-sm sm:text-base">
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

                  <div className="p-3 md:p-4 rounded-lg border bg-card shadow-sm" id="success-tip">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 md:mb-4 flex items-center">
                      <Lightbulb className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                      Tip for Success
                    </h3>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{hustle.successTip}</p>
                  </div>

                  <div className="p-3 md:p-4 rounded-lg border bg-card shadow-sm" id="what-to-learn">
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 md:mb-4 flex items-center">
                      <GraduationCap className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                      What to Learn
                    </h3>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{hustle.skillsToLearn}</p>
                  </div>

                  <Card className="shadow-md rounded-lg" id="key-info">
                    <CardHeader className="p-3 md:p-4 pb-0 md:pb-0">
                      <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                        <KeyRound className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                        Key Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 md:space-y-6 p-3 md:p-4 pt-2 md:pt-3">
                      <div>
                        <h4 className="text-md sm:text-lg font-semibold text-primary/90 mb-1 md:mb-2 flex items-center">
                          <DollarSign className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" /> Earnings Potential
                        </h4>
                        {hustle.earningPotentials.map(ep => (
                          <p key={ep.level} className="text-xs sm:text-sm text-foreground ml-6 md:ml-7">
                            <strong className="font-medium">{ep.level}:</strong> {ep.range} {ep.description && `(${ep.description})`}
                          </p>
                        ))}
                      </div>
                      <hr className="border-border/50"/>
                      <div>
                        <h4 className="text-md sm:text-lg font-semibold text-primary/90 mb-1 md:mb-2 flex items-center">
                          <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" /> Time Required
                        </h4>
                        <p className="text-xs sm:text-sm text-foreground ml-6 md:ml-7">{hustle.timeRequired}</p>
                      </div>
                      <hr className="border-border/50"/>
                      <div>
                        <h4 className="text-md sm:text-lg font-semibold text-primary/90 mb-1 md:mb-2 flex items-center">
                          <Wrench className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" /> Tools & Platforms 
                        </h4>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-foreground space-y-1 ml-6 md:ml-7">
                          {hustle.toolsNeeded.map(tool => <li key={tool}>{tool}</li>)}
                        </ul>
                      </div>
                      <hr className="border-border/50"/>
                      <div>
                        <h4 className="text-md sm:text-lg font-semibold text-primary/90 mb-1 md:mb-2 flex items-center">
                          <BarChart3 className="h-4 w-4 md:h-5 md:w-5 mr-2 text-primary" /> Difficulty Level
                        </h4>
                        <p className="text-xs sm:text-sm text-foreground ml-6 md:ml-7">{hustle.difficultyEmoji} {hustle.difficultyLevel}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Ad Placeholder 2 - Mid 1 */}
                  <AnimatedDiv animationClasses="fade-in" durationClass="duration-500" className="w-full">
                    <AdPlaceholder 
                      description={`Hustle Page Ad Slot 2 (Mid-Guide) - ${hustle.title}`}
                      adTypeSuggestion="In-Content Unit or Native Banner"
                      dimensionsSuggestion="Responsive"
                    />
                  </AnimatedDiv>

                  <Card className="shadow-md rounded-lg" id="testimonials">
                    <CardHeader className="p-3 md:p-4 pb-0 md:pb-0">
                      <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                        <Star className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" /> Real User Testimonials ({displayedTestimonials.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 md:p-4 pt-2 md:pt-3">
                      {displayedTestimonials && displayedTestimonials.length > 0 ? (
                        <div className="space-y-3 md:space-y-4 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 rounded-md border p-2 md:p-3 bg-background">
                          {displayedTestimonials.map((testimonial) => (
                            <div key={testimonial.id} className="p-2 md:p-3 border rounded-md bg-card shadow-sm">
                              <div className="flex items-center mb-1 justify-between">
                                <p className="text-xs sm:text-sm font-semibold text-foreground">{testimonial.reviewerName}</p>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-3 w-3 sm:h-4 sm:w-4 ${i < testimonial.starRating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`} />
                                    ))}
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-muted-foreground italic mb-1">"{testimonial.quote}"</p>
                              {testimonial.location && <p className="text-xs text-muted-foreground/80">{testimonial.location}</p>}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm sm:text-base text-muted-foreground">No testimonials available yet for this hustle. Be the first to review!</p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Ad Placeholder 3 - Mid 2 */}
                  <AnimatedDiv animationClasses="fade-in" durationClass="duration-500" className="w-full">
                    <AdPlaceholder 
                      description={`Hustle Page Ad Slot 3 (Mid-Guide) - ${hustle.title}`}
                      adTypeSuggestion="In-Content Unit or Native Banner"
                      dimensionsSuggestion="Responsive"
                    />
                  </AnimatedDiv>

                  <Card className="shadow-md rounded-lg" id="write-review">
                    <CardHeader className="p-3 md:p-4 pb-0 md:pb-0">
                      <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                        <MessageSquarePlus className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" /> Write Your Review
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Share your experience with this hustle. Your feedback helps others!</CardDescription>
                    </CardHeader>
                    <CardContent className="p-3 md:p-4 pt-2 md:pt-3">
                      <SubmitReviewForm 
                        hustleId={hustle.id} 
                        onSubmitReview={handleAddNewReview} 
                      />
                    </CardContent>
                    <CardFooter className="p-3 md:p-4 pt-0">
                        <p className="text-xs text-muted-foreground">
                            Note: Reviews submitted are for demonstration purposes and will only be visible during your current session.
                        </p>
                    </CardFooter>
                  </Card>


                  <Card className="shadow-md rounded-lg" id="faqs">
                    <CardHeader className="p-3 md:p-4 pb-0 md:pb-0">
                      <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                        <HelpCircle className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" /> Frequently Asked Questions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 md:p-4 pt-2 md:pt-3">
                      {hustle.faqs && hustle.faqs.length > 0 ? (
                        <Accordion type="single" collapsible className="w-full">
                          {hustle.faqs.map((faq) => (
                            <AccordionItem value={faq.id} key={faq.id}>
                              <AccordionTrigger className="text-left hover:no-underline text-sm sm:text-base">
                                  <span className="font-medium text-foreground">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 pb-3">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      ) : (
                        <p className="text-sm sm:text-base text-muted-foreground">No FAQs available yet for this hustle.</p>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="shadow-md rounded-lg border-destructive/70 bg-destructive/5" id="red-flags">
                    <CardHeader className="p-3 md:p-4 pb-0 md:pb-0">
                      <CardTitle className="flex items-center text-xl sm:text-2xl text-destructive">
                        <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" /> What to Avoid (Red Flags)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 md:p-4 pt-2 md:pt-3">
                      {hustle.redFlags && hustle.redFlags.length > 0 ? (
                        <ul className="list-disc list-inside space-y-2 text-destructive/90 pl-2">
                          {hustle.redFlags.map((flag, index) => (
                            <li key={index} className="text-sm sm:text-base leading-relaxed">{flag}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm sm:text-base text-muted-foreground">Always practice due diligence and research thoroughly. No specific red flags unique to this hustle have been noted beyond general online safety.</p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Ad Placeholder 4 - Bottom */}
                  <AnimatedDiv animationClasses="fade-in" durationClass="duration-500" className="w-full">
                    <AdPlaceholder 
                      description={`Hustle Page Ad Slot 4 (Bottom) - ${hustle.title}`}
                      adTypeSuggestion="Banner"
                      dimensionsSuggestion="Responsive or 728x90px"
                    />
                  </AnimatedDiv>
                </div> 
              </section>
            )}
          </Card>
        </main>
      </div>
    </div>
  );
}
