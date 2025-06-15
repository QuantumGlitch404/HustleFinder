
'use client';

import { Button } from '@/components/ui/button';
import { useTextSize } from '@/context/TextSizeContext';
import { cn } from '@/lib/utils';

const TextSizeAdjuster = () => {
  const { currentSizeClass, setTextSizeClass } = useTextSize();

  type SizeOption = {
    label: string; // Display label e.g., "A"
    value: 'text-sm' | 'text-base' | 'text-lg';
    ariaLabel: string;
    styleClass: string; // Class for styling the 'A' character
  };

  const sizes: SizeOption[] = [
    { label: 'A', value: 'text-sm', ariaLabel: 'Set text size to small', styleClass: 'text-xs' },
    { label: 'A', value: 'text-base', ariaLabel: 'Set text size to medium (default)', styleClass: 'text-sm' },
    { label: 'A', value: 'text-lg', ariaLabel: 'Set text size to large', styleClass: 'text-base font-semibold' },
  ];

  return (
    <div className="flex items-center space-x-1 rounded-md border border-border/70 bg-background/50 p-0.5 shadow-sm">
       {sizes.map((size) => (
         <Button
            key={size.value}
            variant="ghost" // Use ghost for a more integrated feel in the header
            size="sm" 
            onClick={() => setTextSizeClass(size.value)}
            className={cn(
                "p-0 w-7 h-7 sm:w-8 sm:h-8 transition-all duration-200 rounded-[0.2rem] flex items-center justify-center",
                currentSizeClass === size.value 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                size.styleClass // Apply specific styling for the 'A' character
            )}
            aria-pressed={currentSizeClass === size.value}
            aria-label={size.ariaLabel}
        >
            {size.label}
        </Button>
       ))}
    </div>
  );
};

export default TextSizeAdjuster;
