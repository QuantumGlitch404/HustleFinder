
'use client';

import { Button } from '@/components/ui/button';
import { useTextSize } from '@/context/TextSizeContext';
import { cn } from '@/lib/utils';

const TextSizeAdjuster = () => {
  const { currentSizeClass, setTextSizeClass } = useTextSize();

  type SizeOption = {
    label: string; // Display label e.g., "A-", "A", "A+"
    value: 'text-sm' | 'text-base' | 'text-lg';
    ariaLabel: string;
    styleClass: string; // Class for styling the 'A' character
  };

  const sizes: SizeOption[] = [
    { label: 'A-', value: 'text-sm', ariaLabel: 'Set text size to small (A-)', styleClass: 'text-xs' },
    { label: 'A', value: 'text-base', ariaLabel: 'Set text size to medium (A)', styleClass: 'text-sm' },
    { label: 'A+', value: 'text-lg', ariaLabel: 'Set text size to large (A+)', styleClass: 'text-base font-semibold' },
  ];

  return (
    <div className="flex items-center space-x-1 rounded-md border border-border/70 bg-primary-foreground/10 p-0.5 shadow-sm">
       {sizes.map((size) => (
         <Button
            key={size.value}
            variant="ghost" 
            size="sm" 
            onClick={() => setTextSizeClass(size.value)}
            className={cn(
                "p-0 w-8 h-8 sm:w-9 sm:h-9 transition-all duration-200 rounded-[0.2rem] flex items-center justify-center focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0",
                currentSizeClass === size.value 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-primary-foreground/70 hover:bg-primary/20 hover:text-primary-foreground',
                // size.styleClass // This class affects the 'A' character itself, labels are now A-, A, A+
            )}
            aria-pressed={currentSizeClass === size.value}
            aria-label={size.ariaLabel}
        >
            <span className={cn(size.styleClass, "leading-none")}>{size.label}</span>
        </Button>
       ))}
    </div>
  );
};

export default TextSizeAdjuster;

