
import Link from 'next/link';
import { Briefcase, BrainCircuit, Info, Menu as MenuIcon, Linkedin, Github, FileText, Users, HelpCircle, ExternalLink, Mail, Shield, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          <Link href="/" className="flex items-center space-x-2 text-lg sm:text-xl font-bold hover:opacity-80 transition-opacity">
            <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" />
            <span>Hustle Finder</span>
          </Link>
          
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 py-1 sm:px-3 h-auto text-xs sm:text-sm">
              <Link href="/hustles" className="flex items-center space-x-1">
                <Briefcase className="h-4 w-4" />
                <span>Hustles</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 py-1 sm:px-3 h-auto text-xs sm:text-sm">
              <Link href="/rewrite-description" className="flex items-center space-x-1">
                <BrainCircuit className="h-4 w-4" />
                <span>Rewrite</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 py-1 sm:px-3 h-auto text-xs sm:text-sm">
              <Link href="/about" className="flex items-center space-x-1">
                <Info className="h-4 w-4" />
                <span>About</span>
              </Link>
            </Button>

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
                  <Link href="/contact" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                  </Link>
                </DropdownMenuItem>
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
                <DropdownMenuItem asChild>
                  <Link href="/contribute-hustle" className="flex items-center">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>Contribute Hustle</span>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Social</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Linkedin className="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="ml-auto h-3 w-3 opacity-70" />
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                    <ExternalLink className="ml-auto h-3 w-3 opacity-70" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
