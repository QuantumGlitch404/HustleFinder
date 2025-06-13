
import Link from 'next/link';
import { Briefcase, BrainCircuit, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
