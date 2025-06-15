
'use client';

import { Button } from '@/components/ui/button';
import { useTextSize } from '@/context/TextSizeContext';
import { cn } from '@/lib/utils';

type SizeOption = {
  label: string;
  value: 'text-sm' | 'text-base' | 'text-lg';
  ariaLabel: string;
  styleClass: string;
};

const sizes: SizeOption[] = [
  { label: 'A-', value: 'text-sm', ariaLabel: 'Set text size to small (A-)', styleClass: 'text-xs' },
  { label: 'A', value: 'text-base', ariaLabel: 'Set text size to medium (A)', styleClass: 'text-sm' },
  { label: 'A+', value: 'text-lg', ariaLabel: 'Set text size to large (A+)', styleClass: 'text-base font-semibold' },
];

const TextSizeAdjuster = () => {
  const { currentSizeClass, setTextSizeClass, isMounted } = useTextSize();

  // Render a static/default version until the provider is mounted and size is loaded
  if (!isMounted) {
    return (
      <div className="flex items-center space-x-1 rounded-md border border-border/70 bg-primary-foreground/10 p-0.5 shadow-sm">
        {sizes.map((size) => (
          <Button
            key={size.value}
            variant="ghost"
            size="sm"
            disabled // Buttons are disabled pre-hydration
            className={cn(
              "p-0 w-8 h-8 sm:w-9 sm:h-9 transition-all duration-200 rounded-[0.2rem] flex items-center justify-center focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0",
              // Default to 'A' (text-base) being active for SSR and initial client render
              size.value === 'text-base'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-primary-foreground/70', // Non-interactive style
            )}
            aria-pressed={size.value === 'text-base'}
            aria-label={size.ariaLabel}
          >
            <span className={cn(size.styleClass, "leading-none")}>{size.label}</span>
          </Button>
        ))}
      </div>
    );
  }

  // Render the interactive version once mounted
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
