
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

// Data for 120 additional remote hustles (Batch 2)
const remoteCategoriesBatch2 = [
  { name: 'Online Micro-Entrepreneurship', imageHint: 'small business online' },
  { name: 'Digital Creative Services', imageHint: 'graphic design video' },
  { name: 'Virtual Support & Admin', imageHint: 'virtual assistant admin' },
  { name: 'Online Education & Skills Sharing', imageHint: 'online courses teaching' },
  { name: 'Content Creation & Marketing', imageHint: 'content writing marketing' },
  { name: 'Niche Online Services', imageHint: 'specialized online service' },
  { name: 'Remote Tech & Development', imageHint: 'web development coding' },
  { name: 'Data & Research Services', imageHint: 'data analysis research' },
];

const remoteSampleTitlesBatch2 = [ // 50 titles
  'Online Language Conversation Partner', 'Virtual Event Host/Moderator', 'Custom Digital Planner Creator',
  'Social Media Content Scheduler', 'Podcast Editing Services', 'Online Fitness/Wellness Coach (Niche)',
  'Genealogy Researcher (Online)', 'AI Prompt Engineer (Entry Level)', 'Ebook Formatting Specialist',
  'Stock Music/Sound Effects Creator', 'Online Community Manager for Brands', 'Technical Writer for Software Docs',
  'Virtual Study Group Facilitator', 'No-Code Website/App Builder', 'Etsy Shop SEO Optimizer',
  'Localized SEO Content Creator', 'Affiliate Blog Content Writer', 'Subtitle/Caption Creator for Videos',
  'Online Marketplace Product Scout', 'Virtual Interior Design Consultant (Moodboards)', 'Personalized Travel Itinerary Planner (Online)',
  'Data Cleaning and Preparation Services', 'Custom Spreadsheet Designer (Excel/Sheets)', 'Newsletter Management Services',
  'User-Generated Content (UGC) Creator for Brands', 'Online Reputation Management Assistant', 'Beta Reader for Indie Authors',
  'Digital Product Mockup Creator', 'Remote Customer Feedback Analyst', 'Virtual Workshop Facilitator (e.g., crafts, skills)',
  'CV/Resume Polishing for International Markets', 'Online Coding Tutor for Beginners', 'Dropshipping Store Manager',
  'YouTube Channel Content Researcher', 'Social Media Profile Optimizer', 'WordPress Website Maintainer',
  'Virtual Tech Support for Seniors', 'Custom Presentation Designer (PPT/Google Slides)', 'Freelance Translation Services (Local Dialects)',
  'Online Survey Designer & Analyst', 'Voice-over Artist for Localized Content', 'Remote Bookkeeping Assistant for NGOs',
  'Data Annotation for AI (Specialized)', 'Virtual Event Technical Support', 'Online Course Content Creator (Niche)',
  'Personalized Digital Storyteller', 'Remote Software Tester (Specific Domains)', 'E-commerce Customer Service (Multilingual)',
  'Podcast Show Notes Writer', 'Social Media Ad Campaign Manager (Small Scale)'
];

