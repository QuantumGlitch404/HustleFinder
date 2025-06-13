
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import type { Metadata } from 'next';
import ContributeHustleForm from "@/components/hustles/ContributeHustleForm";

export const metadata: Metadata = {
  title: 'Contribute a Hustle | Hustle Finder',
  description: 'Share a side hustle idea with the Hustle Finder community.',
};

export default function ContributeHustlePage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <PlusCircle className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary mb-3 sm:mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Contribute a Hustle</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          Have a great side hustle idea? Share it with our community!
        </p>
      </div>

      <Card className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto shadow-xl">
        <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <CardTitle className="text-xl sm:text-2xl font-semibold">Share Your Hustle Idea</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            We appreciate your contributions to make Hustle Finder even better. Please provide details about the side hustle below.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <ContributeHustleForm />
        </CardContent>
      </Card>
    </div>
  );
}
