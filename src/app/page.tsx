import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-6">
            <Image 
              src="https://picsum.photos/seed/hustlefinderlogo/120/120" 
              alt="Hustle Finder Logo" 
              width={100} 
              height={100} 
              className="rounded-full"
              data-ai-hint="logo brand" 
            />
          </div>
          <CardTitle className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to Hustle Finder!
          </CardTitle>
          <CardDescription className="mt-4 text-lg text-muted-foreground">
            Discover your next side hustle and unlock new opportunities. We provide curated listings and AI tools to help you succeed.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <p className="text-md">
            Ready to explore? Browse through numerous side hustles, find one that fits your skills, and get started on your journey to financial independence.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 ease-in-out transform hover:scale-105">
            <Link href="/hustles">
              Explore Hustles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <div className="flex items-center text-sm text-muted-foreground pt-4">
            <Lightbulb className="h-5 w-5 mr-2 text-primary" />
            <span>Use our AI tool to refine hustle descriptions for better understanding!</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