const remoteSampleDescriptionsBatch2 = [ // 50 descriptions
  'Help language learners practice conversation skills via video calls, focusing on fluency and confidence.',
  'Host or moderate online events, webinars, and virtual conferences for global audiences.',
  'Design and sell custom digital planners compatible with popular note-taking apps.',
  'Schedule and manage social media posts for busy individuals or small businesses worldwide.',
  'Edit and enhance audio quality for podcasters, ensuring a professional listening experience.',
  'Offer specialized online fitness or wellness coaching in a specific niche like yoga or nutrition.',
  'Research family histories and build family trees using online databases and genealogical tools.',
  'Craft and refine prompts for AI tools to generate desired text, image, or code outputs.',
  'Format manuscripts for ebook publication on platforms like Amazon Kindle Direct Publishing.',
  'Create and sell royalty-free music tracks or sound effects on online marketplaces.',
  'Manage and engage with online communities for brands on platforms like Facebook, Discord, or forums.',
  'Write clear and concise technical documentation, user manuals, or API guides for software products.',
  'Organize and facilitate online study groups for students or professionals preparing for exams.',
  'Build websites or simple applications for clients using no-code platforms like Webflow or Bubble.',
  'Optimize Etsy shop listings with relevant keywords and appealing descriptions to improve visibility.',
  'Create website content targeting local search terms for businesses in specific geographic areas.',
  'Write informative blog posts that naturally incorporate affiliate links for passive income generation.',
  'Create accurate subtitles and captions for video content, enhancing accessibility and reach.',
  'Find and source trending or unique products for e-commerce sellers from various online marketplaces.',
  'Provide online interior design advice and create mood boards or 2D layouts for clients remotely.',
  'Plan custom travel itineraries for clients based on their preferences, budget, and travel style.',
  'Clean, organize, and prepare large datasets for analysis, ensuring data quality and accuracy.',
  'Design custom, automated spreadsheets using Excel or Google Sheets for business or personal use.',
  'Manage email newsletter creation, scheduling, A/B testing, and subscriber list maintenance.',
  'Create authentic video or photo content for brands to use in their social media and marketing campaigns.',
  'Monitor and manage online reviews, brand mentions, and public relations for businesses.',
  'Provide constructive feedback on manuscripts for authors before they publish their work.',
  'Create attractive and professional mockups for digital products like ebooks, courses, and software.',
  'Collect, analyze, and report on customer feedback from surveys, reviews, or support tickets.',
  'Lead interactive workshops online, teaching practical skills like crafting, coding, or digital marketing.',
  'Adapt and polish CVs and resumes for job seekers targeting international job markets and specific roles.',
  'Teach basic coding concepts and programming languages to beginners through online one-on-one or group sessions.',
  'Manage a dropshipping e-commerce store, handling product sourcing, marketing, and customer service.',
  'Research engaging content ideas, keywords, and trends for YouTube channels in various niches.',
  'Optimize social media profiles (LinkedIn, Instagram, etc.) for individuals or businesses to enhance their online presence.',
  'Provide regular maintenance, updates, and backups for WordPress websites for small business clients.',
  'Offer patient and clear technical support to seniors for their computers, smartphones, and other devices.',
  'Design professional and visually appealing presentations for businesses, educators, or speakers.',
  'Translate documents, websites, or marketing materials between English and local dialects or languages.',
  'Design effective online surveys, collect responses, and analyze the data to provide actionable insights.',
  'Provide voice-over services for videos, e-learning modules, or advertisements in local languages.',
  'Assist non-governmental organizations with bookkeeping tasks, financial reporting, and grant management remotely.',
  'Perform specialized data annotation tasks for AI model training, such as image segmentation or sentiment analysis.',
  'Provide technical support during live virtual events, troubleshooting A/V issues and assisting attendees.',
  'Develop content for online courses, including video scripts, quizzes, and learning materials in a specific niche.',
  'Create personalized digital stories, slideshows, or video montages for special occasions.',
  'Test software applications within specific industries (e.g., finance, healthcare) for functionality and compliance.',
  'Offer multilingual customer service via chat, email, or phone for e-commerce businesses with global customers.',
  'Write concise and engaging summaries (show notes) for podcast episodes to improve discoverability.',
  'Manage and optimize small-scale social media advertising campaigns on platforms like Facebook or Instagram.'
];

// Data for 120 additional remote hustles (Batch 3)
const remoteCategoriesBatch3 = [
  { name: 'Remote Micro-Consulting', imageHint: 'advice consultation' },
  { name: 'Specialized Digital Assistance', imageHint: 'virtual assistant specialized' },
  { name: 'Online Content Moderation & Curation', imageHint: 'community management content' },
  { name: 'Remote Language Services', imageHint: 'translation proofreading' },
  { name: 'Web Presence Management', imageHint: 'seo social_media' },
  { name: 'Niche E-commerce Support', imageHint: 'online store support' },
  { name: 'Remote Learning Facilitation', imageHint: 'online tutoring support' },
  { name: 'Creative Media Production (Remote)', imageHint: 'video_editing graphics' },
];

