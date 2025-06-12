
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  basePath: string; // e.g., /hustles or /search?q=term
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, basePath }) => {
  const searchParamsHook = useSearchParams(); // Renamed to avoid conflict with URLSearchParams
  const currentPage = Number(searchParamsHook.get('page')) || 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(basePath.includes('?') ? basePath.substring(basePath.indexOf('?') + 1) : '');
    params.set('page', pageNumber.toString());
    const pathOnly = basePath.includes('?') ? basePath.substring(0, basePath.indexOf('?')) : basePath;
    return `${pathOnly}?${params.toString()}`;
  };
  
  const handleSmoothScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a left-click without modifier keys
    if (event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
       event.preventDefault(); // Prevent default navigation
      const href = event.currentTarget.href;
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      // Navigate after a short delay to allow scroll to start/complete
      // This is a common pattern, though might need adjustment based on desired feel
      setTimeout(() => {
        // Use Next.js router for client-side navigation if available, or window.location
        // For simplicity here, directly changing window.location.href after scroll.
        // A more Next.js idiomatic way would be to use router.push(href)
        // but that might interfere with the smooth scroll if not handled carefully.
        window.location.href = href; 
      }, 300); // Adjust delay as needed
    }
    // If modifier keys are pressed, allow default browser behavior (e.g., open in new tab)
  };


  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-4 mt-8 py-4">
      <Button asChild variant="outline" disabled={currentPage <= 1} className="disabled:opacity-50 disabled:cursor-not-allowed">
        <Link href={createPageURL(currentPage - 1)} onClick={handleSmoothScrollToTop}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Link>
      </Button>
      <span className="text-sm font-medium text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      <Button asChild variant="outline" disabled={currentPage >= totalPages} className="disabled:opacity-50 disabled:cursor-not-allowed">
        <Link href={createPageURL(currentPage + 1)} onClick={handleSmoothScrollToTop}>
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
};

export default Pagination;
