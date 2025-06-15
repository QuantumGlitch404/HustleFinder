
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
      setAdBlockerDetected(false); 
    }
  };

  useEffect(() => {
    const checkTimeout = setTimeout(checkAdBlocker, 1500);
    return () => {
      clearTimeout(checkTimeout);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setTimeout(checkAdBlocker, 500);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  const handleRecheck = () => {
    setTimeout(checkAdBlocker, 100);
  };

  return (
    <>
      <div
        ref={baitRef}
        className="textads banner-ads ad-banner advertisement ad-slot ad-placeholder ad-unit"
        style={{
          height: '1px',
          width: '1px',
          position: 'fixed',
          left: '-10000px',
          top: '-10000px',
          opacity: '0.01',
          pointerEvents: 'none',
          zIndex: '-1',
        }}
        aria-hidden="true"
        data-nosnippet
      >
        Sponsored Content Advertisement Unit
      </div>

      {adBlockerDetected && (
        <AlertDialog open={adBlockerDetected} onOpenChange={(isOpen) => {
            if (!isOpen && adBlockerDetected) {
                // Stays open if adblocker is still detected
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
      <div style={{ visibility: adBlockerDetected ? 'hidden' : 'visible', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {children}
      </div>
    </>
  );
};

export default AdBlockDetector;
