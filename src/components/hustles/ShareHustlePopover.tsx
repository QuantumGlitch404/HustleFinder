
"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Share2, Twitter, Link as LinkIcon, Copy, Mail } from "lucide-react"; // Using MessageCircle for WhatsApp-like
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ShareHustlePopoverProps {
  hustleTitle: string;
  hustleUrl: string;
  triggerClassName?: string;
  triggerSize?: "default" | "sm" | "lg" | "icon" | null | undefined;
  triggerVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
  isIconOnly?: boolean;
}

export default function ShareHustlePopover({
  hustleTitle,
  hustleUrl,
  triggerClassName,
  triggerSize = "icon",
  triggerVariant = "ghost",
  isIconOnly = false,
}: ShareHustlePopoverProps) {
  const { toast } = useToast();
  const fullHustleUrl = typeof window !== 'undefined' ? `${window.location.origin}${hustleUrl}` : hustleUrl;


  const shareOptions = [
    {
      name: "Twitter",
      icon: Twitter,
      action: () => {
        const text = `Check out this hustle: ${hustleTitle}`;
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullHustleUrl)}&text=${encodeURIComponent(text)}`,
          "_blank"
        );
      },
    },
    {
      name: "WhatsApp",
      icon: MessageCircle, // Using MessageCircle for WhatsApp
      action: () => {
        const text = `Check out this hustle: ${hustleTitle}\n${fullHustleUrl}`;
        window.open(
          `https://wa.me/?text=${encodeURIComponent(text)}`,
          "_blank"
        );
      },
    },
    {
        name: "Email",
        icon: Mail,
        action: () => {
            const subject = `Check out this hustle: ${hustleTitle}`;
            const body = `Hi,\n\nI thought you might be interested in this hustle: ${hustleTitle}\n\nYou can find more details here: ${fullHustleUrl}\n\nBest regards,`;
            window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        }
    },
    {
      name: "Copy Link",
      icon: LinkIcon,
      action: () => {
        navigator.clipboard.writeText(fullHustleUrl).then(() => {
          toast({ title: "Link Copied!", description: "Hustle link copied to clipboard." });
        }).catch(err => {
          console.error('Failed to copy link: ', err);
          toast({ title: "Copy Failed", description: "Could not copy link to clipboard.", variant: "destructive" });
        });
      },
    },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: hustleTitle,
          text: `Check out this hustle: ${hustleTitle}`,
          url: fullHustleUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
        // Fallback to popover if native share fails or is cancelled by user
        // (Popover is already open, so no specific action needed here other than logging)
      }
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={triggerVariant}
          size={triggerSize}
          className={cn("text-muted-foreground hover:text-primary", triggerClassName)}
          aria-label="Share hustle"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Attempt native share first if not icon only. Icon only implies it's part of popover trigger logic
            if (!isIconOnly && navigator.share) {
                 handleNativeShare();
            }
            // If native share is not available or it's icon only, the popover will open.
          }}
        >
          <Share2 className="h-5 w-5" />
          {!isIconOnly && <span className="ml-2">Share</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 sm:w-72 p-0">
        <div className="p-4">
            <h4 className="font-medium leading-none mb-1">Share this Hustle</h4>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{hustleTitle}</p>
        </div>
        <div className="grid gap-1 p-2 pt-0">
          {shareOptions.map((option) => (
            <Button
              key={option.name}
              variant="ghost"
              className="w-full justify-start px-2 py-1.5 h-auto text-sm"
              onClick={(e) => {
                e.stopPropagation(); // Prevent popover from closing immediately if it's a sub-trigger
                option.action();
              }}
            >
              <option.icon className="mr-2 h-4 w-4" />
              {option.name}
            </Button>
          ))}
        </div>
         <div className="p-2 border-t">
            <Label htmlFor="hustle-link" className="sr-only">Hustle Link</Label>
            <Input id="hustle-link" defaultValue={fullHustleUrl} readOnly className="h-8 text-xs"/>
        </div>
      </PopoverContent>
    </Popover>
  );
}
// Using MessageCircle for WhatsApp
const MessageCircle = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("lucide lucide-message-circle", className)}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
  </svg>
);
