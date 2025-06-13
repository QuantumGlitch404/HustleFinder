
'use client';

import { useState, type FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';

interface SearchFormProps {
  initialQuery?: string;
  className?: string;
}

export default function SearchForm({ initialQuery = '', className }: SearchFormProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className={`flex w-full items-center space-x-2 ${className}`}>
      <Input
        type="search"
        placeholder="Search hustles by title or description..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow h-10 sm:h-11 text-sm"
        aria-label="Search hustles"
      />
      <Button type="submit" variant="default" size="icon" aria-label="Search" className="h-10 w-10 sm:h-11 sm:w-11">
        <SearchIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </form>
  );
}
