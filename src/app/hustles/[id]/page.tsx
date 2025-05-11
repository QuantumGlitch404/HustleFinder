import { getHustleById } from '@/lib/hustle-data';
import type { Hustle } from '@/types/hustle';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Layers } from 'lucide-react';
import {notFound} from 'next/navigation';

interface HustleDetailsPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: HustleDetailsPageProps) {
  const hustle = getHustleById(params.id);
  if (!hustle) {
    return {
      title: 'Hustle Not Found | Hustle Finder',
    };
  }
  return {
    title: `${hustle.title} | Hustle Finder`,
    description: `Details about the side hustle: ${hustle.description.substring(0, 150)}...`,
  };
}

export default function HustleDetailsPage({ params }: HustleDetailsPageProps) {
  const hustle: Hustle | undefined = getHustleById(params.id);

  if (!hustle) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader className="p-0 relative">
          <div className="relative w-full h-72 sm:h-96">
            <Image
              src={hustle.imageUrl}
              alt={hustle.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
              data-ai-hint={hustle.imageHint}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">{hustle.title}</CardTitle>
            <Badge variant="secondary" className="text-sm py-1 px-3 bg-accent text-accent-foreground">
              <Layers className="h-4 w-4 mr-2" />
              {hustle.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-8">
          <div className="flex items-center text-muted-foreground mb-4">
            <Briefcase className="h-5 w-5 mr-2 text-primary" />
            <p className="text-lg font-semibold">About this Hustle</p>
          </div>
          <CardDescription className="text-base text-foreground leading-relaxed">
            {hustle.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 flex justify-between items-center">
          <Button asChild variant="outline">
            <Link href="/hustles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hustles
            </Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            {/* This could link to an application form or external site if available */}
            <Link href="#">
              Get Started
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
