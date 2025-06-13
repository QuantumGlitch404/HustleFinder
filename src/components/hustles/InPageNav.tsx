
'use client';

import Link from 'next/link';
import {
  Info,
  ListChecks,
  Link as LinkIconLucide, // Renamed to avoid conflict with NextLink
  Lightbulb,
  GraduationCap,
  KeyRound,
  Star,
  MessageSquarePlus,
  HelpCircle,
  AlertTriangle,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';


interface NavItem {
  id: string;
  title: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'about-hustle', title: 'About', icon: Briefcase },
  { id: 'steps-to-start', title: 'Steps to Start', icon: ListChecks },
  { id: 'proof-resources', title: 'Proof & Resources', icon: LinkIconLucide },
  { id: 'success-tip', title: 'Success Tip', icon: Lightbulb },
  { id: 'what-to-learn', title: 'What to Learn', icon: GraduationCap },
  { id: 'key-info', title: 'Key Information', icon: KeyRound },
  { id: 'testimonials', title: 'Testimonials', icon: Star },
  { id: 'write-review', title: 'Write Review', icon: MessageSquarePlus },
  { id: 'faqs', title: 'FAQs', icon: HelpCircle },
  { id: 'red-flags', title: 'Red Flags', icon: AlertTriangle },
];

export default function InPageNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 } // Adjust rootMargin to activate when section is near center
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial activeId based on hash or first item
    const initialHash = window.location.hash.substring(1);
    if (initialHash && navItems.find(item => item.id === initialHash)) {
      setActiveId(initialHash);
    } else if (navItems.length > 0) {
      // Optionally, set the first item as active if no hash or if hash is invalid
      // setActiveId(navItems[0].id); 
    }


    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);


  return (
    <aside className="w-full mb-8 lg:mb-0 lg:w-60 rounded-lg border bg-card shadow-sm lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-theme(spacing.32))] lg:overflow-y-auto">
      <div className="p-3">
        <h3 className="text-base font-semibold mb-3 text-primary">On this page</h3>
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.id}>
              <Button
                variant="ghost"
                asChild
                className={cn(
                  "w-full justify-start text-left h-auto py-1.5 px-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  activeId === item.id && "bg-accent text-accent-foreground font-medium"
                )}
              >
                <Link href={`${pathname}#${item.id}`} onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // Update URL hash without page reload for better UX
                        if (history.pushState) {
                            history.pushState(null, null, `#${item.id}`);
                        } else {
                            window.location.hash = `#${item.id}`;
                        }
                        setActiveId(item.id); // Immediately set active state on click
                    }
                }}>
                  <item.icon className="mr-2 h-4 w-4 flex-shrink-0" />
                  {item.title}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
