
"use client";

import React, { useState, useEffect, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Loader2 } from 'lucide-react';

interface AdBlockDetectorProps {
  children: ReactNode;
}

const AdBlockDetector: React.FC<AdBlockDetectorProps> = ({ children }) => {
  const [adBlockerActive, setAdBlockerActive] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAdBlocker = () => {
      setIsChecking(true);
      const baitElement = document.createElement('div');
      baitElement.className = 'ad-banner adsbox textads ad-unit pub_300x250 pub_300x250m pub_728x90 ad-zone'; // Common ad blocker targets
      baitElement.style.width = '1px';
      baitElement.style.height = '1px';
      baitElement.style.position = 'absolute';
      baitElement.style.left = '-9999px';
      baitElement.style.top = '-9999px';
      baitElement.style.pointerEvents = 'none'; // Make sure it's not interactable
      baitElement.setAttribute('aria-hidden', 'true');

      document.body.appendChild(baitElement);

      setTimeout(() => {
        if (baitElement.offsetHeight === 0 || 
            baitElement.style.display === 'none' || 
            baitElement.style.visibility === 'hidden' ||
            !document.body.contains(baitElement)) {
          setAdBlockerActive(true);
        } else {
          setAdBlockerActive(false);
        }
        if (document.body.contains(baitElement)) {
          document.body.removeChild(baitElement);
        }
        setIsChecking(false);
      }, 200); // Increased timeout slightly for more reliable detection
    };

    // Run the check only once on initial mount
    checkAdBlocker();

    // No cleanup needed for interval as we want a static check on load
    // If dynamic re-checking during session is needed, this would be different
  }, []);

  if (isChecking) {
    return (
      <div className="fixed inset-0 bg-background z-[99999] flex flex-col items-center justify-center text-center p-6">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-foreground">Checking browser settings...</p>
      </div>
    );
  }

  if (adBlockerActive) {
    return (
      <div className="fixed inset-0 bg-background z-[99999] flex flex-col items-center justify-center text-center p-6">
        <div className="bg-card p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl max-w-md w-full border border-border">
          <ShieldAlert className="h-16 w-16 text-destructive mx-auto mb-4 sm:mb-6" />
          <h1 className="text-xl sm:text-2xl font-bold text-destructive mb-3 sm:mb-4">Ad Blocker Detected</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Please turn off your ad blocker to access the HustleFinder website. 
            We earn solely through advertisements, and ad revenue helps us keep this platform free for everyone.
          </p>
          <Button 
            onClick={() => window.location.reload()}
            className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 text-sm sm:text-base py-2.5 sm:py-3"
            size="lg"
          >
            I've disabled my ad blocker
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdBlockDetector;
