
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Info, DatabaseZap, Share2, Lock, Users, AlertTriangle, ToyBrick, Link as LinkIcon, RefreshCcw } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hustle Finder',
  description: 'Learn about how Hustle Finder handles your data and privacy.',
};

export default function PrivacyPage() {
  const privacySections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: Info,
      content: [
        "Welcome to Hustle Finder (\"we,\" \"us,\" or \"our\"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us through the available channels on our website.",
        "This privacy notice describes how we might use your information if you visit our website at [Your Website URL] or use our services, such as the AI Description Enhancer. It also explains your privacy rights and how the law protects you."
      ]
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      icon: DatabaseZap,
      content: [
        "Currently, Hustle Finder is primarily an informational website. We do not require user registration for browsing hustles or using most features.",
        "**Information you provide to us:**",
        "When you use our AI Description Enhancer, you voluntarily provide us with the text you wish to be rewritten. This text is processed by our AI model but is not stored permanently on our servers beyond the immediate processing needs of the tool for your session.",
        "If you contact us directly (e.g., via a contact form or email if provided elsewhere on the site), we may receive additional information about you such as your name, email address, and the contents of the message and/or attachments you may send us.",
        "**Information automatically collected:**",
        "Like many websites, we may collect information that your browser sends whenever you visit our Service. This may include information such as your computer's Internet Protocol (\"IP\") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. This data is typically anonymized or aggregated and used for analytical purposes."
      ]
    },
    {
      id: "how-we-use-information",
      title: "3. How We Use Your Information",
      icon: Users,
      content: [
        "We use the information we collect in various ways, including to:",
        "Provide, operate, and maintain our website and services.",
        "Improve, personalize, and expand our website and services.",
        "Understand and analyze how you use our website and services.",
        "Develop new products, services, features, and functionality (based on aggregated, anonymized data).",
        "Process the text you submit to the AI Description Enhancer to provide you with the rewritten output.",
        "Communicate with you if you initiate contact, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes (if you opt-in).",
        "For compliance purposes, including enforcing our Terms & Conditions, or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency."
      ]
    },
    {
      id: "how-we-share-information",
      title: "4. How We Share Your Information",
      icon: Share2,
      content: [
        "**AI Processing:** The text you submit to the AI Description Enhancer is sent to a third-party AI provider (e.g., Google Gemini via Genkit) for processing. These providers have their own privacy policies, and we encourage you to review them. We do not store the original or rewritten descriptions permanently on our servers after your session.",
        "**Analytics Providers:** We may share aggregated and anonymized usage data with third-party analytics services to help us understand how our Service is being used.",
        "**Legal Requirements:** We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).",
        "We do not sell your personal information."
      ]
    },
    {
      id: "data-security",
      title: "5. Data Security",
      icon: Lock,
      content: [
        "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse."
      ]
    },
    {
      id: "childrens-privacy",
      title: "6. Children's Privacy",
      icon: ToyBrick,
      content: [
        "Our Service does not address anyone under the age of 13 (or a higher age threshold depending on your jurisdiction). We do not knowingly collect personally identifiable information from children. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers."
      ]
    },
    {
      id: "third-party-links",
      title: "7. Third-Party Links",
      icon: LinkIcon,
      content: [
        "Our Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.",
        "We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
      ]
    },
    {
      id: "changes-to-policy",
      title: "8. Changes to This Privacy Policy",
      icon: RefreshCcw,
      content: [
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
        "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10 sm:mb-16">
        <Shield className="mx-auto h-14 w-14 sm:h-20 sm:w-20 text-primary mb-4 sm:mb-6" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Privacy Policy</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
        </p>
      </header>

      <div className="max-w-3xl mx-auto space-y-8">
        {privacySections.map((section) => (
          <Card key={section.id} className="shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-secondary/30 p-4 sm:p-6">
              <CardTitle className="flex items-center text-xl sm:text-2xl text-primary">
                <section.icon className="h-6 w-6 sm:h-7 sm:w-7 mr-3 flex-shrink-0" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-3 text-sm sm:text-base text-muted-foreground">
              {section.content.map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return <h4 key={index} className="font-semibold text-foreground pt-1">{paragraph.slice(2, -2)}</h4>;
                }
                return <p key={index} className="leading-relaxed">{paragraph}</p>;
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
