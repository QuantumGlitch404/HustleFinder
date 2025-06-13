
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-8 text-center">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-2xl shadow-xl">
        <CardHeader className="pb-4 px-4 sm:px-6">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image 
              src="https://picsum.photos/seed/hustlefinderlogo/100/100" 
              alt="Hustle Finder Logo" 
              width={80} 
              height={80} 
              className="rounded-full sm:w-[100px] sm:h-[100px]"
              data-ai-hint="logo brand" 
            />
          </div>
          <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Welcome to Hustle Finder!
          </CardTitle>
          <CardDescription className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
            Discover your next side hustle and unlock new opportunities. We provide curated listings and AI tools to help you succeed.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-5 sm:space-y-6 px-4 sm:px-6">
          <p className="text-sm sm:text-md">
            Ready to explore? Browse through numerous side hustles, find one that fits your skills, and get started on your journey to financial independence.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base">
            <Link href="/hustles">
              Explore Hustles
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground pt-3 sm:pt-4">
            <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
            <span>Use our AI tool to refine hustle descriptions for better understanding!</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
