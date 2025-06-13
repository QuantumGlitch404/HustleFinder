
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  basePath: string; 
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, basePath }) => {
  const searchParamsHook = useSearchParams();
  const currentPage = Number(searchParamsHook.get('page')) || 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(basePath.includes('?') ? basePath.substring(basePath.indexOf('?') + 1) : '');
    params.set('page', pageNumber.toString());
    const pathOnly = basePath.includes('?') ? basePath.substring(0, basePath.indexOf('?')) : basePath;
    return `${pathOnly}?${params.toString()}`;
  };
  
  const handleSmoothScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
       event.preventDefault(); 
      const href = event.currentTarget.href;
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      setTimeout(() => {
        window.location.href = href; 
      }, 300); 
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-6 sm:mt-8 py-4">
      <Button asChild variant="outline" disabled={currentPage <= 1} className="disabled:opacity-50 disabled:cursor-not-allowed px-2 sm:px-3 text-xs sm:text-sm">
        <Link href={createPageURL(currentPage - 1)} onClick={handleSmoothScrollToTop}>
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
          Previous
        </Link>
      </Button>
      <span className="text-xs sm:text-sm font-medium text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      <Button asChild variant="outline" disabled={currentPage >= totalPages} className="disabled:opacity-50 disabled:cursor-not-allowed px-2 sm:px-3 text-xs sm:text-sm">
        <Link href={createPageURL(currentPage + 1)} onClick={handleSmoothScrollToTop}>
          Next
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
};

export default Pagination;
