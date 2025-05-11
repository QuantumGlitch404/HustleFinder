import Image from 'next/image';
import Link from 'next/link';
import type { Hustle } from '@/types/hustle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface HustleCardProps {
  hustle: Hustle;
}

const HustleCard: React.FC<HustleCardProps> = ({ hustle }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={hustle.imageUrl}
            alt={hustle.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={hustle.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-2">
        <CardTitle className="text-xl font-semibold mb-1 leading-tight">{hustle.title}</CardTitle>
         <Badge variant="secondary" className="mb-2">{hustle.category}</Badge>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {hustle.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
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