const remoteSampleTitlesBatch3 = [ // 40 titles
  'Online Research for Academics/Businesses', 'Virtual Technical Documentation Writer', 'Remote Customer Support (Non-Voice)',
  'Social Media Listening & Reporting', 'E-commerce Product Review Writer', 'Online Language Practice Moderator',
  'AI Chatbot Training & Optimization', 'Data Cleansing & Formatting Specialist', 'Virtual Event Planning Assistant',
  'Remote Book Indexer', 'Online Store Inventory Manager (Virtual)', 'Digital Asset Organizer (Cloud Storage)',
  'Lead Prospecting for Sales Teams (Remote)', 'Online Forum/Community Engagement Specialist', 'Remote Software Beta Tester (Feedback Focus)',
  'Virtual Project Task Coordinator', 'Personalized Newsletter Curator', 'Online Survey Data Collector',
  'Remote Graphic Design for Social Media Posts', 'Short Video Clip Editor for Social Media', 'Proofreader for Non-Native English Writers',
  'Transcription for Academic Interviews', 'Website Content Uploader & Formatter', 'Remote IT Helpdesk (Tier 1)',
  'Online Marketplace Competitor Analyst', 'Virtual Meeting Minute Taker', 'Customized Digital Template Designer (Canva/Docs)',
  'Remote Usability Testing Participant', 'Social Media Bio & Profile Writer', 'Online Course Forum Moderator',
  'Virtual Assistant for Podcasters (Scheduling, Show Notes)', 'Fact-Checker for Online Content', 'Remote Data Entry for Loyalty Programs',
  'E-commerce Customer Query Handler (Email/Chat)', 'Simple Logo Design for Startups', 'Online Ad Copywriter (Short Form)',
  'Travel Itinerary Researcher (Budget Focus)', 'Remote Presentation Slide Polisher', 'Virtual Book Club Facilitator',
  'Creator of Educational Quizzes Online'
];

const remoteSampleDescriptionsBatch3 = [ // 40 descriptions
  'Conduct detailed online research on specified topics for academic papers or business reports.',
  'Write clear, concise technical guides, manuals, and FAQs for software or products remotely.',
  'Provide customer support via email, chat, or helpdesk tickets, no voice calls required.',
  'Monitor social media channels for brand mentions, sentiment, and trends, then compile reports.',
  'Write compelling and informative reviews for e-commerce products to boost sales.',
  'Moderate online language exchange groups, ensuring respectful interaction and facilitating practice.',
  'Help train AI chatbots by providing data, testing responses, and suggesting improvements.',
  'Clean, format, and validate datasets to ensure accuracy and consistency for analysis.',
  'Assist with the planning and coordination of virtual events, webinars, and online conferences.',
  'Create comprehensive indexes for books to help readers navigate content efficiently.',
  'Manage online store inventory levels, track stock, and update listings from a remote location.',
  'Organize and manage digital files and assets for individuals or businesses using cloud storage solutions.',
  'Identify and research potential leads for sales teams based on defined criteria, using online tools.',
  'Actively participate in and moderate online forums or communities to foster engagement and answer questions.',
  'Test pre-release software, websites, or apps and provide detailed feedback on bugs and usability.',
  'Coordinate and track tasks for remote projects using project management software.',
  'Curate and compile personalized newsletters on specific topics for subscribers.',
  'Collect data through online surveys, ensuring participant recruitment and data integrity.',
  'Design visually appealing graphics and posts for social media platforms like Instagram, Facebook, and X.',
  'Edit short video clips for platforms like TikTok, Instagram Reels, or YouTube Shorts.',
  'Proofread documents written by non-native English speakers to correct grammar and improve clarity.',
  'Transcribe audio recordings of academic interviews or lectures accurately.',
  'Upload and format content (text, images, videos) on websites using CMS platforms like WordPress.',
  'Provide basic IT troubleshooting and support remotely to end-users.',
  'Analyze competitor pricing, products, and strategies on online marketplaces.',
  'Attend virtual meetings and accurately record minutes and action items.',
  'Design custom digital templates for resumes, presentations, or social media using tools like Canva or Google Docs.',
  'Participate in remote usability testing sessions, providing verbal feedback on software or websites.',
  'Craft compelling and optimized bios and profiles for individuals or businesses on social media platforms.',
  'Moderate discussion forums for online courses, answer student questions, and facilitate learning.',
  'Assist podcasters with scheduling interviews, editing audio, writing show notes, and promoting episodes.',
  'Verify the accuracy of information and sources for articles, blog posts, and other online content.',
  'Perform remote data entry tasks for customer loyalty programs, updating member information and points.',
  'Handle customer inquiries and resolve issues for e-commerce stores through email and live chat.',
  'Create simple, clean logo designs for new startups or small businesses on a budget.',
  'Write concise and persuasive copy for online advertisements (e.g., Google Ads, social media ads).',
  'Research and compile budget-friendly travel itineraries, including accommodation and activity options.',
  'Enhance and polish existing presentation slides for clarity, consistency, and visual appeal.',
  'Organize and facilitate online book club discussions, selecting books and guiding conversations.',
  'Develop engaging online quizzes and assessments for educational or training purposes.'
];


export const HUSTLES_PER_PAGE = 10;

