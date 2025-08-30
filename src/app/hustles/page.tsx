
import { allHustles, HUSTLES_PER_PAGE } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import { Filter, Search } from 'lucide-react';
import AnimatedDiv from '@/components/animations/AnimatedDiv';
import HustleCard from '@/components/hustles/HustleCard';
import Pagination from '@/components/hustles/Pagination';
import HustleFilters from '@/components/hustles/HustleFilters';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from '@/components/ui/scroll-area';

export const metadata = {
  title: 'Explore Side Hustles | Hustle Finder',
  description: 'Browse, filter, and sort through a wide variety of side hustles to find your next opportunity.',
};

interface HustlesPageProps {
  searchParams?: {
    page?: string;
    categories?: string;
    difficulties?: string;
    earnings?: string;
    sort?: string;
    q?: string; // For search query from the form
  };
}

// Function to safely parse comma-separated strings from URL into an array
const parseUrlQuery = (query?: string): string[] => {
  return query ? query.split(',').filter(Boolean) : [];
};

export default function HustlesPage({ searchParams }: HustlesPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const searchTerm = searchParams?.q?.toLowerCase() || '';

  const selectedCategories = parseUrlQuery(searchParams?.categories);
  const selectedDifficulties = parseUrlQuery(searchParams?.difficulties);
  const selectedEarnings = parseUrlQuery(searchParams?.earnings); // e.g., ['Beginner', 'Advanced']
  const sortBy = searchParams?.sort || 'default'; // 'default', 'popularity', 'earnings'

  // Filtering logic
  let filteredHustles = allHustles.filter(hustle => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(hustle.category);
    const difficultyMatch = selectedDifficulties.length === 0 || selectedDifficulties.includes(hustle.difficultyLevel);
    
    // Earnings match logic: check if any of the hustle's earning levels are in the selected earnings filter
    const earningsMatch = selectedEarnings.length === 0 || 
      selectedEarnings.some(level => hustle.earningPotentials.some(ep => ep.level === level));
      
    // Search term match logic
    const searchMatch = !searchTerm ||
      hustle.title.toLowerCase().includes(searchTerm) ||
      hustle.description.toLowerCase().includes(searchTerm) ||
      hustle.category.toLowerCase().includes(searchTerm) ||
      hustle.skillsToLearn.toLowerCase().includes(searchTerm);

    return categoryMatch && difficultyMatch && earningsMatch && searchMatch;
  });

  // Sorting logic
  if (sortBy === 'popularity') {
    // Sort by number of testimonials (more testimonials = more popular)
    filteredHustles.sort((a, b) => b.testimonials.length - a.testimonials.length);
  } else if (sortBy === 'earnings') {
    // Sort by the highest possible earning potential
    // We parse the range to get a numeric value for sorting. This is a simplification.
    const getMaxValue = (range: string) => {
      const value = range.split(' - ')[1]?.replace(/[^0-9]/g, '');
      return value ? parseInt(value) : 0;
    };
    filteredHustles.sort((a, b) => {
      const maxA = getMaxValue(a.earningPotentials[a.earningPotentials.length - 1].range);
      const maxB = getMaxValue(b.earningPotentials[b.earningPotentials.length - 1].range);
      return maxB - maxA;
    });
  }
  // 'default' sorting is the original order from hustle-data.ts

  const totalItems = filteredHustles.length;
  const startIndex = (currentPage - 1) * HUSTLES_PER_PAGE;
  const endIndex = startIndex + HUSTLES_PER_PAGE;
  const currentHustles = filteredHustles.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <AnimatedDiv animationClasses="fade-in slide-in-from-top-8" durationClass="duration-500">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Explore Side Hustles</h1>
          <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
            Find your perfect side gig from our curated list of opportunities.
          </p>
        </div>
      </AnimatedDiv>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Desktop Sidebar Filters - hidden on small screens */}
        <aside className="hidden lg:block lg:col-span-1 lg:sticky lg:top-24 self-start mb-8 lg:mb-0">
          <HustleFilters searchParams={searchParams} />
        </aside>

        <main className="lg:col-span-3">
          {/* Mobile Filters - A button that triggers a slide-out sheet */}
          <div className="lg:hidden mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Show Filters & Sort
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0 flex flex-col">
                <SheetHeader className="p-4 border-b flex-shrink-0">
                   <SheetTitle className="text-lg">Filter & Sort</SheetTitle>
                </SheetHeader>
                <ScrollArea className="flex-grow">
                  <div className="p-4">
                    <HustleFilters searchParams={searchParams} />
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>

          {currentHustles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {currentHustles.map((hustle: Hustle, index: number) => (
                  <AnimatedDiv 
                    key={hustle.id} 
                    animationClasses="fade-in zoom-in-95" 
                    durationClass="duration-500"
                    delayClass={`delay-${(index % 3) * 100}`}
                    className="h-full"
                  >
                    <HustleCard hustle={hustle} />
                  </AnimatedDiv>
                ))}
              </div>
              <AnimatedDiv animationClasses="fade-in" durationClass="duration-500" delayClass="delay-500">
                <Pagination
                  totalItems={totalItems}
                  itemsPerPage={HUSTLES_PER_PAGE}
                  basePath="/hustles"
                />
              </AnimatedDiv>
            </>
          ) : (
            <AnimatedDiv animationClasses="fade-in" durationClass="duration-500">
              <div className="text-center py-10 sm:py-16 border-2 border-dashed rounded-lg bg-card min-h-[400px] flex flex-col justify-center items-center">
                <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">No Hustles Found</h2>
                <p className="text-md text-muted-foreground mb-6 max-w-md mx-auto">
                  Try adjusting your filters or search term.
                </p>
                <Button asChild variant="outline">
                  <Link href="/hustles">
                    Clear All Filters
                  </Link>
                </Button>
              </div>
            </AnimatedDiv>
          )}
        </main>
      </div>
    </div>
  );
}
