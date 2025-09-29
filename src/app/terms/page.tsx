
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Info, Shield, Users, XCircle, Gavel, RefreshCcw, AlertTriangle, Globe, Server, MessageCircle, BookOpen, ExternalLink, UserCog, Contact, Scale, Handshake, FileTerminal } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hustle Finder',
  description: 'Read the Terms and Conditions for using Hustle Finder.',
};

export default function TermsPage() {
  const termsSections = [
    {
      id: "introduction",
      title: "1. Introduction & Acceptance of Terms",
      icon: Info,
      content: [
        "Welcome to Hustle Finder (\"we,\" \"us,\" or \"our\"). These Terms and Conditions (\"Terms\") govern your access to and use of our website located at https://hustlefinder.vercel.app (the \"Service\"), including any content, functionality, and services offered on or through the Service.",
        "Please read the Terms carefully before you start to use the Service. By using the Service, you accept and agree to be bound and abide by these Terms and our Privacy Policy, incorporated herein by reference. If you do not want to agree to these Terms or the Privacy Policy, you must not access or use the Service.",
        "Our Service aims to provide information and resources related to side hustles and entrepreneurial opportunities. We do not guarantee employment, income, or success in any venture found through our platform. The Service is monetized through third-party advertisements, which helps keep it free for all users."
      ]
    },
    {
      id: "service-access-use",
      title: "2. Accessing the Service and User Accounts",
      icon: Globe,
      content: [
        "We work hard to keep Hustle Finder available, but we can’t promise uninterrupted access. We reserve the right to withdraw or amend this Service, and any material we provide, in our sole discretion without notice.",
        "Currently, Hustle Finder does not require user registration or accounts. Features like saving hustles are stored locally in your browser's storage, which means they may be lost if you clear your cache or use a different device.",
        "You are responsible for making all arrangements necessary for you to have access to the Service. You also must ensure that all persons who access the Service through your internet connection are aware of these Terms and comply with them."
      ]
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property Rights",
      icon: Shield,
      content: [
        "The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Hustle Finder, its licensors, or other providers of such material and are protected by India and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
        "These Terms permit you to use the Service for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except for features that explicitly allow it (e.g., sharing a hustle link)."
      ]
    },
     {
      id: "user-conduct",
      title: "4. User Conduct and Prohibited Uses",
      icon: Users,
      content: [
        "You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:",
      ],
      points: [
        "In any way that violates any applicable federal, state, local, or international law or regulation.",
        "To exploit, harm, or attempt to exploit or harm minors in any way.",
        "To transmit any advertising or promotional material without our prior written consent, including any \"junk mail,\" \"chain letter,\" or \"spam.\"",
        "To impersonate Hustle Finder, a Hustle Finder employee, another user, or any other person or entity.",
        "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Hustle Finder or users of the Service.",
        "Additionally, you agree not to introduce any viruses, trojan horses, or other malicious material, or to attack the Service via a denial-of-service attack or a distributed denial-of-service attack."
      ]
    },
    {
      id: "ai-tool-usage",
      title: "5. AI-Powered Tools",
      icon: UserCog,
      content: [
        "Our AI Description Enhancer tool, when available, is provided for assistance in rephrasing text. You are solely responsible for the text you input and the use of the output generated.",
        "The AI tool processes information through third-party providers. While we aim for accuracy, we do not guarantee the output's suitability, accuracy, or freedom from errors. You should review any AI-generated content before use.",
        "You agree not to submit any content that is illegal, harmful, offensive, or infringes on any third-party rights."
      ]
    },
    {
      id: "disclaimer-of-warranties",
      title: "6. Disclaimer of Warranties",
      icon: AlertTriangle,
      content: [
        "We do our best to keep the Service safe, but we cannot guarantee that files available for downloading will be free of viruses or other destructive code. You are responsible for implementing your own anti-virus protection.",
        "YOUR USE OF THE SERVICE, ITS CONTENT, AND ANY HUSTLE IDEAS OBTAINED THROUGH IT IS AT YOUR OWN RISK. THE SERVICE IS PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER HUSTLE FINDER NOR ANY PERSON ASSOCIATED WITH US MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICE."
      ]
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitation on Liability",
      icon: Gavel,
      content: [
        "TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL HUSTLE FINDER, ITS AFFILIATES, OR THEIR LICENSORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICE, ANY WEBSITES LINKED TO IT, OR ANY CONTENT ON THE SERVICE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES."
      ]
    },
    {
      id: "changes-to-terms",
      title: "8. Changes to the Terms",
      icon: RefreshCcw,
      content: [
        "We may revise and update these Terms from time to time. All changes are effective immediately when we post them. Your continued use of the Service following the posting of revised Terms means that you accept and agree to the changes. We encourage you to check this page frequently to stay aware of any updates."
      ]
    },
    {
      id: "governing-law",
      title: "9. Governing Law",
      icon: Server,
      content: [
        "All matters relating to the Service and these Terms shall be governed by and construed in accordance with the internal laws of India without giving effect to any choice or conflict of law provision or rule."
      ]
    },
    {
      id: "termination",
      title: "10. Termination",
      icon: XCircle,
      content: [
        "We may terminate or suspend your access to all or part of the Service, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability."
      ]
    },
    {
      id: "indemnification",
      title: "11. Indemnification",
      icon: Scale,
      content: [
        "You agree to defend, indemnify, and hold harmless Hustle Finder and its affiliates, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service."
      ]
    },
    {
      id: "severability",
      title: "12. Severability",
      icon: FileTerminal,
      content: [
        "If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect."
      ]
    },
    {
      id: "entire-agreement",
      title: "13. Entire Agreement",
      icon: Handshake,
      content: [
        "These Terms and our Privacy Policy constitute the sole and entire agreement between you and Hustle Finder regarding the Service and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Service."
      ]
    },
    {
      id: "contact",
      title: "14. Contact Information",
      icon: Contact,
      content: [
        "If you have any questions about these Terms, please contact us at officialhustlefinder@gmail.com (or via our designated contact form, when available)."
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
