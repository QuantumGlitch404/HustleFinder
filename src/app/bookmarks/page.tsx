
"use client";

import React from 'react';
import { useBookmarks } from '@/context/BookmarkContext';
import { allHustles } from '@/lib/hustle-data';
import HustleCard from '@/components/hustles/HustleCard';
import { BookmarkX, Search, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AnimatedDiv from '@/components/animations/AnimatedDiv';

export default function BookmarksPage() {
  const { getBookmarkedHustles, loading } = useBookmarks();
  const bookmarkedHustles = getBookmarkedHustles(allHustles);

  return (
    <div className="container mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <AnimatedDiv animationClasses="fade-in slide-in-from-top-8" durationClass="duration-500">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">Your Saved Hustles</h1>
          <p className="mt-3 sm:mt-4 text-md sm:text-lg text-muted-foreground">
            Revisit the opportunities you've bookmarked.
          </p>
        </div>
      </AnimatedDiv>

      {/* Adsterra Banner 728x90 - Bookmarks Page Top */}
      <div className="my-6 sm:my-8 w-full flex justify-center items-center text-center">
        <div style={{ width: '728px', height: '90px' }}>
          <script type="text/javascript">
            {`
              // Adsterra Banner 728x90 - Bookmarks Page Top
              atOptions = {
                'key' : '87e9049723680c8cfa98207827c2583a',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `}
          </script>
          <script type="text/javascript" src="//jackalclenchedbedside.com/87e9049723680c8cfa98207827c2583a/invoke.js"></script>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      ) : bookmarkedHustles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {bookmarkedHustles.map((hustle, index) => (
            <AnimatedDiv 
              key={hustle.id} 
              animationClasses="fade-in zoom-in-95" 
              durationClass="duration-500"
              delayClass={`delay-${(index % 3) * 100 + Math.floor(index / 3) * 50}`}
              className="h-full"
            >
              <HustleCard hustle={hustle} />
            </AnimatedDiv>
          ))}
        </div>
      ) : (
        <AnimatedDiv animationClasses="fade-in" durationClass="duration-500" delayClass="delay-100">
          <div className="text-center py-10 sm:py-16 border-2 border-dashed border-muted-foreground/30 rounded-lg bg-card">
            <BookmarkX className="mx-auto h-16 w-16 sm:h-20 sm:w-20 text-muted-foreground mb-4 sm:mb-6" />
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">No Saved Hustles Yet</h2>
            <p className="text-md text-muted-foreground mb-6 max-w-md mx-auto">
              Looks like you haven't bookmarked any hustles. Start exploring and save the ones that catch your eye!
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/hustles">
                <Search className="mr-2 h-5 w-5" />
                Explore Hustles
              </Link>
            </Button>
          </div>
        </AnimatedDiv>
      )}

      {/* Adsterra Banner 728x90 - Bookmarks Page Bottom */}
      <div className="my-6 sm:my-8 w-full flex justify-center items-center text-center">
        <div style={{ width: '728px', height: '90px' }}>
          <script type="text/javascript">
            {`
              // Adsterra Banner 728x90 - Bookmarks Page Bottom
              atOptions = {
                'key' : '87e9049723680c8cfa98207827c2583a',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `}
          </script>
          <script type="text/javascript" src="//jackalclenchedbedside.com/87e9049723680c8cfa98207827c2583a/invoke.js"></script>
        </div>
      </div>
    </div>
  );
}
