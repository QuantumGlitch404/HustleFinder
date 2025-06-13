
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Hustle Finder',
  description: 'Get in touch with the Hustle Finder team.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <Mail className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary mb-3 sm:mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Contact Us</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          We'd love to hear from you! Whether you have a question, feedback, or a partnership proposal, feel free to reach out.
        </p>
      </div>

      <Card className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto shadow-xl">
        <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <CardTitle className="text-xl sm:text-2xl font-semibold">Send us a Message</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Fill out the form below, and we'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="name" className="text-sm">Your Name</Label>
                <Input id="name" type="text" placeholder="e.g., John Doe" className="text-sm" />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <Label htmlFor="email" className="text-sm">Your Email</Label>
                <Input id="email" type="email" placeholder="e.g., john@example.com" className="text-sm" />
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="subject" className="text-sm">Subject</Label>
              <Input id="subject" type="text" placeholder="e.g., Feedback about Hustle Listings" className="text-sm" />
            </div>
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="message" className="text-sm">Message</Label>
              <Textarea id="message" placeholder="Write your message here..." rows={5} className="resize-none text-sm" />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base py-2 sm:py-2.5">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </CardContent>
        <CardContent className="px-4 sm:px-6 pt-4 text-center">
           <p className="text-xs text-muted-foreground">
            Alternatively, you can reach us at: <a href="mailto:contact@hustlefinder.example.com" className="text-primary hover:underline">contact@hustlefinder.example.com</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
