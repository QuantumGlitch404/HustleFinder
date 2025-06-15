
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Zap } from "lucide-react";
import Image from "next/image";
import AnimatedDiv from "@/components/animations/AnimatedDiv";
// AdPlaceholder import removed

export const metadata = {
  title: 'About Us | Hustle Finder',
  description: 'Learn more about Hustle Finder, our mission, and our team.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <AnimatedDiv animationClasses="fade-in slide-in-from-top-8" durationClass="duration-500">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">About Hustle Finder</h1>
          <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
            Connecting you with opportunities and empowering your entrepreneurial journey.
          </p>
        </div>
      </AnimatedDiv>

      {/* Adsterra Banner 728x90 - Top */}
      <div className="my-6 sm:my-8 w-full flex justify-center items-center text-center">
        <div style={{ width: '728px', height: '90px' }}>
          <script type="text/javascript">
            {`
              // Adsterra Banner 728x90 - About Page Top
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

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
        <AnimatedDiv animationClasses="fade-in slide-in-from-left-8" durationClass="duration-500" delayClass="delay-100" className="w-full h-64 sm:h-80 md:h-auto">
          <Image 
            src="https://picsum.photos/seed/aboutusteam/600/400" 
            alt="Team working together" 
            width={600} 
            height={400}
            className="rounded-lg shadow-xl w-full h-full object-cover"
            data-ai-hint="teamwork collaboration"
          />
        </AnimatedDiv>
        <AnimatedDiv animationClasses="fade-in slide-in-from-right-8" durationClass="duration-500" delayClass="delay-200">
          <Card className="shadow-lg h-full">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" /> Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground p-4 sm:p-6 pt-0">
              <p>
                Hustle Finder is a dedicated platform designed to bridge the gap between individuals seeking flexible work opportunities and the burgeoning world of side hustles. We believe that everyone deserves the chance to pursue their passions, supplement their income, and gain valuable experience outside of traditional employment.
              </p>
              <p>
                Our team is composed of passionate developers, designers, and content curators who understand the gig economy and are committed to building a user-friendly and resourceful hub for aspiring hustlers.
              </p>
            </CardContent>
          </Card>
        </AnimatedDiv>
      </div>

      {/* Adsterra Native Banner Ad Slot 2 (Mid) */}
      <div className="w-full my-6 sm:my-8">
        <script async="async" data-cfasync="false" src="//jackalclenchedbedside.com/58439ef56bf081ebf459341353943de6/invoke.js"></script>
        <div id="container-58439ef56bf081ebf459341353943de6"></div>
      </div>

      <div className="space-y-6 sm:space-y-10">
        <AnimatedDiv animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" delayClass="delay-300">
          <Card className="shadow-lg">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                <Target className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground p-4 sm:p-6 pt-0">
              <p>
                Our mission is to empower individuals by providing easy access to a diverse range of side hustle opportunities. We aim to simplify the search process, offer valuable insights, and foster a community where users can learn, grow, and succeed in their chosen ventures. We strive to make "hustling" accessible, understandable, and rewarding for everyone, regardless of their background or primary language.
              </p>
            </CardContent>
          </Card>
        </AnimatedDiv>

        <AnimatedDiv animationClasses="fade-in slide-in-from-bottom-8" durationClass="duration-500" delayClass="delay-400">
          <Card className="shadow-lg">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3" /> Why Hustle Finder?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground p-4 sm:p-6 pt-0">
              <p>
                <strong>Curated Listings:</strong> We carefully select and categorize hustles to save you time.
              </p>
              <p>
                <strong>AI-Powered Tools:</strong> Our innovative AI description enhancer helps clarify opportunities, making them easier to understand, especially for non-native English speakers.
              </p>
              <p>
                <strong>User-Focused Design:</strong> We prioritize a clean, professional, and intuitive experience.
              </p>
              <p>
                <strong>Community Support:</strong> (Coming Soon!) We envision a future with community features to share experiences and tips.
              </p>
            </CardContent>
          </Card>
        </AnimatedDiv>
      </div>

      {/* Adsterra Banner 728x90 - Bottom */}
      <div className="my-6 sm:my-8 w-full flex justify-center items-center text-center">
        <div style={{ width: '728px', height: '90px' }}>
          <script type="text/javascript">
            {`
              // Adsterra Banner 728x90 - About Page Bottom
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

    