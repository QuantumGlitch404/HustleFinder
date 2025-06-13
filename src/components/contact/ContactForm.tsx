
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { FormEvent } from "react";

export default function ContactForm() {
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic form submission feedback
    toast({
      title: "Message Sent (Demo)",
      description: "Thank you for contacting us! This is a demo and the data is not saved.",
      variant: "default",
    });
    // Here you would typically handle form data, e.g., send to an API
    // For demo, we can reset the form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="name" className="text-sm">Your Name</Label>
          <Input id="name" type="text" placeholder="e.g., John Doe" className="text-sm" required />
        </div>
        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="email" className="text-sm">Your Email</Label>
          <Input id="email" type="email" placeholder="e.g., john@example.com" className="text-sm" required />
        </div>
      </div>
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="subject" className="text-sm">Subject</Label>
        <Input id="subject" type="text" placeholder="e.g., Feedback about Hustle Listings" className="text-sm" required />
      </div>
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="message" className="text-sm">Message</Label>
        <Textarea id="message" placeholder="Write your message here..." rows={5} className="resize-none text-sm" required />
      </div>
      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base py-2 sm:py-2.5">
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
       <p className="text-xs text-center text-muted-foreground pt-2">
        Note: Submissions are for demonstration purposes. This form is not yet connected to a backend.
      </p>
    </form>
  );
}
