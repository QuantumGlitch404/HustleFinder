import Link from 'next/link';
import { Briefcase, BrainCircuit, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold hover:opacity-80 transition-opacity">
          <Briefcase className="h-7 w-7" />
          <span>Hustle Finder</span>
        </Link>
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
            <Link href="/hustles" className="flex items-center space-x-1">
              <Briefcase className="h-4 w-4 sm:mr-1" />
              <span className="hidden sm:inline">Hustles</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
            <Link href="/rewrite-description" className="flex items-center space-x-1">
              <BrainCircuit className="h-4 w-4 sm:mr-1" />
               <span className="hidden sm:inline">Rewrite</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
            <Link href="/about" className="flex items-center space-x-1">
              <Info className="h-4 w-4 sm:mr-1" />
              <span className="hidden sm:inline">About</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
