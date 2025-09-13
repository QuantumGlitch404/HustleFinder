
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
    const checkAdBlocker = async () => {
      setIsChecking(true);
      let domBaitBlocked = false;
      let networkBaitBlocked = false;

      // 1. DOM Bait Check
      const baitElement = document.createElement('div');
      baitElement.className = 'ad-banner adsbox textads ad-unit pub_300x250 pub_300x250m pub_728x90 ad-zone adslot'; // Common ad blocker targets
      baitElement.style.width = '1px';
      baitElement.style.height = '1px';
      baitElement.style.position = 'absolute';
      baitElement.style.left = '-9999px';
      baitElement.style.top = '-9999px';
      baitElement.style.pointerEvents = 'none';
      baitElement.setAttribute('aria-hidden', 'true');
      document.body.appendChild(baitElement);

      // 2. Network Request Bait Check
      // Using a URL that is very commonly blocked by DNS-level ad blockers.
      // We attempt to fetch a resource. A common choice is a pixel from a known ad server.
      const networkBaitUrl = 'https://static.doubleclick.net/instream/ad_status.js'; // A small JS file often blocked

      try {
        // 'no-cors' is important here. We don't care about the response content,
        // just whether the request itself was blocked at a network level.
        // A successful opaque response means it wasn't blocked by DNS.
        await fetch(networkBaitUrl, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' });
        networkBaitBlocked = false; // Request went through (or wasn't blocked in a detectable way for this specific URL)
      } catch (error) {
        // A TypeError "Failed to fetch" is a strong indicator of DNS blocking or other network-level interference.
        if (error instanceof TypeError && (error.message.toLowerCase().includes('failed to fetch') || error.message.toLowerCase().includes('networkerror'))) {
          networkBaitBlocked = true;
        } else {
          // Other errors might not be ad blockers.
          networkBaitBlocked = false;
        }
      }

      // Short timeout for the DOM check to settle after appending the bait element
      setTimeout(() => {
        if (typeof window !== 'undefined') { // Ensure this only runs client-side
            if (baitElement.offsetHeight === 0 ||
                baitElement.style.display === 'none' ||
                baitElement.style.visibility === 'hidden' ||
                (window.getComputedStyle && window.getComputedStyle(baitElement).getPropertyValue('display') === 'none') ||
                !document.body.contains(baitElement)) {
              domBaitBlocked = true;
            }

            if (document.body.contains(baitElement)) {
              document.body.removeChild(baitElement);
            }
        }

        if (domBaitBlocked || networkBaitBlocked) {
          setAdBlockerActive(true);
        } else {
          setAdBlockerActive(false);
        }
        setIsChecking(false);
      }, 350); // Slightly increased timeout for DOM check reliability
    };

    if (typeof window !== 'undefined') { // Ensure this effect runs only in the browser
        checkAdBlocker();
    } else {
        // If not in browser (e.g., during SSR), assume no ad blocker and finish checking.
        setIsChecking(false);
        setAdBlockerActive(false);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

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
      <div className="fixed inset-0 bg-background z-[99998] flex flex-col items-center justify-center text-center p-6">
        <div className="bg-card p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl max-w-md w-full border border-border">
          <ShieldAlert className="h-16 w-16 text-destructive mx-auto mb-4 sm:mb-6" />
          <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ad Blocker Detected</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Please turn off your ad blocker to access the HustleFinder website. 
            We earn solely through advertisements, and ad revenue helps us keep this platform free for everyone.
          </p>
          <Button
            onClick={() => {
                if (typeof window !== 'undefined') {
                    window.location.reload();
                }
            }}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base py-2.5 sm:py-3"
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
