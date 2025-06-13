
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hustle Finder',
  description: 'Learn about how Hustle Finder handles your data and privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <Shield className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary mb-3 sm:mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Privacy Policy</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          Your privacy is important to us.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
          <CardTitle className="text-xl sm:text-2xl">Our Commitment to Your Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-muted-foreground">
          <p>
            This Privacy Policy explains how Hustle Finder ("we," "us," or "our") collects, uses, and discloses information about you when you access or use our website and services.
          </p>
          <h3 className="font-semibold text-foreground pt-2">Information We Collect</h3>
          <p>
            Currently, Hustle Finder is a static information site with an AI tool that processes text input by the user. We do not require user registration and therefore do not collect personal identification information like names, email addresses, or phone numbers directly for browsing the site.
          </p>
          <p>
            The AI description tool processes the text you provide to generate a rewritten description. This text is sent to a third-party AI provider (e.g., Google Gemini via Genkit) for processing. We do not store the original or rewritten descriptions permanently on our servers beyond the session required for the tool to function.
          </p>
           <h3 className="font-semibold text-foreground pt-2">Analytics</h3>
          <p>
            We may use third-party analytics services (like Google Analytics) to help understand usage of the service. These services may collect information sent by your browser as part of a web page request, such as cookies or your IP address.
          </p>
          <h3 className="font-semibold text-foreground pt-2">Data Security</h3>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
          </p>
           <h3 className="font-semibold text-foreground pt-2">Changes to This Policy</h3>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
          </p>
          <p className="pt-4">
            This is a placeholder document. You should replace this with your own comprehensive Privacy Policy, detailing your data handling practices.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
