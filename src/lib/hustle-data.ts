import type { Hustle } from '@/types/hustle';

const categories = [
  { name: 'Creative', imageHint: 'art design' },
  { name: 'Tech', imageHint: 'coding computer' },
  { name: 'Writing', imageHint: 'writing content' },
  { name: 'Services', imageHint: 'service help' },
  { name: 'Education', imageHint: 'teaching learning' },
  { name: 'Crafts', imageHint: 'handmade craft' },
  { name: 'Online', imageHint: 'digital online' },
  { name: 'Offline', imageHint: 'local community' },
];

const sampleTitles = [
  'Freelance Graphic Designer', 'Web Development Consultant', 'Content Writing Pro', 'Virtual Assistant Services',
  'Online Tutoring Expert', 'Handmade Jewelry Creator', 'Social Media Manager', 'Local Dog Walker',
  'Blogging for Profit', 'Affiliate Marketing Guru', 'Photography Services', 'Event Planning Assistant',
  'Personal Fitness Trainer', 'Online Course Creator', 'Proofreading & Editing', 'Custom T-Shirt Design',
  'Mobile App Developer', 'SEO Optimization Specialist', 'Ghostwriting Services', 'Resume Writing Expert'
];

const sampleDescriptions = [
  'Offer your creative design skills to clients worldwide.',
  'Help businesses build and maintain their online presence.',
  'Craft compelling articles, blog posts, and website copy.',
  'Provide administrative, technical, or creative assistance remotely.',
  'Share your knowledge and teach students online.',
  'Create and sell unique, handcrafted jewelry pieces.',
  'Manage and grow social media accounts for businesses.',
  'Offer dog walking services in your local neighborhood.',
  'Start a blog on a topic you love and monetize it.',
  'Promote products and earn commissions through affiliate links.',
  'Capture special moments with professional photography.',
  'Assist with organizing and coordinating events.',
  'Help clients achieve their fitness goals through personalized training.',
  'Develop and sell educational courses on platforms like Udemy.',
  'Ensure written content is error-free and polished.',
  'Design and sell custom t-shirts online or locally.',
  'Develop innovative mobile applications for iOS or Android.',
  'Improve website visibility in search engine results.',
  'Write books, articles, or speeches for others.',
  'Help job seekers create professional and effective resumes.'
];

export const HUSTLES_PER_PAGE = 10;

export const allHustles: Hustle[] = Array.from({ length: 120 }, (_, i) => {
  const category = categories[i % categories.length];
  const title = sampleTitles[i % sampleTitles.length] + (i >= sampleTitles.length ? ` #${Math.floor(i / sampleTitles.length) +1}` : '');
  const description = sampleDescriptions[i % sampleDescriptions.length];
  
  return {
    id: `hustle-${i + 1}`,
    title: title,
    description: description,
    imageUrl: `https://picsum.photos/seed/${i + 1}/400/300`,
    imageHint: category.imageHint,
    category: category.name,
    detailsLink: `/hustles/details-soon`, // Placeholder link
  };
});
