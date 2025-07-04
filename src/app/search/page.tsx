
import type { Metadata } from 'next';
import HustleCard from '@/components/hustles/HustleCard';
import Pagination from '@/components/hustles/Pagination';
import { allHustles, HUSTLES_PER_PAGE } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import { Search as SearchIcon } from 'lucide-react';
import SearchForm from '@/components/SearchForm';

interface SearchPageProps {
  searchParams?: {
    q?: string;
    page?: string;
  };
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = searchParams?.q || '';
  if (query) {
    return {
      title: `Search results for "${query}" | Hustle Finder`,
      description: `Find hustles matching "${query}" on Hustle Finder.`,
    };
  }
  return {
    title: 'Search Hustles | Hustle Finder',
    description: 'Search for side hustles and opportunities.',
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams?.q?.toLowerCase() || '';
  const currentPage = Number(searchParams?.page) || 1;

  const filteredHustles = query
    ? allHustles.filter(
        (hustle) =>
          hustle.title.toLowerCase().includes(query) ||
          hustle.description.toLowerCase().includes(query) ||
          hustle.category.toLowerCase().includes(query)
      )
    : [];

  const startIndex = (currentPage - 1) * HUSTLES_PER_PAGE;
  const endIndex = startIndex + HUSTLES_PER_PAGE;
  const currentHustles = filteredHustles.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-10 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
        <SearchForm initialQuery={searchParams?.q || ''} />
      </div>

      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
          {query ? `Search Results for "${searchParams?.q}"` : 'Search Hustles'}
        </h1>
        {query && (
          <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
            Found {filteredHustles.length} hustle{filteredHustles.length !== 1 ? 's' : ''}.
          </p>
        )}
         {!query && (
          <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
            Please enter a search term above to find hustles.
          </p>
        )}
      </div>
      
      {query && currentHustles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentHustles.map((hustle: Hustle) => (
              <HustleCard key={hustle.id} hustle={hustle} />
            ))}
          </div>
          <Pagination
            totalItems={filteredHustles.length}
            itemsPerPage={HUSTLES_PER_PAGE}
            basePath={`/search?q=${encodeURIComponent(query)}`}
          />
        </>
      ) : query ? (
        <div className="text-center py-10 sm:py-12">
          <SearchIcon className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mb-3 sm:mb-4" />
          <p className="text-lg sm:text-xl text-muted-foreground">No hustles found matching your search.</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Try using different keywords or broadening your search.</p>
        </div>
      ) : null}
    </div>
  );
}
