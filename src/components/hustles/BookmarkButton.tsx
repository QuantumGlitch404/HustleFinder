
"use client";

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBookmarks } from '@/context/BookmarkContext';
import { cn } from '@/lib/utils';

interface BookmarkButtonProps {
  hustleId: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  isIconOnly?: boolean; // Default to false
}

export default function BookmarkButton({ hustleId, className, size = "icon", variant = "ghost", isIconOnly = false }: BookmarkButtonProps) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(hustleId);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation if button is inside a link
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(hustleId);
    } else {
      addBookmark(hustleId);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleBookmark}
      className={cn(
        "p-2",
        bookmarked 
          ? "text-destructive hover:text-destructive/90" 
          : "text-primary/70 hover:text-primary", // Changed default color
        className
      )}
      aria-label={bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
      data-bookmarked={bookmarked} // For easier selection if needed for styling
    >
      <Heart className={cn("h-5 w-5", bookmarked && "fill-destructive")} />
      {!isIconOnly && <span className="ml-2">{bookmarked ? 'Saved' : 'Save'}</span>}
    </Button>
  );
}

