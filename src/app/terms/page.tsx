
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hustle Finder',
  description: 'Read the Terms and Conditions for using Hustle Finder.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <FileText className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary mb-3 sm:mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Terms & Conditions</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          Please read these terms carefully before using our service.
        </p>
      </div>

      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
          <CardTitle className="text-xl sm:text-2xl">Placeholder Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-muted-foreground">
          <p>
            Welcome to Hustle Finder! These terms and conditions outline the rules and regulations for the use of Hustle Finder's Website, located at [Your Website URL].
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Hustle Finder if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          <h3 className="font-semibold text-foreground pt-2">License</h3>
          <p>
            Unless otherwise stated, Hustle Finder and/or its licensors own the intellectual property rights for all material on Hustle Finder. All intellectual property rights are reserved. You may access this from Hustle Finder for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <h3 className="font-semibold text-foreground pt-2">Disclaimer</h3>
          <p>
            The information provided by Hustle Finder is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>
          <p>
            UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
          </p>
          <p className="pt-4">
            This is a placeholder document. You should replace this with your own comprehensive Terms & Conditions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
