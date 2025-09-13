
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const checkAdBlocker = async () => {
      setIsChecking(true);
      
      try {
        let detectionCount = 0;
        const checks: Promise<boolean>[] = [];

        // Check 1: Simple DOM bait (most reliable)
        checks.push(new Promise((resolve) => {
          const bait = document.createElement('div');
          bait.innerHTML = '&nbsp;';
          bait.className = 'adsbox';
          bait.style.cssText = 'width:1px;height:1px;position:absolute;left:-9999px;top:-9999px;';
          
          document.body.appendChild(bait);
          
          setTimeout(() => {
            const blocked = bait.offsetHeight === 0 || 
                           window.getComputedStyle(bait).display === 'none' ||
                           !document.body.contains(bait);
            
            try {
              document.body.removeChild(bait);
            } catch (e) {
              // Element might already be removed by ad blocker
            }
            
            resolve(blocked);
          }, 100);
        }));

        // Check 2: Script injection test
        checks.push(new Promise((resolve) => {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
          
          let resolved = false;
          const cleanup = () => {
            if (!resolved) {
              resolved = true;
              try {
                document.head.removeChild(script);
              } catch (e) {
                // Script might be blocked/removed
              }
            }
          };

          script.onerror = () => {
            cleanup();
            resolve(true); // Blocked
          };

          script.onload = () => {
            cleanup();
            resolve(false); // Not blocked
          };

          // Timeout fallback
          setTimeout(() => {
            if (!resolved) {
              cleanup();
              resolve(false); // Assume not blocked if timeout
            }
          }, 2000);

          document.head.appendChild(script);
        }));

        // Check 3: Network request (less reliable, use as additional confirmation)
        checks.push(new Promise((resolve) => {
          const img = new Image();
          let resolved = false;
          
          const cleanup = () => {
            if (!resolved) {
              resolved = true;
              img.onload = null;
              img.onerror = null;
            }
          };

          img.onload = () => {
            cleanup();
            resolve(false); // Not blocked
          };

          img.onerror = () => {
            cleanup();
            resolve(true); // Might be blocked
          };

          // Timeout fallback
          setTimeout(() => {
            if (!resolved) {
              cleanup();
              resolve(false); // Assume not blocked if timeout
            }
          }, 3000);

          // Use a small tracking pixel that's commonly blocked
          img.src = 'https://www.google-analytics.com/collect?v=1&t=event&tid=UA-XXXXX-Y&cid=555&ec=test&ea=test';
        }));

        const results = await Promise.all(checks);
        detectionCount = results.filter(blocked => blocked).length;

        // Only consider ad blocker active if multiple checks confirm it
        // This reduces false positives significantly
        const threshold = 2; // At least 2 out of 3 checks must indicate blocking
        setAdBlockerActive(detectionCount >= threshold);

      } catch (error) {
        console.warn('Ad blocker detection failed:', error);
        // In case of error, assume no ad blocker to avoid false positives
        setAdBlockerActive(false);
      } finally {
        setIsChecking(false);
      }
    };

    // Add a small delay to ensure the page is fully loaded
    const timeoutId = setTimeout(() => {
      checkAdBlocker();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [mounted]);

  // Don't render anything on server-side
  if (!mounted) {
    return <>{children}</>;
  }

  if (isChecking) {
    return (
      <>
        {children}
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[99999] flex flex-col items-center justify-center text-center p-6">
          <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">Initializing...</p>
          </div>
        </div>
      </>
    );
  }

  if (adBlockerActive) {
    return (
      <>
        {children}
        <div className="fixed inset-0 bg-background z-[99998] flex flex-col items-center justify-center text-center p-6">
          <div className="bg-card p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl max-w-md w-full border border-border">
            <ShieldAlert className="h-16 w-16 text-destructive mx-auto mb-4 sm:mb-6" />
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ad Blocker Detected</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Please disable your ad blocker to access HustleFinder. 
              Ad revenue helps us keep this platform free for everyone.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => window.location.reload()}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                I've disabled my ad blocker
              </Button>
              <Button
                onClick={() => setAdBlockerActive(false)}
                variant="outline"
                className="w-full text-sm"
                size="sm"
              >
                Continue anyway (limited features)
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
};

export default AdBlockDetector;
