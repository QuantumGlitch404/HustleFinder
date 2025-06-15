
import Image from 'next/image';
import Link from 'next/link';
import type { Hustle } from '@/types/hustle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import BookmarkButton from './BookmarkButton';
import ShareHustlePopover from './ShareHustlePopover';

interface HustleCardProps {
  hustle: Hustle;
}

const HustleCard: React.FC<HustleCardProps> = ({ hustle }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <div className="relative w-full h-40 sm:h-48">
          <Image
            src={hustle.imageUrl}
            alt={hustle.title}
            fill
            style={{objectFit:"cover"}}
            data-ai-hint={hustle.imageHint}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="absolute top-2 right-2 flex space-x-1 bg-card/70 backdrop-blur-sm p-1 rounded-md">
          <BookmarkButton 
            hustleId={hustle.id} 
            size="sm" 
            variant="ghost" 
            className="h-7 w-7 p-1" 
            isIconOnly={true} 
          />
          <ShareHustlePopover 
            hustleTitle={hustle.title} 
            hustleUrl={hustle.detailsLink} 
            triggerSize="sm" 
            triggerVariant="ghost"
            isIconOnly={true} 
            triggerClassName="h-7 w-7 p-1"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-3 sm:p-4 pt-2">
        <CardTitle className="text-lg sm:text-xl font-semibold mb-1 leading-tight line-clamp-2">{hustle.title}</CardTitle>
         <Badge variant="secondary" className="mb-2 text-xs">{hustle.category}</Badge>
        <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
          {hustle.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 text-sm">
          <Link href={hustle.detailsLink}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HustleCard;
