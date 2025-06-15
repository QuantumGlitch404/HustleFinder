
'use client';

import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';
import { ShieldAlert } from 'lucide-react';

interface AdBlockDetectorProps {
  children: ReactNode;
}

const AdBlockDetector: React.FC<AdBlockDetectorProps> = ({ children }) => {
  const [adBlockerDetected, setAdBlockerDetected] = useState(false);
  const baitRef = useRef<HTMLDivElement | null>(null);

  const checkAdBlocker = () => {
    if (baitRef.current) {
      const baitStyle = window.getComputedStyle(baitRef.current);
      if (
        baitRef.current.offsetHeight === 0 ||
        baitRef.current.clientHeight === 0 ||
        baitRef.current.offsetParent === null ||
        baitStyle.display === 'none' ||
        baitStyle.visibility === 'hidden'
      ) {
        setAdBlockerDetected(true);
      } else {
        setAdBlockerDetected(false);
      }
    } else {
      // If bait isn't rendered, assume no ad blocker for now, will re-check
      // This path might also be hit if an aggressive adblocker removes the bait element entirely
      // A more robust solution might involve checking if known ad network scripts loaded.
      // For this implementation, we rely on the bait's visibility.
      // To be safe, if bait is null after a delay, we could assume it was blocked.
      // Let's try to detect if it's truly null vs not yet rendered.
      // If the component is mounted and baitRef.current is still null, it might have been removed.
      // However, for simplicity and to avoid false positives on fast networks, we'll stick to visibility.
      setAdBlockerDetected(false); 
    }
  };

  useEffect(() => {
    // Initial check after a delay to allow ad blockers to modify the DOM
    const checkTimeout = setTimeout(checkAdBlocker, 1500);

    // Optional: Re-check periodically (can be resource-intensive and annoying)
    // const interval = setInterval(checkAdBlocker, 7000);

    return () => {
      clearTimeout(checkTimeout);
      // clearInterval(interval);
    };
  }, []); // Run only on mount

  // Re-check if the visibility of the page changes (e.g., user switches tabs and comes back)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Slight delay to ensure DOM is stable after tab switch
        setTimeout(checkAdBlocker, 500);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  const handleRecheck = () => {
    // Give a very brief moment for any changes to take effect if user *just* disabled it
    setTimeout(checkAdBlocker, 100);
  };

  return (
    <>
      {/* Bait element for ad blocker detection */}
      {/* This element is designed to be targeted and hidden by ad blockers. */}
      <div
        ref={baitRef}
        className="textads banner-ads ad-banner advertisement ad-slot ad-placeholder ad-unit" // Common classes
        style={{
          height: '1px',
          width: '1px',
          position: 'fixed',
          left: '-10000px', // Position off-screen
          top: '-10000px',
          opacity: '0.01', // Make it effectively invisible but still in DOM
          pointerEvents: 'none', // Not interactive
          zIndex: '-1', // Ensure it's behind everything
        }}
        aria-hidden="true"
        data-nosnippet // Tell search engines not to snippet this
      >
        Sponsored Content Advertisement Unit
      </div>

      {adBlockerDetected && (
        <AlertDialog open={adBlockerDetected} onOpenChange={(isOpen) => {
            // We control the open state strictly with adBlockerDetected.
            // If user tries to close it (e.g. ESC key), and adBlockerDetected is still true,
            // it will effectively re-open or stay open.
            if (!isOpen && adBlockerDetected) {
                // Optional: could re-trigger a check or just rely on the button
            }
        }}>
          <AlertDialogContent className="max-w-lg w-[90%] sm:w-full rounded-lg">
            <AlertDialogHeader className="text-center sm:text-left">
              <AlertDialogTitle className="flex flex-col sm:flex-row items-center justify-center sm:justify-start text-xl sm:text-2xl">
                <ShieldAlert className="h-7 w-7 sm:h-8 sm:w-8 mr-0 sm:mr-3 mb-2 sm:mb-0 text-destructive" />
                Ad Blocker Detected
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription className="text-sm sm:text-base py-3 sm:py-4 text-center sm:text-left leading-relaxed">
              To continue using HustleFinder, please disable your ad blocker for our website.
              <br /><br />
              We rely solely on advertisements to keep our services free for everyone. Your support by allowing ads helps us maintain and improve the website.
              <br /><br />
              Thank you for your understanding!
            </AlertDialogDescription>
            <AlertDialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-2">
              <AlertDialogAction 
                onClick={handleRecheck} 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 text-sm sm:text-base"
              >
                I've Disabled It, Check Again
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {/* Conditionally render children. The div wrapper ensures layout consistency. */}
      <div style={{ visibility: adBlockerDetected ? 'hidden' : 'visible', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* 
          The main content is wrapped in a div that takes full viewport height.
          If adBlockerDetected is true, its visibility is hidden.
          This is preferred over display:none for some edge cases where display:none might interfere with component mounting/unmounting states more abruptly.
          The parent of this component (RootLayout's body) should also be display:flex and flex-direction:column.
        */}
        {children}
      </div>
    </>
  );
};

export default AdBlockDetector;
