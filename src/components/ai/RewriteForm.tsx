
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, AlertTriangle } from 'lucide-react';
import { rewriteHustleDescription, type RewriteHustleDescriptionInput } from '@/ai/flows/rewrite-hustle-description';
import { useToast } from '@/hooks/use-toast';

const RewriteForm = () => {
  const [originalDescription, setOriginalDescription] = useState('');
  const [rewrittenDescription, setRewrittenDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalDescription.trim()) {
      setError('Please enter a description to rewrite.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setRewrittenDescription('');

    try {
      const input: RewriteHustleDescriptionInput = { description: originalDescription };
      const result = await rewriteHustleDescription(input);
      setRewrittenDescription(result.rewrittenDescription);
      toast({
        title: "Description Rewritten!",
        description: "Your hustle description has been enhanced.",
        variant: "default",
      });
    } catch (err) {
      console.error('AI Rewrite Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to rewrite description: ${errorMessage}`);
      toast({
        title: "Rewrite Failed",
        description: `Could not rewrite description. ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto shadow-xl">
      <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
        <CardTitle className="text-xl sm:text-2xl font-semibold">AI Description Enhancer</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Enter a hustle description below. Our AI will help rephrase it for clarity and broader understanding, especially for non-native English speakers.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          <div className="space-y-1 sm:space-y-2">
            <label htmlFor="original-description" className="text-sm font-medium">Original Description</label>
            <Textarea
              id="original-description"
              placeholder="e.g., I craft bespoke digital art for social media profiles."
              value={originalDescription}
              onChange={(e) => setOriginalDescription(e.target.value)}
              rows={4}
              className="resize-none text-sm"
              disabled={isLoading}
            />
          </div>
          {error && (
            <div className="flex items-center p-2 sm:p-3 rounded-md bg-destructive/10 text-destructive text-xs sm:text-sm">
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <p>{error}</p>
            </div>
          )}
          {isLoading && (
            <div className="flex items-center justify-center p-3 sm:p-4 bg-secondary/50 rounded-md">
              <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-primary mr-2 sm:mr-3" />
              <p className="text-xs sm:text-sm text-muted-foreground">Rewriting... Please wait.</p>
            </div>
          )}
          {rewrittenDescription && !isLoading && (
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="rewritten-description" className="text-sm font-medium">Enhanced Description</label>
              <Textarea
                id="rewritten-description"
                value={rewrittenDescription}
                readOnly
                rows={4}
                className="bg-muted/50 resize-none text-sm"
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4">
          <Button type="submit" disabled={isLoading || !originalDescription.trim()} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm sm:text-base py-2 sm:py-2.5">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enhancing...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Enhance Description
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default RewriteForm;
