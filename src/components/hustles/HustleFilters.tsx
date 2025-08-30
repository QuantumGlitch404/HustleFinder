
'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Filter, Search, SortAsc, X } from 'lucide-react';
import React from 'react';

// Get unique values from the (hypothetical) allHustles data
// In a real app, this might come from an API or be pre-calculated
const categories = ["Creative", "Tech", "Writing", "Services", "Education", "Crafts", "Online", "Offline", "Global Digital Services", "Online Platform Work", "Micro-Gig Economy", "Remote E-commerce Ops", "Digital Content Creation", "Virtual Office Support", "Web-Based Tutoring", "Remote IT & Tech", "Online Micro-Entrepreneurship", "Digital Creative Services", "Virtual Support & Admin", "Online Education & Skills Sharing", "Content Creation & Marketing", "Niche Online Services", "Remote Tech & Development", "Data & Research Services", "Remote Micro-Consulting", "Specialized Digital Assistance", "Online Content Moderation & Curation", "Remote Language Services", "Web Presence Management", "Niche E-commerce Support", "Remote Learning Facilitation", "Creative Media Production (Remote)", "Remote Creative & Media Support", "Virtual Business Operations", "Online Marketing & Sales Assistance", "Specialized Remote Tutoring & Coaching", "Digital Content Organization & Management", "Remote E-commerce Enhancement", "Niche Online Research & Data Tasks", "Remote Technical & Customer Assistance", "Micro-Task & Crowdsourcing", "Entry-Level Digital Services", "Online Sales & Promotion", "Localized Content Services", "Virtual Admin & Support", "Beginner Creative Services", "Data Collection & Entry", "Social Media Support", "Digital Community Support", "Simple Content Creation", "E-commerce Assistance", "Basic Online Marketing", "Data Management Tasks", "Remote Personal Assistance", "Language & Communication Gigs", "Entry-Level Tech Support", "Niche Data Services", "Online Community Engagement", "Digital Asset Creation", "Micro-Marketing & Promotion", "Beginner Tutoring & Coaching", "Content Repurposing & Management", "Remote Event & Meeting Support", "Simple Web & App Tasks", "Community & Social Engagement", "Micro-Gig Platforms", "Simple Digital Services", "Entry-Level Content Creation", "Online Promotion & Marketing", "Virtual Assistance Tasks", "Language & Transcription", "E-commerce & Dropshipping Support", "Beginner Creative & Design", "Creative Content Support", "Digital Marketing Assistance", "Online Business & Admin Support", "E-commerce Operations Help", "Virtual Tutoring & Coaching"];
const uniqueCategories = [...new Set(categories)].sort();
const difficultyLevels = ['Beginner Friendly', 'Intermediate', 'Advanced'];
const earningLevels = ['Beginner', 'Intermediate', 'Advanced']; // Simplified for filter

const HustleFilters = ({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined }}) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentSearchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('q') as string;
    
    const params = new URLSearchParams(currentSearchParams.toString());
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    params.set('page', '1'); // Reset to first page on new search
    router.push(`${pathname}?${params.toString()}`);
  };

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(currentSearchParams.toString());
    const currentValues = params.get(key)?.split(',') || [];
    
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];

    if (newValues.length > 0) {
      params.set(key, newValues.join(','));
    } else {
      params.delete(key);
    }
    params.set('page', '1'); // Reset to first page on filter change
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(currentSearchParams.toString());
    if (value === 'default') {
        params.delete('sort');
    } else {
        params.set('sort', value);
    }
    params.set('page', '1'); // Reset to first page on sort change
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push(pathname); // Navigate to the base path, clearing all query params
  };

  const hasActiveFilters = !!(searchParams?.categories || searchParams?.difficulties || searchParams?.earnings || searchParams?.q);

  return (
    <Card className="shadow-lg">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center text-xl">
          <Filter className="mr-2 h-5 w-5" />
          Filter & Sort
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        <form onSubmit={handleSearch} className="flex w-full items-center space-x-2">
            <Input
                name="q"
                type="search"
                placeholder="Search in results..."
                defaultValue={searchParams?.q || ''}
                className="flex-grow h-10 text-sm"
                aria-label="Search within filtered results"
            />
            <Button type="submit" variant="default" size="icon" aria-label="Search" className="h-10 w-10">
                <Search className="h-5 w-5" />
            </Button>
        </form>

        <div>
          <Label className="text-base font-semibold flex items-center mb-2"><SortAsc className="mr-2 h-5 w-5" />Sort By</Label>
          <Select onValueChange={handleSortChange} defaultValue={searchParams?.sort || 'default'}>
            <SelectTrigger>
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="earnings">Highest Earning Potential</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Accordion type="multiple" defaultValue={['categories', 'difficulty', 'earnings']} className="w-full">
          <AccordionItem value="categories">
            <AccordionTrigger className="text-base font-semibold">Category</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {uniqueCategories.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`cat-${category}`}
                      checked={currentSearchParams.get('categories')?.includes(category)}
                      onCheckedChange={() => updateFilters('categories', category)}
                    />
                    <Label htmlFor={`cat-${category}`} className="font-normal cursor-pointer">{category}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="difficulty">
            <AccordionTrigger className="text-base font-semibold">Difficulty Level</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {difficultyLevels.map(level => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox
                      id={`diff-${level}`}
                      checked={currentSearchParams.get('difficulties')?.includes(level)}
                      onCheckedChange={() => updateFilters('difficulties', level)}
                    />
                    <Label htmlFor={`diff-${level}`} className="font-normal cursor-pointer">{level}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="earnings">
            <AccordionTrigger className="text-base font-semibold">Earning Potential</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {earningLevels.map(level => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox
                      id={`earn-${level}`}
                      checked={currentSearchParams.get('earnings')?.includes(level)}
                      onCheckedChange={() => updateFilters('earnings', level)}
                    />
                    <Label htmlFor={`earn-${level}`} className="font-normal cursor-pointer">{level}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters} className="w-full">
                <X className="mr-2 h-4 w-4" />
                Clear All Filters
            </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default HustleFilters;
