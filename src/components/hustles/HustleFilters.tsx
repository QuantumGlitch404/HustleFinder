
'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Filter, Search, SortAsc, X, BarChart3, TrendingUp, DollarSign, List } from 'lucide-react';
import React from 'react';

// Get unique values from the (hypothetical) allHustles data
const categories = ["Creative", "Tech", "Writing", "Services", "Education", "Crafts", "Online", "Offline", "Global Digital Services", "Online Platform Work", "Micro-Gig Economy", "Remote E-commerce Ops", "Digital Content Creation", "Virtual Office Support", "Web-Based Tutoring", "Remote IT & Tech", "Online Micro-Entrepreneurship", "Digital Creative Services", "Virtual Support & Admin", "Online Education & Skills Sharing", "Content Creation & Marketing", "Niche Online Services", "Remote Tech & Development", "Data & Research Services", "Remote Micro-Consulting", "Specialized Digital Assistance", "Online Content Moderation & Curation", "Remote Language Services", "Web Presence Management", "Niche E-commerce Support", "Remote Learning Facilitation", "Creative Media Production (Remote)", "Remote Creative & Media Support", "Virtual Business Operations", "Online Marketing & Sales Assistance", "Specialized Remote Tutoring & Coaching", "Digital Content Organization & Management", "Remote E-commerce Enhancement", "Niche Online Research & Data Tasks", "Remote Technical & Customer Assistance", "Micro-Task & Crowdsourcing", "Entry-Level Digital Services", "Online Sales & Promotion", "Localized Content Services", "Virtual Admin & Support", "Beginner Creative Services", "Data Collection & Entry", "Social Media Support", "Digital Community Support", "Simple Content Creation", "E-commerce Assistance", "Basic Online Marketing", "Data Management Tasks", "Remote Personal Assistance", "Language & Communication Gigs", "Entry-Level Tech Support", "Niche Data Services", "Online Community Engagement", "Digital Asset Creation", "Micro-Marketing & Promotion", "Beginner Tutoring & Coaching", "Content Repurposing & Management", "Remote Event & Meeting Support", "Simple Web & App Tasks", "Community & Social Engagement", "Micro-Gig Platforms", "Simple Digital Services", "Entry-Level Content Creation", "Online Promotion & Marketing", "Virtual Assistance Tasks", "Language & Transcription", "E-commerce & Dropshipping Support", "Beginner Creative & Design", "Creative Content Support", "Digital Marketing Assistance", "Online Business & Admin Support", "Niche Data & Research Tasks", "E-commerce Operations Help", "Virtual Tutoring & Coaching", "Simple Web & Tech Tasks"];
const uniqueCategories = [...new Set(categories)].sort();
const difficultyLevels = ['Beginner Friendly', 'Intermediate', 'Advanced'];
const earningLevels = ['Beginner', 'Intermediate', 'Advanced'];

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
    params.set('page', '1');
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
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(currentSearchParams.toString());
    if (value === 'default') {
        params.delete('sort');
    } else {
        params.set('sort', value);
    }
    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push(pathname);
  };

  const hasActiveFilters = !!(searchParams?.categories || searchParams?.difficulties || searchParams?.earnings || searchParams?.q);

  return (
    <div className="space-y-6">
      {/* Search & Sort Section */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-lg sm:text-xl">
            <Filter className="mr-2 h-5 w-5" />
            Filter & Sort
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSearch} className="flex w-full items-center space-x-2">
            <Input
                name="q"
                type="search"
                placeholder="Search by keyword..."
                defaultValue={searchParams?.q || ''}
                className="flex-grow h-10 text-sm"
                aria-label="Search within filtered results"
            />
            <Button type="submit" variant="default" size="icon" aria-label="Search" className="h-10 w-10">
                <Search className="h-5 w-5" />
            </Button>
          </form>
          <div>
            <Label htmlFor="sort-by" className="text-sm font-semibold flex items-center mb-1 text-muted-foreground"><SortAsc className="mr-2 h-4 w-4" />Sort By</Label>
            <Select onValueChange={handleSortChange} defaultValue={searchParams?.sort || 'default'}>
              <SelectTrigger id="sort-by">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="popularity"><TrendingUp className="mr-2 h-4 w-4" />Popularity</SelectItem>
                <SelectItem value="earnings"><DollarSign className="mr-2 h-4 w-4" />Highest Earning</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      {/* Filter Sections */}
      <div className="space-y-4">
        <Card>
            <CardHeader className="p-4">
                <h3 className="text-md font-semibold flex items-center"><BarChart3 className="mr-2 h-5 w-5 text-primary" />Difficulty Level</h3>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
            {difficultyLevels.map(level => (
                <div key={level} className="flex items-center space-x-2">
                <Checkbox
                    id={`diff-${level}`}
                    checked={currentSearchParams.get('difficulties')?.includes(level)}
                    onCheckedChange={() => updateFilters('difficulties', level)}
                />
                <Label htmlFor={`diff-${level}`} className="font-normal cursor-pointer text-sm">{level}</Label>
                </div>
            ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="p-4">
                <h3 className="text-md font-semibold flex items-center"><DollarSign className="mr-2 h-5 w-5 text-primary" />Earning Potential</h3>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
            {earningLevels.map(level => (
                <div key={level} className="flex items-center space-x-2">
                <Checkbox
                    id={`earn-${level}`}
                    checked={currentSearchParams.get('earnings')?.includes(level)}
                    onCheckedChange={() => updateFilters('earnings', level)}
                />
                <Label htmlFor={`earn-${level}`} className="font-normal cursor-pointer text-sm">{level} Tier</Label>
                </div>
            ))}
            </CardContent>
        </Card>

        <Card>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="categories" className="border-b-0">
                    <AccordionTrigger className="p-4 hover:no-underline">
                        <h3 className="text-md font-semibold flex items-center"><List className="mr-2 h-5 w-5 text-primary" />Category</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                        <div className="space-y-3 max-h-60 overflow-y-auto pr-2 border-t pt-4">
                            {uniqueCategories.map(category => (
                            <div key={category} className="flex items-center space-x-2">
                                <Checkbox
                                id={`cat-${category}`}
                                checked={currentSearchParams.get('categories')?.includes(category)}
                                onCheckedChange={() => updateFilters('categories', category)}
                                />
                                <Label htmlFor={`cat-${category}`} className="font-normal cursor-pointer text-sm">{category}</Label>
                            </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>

      </div>

        {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters} className="w-full shadow-sm">
                <X className="mr-2 h-4 w-4" />
                Clear All Filters & Sort
            </Button>
        )}
    </div>
  );
};

export default HustleFilters;
