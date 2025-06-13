
import HustleCard from '@/components/hustles/HustleCard';
import Pagination from '@/components/hustles/Pagination';
import { allHustles, HUSTLES_PER_PAGE } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import { Search } from 'lucide-react';
import SearchForm from '@/components/SearchForm';

export const metadata = {
  title: 'Explore Side Hustles | Hustle Finder',
  description: 'Browse through a wide variety of side hustles and find your next opportunity.',
};

interface HustlesPageProps {
  searchParams?: {
    page?: string;
  };
}

export default function HustlesPage({ searchParams }: HustlesPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const startIndex = (currentPage - 1) * HUSTLES_PER_PAGE;
  const endIndex = startIndex + HUSTLES_PER_PAGE;
  const currentHustles = allHustles.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Explore Side Hustles</h1>
        <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
          Find your perfect side gig from our curated list of opportunities.
        </p>
      </div>

      <div className="mb-8 sm:mb-10 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
        <SearchForm />
      </div>
      
      {currentHustles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentHustles.map((hustle: Hustle) => (
              <HustleCard key={hustle.id} hustle={hustle} />
            ))}
          </div>
          <Pagination
            totalItems={allHustles.length}
            itemsPerPage={HUSTLES_PER_PAGE}
            basePath="/hustles"
          />
        </>
      ) : (
        <div className="text-center py-10 sm:py-12">
           <Search className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mb-3 sm:mb-4" />
          <p className="text-lg sm:text-xl text-muted-foreground">No hustles found for this page.</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Try adjusting the page number or check back later.</p>
        </div>
      )}
    </div>
  );
}
