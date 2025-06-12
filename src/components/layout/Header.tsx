
'use client';

import { useState, useEffect, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Briefcase, BrainCircuit, Info, Search as SearchIcon } from 'lucide-react'; // Added SearchIcon
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Added Input

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Pre-fill search input if q param exists (e.g., on search results page)
    const currentQuery = searchParams.get('q');
    if (currentQuery) {
      setSearchQuery(currentQuery);
    }
  }, [searchParams]);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold hover:opacity-80 transition-opacity">
            <Briefcase className="h-7 w-7" />
            <span>Hustle Finder</span>
          </Link>
          
          <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-auto sm:max-w-xs items-center space-x-2">
            <Input
              type="search"
              placeholder="Search hustles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/30 focus:bg-primary-foreground/20"
              aria-label="Search hustles"
            />
            <Button type="submit" variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground h-9 w-9">
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </form>

          <nav className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 sm:px-3 py-1 h-auto text-sm">
              <Link href="/hustles" className="flex items-center space-x-1">
                <Briefcase className="h-4 w-4" />
                <span>Hustles</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 sm:px-3 py-1 h-auto text-sm">
              <Link href="/rewrite-description" className="flex items-center space-x-1">
                <BrainCircuit className="h-4 w-4" />
                <span>Rewrite</span>
              </Link>
            </Button>
            <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground px-2 sm:px-3 py-1 h-auto text-sm">
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
