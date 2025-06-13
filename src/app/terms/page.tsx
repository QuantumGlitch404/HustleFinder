
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hustle Finder',
  description: 'Read the Terms and Conditions for using Hustle Finder.',
};

export default function TermsPage() {
  const effectiveDate = "October 26, 2023"; // Example date

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <FileText className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-primary mb-3 sm:mb-4" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Terms & Conditions</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          Please read these terms carefully before using our service.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Effective Date: {effectiveDate}</p>
      </div>

      <Card className="w-full max-w-3xl mx-auto shadow-xl">
        <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
          <CardTitle className="text-xl sm:text-2xl">Welcome to Hustle Finder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-4 sm:px-6 pb-6 sm:pb-8 text-sm sm:text-base text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Introduction</h2>
            <p>
              Welcome to Hustle Finder ("we," "us," or "our"). These Terms & Conditions ("Terms") govern your access to and use of our website located at [Your Website URL] (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Use of Our Service</h2>
            <p>
              Hustle Finder provides a platform for discovering side hustle opportunities and related information. You agree to use the Service only for lawful purposes and in accordance with these Terms.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 pl-4">
              <li>You must be at least 13 years old to use the Service (or a higher age if required by your local laws).</li>
              <li>You are responsible for ensuring that your use of the Service complies with all applicable local, state, national, and international laws and regulations.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding content provided by users, if any), features, and functionality are and will remain the exclusive property of Hustle Finder and its licensors. The Service is protected by copyright, trademark, and other laws of both [Your Country/Jurisdiction] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hustle Finder.
            </p>
            <p className="mt-2">
              Unless otherwise stated, Hustle Finder and/or its licensors own the intellectual property rights for all material on Hustle Finder. All intellectual property rights are reserved. You may access this from Hustle Finder for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. User Contributions (If Applicable)</h2>
            <p>
              If our Service allows you to post, link, store, share, or otherwise make available certain information, text, graphics, videos, or other material ("User Content"), you are responsible for the User Content that you post to the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="mt-2">
              By posting User Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such User Content on and through the Service. You retain any and all of your rights to any User Content you submit, post, or display on or through the Service and you are responsible for protecting those rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Prohibited Activities</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 pl-4">
              <li>Using the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
              <li>Violating or encouraging others to violate the rights of third parties, including intellectual property rights.</li>
              <li>Posting, uploading, or distributing any content that is unlawful, defamatory, libelous, inaccurate, or that a reasonable person could deem to be objectionable, profane, indecent, pornographic, harassing, threatening, hateful, or otherwise inappropriate.</li>
              <li>Interfering with security-related features of the Service.</li>
              <li>Interfering with the operation of the Service or any user’s enjoyment of it, including by uploading or otherwise disseminating viruses, adware, spyware, worms, or other malicious code.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Disclaimer of Warranties</h2>
            <p>
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Hustle Finder makes no representations or warranties of any kind, express or implied, as to the operation of their Service, or the information, content, or materials included therein. You expressly agree that your use of the Service, its content, and any services or items obtained from us is at your sole risk.
            </p>
            <p className="mt-2">
              Neither Hustle Finder nor any person associated with Hustle Finder makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the Service. Without limiting the foregoing, neither Hustle Finder nor anyone associated with Hustle Finder represents or warrants that the Service, its content, or any services or items obtained through the Service will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that the Service or the server that makes it available are free of viruses or other harmful components or that the Service or any services or items obtained through the Service will otherwise meet your needs or expectations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL HUSTLE FINDER, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at [Your Contact Email Address or Link to Contact Page].
            </p>
          </section>

        </CardContent>
      </Card>
    </div>
  );
}
