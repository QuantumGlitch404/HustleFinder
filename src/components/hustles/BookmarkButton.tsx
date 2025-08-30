
"use client";

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBookmarks } from '@/context/BookmarkContext';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface BookmarkButtonProps {
  hustleId: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  isIconOnly?: boolean;
}

export default function BookmarkButton({ hustleId, className, size = "icon", variant = "ghost", isIconOnly = false }: BookmarkButtonProps) {
  const { addBookmark, removeBookmark, isBookmarked, loading } = useBookmarks();
  const { toast } = useToast();
  
  const bookmarked = isBookmarked(hustleId);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      if (bookmarked) {
        removeBookmark(hustleId);
        toast({ title: "Removed from Saved", description: "Hustle removed from your saved list." });
      } else {
        addBookmark(hustleId);
        toast({ title: "Hustle Saved!", description: "You can find it on your 'Saved' page.", variant: "default" });
      }
    } catch (error) {
      console.error("Bookmark toggle error:", error);
      toast({ title: "Error", description: "Could not update your saved hustles. Please try again.", variant: "destructive" });
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleBookmark}
      disabled={loading}
      className={cn(
        "p-2",
        bookmarked 
          ? "text-destructive hover:text-destructive/90" 
          : "text-primary/70 hover:text-primary",
        className
      )}
      aria-label={bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
      data-bookmarked={bookmarked}
    >
      <Heart className={cn("h-5 w-5", bookmarked && "fill-destructive")} />
      {!isIconOnly && <span className="ml-2">{loading ? "Saving..." : (bookmarked ? 'Saved' : 'Save')}</span>}
    </Button>
  );
}
