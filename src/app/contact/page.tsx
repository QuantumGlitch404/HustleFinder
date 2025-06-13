
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail } from "lucide-react";
import type { Metadata } from 'next';
import ContactForm from "@/components/contact/ContactForm";

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
          <ContactForm />
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