const generateHustles = (count: number, initialIdOffset: number, catList: typeof categories, titleList: string[], descList: string[], isRemote: boolean): Hustle[] => {
  const generatedHustles: Hustle[] = [];
  for (let i = 0; i < count; i++) {
    const categoryObj = catList[i % catList.length];
    const baseTitle = titleList[i % titleList.length];
    // Ensure title variations for larger counts than titleList length
    const titleVariationSuffix = titleList.length > 0 && count > titleList.length ? ` Variation #${Math.floor(i / titleList.length) + 1}` : '';
    const title = baseTitle + titleVariationSuffix;
    const description = descList[i % descList.length];
    const id = `hustle-${initialIdOffset + i + 1}`;
    
    let stepsToStart, successProofLink, successTip, skillsToLearn;

    if (isRemote) {
      stepsToStart = `Steps for ${title} (Remote):\n1. Assess your skills & ensure reliable internet access and a suitable work environment.\n2. Create professional profiles on global freelance platforms (e.g., Upwork, Fiverr, Toptal, PeoplePerHour) or specialized remote job boards relevant to your skills.\n3. Build a strong portfolio showcasing your best work; consider offering initial services at competitive rates or pro-bono for testimonials if new.\n4. Master online communication & collaboration tools (Zoom, Slack, Google Workspace, Trello, Asana).\n5. Understand international payment methods (e.g., PayPal, Payoneer, Wise), local tax implications, and basic financial management for freelancers. Secure a reliable way to receive payments.`;
      successProofLink = `https://www.google.com/search?q=how+to+succeed+as+remote+${encodeURIComponent(baseTitle.replace(/\(Remote\)|\(Entry Level\)|\(Niche\)|\(e\.g\..*\)/gi, '').trim())}`;
      successTip = `Success tip for ${title} (Remote): Focus on over-delivering on quality, maintaining proactive and clear communication with clients across different time zones, and actively building a strong online reputation through positive reviews and testimonials. Continuously upskill and adapt to stay competitive in the global market. Network online within your field.`;
      skillsToLearn = `For ${title} (Remote), learn: Core skills for ${categoryObj.name} (e.g., ${categoryObj.imageHint.replace(' ', ', ')}), strong digital literacy, proficiency in English (or the primary language of your target clients), excellent time management and self-discipline, cross-cultural communication etiquette, and proficiency in using remote work software and platforms. Basic project management and negotiation skills are also beneficial.`;
    } else { // General hustles (non-remote specific, though many can be remote)
      stepsToStart = `Generic steps for ${title}:\n1. Research the market demand and identify your target audience for ${title}.\n2. Create a basic business plan outlining your services, pricing, and goals.\n3. Develop your ${categoryObj.name.toLowerCase()} product/service offering to a high standard.\n4. Market yourself effectively online and offline; build a strong personal brand or business presence.\n5. Continuously seek feedback, learn from experiences, adapt to market changes, and iterate on your offerings.`;
      successProofLink = `https://www.google.com/search?q=success+stories+${encodeURIComponent(baseTitle.replace(/\(Remote\)|\(Entry Level\)|\(Niche\)|\(e\.g\..*\)/gi, '').trim())}`;
      successTip = `Key to success in ${title}: Be persistent, highly adaptable, and always prioritize delivering quality and value. Network actively within the ${categoryObj.name} community and related fields.`;
      skillsToLearn = `To succeed in ${title}, focus on learning: Core skills related to ${categoryObj.name.toLowerCase()} (e.g., ${categoryObj.imageHint.replace(' ', ', ')}), digital marketing and online presence management, customer relationship management (CRM), basic financial literacy, and effective communication.`;
    }

    generatedHustles.push({
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
    });
  }
  return generatedHustles;
};

const generalHustles = generateHustles(120, 0, categories, sampleTitles, sampleDescriptions, false);
const remoteHustlesBatch1 = generateHustles(120, generalHustles.length, remoteCategories, remoteSampleTitles, remoteSampleDescriptions, true);
const remoteHustlesBatch2 = generateHustles(120, generalHustles.length + remoteHustlesBatch1.length, remoteCategoriesBatch2, remoteSampleTitlesBatch2, remoteSampleDescriptionsBatch2, true);
const remoteHustlesBatch3 = generateHustles(120, generalHustles.length + remoteHustlesBatch1.length + remoteHustlesBatch2.length, remoteCategoriesBatch3, remoteSampleTitlesBatch3, remoteSampleDescriptionsBatch3, true);


export const allHustles: Hustle[] = [...generalHustles, ...remoteHustlesBatch1, ...remoteHustlesBatch2, ...remoteHustlesBatch3];

export function getHustleById(id: string): Hustle | undefined {
  return allHustles.find(hustle => hustle.id === id);
}

    
