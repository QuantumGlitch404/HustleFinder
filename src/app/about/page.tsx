import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Zap } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'About Us | Hustle Finder',
  description: 'Learn more about Hustle Finder, our mission, and our team.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">About Hustle Finder</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Connecting you with opportunities and empowering your entrepreneurial journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <Image 
            src="https://picsum.photos/seed/aboutusteam/600/400" 
            alt="Team working together" 
            width={600} 
            height={400}
            className="rounded-lg shadow-xl"
            data-ai-hint="teamwork collaboration"
          />
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Users className="h-7 w-7 mr-3" /> Who We Are
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Hustle Finder is a dedicated platform designed to bridge the gap between individuals seeking flexible work opportunities and the burgeoning world of side hustles. We believe that everyone deserves the chance to pursue their passions, supplement their income, and gain valuable experience outside of traditional employment.
            </p>
            <p>
              Our team is composed of passionate developers, designers, and content curators who understand the gig economy and are committed to building a user-friendly and resourceful hub for aspiring hustlers.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-10">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Target className="h-7 w-7 mr-3" /> Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Our mission is to empower individuals by providing easy access to a diverse range of side hustle opportunities. We aim to simplify the search process, offer valuable insights, and foster a community where users can learn, grow, and succeed in their chosen ventures. We strive to make "hustling" accessible, understandable, and rewarding for everyone, regardless of their background or primary language.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-primary">
              <Zap className="h-7 w-7 mr-3" /> Why Hustle Finder?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
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
      </div>
    </div>
  );
}
