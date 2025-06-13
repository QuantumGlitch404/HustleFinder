
'use client';

import Link from 'next/link';
import {
  Briefcase,
  ListChecks,
  Link as LinkIconLucide,
  Lightbulb,
  GraduationCap,
  KeyRound,
  Star,
  MessageSquarePlus,
  HelpCircle,
  AlertTriangle,
  ChevronDown,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import React from 'react';
// Removed useIsMobile hook as its specific breakpoint (768px) was causing issues with lg (1024px) logic.
// We'll use window.matchMedia for breakpoint-specific JS logic if needed or rely on CSS.
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const LG_BREAKPOINT = 1024; // Tailwind's lg breakpoint

export default function InPageNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    const initialHash = window.location.hash.substring(1);
    if (initialHash && navItems.find(item => item.id === initialHash)) {
      setActiveId(initialHash);
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 56; // Approx height of main header (3.5rem)
      const isLgScreenOrWider = window.innerWidth >= LG_BREAKPOINT;
      const mobileNavHeight = !isLgScreenOrWider ? 50 : 0; // Approx height of sticky "Jump to section" bar
      const offset = headerHeight + mobileNavHeight + 16; // 16px for some breathing room

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (history.pushState) {
        history.pushState(null, null, `#${id}`);
      } else {
        window.location.hash = `#${id}`;
      }
      setActiveId(id);
      if (!isLgScreenOrWider) { // If on mobile/tablet (where dropdown is used)
        setIsDropdownOpen(false);
      }
    }
  };

  return (
    <>
      {/* Mobile/Tablet Dropdown Version - visible below lg breakpoint */}
      <div className="w-full sticky top-14 z-40 bg-background py-3 shadow-md lg:hidden">
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between text-base py-2.5">
              <span>Jump to section</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[calc(100vw-2rem)] max-w-md mx-auto sm:w-[calc(100vw-3rem)]" // Adjusted width
            align="center"
            sideOffset={5}
          >
            {navItems.map((item) => (
              <DropdownMenuItem key={item.id} asChild className={cn(activeId === item.id && "bg-accent text-accent-foreground font-medium")}>
                <Link href={`${pathname}#${item.id}`} onClick={(e) => handleLinkClick(e, item.id)}>
                  <item.icon className="mr-2 h-4 w-4 flex-shrink-0" />
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop Sidebar Version - visible lg breakpoint and up */}
      <aside className="hidden lg:block lg:w-60 rounded-lg border bg-card shadow-sm lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-theme(spacing.32)-theme(spacing.8))] lg:overflow-y-auto">
        <div className="p-3">
          <h3 className="text-base font-semibold mb-3 text-primary flex items-center">
            <Menu className="h-5 w-5 mr-2"/>
            On this page
          </h3>
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
                  <Link href={`${pathname}#${item.id}`} onClick={(e) => handleLinkClick(e, item.id)}>
                    <item.icon className="mr-2 h-4 w-4 flex-shrink-0" />
                    {item.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
