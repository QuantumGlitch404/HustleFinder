
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

const remoteCategories = [
  { name: 'Global Digital Services', imageHint: 'freelance online' },
  { name: 'Online Platform Work', imageHint: 'gig economy' },
  { name: 'Micro-Gig Economy', imageHint: 'online tasks' },
  { name: 'Remote E-commerce Ops', imageHint: 'shopify amazon' },
  { name: 'Digital Content Creation', imageHint: 'blogging video_editing' },
  { name: 'Virtual Office Support', imageHint: 'remote admin' },
  { name: 'Web-Based Tutoring', imageHint: 'online teaching' },
  { name: 'Remote IT & Tech', imageHint: 'tech support' },
];

const remoteSampleTitles = [
  'Remote Data Entry Specialist', 'Virtual Assistant for Global Entrepreneurs', 'Online English/Local Language Tutor',
  'Freelance Content Writer (Global Clients)', 'Social Media Manager (Remote)', 'Customer Service Representative (Work From Home)',
  'Transcriptionist for Podcasts & Videos', 'Graphic Designer for Startups (Remote)', 'Website Tester & Feedback Provider',
  'Micro-Task Worker (e.g., Appen, MTurk)', 'E-commerce Product Lister', 'Online Survey Participant',
  'Remote Bookkeeper for Small Businesses', 'SEO Content Writer', 'Affiliate Marketer for Niche Websites',
  'Video Editor for YouTubers', 'Online Community Moderator', 'Technical Support Agent (Remote)',
  'Proofreader & Editor (Digital Content)', 'Lead Generation Specialist (Remote)', 'Remote Sales Development Rep',
  'Online Research Assistant', 'Virtual Event Coordinator', 'Digital Marketing Assistant', 'AI Data Annotator',
  'App Tester (Mobile & Web)', 'Stock Photo/Video Contributor', 'Online Course Assistant', 'Chatbot Developer/Manager',
  'Remote Project Management Assistant'
];

const remoteSampleDescriptions = [
  'Provide accurate data entry services for businesses worldwide from your home.',
  'Offer administrative, technical, or creative assistance to clients remotely.',
  'Teach your native language or English to students online through video calls.',
  'Create engaging articles, blog posts, and web copy for international clients.',
  'Manage social media presence and campaigns for businesses from anywhere.',
  'Handle customer inquiries and provide support via chat, email, or phone.',
  'Convert audio and video files into accurate written text for various clients.',
  'Design logos, branding materials, and web graphics for startups and SMEs.',
  'Test websites and apps, providing valuable feedback on usability and bugs.',
  'Complete small online tasks on platforms like Amazon Mechanical Turk or Appen.',
  'List products, write descriptions, and manage inventory for e-commerce stores.',
  'Share your opinions by participating in online surveys for market research.',
  'Manage financial records and bookkeeping tasks for businesses remotely.',
  'Write SEO-optimized content to help websites rank higher in search engines.',
  'Promote products online and earn commissions for every sale generated.',
  'Edit video content for online creators, businesses, and marketing agencies.',
  'Moderate online forums, social media groups, or communities for brands.',
  'Provide IT support and troubleshooting to users remotely.',
  'Ensure digital content is error-free, clear, and grammatically correct.',
  'Identify and qualify potential leads for businesses through online research.',
  'Support sales teams by identifying prospects and initiating contact remotely.',
  'Conduct online research on various topics for academic or business clients.',
  'Assist in planning and executing virtual events, webinars, and conferences.',
  'Support digital marketing efforts including email, social media, and SEO.',
  'Label and annotate data (images, text, audio) to train AI models.',
  'Test mobile and web applications for functionality, usability, and performance.',
  'Sell your photos and videos on stock media platforms like Shutterstock or Adobe Stock.',
  'Assist instructors with online course management, student support, and content updates.',
  'Develop, train, and manage chatbots for customer service or lead generation.',
  'Help coordinate and track remote projects, ensuring tasks are completed on time.'
];

export const HUSTLES_PER_PAGE = 10;

const generateHustles = (count: number, initialIdOffset: number, catList: typeof categories, titleList: string[], descList: string[], isRemote: boolean): Hustle[] => {
  return Array.from({ length: count }, (_, i) => {
    const categoryObj = catList[i % catList.length];
    const baseTitle = titleList[i % titleList.length];
    const title = baseTitle + (i >= titleList.length ? ` Variation #${Math.floor(i / titleList.length) + 1}` : '');
    const description = descList[i % descList.length];
    const id = `hustle-${initialIdOffset + i + 1}`;
    
    let stepsToStart, successProofLink, successTip, skillsToLearn;

    if (isRemote) {
      stepsToStart = `Steps for ${title} (Remote):\n1. Assess your skills & ensure reliable internet access.\n2. Create profiles on global freelance platforms (e.g., Upwork, Fiverr, Toptal) or specialized job boards.\n3. Build a portfolio showcasing your work; offer initial services at competitive rates if needed.\n4. Master online communication & collaboration tools (Zoom, Slack, Asana).\n5. Understand international payment methods (e.g., PayPal, Payoneer, Wise) and basic financial management for freelancers.`;
      successProofLink = `https://www.google.com/search?q=success+stories+remote+${encodeURIComponent(baseTitle.replace(/\(Remote\)/gi, '').trim())}`;
      successTip = `Success tip for ${title} (Remote): Focus on over-delivering on quality, proactive communication with clients across time zones, and building a strong online reputation through reviews. Continuously upskill to stay competitive in the global market.`;
      skillsToLearn = `For ${title} (Remote), learn: Core skills for ${categoryObj.name}, digital literacy, proficiency in English (or client's language), time management, cross-cultural communication, and using remote work software.`;
    } else {
      stepsToStart = `Generic steps for ${title}:\n1. Research the market and your target audience for ${title}.\n2. Create a solid business plan and set realistic goals.\n3. Develop your ${categoryObj.name.toLowerCase()} product/service offering.\n4. Market yourself effectively and build a strong brand presence.\n5. Continuously learn, adapt to feedback, and iterate on your offerings.`;
      successProofLink = `https://www.google.com/search?q=success+stories+${encodeURIComponent(baseTitle)}`;
      successTip = `Key to success in ${title}: Be persistent, adaptable, and always prioritize quality. Network within the ${categoryObj.name} community.`;
      skillsToLearn = `To succeed in ${title}, focus on learning: Core skills related to ${categoryObj.name.toLowerCase()} (e.g., ${categoryObj.imageHint.replace(' ', ', ')}), digital marketing, customer relationship management, and basic financial literacy.`;
    }

    return {
      id: id,
      title: title,
      description: description,
      imageUrl: `https://picsum.photos/seed/${initialIdOffset + i + 1}/400/300`,
      imageHint: categoryObj.imageHint,
      category: categoryObj.name,
      detailsLink: `/hustles/${id}`,
      stepsToStart: stepsToStart,
      successProofLink: successProofLink,
      successTip: successTip,
      skillsToLearn: skillsToLearn,
    };
  });
};

const generalHustles = generateHustles(120, 0, categories, sampleTitles, sampleDescriptions, false);
const remoteHustles = generateHustles(120, 120, remoteCategories, remoteSampleTitles, remoteSampleDescriptions, true);

export const allHustles: Hustle[] = [...generalHustles, ...remoteHustles];

export function getHustleById(id: string): Hustle | undefined {
  return allHustles.find(hustle => hustle.id === id);
}
