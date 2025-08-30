
"use client";

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBookmarks } from '@/context/BookmarkContext';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import AuthDialog from '@/components/auth/AuthDialog';

interface BookmarkButtonProps {
  hustleId: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  isIconOnly?: boolean;
}

export default function BookmarkButton({ hustleId, className, size = "icon", variant = "ghost", isIconOnly = false }: BookmarkButtonProps) {
  const { addBookmark, removeBookmark, isBookmarked, loading } = useBookmarks();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const bookmarked = isBookmarked(hustleId);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      // The button will be wrapped in a DialogTrigger, so we don't need to do anything here.
      // The dialog will open automatically.
      return;
    }
    
    try {
      if (bookmarked) {
        removeBookmark(hustleId);
        // Toast is handled in the context now for cloud operations
      } else {
        addBookmark(hustleId);
        // Toast is handled in the context now for cloud operations
      }
    } catch (error) {
      console.error("Bookmark toggle error:", error);
      toast({ title: "Error", description: "Could not update your saved hustles. Please try again.", variant: "destructive" });
    }
  };

  const button = (
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

  // If user is not logged in, wrap the button in a dialog trigger
  if (!user) {
    return (
      <Dialog>
        <DialogTrigger asChild onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          {button}
        </DialogTrigger>
        <AuthDialog />
      </Dialog>
    );
  }

  // Otherwise, return the button as is
  return button;
}
