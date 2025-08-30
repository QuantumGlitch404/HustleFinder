
'use client';

import Link from 'next/link';
import { Info, Menu as MenuIcon, FileText, Shield, Bookmark as BookmarkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from './ThemeToggle';
import UserNav from '@/components/auth/UserNav';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          <Link href="/" className="flex items-center space-x-2 text-lg sm:text-xl font-bold hover:opacity-80 transition-opacity">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="6" y2="18" />
              <line x1="12" y1="6" x2="12" y2="18" />
              <line x1="6" y1="12" x2="12" y2="12" />
              <line x1="12" y1="12" x2="18" y2="12" />
              <polyline points="15 9 18 12 15 15" />
            </svg>
            <span>Hustle Finder</span>
          </Link>
          
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 py-1 sm:px-3 h-auto text-xs sm:text-sm">
              <Link href="/hustles" className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                <span>Hustles</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 py-1 sm:px-3 h-auto text-xs sm:text-sm">
              <Link href="/bookmarks" className="flex items-center space-x-1">
                <BookmarkIcon className="h-4 w-4" />
                <span>Saved</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 py-1 sm:px-3 h-auto text-xs sm:text-sm">
              <Link href="/about" className="flex items-center space-x-1">
                <Info className="h-4 w-4" />
                <span>About</span>
              </Link>
            </Button>

            <ThemeToggle />

            <div className="flex items-center gap-x-2">
                <UserNav />
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground h-8 w-8 sm:h-9 sm:w-9">
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">More options</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>More</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                    <Link href="/terms" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Terms & Conditions</span>
                    </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                    <Link href="/privacy" className="flex items-center">
                        <Shield className="mr-2 h-4 w-4" />
                        <span>Privacy Policy</span>
                    </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
