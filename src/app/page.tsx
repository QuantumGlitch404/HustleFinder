
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image"; // Keep for testimonial avatars
import { ArrowRight, Search, CheckCircle, Rocket, ListChecks, ShieldCheck, TrendingUp, Users, HelpCircle, Lightbulb, Info, BookOpen } from "lucide-react";
import { allHustles } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import AnimatedDiv from "@/components/animations/AnimatedDiv";
import DailyHustle from "@/components/home/DailyHustle";
import TrendingHustlesSection from "@/components/home/TrendingHustlesSection";
// AdPlaceholder import removed as it's replaced by direct ad code for banners

export default function HomePage() {
  const featuredHustles = allHustles.slice(0, 3); 

  const faqItems = [
    {
      id: "faq-1",
      question: "Is Hustle Finder completely free to use?",
      answer: "Yes, Hustle Finder is 100% free! We believe in providing open access to opportunities. There are no hidden charges or sign-up requirements to browse hustles."
    },
    {
      id: "faq-2",
      question: "How are the hustles verified or curated?",
      answer: "Our hustles are programmatically generated based on extensive research of common and viable side gig opportunities. While we strive for accuracy and relevance, the 'proof of success' links direct you to real-world resources. Always do your own due diligence before committing to any hustle."
    },
    {
      id: "faq-3",
      question: "Do I need any specific investment to start these hustles?",
      answer: "Many hustles listed can be started with minimal to no financial investment, especially those focusing on online services or leveraging existing skills. Each hustle's detail page provides information on 'Tools Needed,' many of which have free tiers."
    },
     {
      id: "faq-4",
      question: "How can I save or bookmark hustles I'm interested in?",
      answer: "You can easily save hustles by clicking the heart icon on any hustle card or on the hustle details page. Your saved hustles can be found on the 'Saved Hustles' page, accessible from the header."
    },
    {
      id: "faq-5",
      question: "How does the AI Description Enhancer work?",
      answer: "The AI Description Enhancer feature has been temporarily removed. We are working on improving it and plan to reintroduce it in the future with enhanced capabilities."
    }
  ];

  const testimonials = [
    {
      name: "Priya R.",
      avatarFallback: "PR",
      quote: "I started my freelance writing journey using Hustle Finder's guidance. The 'Steps to Start' were super helpful, and now I earn ₹20,000+ part-time!",
      altText: "Testimonial from Priya R.",
      imageHint: "profile person"
    },
    {
      name: "Ahmed K.",
      avatarFallback: "AK",
      quote: "Found a great remote project and boosted my income. This site is a gem! Being able to save my favorite hustles is a great feature.",
      altText: "Testimonial from Ahmed K.",
      imageHint: "profile person"
    },
    {
      name: "Sarah M.",
      avatarFallback: "SM",
      quote: "As a student, finding flexible work was key. Hustle Finder listed so many options I hadn't considered. The 'Beginner Friendly' tags are awesome.",
      altText: "Testimonial from Sarah M.",
      imageHint: "profile person"
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-12 sm:space-y-16 md:space-y-20 py-6 sm:py-8">
      {/* Hero Section */}
      <AnimatedDiv animationClasses="fade-in zoom-in-95" durationClass="duration-700" className="w-full">
        <section className="text-center py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/80 via-primary to-teal-700 rounded-xl shadow-2xl">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary-foreground mb-6">
              Find Your Perfect Side Hustle.
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Fast, Free, and Real. Unlock opportunities with curated listings and helpful tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto text-base sm:text-lg px-8 py-3 rounded-lg shadow-md">
                <Link href="/hustles">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Hustles
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 transition-transform duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto text-base sm:text-lg px-8 py-3 rounded-lg shadow-md bg-primary-foreground/10 hover:text-accent-foreground">
                <Link href="/about">
                  <Info className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedDiv>

      {/* Adsterra Banner 728x90 - Top */}
      <div className="my-6 sm:my-8 w-full flex justify-center items-center text-center">
        <div style={{ width: '728px', height: '90px' }}>
          <script type="text/javascript">
            {`
              // Adsterra Banner 728x90 - Homepage Top
              atOptions = {
                'key' : '87e9049723680c8cfa98207827c2583a',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `}
          </script>
          <script type="text/javascript" src="//jackalclenchedbedside.com/87e9049723680c8cfa98207827c2583a/invoke.js"></script>
        </div>
      </div>
      
      {/* Daily Hustle Suggestion Section */}
      <AnimatedDiv animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" className="container mx-auto px-4 w-full max-w-2xl" once={false}>
        <DailyHustle />
      </AnimatedDiv>

      {/* Trending Hustles Section */}
      <div className="container mx-auto px-4 w-full">
        <TrendingHustlesSection />
      </div>

      {/* Adsterra Native Banner Ad Slot 2 (Mid 1) */}
      <div className="container mx-auto px-4 w-full my-6 sm:my-8">
        <script async="async" data-cfasync="false" src="//jackalclenchedbedside.com/58439ef56bf081ebf459341353943de6/invoke.js"></script>
        <div id="container-58439ef56bf081ebf459341353943de6"></div>
      </div>

      {/* Why Hustle Finder? Section */}
      <AnimatedDiv animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" className="container mx-auto px-4 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">Why Hustle Finder?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: ListChecks, title: "Curated Hustles with Proof", desc: "Access detailed guides and links to real-world success stories for each hustle.", delay: "delay-100" },
            { icon: Rocket, title: "Fast Start Steps", desc: "Clear, actionable steps to help you begin your chosen side hustle quickly and efficiently.", delay: "delay-200" },
            { icon: Lightbulb, title: "Helpful Tools", desc: "Save your favorite hustles, share them easily, and switch themes for your comfort.", delay: "delay-300" },
            { icon: ShieldCheck, title: "100% Free, No Sign-Up", desc: "Explore all features and listings without any cost or registration barriers.", delay: "delay-400" }
          ].map((item, index) => (
            <AnimatedDiv key={index} animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" delayClass={item.delay} once={false}>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card h-full flex flex-col">
                <CardHeader className="items-center text-center p-4 sm:p-6">
                  <div className="p-3 bg-accent/20 rounded-full mb-3">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground p-4 sm:p-6 pt-0 flex-grow">
                  {item.desc}
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedDiv>

      {/* How It Works Section */}
      <AnimatedDiv animationClasses="fade-in" durationClass="duration-500" className="container mx-auto px-4 w-full bg-secondary/30 py-10 sm:py-12 rounded-xl" once={false}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          <AnimatedDiv animationClasses="fade-in slide-in-from-left-8" durationClass="duration-500" delayClass="delay-100" once={false}>
            <div className="flex flex-col items-center text-center p-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4 shadow-md inline-block">
                 <Search className="h-16 w-16 sm:h-20 sm:w-20 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">1. Discover Opportunities</h3>
              <p className="text-sm text-muted-foreground">Browse our extensive list of side hustles or use the search to find what suits you best.</p>
            </div>
          </AnimatedDiv>
          <AnimatedDiv animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" delayClass="delay-200" once={false}>
            <div className="flex flex-col items-center text-center p-4">
               <div className="p-4 bg-primary/10 rounded-full mb-4 shadow-md inline-block">
                <BookOpen className="h-16 w-16 sm:h-20 sm:w-20 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">2. Learn the Ropes</h3>
              <p className="text-sm text-muted-foreground">Each hustle comes with detailed steps, tools needed, earning potential, and tips for success.</p>
            </div>
          </AnimatedDiv>
          <AnimatedDiv animationClasses="fade-in slide-in-from-right-8" durationClass="duration-500" delayClass="delay-300" once={false}>
            <div className="flex flex-col items-center text-center p-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4 shadow-md inline-block">
                <Rocket className="h-16 w-16 sm:h-20 sm:w-20 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">3. Begin Your Journey</h3>
              <p className="text-sm text-muted-foreground">Empowered with knowledge, take the first step towards your new side income stream today!</p>
            </div>
          </AnimatedDiv>
        </div>
      </AnimatedDiv>

      {/* Adsterra Native Banner Ad Slot 3 (Mid 2) */}
      <div className="container mx-auto px-4 w-full my-6 sm:my-8">
        <script async="async" data-cfasync="false" src="//jackalclenchedbedside.com/58439ef56bf081ebf459341353943de6/invoke.js"></script>
        <div id="container-58439ef56bf081ebf459341353943de6"></div>
      </div>

      {/* Testimonials Section */}
      <AnimatedDiv animationClasses="fade-in" durationClass="duration-500" className="container mx-auto px-4 w-full bg-gradient-to-r from-teal-600 to-primary py-10 sm:py-12 rounded-xl shadow-lg" once={false}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary-foreground">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedDiv key={index} animationClasses="fade-in zoom-in-90" durationClass="duration-500" delayClass={`delay-${index * 150}`} once={false}>
              <Card className="bg-card/90 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform h-full">
                <CardContent className="p-4 sm:p-6 text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4 border-2 border-accent shadow-md">
                    <AvatarImage src={`https://placehold.co/80x80.png?text=${testimonial.avatarFallback}`} alt={testimonial.altText} data-ai-hint={testimonial.imageHint} />
                    <AvatarFallback className="text-lg bg-secondary text-secondary-foreground">{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                  <p className="text-sm italic text-muted-foreground mb-3">"{testimonial.quote}"</p>
                  <p className="font-semibold text-sm text-primary">{testimonial.name}</p>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </AnimatedDiv>

      {/* FAQ Section */}
      <AnimatedDiv animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" className="container mx-auto px-4 w-full max-w-3xl" once={false}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AnimatedDiv key={item.id} animationClasses="fade-in slide-in-from-bottom-4" durationClass="duration-500" delayClass={`delay-${index * 100}`} once={false}>
              <AccordionItem value={item.id} className="border-b border-border/50">
                <AccordionTrigger className="text-left hover:no-underline py-4 text-base sm:text-lg font-medium text-foreground">
                  <HelpCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1 pb-4 pl-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimatedDiv>
          ))}
        </Accordion>
      </AnimatedDiv>

      {/* Adsterra Banner 728x90 - Bottom */}
      <div className="my-6 sm:my-8 w-full flex justify-center items-center text-center">
        <div style={{ width: '728px', height: '90px' }}>
          <script type="text/javascript">
            {`
              // Adsterra Banner 728x90 - Homepage Bottom
              atOptions = {
                'key' : '87e9049723680c8cfa98207827c2583a',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `}
          </script>
          <script type="text/javascript" src="//jackalclenchedbedside.com/87e9049723680c8cfa98207827c2583a/invoke.js"></script>
        </div>
      </div>
    </div>
  );
}

    