
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Info, Shield, Users, XCircle, Gavel, RefreshCcw, AlertTriangle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hustle Finder',
  description: 'Read the Terms and Conditions for using Hustle Finder.',
};

export default function TermsPage() {
  const effectiveDate = "October 26, 2023"; // Example date

  const termsSections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: Info,
      content: [
        "Welcome to Hustle Finder (\"we,\" \"us,\" or \"our\"). These Terms & Conditions (\"Terms\") govern your access to and use of our website (the \"Service\"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.",
        "Our Service aims to provide information and resources related to side hustles and entrepreneurial opportunities. We do not guarantee employment, income, or success in any venture found through our platform."
      ]
    },
    {
      id: "use-of-service",
      title: "2. Use of Our Service",
      icon: Users,
      content: [
        "You agree to use the Service only for lawful purposes and in accordance with these Terms. The Service is intended for personal, non-commercial use unless otherwise explicitly stated.",
        "You must be at least 13 years old to use the Service (or a higher age if required by your local laws). If you are under the age of majority in your jurisdiction, you must have your parent or legal guardian's permission to use the Service.",
        "You are responsible for ensuring that your use of the Service complies with all applicable local, state, national, and international laws and regulations."
      ],
      points: [
        "You agree not to use the Service in any way that could damage, disable, overburden, or impair the Service or interfere with any other party's use and enjoyment of the Service.",
        "You may not attempt to gain unauthorized access to any part of the Service, other accounts, computer systems, or networks connected to the Service, through hacking, password mining, or any other means."
      ]
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property",
      icon: Shield,
      content: [
        "The Service and its original content (excluding content provided by users, if any), features, and functionality are and will remain the exclusive property of Hustle Finder and its licensors. The Service is protected by copyright, trademark, and other laws of both [Your Country/Jurisdiction] and foreign countries.",
        "Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Hustle Finder.",
        "Unless otherwise stated, Hustle Finder and/or its licensors own the intellectual property rights for all material on Hustle Finder. All intellectual property rights are reserved. You may access this from Hustle Finder for your own personal use subjected to restrictions set in these terms and conditions."
      ]
    },
    {
      id: "user-contributions",
      title: "4. User Contributions",
      icon: Users,
      content: [
        "If our Service allows you to post, link, store, share, or otherwise make available certain information, text, graphics, videos, or other material (\"User Content\"), you are responsible for the User Content that you post to the Service, including its legality, reliability, and appropriateness.",
        "By posting User Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such User Content on and through the Service. You retain any and all of your rights to any User Content you submit, post, or display on or through the Service and you are responsible for protecting those rights."
      ]
    },
    {
      id: "prohibited-activities",
      title: "5. Prohibited Activities",
      icon: XCircle,
      content: ["You agree not to engage in any of the following prohibited activities:"],
      points: [
        "Using the Service for any illegal purpose or in violation of any local, state, national, or international law.",
        "Violating or encouraging others to violate the rights of third parties, including intellectual property rights.",
        "Posting, uploading, or distributing any content that is unlawful, defamatory, libelous, inaccurate, or that a reasonable person could deem to be objectionable, profane, indecent, pornographic, harassing, threatening, hateful, or otherwise inappropriate.",
        "Interfering with security-related features of the Service.",
        "Interfering with the operation of the Service or any user’s enjoyment of it, including by uploading or otherwise disseminating viruses, adware, spyware, worms, or other malicious code."
      ]
    },
    {
      id: "disclaimer-of-warranties",
      title: "6. Disclaimer of Warranties",
      icon: AlertTriangle,
      content: [
        "The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. Hustle Finder makes no representations or warranties of any kind, express or implied, as to the operation of their Service, or the information, content, or materials included therein. You expressly agree that your use of the Service, its content, and any services or items obtained from us is at your sole risk.",
        "Neither Hustle Finder nor any person associated with Hustle Finder makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the Service. Without limiting the foregoing, neither Hustle Finder nor anyone associated with Hustle Finder represents or warrants that the Service, its content, or any services or items obtained through the Service will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that the Service or the server that makes it available are free of viruses or other harmful components or that the Service or any services or items obtained through the Service will otherwise meet your needs or expectations."
      ]
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitation of Liability",
      icon: Gavel,
      content: [
        "IN NO EVENT SHALL HUSTLE FINDER, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE."
      ]
    },
    {
      id: "changes-to-terms",
      title: "8. Changes to Terms",
      icon: RefreshCcw,
      content: [
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
        "By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service."
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10 sm:mb-16">
        <FileText className="mx-auto h-14 w-14 sm:h-20 sm:w-20 text-primary mb-4 sm:mb-6" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Terms & Conditions</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          Please read these terms carefully before using our service.
        </p>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground/80">Effective Date: {effectiveDate}</p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8">
        {termsSections.map((section) => (
          <Card key={section.id} className="shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-secondary/30 p-4 sm:p-6">
              <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                <section.icon className="h-6 w-6 sm:h-7 sm:w-7 mr-3 flex-shrink-0" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 text-sm sm:text-base text-muted-foreground">
              {section.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
              {section.points && (
                <ul className="list-disc list-inside space-y-1.5 pl-4 pt-2">
                  {section.points.map((point, index) => (
                    <li key={index} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
