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
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">AI Description Enhancer</CardTitle>
        <CardDescription>
          Enter a hustle description below. Our AI will help rephrase it for clarity and broader understanding, especially for non-native English speakers.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="original-description" className="text-sm font-medium">Original Description</label>
            <Textarea
              id="original-description"
              placeholder="e.g., I craft bespoke digital art for social media profiles."
              value={originalDescription}
              onChange={(e) => setOriginalDescription(e.target.value)}
              rows={5}
              className="resize-none"
              disabled={isLoading}
            />
          </div>
          {error && (
            <div className="flex items-center p-3 rounded-md bg-destructive/10 text-destructive text-sm">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <p>{error}</p>
            </div>
          )}
          {isLoading && (
            <div className="flex items-center justify-center p-4 bg-secondary/50 rounded-md">
              <Loader2 className="h-8 w-8 animate-spin text-primary mr-3" />
              <p className="text-muted-foreground">Rewriting your description... Please wait.</p>
            </div>
          )}
          {rewrittenDescription && !isLoading && (
            <div className="space-y-2">
              <label htmlFor="rewritten-description" className="text-sm font-medium">Enhanced Description</label>
              <Textarea
                id="rewritten-description"
                value={rewrittenDescription}
                readOnly
                rows={5}
                className="bg-muted/50 resize-none"
              />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading || !originalDescription.trim()} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
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
