
import HustleCard from '@/components/hustles/HustleCard';
import Pagination from '@/components/hustles/Pagination';
import { allHustles, HUSTLES_PER_PAGE } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import { Search } from 'lucide-react';
import SearchForm from '@/components/SearchForm'; // Added import

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
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Explore Side Hustles</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find your perfect side gig from our curated list of opportunities.
        </p>
      </div>

      <div className="mb-10 max-w-2xl mx-auto">
        <SearchForm />
      </div>
      
      {currentHustles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="text-center py-12">
           <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-xl text-muted-foreground">No hustles found for this page.</p>
          <p className="text-sm text-muted-foreground">Try adjusting the page number or check back later.</p>
        </div>
      )}
    </div>
  );
}
