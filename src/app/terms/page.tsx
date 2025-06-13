
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Info, Shield, Users, XCircle, Gavel, RefreshCcw, AlertTriangle, Globe, Server, MessageCircle, BookOpen, ExternalLink, UserCog } from "lucide-react";
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
        "Welcome to Hustle Finder (\"we,\" \"us,\" or \"our\"). These Terms and Conditions (\"Terms\") govern your access to and use of our website located at [Your Website URL] (the \"Service\"), including any content, functionality, and services offered on or through the Service.",
        "Please read the Terms carefully before you start to use the Service. By using the Service, you accept and agree to be bound and abide by these Terms and our Privacy Policy, incorporated herein by reference. If you do not want to agree to these Terms or the Privacy Policy, you must not access or use the Service.",
        "Our Service aims to provide information and resources related to side hustles and entrepreneurial opportunities. We do not guarantee employment, income, or success in any venture found through our platform."
      ]
    },
    {
      id: "service-access-use",
      title: "2. Accessing the Service and Account Security",
      icon: Globe,
      content: [
        "We reserve the right to withdraw or amend this Service, and any service or material we provide on the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.",
        "You are responsible for making all arrangements necessary for you to have access to the Service and ensuring that all persons who access the Service through your internet connection are aware of these Terms and comply with them.",
        "To access certain features, you might be asked to provide certain details or other information. It is a condition of your use of the Service that all the information you provide is correct, current, and complete."
      ]
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property Rights",
      icon: Shield,
      content: [
        "The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Hustle Finder, its licensors, or other providers of such material and are protected by [Your Country/Jurisdiction] and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
        "These Terms permit you to use the Service for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as generally permitted through the Service's functionality."
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
        "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.",
        "To transmit, or procure the sending of, any advertising or promotional material without our prior written consent, including any \"junk mail,\" \"chain letter,\" \"spam,\" or any other similar solicitation.",
        "To impersonate or attempt to impersonate Hustle Finder, a Hustle Finder employee, another user, or any other person or entity.",
        "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Hustle Finder or users of the Service or expose them to liability.",
        "Additionally, you agree not to introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful or attack the Service via a denial-of-service attack or a distributed denial-of-service attack."
      ]
    },
    {
      id: "ai-tool-usage",
      title: "5. AI-Powered Description Tool",
      icon: UserCog,
      content: [
        "Our AI Description Enhancer tool is provided for assistance in rephrasing text. You are solely responsible for the text you input and the use of the output generated.",
        "The AI tool processes information through third-party providers. While we aim for accuracy and helpfulness, we do not guarantee the output's suitability, accuracy, or freedom from errors. You should review any AI-generated content before use.",
        "You agree not to submit any content that is illegal, harmful, offensive, infringes on intellectual property rights, or violates any third-party rights."
      ]
    },
    {
      id: "disclaimer-of-warranties",
      title: "6. Disclaimer of Warranties",
      icon: AlertTriangle,
      content: [
        "You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Service will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data.",
        "YOUR USE OF THE SERVICE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICE IS AT YOUR OWN RISK. THE SERVICE, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICE ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER HUSTLE FINDER NOR ANY PERSON ASSOCIATED WITH HUSTLE FINDER MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICE."
      ]
    },
    {
      id: "limitation-of-liability",
      title: "7. Limitation on Liability",
      icon: Gavel,
      content: [
        "TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL HUSTLE FINDER, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SERVICE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE."
      ]
    },
    {
      id: "changes-to-terms",
      title: "8. Changes to the Terms",
      icon: RefreshCcw,
      content: [
        "We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Service thereafter.",
        "Your continued use of the Service following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you."
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
         <Card className="shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-secondary/30 p-4 sm:p-6">
              <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                <Server className="h-6 w-6 sm:h-7 sm:w-7 mr-3 flex-shrink-0" />
                Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 text-sm sm:text-base text-muted-foreground">
              <p className="leading-relaxed">All matters relating to the Service and these Terms and any dispute or claim arising therefrom or related thereto shall be governed by and construed in accordance with the internal laws of [Your Country/Jurisdiction] without giving effect to any choice or conflict of law provision or rule.</p>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
