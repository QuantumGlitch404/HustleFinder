
'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Star, Send } from 'lucide-react';
import type { Testimonial } from '@/types/hustle';
import { useToast } from '@/hooks/use-toast';

interface SubmitReviewFormProps {
  hustleId: string; // Not directly used in form logic, but good for context or future backend calls
  onSubmitReview: (reviewData: Omit<Testimonial, 'id'>) => void;
}

const MAX_STARS = 5;

export default function SubmitReviewForm({ hustleId, onSubmitReview }: SubmitReviewFormProps) {
  const [reviewerName, setReviewerName] = useState('');
  const [location, setLocation] = useState('');
  const [quote, setQuote] = useState('');
  const [starRating, setStarRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!reviewerName.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (starRating === 0) {
      setError('Please select a star rating.');
      return;
    }
    if (!quote.trim()) {
      setError('Please write your review message.');
      return;
    }
    if (quote.trim().length < 10) {
        setError('Review message should be at least 10 characters long.');
        return;
    }


    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      onSubmitReview({
        reviewerName,
        starRating,
        quote,
        location: location.trim() || undefined, // Make location truly optional
      });

      toast({
        title: "Review Submitted!",
        description: "Thank you for your feedback.",
        variant: "default",
      });

      // Reset form
      setReviewerName('');
      setLocation('');
      setQuote('');
      setStarRating(0);
      setHoverRating(0);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="reviewerName" className="block text-sm font-medium text-foreground mb-1">Your Name</Label>
        <Input
          id="reviewerName"
          type="text"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          placeholder="e.g., John Doe"
          disabled={isSubmitting}
          className="w-full"
        />
      </div>

      <div>
        <Label htmlFor="location" className="block text-sm font-medium text-foreground mb-1">Your Location (Optional)</Label>
        <Input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., City, Country"
          disabled={isSubmitting}
          className="w-full"
        />
      </div>

      <div>
        <Label className="block text-sm font-medium text-foreground mb-2">Your Rating</Label>
        <div className="flex items-center space-x-1">
          {[...Array(MAX_STARS)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <button
                key={currentRating}
                type="button"
                disabled={isSubmitting}
                className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 
                            ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}
                           `}
                onClick={() => setStarRating(currentRating)}
                onMouseEnter={() => !isSubmitting && setHoverRating(currentRating)}
                onMouseLeave={() => !isSubmitting && setHoverRating(0)}
                aria-label={`Rate ${currentRating} out of ${MAX_STARS} stars`}
              >
                <Star
                  className={`h-7 w-7 transition-colors duration-150 
                              ${currentRating <= (hoverRating || starRating)
                                ? 'text-accent fill-accent'
                                : 'text-muted-foreground/50'
                              }
                            `}
                />
              </button>
            );
          })}
        </div>
      </div>
      
      <div>
        <Label htmlFor="quote" className="block text-sm font-medium text-foreground mb-1">Your Review</Label>
        <Textarea
          id="quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Share your experience with this hustle..."
          rows={4}
          disabled={isSubmitting}
          className="w-full resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-destructive bg-destructive/10 p-2 rounded-md">{error}</p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit Review
          </>
        )}
      </Button>
    </form>
  );
}
