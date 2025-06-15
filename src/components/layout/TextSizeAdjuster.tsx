
'use client';

import { Button } from '@/components/ui/button';
import { useTextSize } from '@/context/TextSizeContext';
import { CaseSensitive } from 'lucide-react'; // Using CaseSensitive as a generic text size icon
import { cn } from '@/lib/utils';

const TextSizeAdjuster = () => {
  const { currentSizeClass, setTextSizeClass } = useTextSize();

  type SizeOption = {
    label: string;
    value: 'text-sm' | 'text-base' | 'text-lg';
    ariaLabel: string;
  };

  const sizes: SizeOption[] = [
    { label: 'A', value: 'text-sm', ariaLabel: 'Set text size to small' },
    { label: 'A', value: 'text-base', ariaLabel: 'Set text size to medium (default)' },
    { label: 'A', value: 'text-lg', ariaLabel: 'Set text size to large' },
  ];

  return (
    <div className="flex items-center space-x-1 sm:space-x-2 p-1 bg-muted rounded-md">
       <span className="text-xs text-muted-foreground hidden md:inline mr-1.5 ml-1 select-none">Text:</span>
       {sizes.map((size, index) => (
         <Button
            key={size.value}
            variant={currentSizeClass === size.value ? "default" : "ghost"}
            size="sm" // Use sm for a more compact button
            onClick={() => setTextSizeClass(size.value)}
            className={cn(
                "p-0 w-7 h-7 sm:w-8 sm:h-8 transition-all duration-200 rounded-sm",
                currentSizeClass === size.value 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-muted-foreground hover:bg-background hover:text-foreground',
                {
                    'text-xs': index === 0, // Small A
                    'text-sm': index === 1, // Medium A
                    'text-base font-semibold': index === 2, // Large A
                }
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
