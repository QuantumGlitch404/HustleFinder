
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Send } from "lucide-react";
import type { Metadata } from 'next';

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
          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="hustle-title" className="text-sm">Hustle Title</Label>
              <Input id="hustle-title" type="text" placeholder="e.g., Freelance Pet Sitting" className="text-sm" />
            </div>
             <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="hustle-category" className="text-sm">Category</Label>
              <Input id="hustle-category" type="text" placeholder="e.g., Services, Online, Creative" className="text-sm" />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="hustle-description" className="text-sm">Brief Description</Label>
              <Textarea id="hustle-description" placeholder="Briefly describe the hustle and its potential." rows={3} className="resize-none text-sm" />
            </div>
             <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="hustle-steps" className="text-sm">Steps to Start (Optional)</Label>
              <Textarea id="hustle-steps" placeholder="Outline a few key steps to get started." rows={4} className="resize-none text-sm" />
            </div>
             <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="your-name" className="text-sm">Your Name (Optional)</Label>
              <Input id="your-name" type="text" placeholder="So we can credit you!" className="text-sm" />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base py-2 sm:py-2.5">
              <Send className="mr-2 h-4 w-4" />
              Submit Hustle Idea
            </Button>
             <p className="text-xs text-center text-muted-foreground pt-2">
              Note: Submissions are for demonstration purposes. This form is not yet connected to a backend.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
