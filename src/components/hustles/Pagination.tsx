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
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `${basePath}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-4 mt-8 py-4">
      <Button asChild variant="outline" disabled={currentPage <= 1} className="disabled:opacity-50 disabled:cursor-not-allowed">
        <Link href={createPageURL(currentPage - 1)} scroll={false}>
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Link>
      </Button>
      <span className="text-sm font-medium text-muted-foreground">
        Page {currentPage} of {totalPages}
      </span>
      <Button asChild variant="outline" disabled={currentPage >= totalPages} className="disabled:opacity-50 disabled:cursor-not-allowed">
        <Link href={createPageURL(currentPage + 1)} scroll={false}>
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
};

export default Pagination;
