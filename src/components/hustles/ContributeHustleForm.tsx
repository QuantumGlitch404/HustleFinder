
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { FormEvent } from "react";

export default function ContributeHustleForm() {
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form submission feedback
    toast({
      title: "Hustle Idea Submitted (Demo)",
      description: "Thank you for your contribution! This is a demo and the data is not saved.",
      variant: "default",
    });
    // Here you would typically handle form data, e.g., send to an API
    // For demo, we can reset the form or specific fields if needed
    (e.target as HTMLFormElement).reset(); 
  };

  return (
    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="hustle-title" className="text-sm">Hustle Title</Label>
        <Input id="hustle-title" type="text" placeholder="e.g., Freelance Pet Sitting" className="text-sm" required />
      </div>
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="hustle-category" className="text-sm">Category</Label>
        <Input id="hustle-category" type="text" placeholder="e.g., Services, Online, Creative" className="text-sm" required />
      </div>
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="hustle-description" className="text-sm">Brief Description</Label>
        <Textarea id="hustle-description" placeholder="Briefly describe the hustle and its potential." rows={3} className="resize-none text-sm" required />
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
  );
}
