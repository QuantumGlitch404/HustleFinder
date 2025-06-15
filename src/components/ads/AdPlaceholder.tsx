
import React from 'react';
import { cn } from '@/lib/utils';

interface AdPlaceholderProps {
  description: string; // e.g., "Homepage Top Banner Ad"
  adTypeSuggestion: 'Banner' | 'Native Banner' | 'In-Content Unit';
  dimensionsSuggestion?: string; // e.g., "728x90px or responsive"
  className?: string;
  slotIdComment?: string; // e.g., "Replace with Adsterra Slot ID: HOMEPAGE_TOP_BANNER"
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  description,
  adTypeSuggestion,
  dimensionsSuggestion = "Responsive",
  className,
  slotIdComment = "Replace with your Adsterra ad code/slot ID here.",
}) => {
  return (
    <div
      className={cn(
        "my-6 sm:my-8 p-6 bg-muted/30 border-2 border-dashed border-border/50 rounded-xl text-center text-muted-foreground shadow-inner",
        className
      )}
    >
      <p className="font-semibold text-base text-foreground">{description}</p>
      <p className="text-sm mt-1">Suggested Ad Type: {adTypeSuggestion}</p>
      <p className="text-sm">Suggested Dimensions: {dimensionsSuggestion}</p>
      <pre className="mt-3 text-xs bg-card p-3 rounded text-left overflow-x-auto shadow-sm">
        {`<!-- Ad Placeholder: ${description} -->\n<!-- ${slotIdComment} -->`}
      </pre>
      <p className="text-xs mt-2 italic">This is a visual placeholder. Replace with actual ad code.</p>
    </div>
  );
};

export default AdPlaceholder;
