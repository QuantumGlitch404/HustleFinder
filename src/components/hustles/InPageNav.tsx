
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
      { rootMargin: "-40% 0px -60% 0px", threshold: 0 } // Adjusted rootMargin
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
      // Optional: attempt to scroll to hash on initial load if present
      // setTimeout(() => {
      //   const element = document.getElementById(initialHash);
      //   if (element) handleLinkClick({ preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>, initialHash);
      // }, 100);
    }

    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [pathname]); // Add pathname to dependencies to re-run if page changes, though IDs are page-specific

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Prevent Next/Link's default navigation and scroll

    const element = document.getElementById(id);
    if (!element) {
      console.error(`InPageNav: Element with ID '${id}' not found.`);
      if (window.innerWidth < LG_BREAKPOINT) {
        setIsDropdownOpen(false);
      }
      return;
    }

    // Approximate heights of sticky elements
    const mainHeaderHeight = 56; // Approx height of main header (e.g., 3.5rem)
    let mobileNavStickyBarHeight = 0;
    const isLgScreenOrWider = window.innerWidth >= LG_BREAKPOINT;

    if (!isLgScreenOrWider) {
      // Mobile/Tablet: "Jump to section" bar is sticky
      mobileNavStickyBarHeight = 50; // Approx height of the sticky "Jump to section" bar itself
    }
    
    const breathingRoom = 20; // Increased breathing room (e.g., 1.25rem)
    const totalOffset = mainHeaderHeight + mobileNavStickyBarHeight + breathingRoom;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetScrollPosition = elementPosition - totalOffset;
    
    window.scrollTo({
      top: targetScrollPosition,
      behavior: 'smooth'
    });

    // Update URL hash manually AFTER initiating scroll
    if (history.pushState) {
      history.pushState(null, null, `${pathname}#${id}`);
    } else {
      // Fallback for older browsers
      window.location.hash = `${pathname}#${id}`; // This might cause a jump on some old browsers
    }
    
    setActiveId(id); // Highlight the link

    if (!isLgScreenOrWider) {
      setIsDropdownOpen(false); // Close dropdown on mobile
    }
  };

  return (
    <>
      {/* Mobile/Tablet Dropdown Version - visible below lg breakpoint */}
      <div className="w-full sticky top-14 z-40 bg-background py-3 shadow-md lg:hidden">
        <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between text-base py-2.5">
              <span>{activeId ? navItems.find(i => i.id === activeId)?.title || 'Jump to section' : 'Jump to section'}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-[calc(100vw-2rem)] max-w-md mx-auto sm:w-[calc(100vw-3rem)]"
            align="center"
            sideOffset={5}
          >
            {navItems.map((item) => (
              <DropdownMenuItem 
                key={item.id} 
                asChild 
                className={cn(activeId === item.id && "bg-accent text-accent-foreground font-medium")}
                onSelect={(event) => {
                  // DropdownMenuItem's onSelect gets called before Link's onClick can preventDefault
                  // So we handle the core logic here for dropdown items.
                  event.preventDefault();
                  const anchor = document.createElement('a'); // Dummy anchor for handleLinkClick
                  anchor.href = `${pathname}#${item.id}`;
                  handleLinkClick({
                    ...event,
                    target: anchor,
                    currentTarget: anchor,
                    preventDefault: () => event.preventDefault(),
                    stopPropagation: () => event.stopPropagation(),
                  } as unknown as React.MouseEvent<HTMLAnchorElement>, item.id);
                }}
              >
                {/* We still use Link for Next.js benefits if direct navigation were allowed, but click is intercepted */}
                <Link href={`${pathname}#${item.id}`} onClick={(e) => handleLinkClick(e, item.id)} className="flex items-center w-full">
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

