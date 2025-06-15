
import type { Hustle, Testimonial, EarningPotential, FAQ, DifficultyLevel } from '@/types/hustle';

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

const remoteSampleTitlesBatch2 = [
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

const remoteSampleDescriptionsBatch2 = [
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

const remoteSampleTitlesBatch3 = [
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
  'Creator of Educational Quizzes Online', 'Online Community Guideline Enforcer', 'Digital Content Tagging Specialist',
  'Stock Photo Curation Assistant', 'User-Generated Content Reviewer', 'Forum Spam & Abuse Monitor',
  'Bilingual Customer Support Agent (Chat/Email)', 'Document Translation (Specific Fields)', 'Website Localization Tester',
  'Subtitling for Indie Films', 'Proofreading for Translated Texts', 'Language Tutoring for Specific Exams',
  'Voice-over for Localized Training Materials', 'Cultural Sensitivity Reviewer for Content', 'Glossary & Terminology Creator',
  'Interpretation for Small Online Meetings', 'Transcreation of Marketing Slogans', 'Language Quality Assurance Tester',
  'Resume/CV Translation for Job Seekers', 'Linguistic Annotation for AI', 'Medical Document Translator (Certified)',
  'Basic SEO Keyword Researcher', 'Local SEO Citation Builder', 'Social Media Engagement Specialist',
  'WordPress Content Updater', 'Google My Business Profile Optimizer', 'Online Review Management Assistant',
  'Blog Comment Moderator & Responder', 'Forum Profile Link Builder (Ethical)', 'Social Media Analytics Reporter (Basic)',
  'Website Broken Link Checker', 'Image Alt Text Writer for SEO', 'Competitor Social Media Watcher',
  'Content Repurposing for Social Media', 'Directory Submission Specialist', 'Social Bookmarking Assistant',
  'Etsy Shop Customer Service Rep', 'Amazon FBA Virtual Assistant (Basic Tasks)', 'Product Description Writer for Dropshippers',
  'Order Processing & Tracking Assistant', 'E-commerce Return Management Support', 'Affiliate Product Research Assistant',
  'Shopify Store Content Entry', 'Customer Review Responder (E-commerce)', 'Influencer Outreach for Small Brands',
  'E-commerce Competitor Price Monitor', 'Product Image Resizing/Optimization', 'Abandoned Cart Email Sequencer (Basic Setup)',
  'E-commerce Data Entry for Product Specs', 'Social Media Shop Integration Assistant', 'Loyalty Program Data Management',
  'Online Homework Helper (Specific Subjects)', 'Virtual Study Hall Monitor', 'Discussion Forum Facilitator for Courses',
  'Technical Support for E-learning Platforms', 'Student Progress Tracker (Assistant)', 'Online Quiz Creator/Grader (Simple)',
  'Resource Curation for Online Courses', 'Virtual Classroom Assistant (Admin Tasks)', 'Feedback Collector for Online Training',
  'Student Onboarding Assistant (Virtual)', 'Certificate of Completion Generator', 'Live Q&A Session Moderator (Chat)',
  'Learning Management System (LMS) Data Entry', 'Accessibility Checker for Course Materials', 'Online Workshop Co-host (Support Role)',
  'Basic Video Intro/Outro Creator', 'Podcast Audio Cleanup Assistant', 'Social Media Graphic Resizer',
  'Canva Template Customizer', 'Stock Video Footage Researcher', 'Simple Infographic Designer (Canva)',
  'Thumbnail Creator for YouTube Videos', 'Presentation Slide Designer (Basic)', 'Photo Retouching (Minor Adjustments)',
  'Video Subtitle Burner-in', 'Audio Transcription for Video Captions', 'Music Playlist Curator for Content Creators',
  'Animated GIF Creator from Video Clips', 'Digital Sticker Designer for Messaging Apps', 'Portfolio Website Content Updater (Creative)',
];

const remoteSampleDescriptionsBatch3 = [
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
  'Develop engaging online quizzes and assessments for educational or training purposes.',
  'Enforce community guidelines in online forums or social media groups to maintain a positive environment.',
  'Accurately tag digital content (images, articles, videos) with relevant keywords for better organization and searchability.',
  'Assist in curating and selecting high-quality stock photos for various projects based on specific criteria.',
  'Review and approve or reject user-generated content based on platform policies and quality standards.',
  'Monitor online forums and communities for spam, abusive behavior, and policy violations, taking appropriate action.',
  'Provide customer support in two or more languages via chat or email, assisting international customers.',
  'Translate documents in specialized fields like legal, medical, or technical, requiring subject matter expertise.',
  'Test localized versions of websites or software to ensure linguistic accuracy and cultural appropriateness.',
  'Create accurate and well-timed subtitles for independent films or videos for a global audience.',
  'Review and edit translated texts to ensure accuracy, fluency, and consistency with the source material.',
  'Offer personalized language tutoring to help students prepare for specific language proficiency exams.',
  'Record voice-overs for training materials, e-learning modules, or corporate videos in various languages.',
  'Review content for cultural sensitivities and appropriateness for specific target markets or regions.',
  'Develop and maintain glossaries and terminology databases for consistent translations across projects.',
  'Provide real-time or consecutive interpretation services for small online meetings or webinars.',
  'Adapt marketing slogans and advertising copy to resonate culturally and linguistically with new target markets.',
  'Perform quality assurance checks on translated content to ensure it meets linguistic and client standards.',
  'Translate resumes, CVs, and cover letters for job seekers applying for positions in different countries.',
  'Annotate text data with linguistic information (e.g., part-of-speech tagging, named entity recognition) for AI training.',
  'Translate sensitive medical documents accurately, often requiring certification and specialized knowledge.',
  'Conduct basic keyword research to identify relevant search terms for website content and SEO strategies.',
  'Build local business citations on online directories and platforms to improve local search visibility.',
  'Engage with followers, respond to comments, and foster community on social media platforms.',
  'Update website content, blog posts, and images on WordPress or similar CMS platforms.',
  'Optimize Google My Business profiles with accurate information, photos, and posts to attract local customers.',
  'Monitor and respond to online reviews on platforms like Google, Yelp, and industry-specific sites.',
  'Moderate blog comments to prevent spam and engage with readers, fostering a positive community.',
  'Build relevant backlinks by participating in online forums and communities (ethically and without spamming).',
  'Compile basic reports on social media performance using platform analytics or simple tracking tools.',
  'Regularly check websites for broken links and report them for fixing to improve user experience and SEO.',
  'Write descriptive alt text for images on websites to improve accessibility and image SEO.',
  'Monitor competitors\' social media activities to identify trends, content strategies, and engagement tactics.',
  'Repurpose existing content (e.g., blog posts into social media updates, videos into articles) for wider reach.',
  'Submit websites and business information to relevant online directories for increased visibility.',
  'Share website content and articles on social bookmarking sites to generate traffic and backlinks.',
  'Provide customer service for Etsy shop owners, handling inquiries, orders, and resolving issues.',
  'Assist Amazon FBA sellers with basic tasks like inventory monitoring, customer communication, or product research.',
  'Write compelling and keyword-rich product descriptions for dropshipping stores to attract buyers.',
  'Help e-commerce businesses process orders, track shipments, and update customers on order status.',
  'Manage customer returns and exchanges for online stores, ensuring a smooth process for buyers.',
  'Research profitable products and niches for affiliate marketers to promote on their websites or social media.',
  'Enter and update product information, images, and pricing on Shopify stores.',
  'Respond to customer reviews on e-commerce platforms, addressing feedback and maintaining brand reputation.',
  'Identify and reach out to relevant influencers for collaborations with small e-commerce brands.',
  'Monitor competitor pricing on e-commerce platforms to help businesses stay competitive.',
  'Resize and optimize product images for fast loading times and better visual appeal on e-commerce sites.',
  'Set up basic automated email sequences for abandoned carts to recover potential sales.',
  'Perform accurate data entry of product specifications, SKUs, and other details for e-commerce catalogs.',
  'Help integrate e-commerce products with social media shops like Instagram Shopping or Facebook Shops.',
  'Manage customer data and engagement for e-commerce loyalty programs, tracking points and rewards.',
  'Assist students with their homework in specific subjects through online chat or video calls.',
  'Supervise online study sessions, ensuring students stay on task and providing a conducive learning environment.',
  'Facilitate discussions in online course forums, encouraging participation and answering student questions.',
  'Provide technical support to users of e-learning platforms, troubleshooting login or access issues.',
  'Help track student progress and completion of assignments in online courses for instructors.',
  'Create and grade simple online quizzes or assignments based on provided materials and rubrics.',
  'Curate and organize learning resources, articles, and videos for online courses or training programs.',
  'Perform administrative tasks for virtual classrooms, such as managing attendance or distributing materials.',
  'Collect and compile feedback from students on online training sessions or course content.',
  'Assist new students with the onboarding process for online courses or virtual learning environments.',
  'Generate and distribute certificates of completion for students who finish online courses or workshops.',
  'Moderate the chat and Q&A during live online Q&A sessions or webinars, ensuring smooth interaction.',
  'Enter data into Learning Management Systems (LMS), such as student information or course content.',
  'Review online course materials for accessibility compliance, ensuring they are usable by students with disabilities.',
  'Act as a co-host or technical support for online workshops, assisting the main facilitator and participants.',
  'Create simple and engaging video intros and outros for YouTube channels or online presentations.',
  'Clean up podcast audio by removing background noise, ums/ahs, and improving overall sound quality.',
  'Resize and adapt existing graphics for various social media platforms, ensuring optimal dimensions.',
  'Customize pre-made Canva templates with client branding, text, and images for quick graphic design.',
  'Research and source royalty-free stock video footage for use in various video projects.',
  'Design simple and clear infographics using tools like Canva to visualize data or information.',
  'Create eye-catching and click-worthy thumbnails for YouTube videos to increase views.',
  'Design basic presentation slides using PowerPoint, Google Slides, or Canva, focusing on clarity.',
  'Perform minor photo retouching tasks like color correction, blemish removal, or background cleanup.',
  'Permanently embed subtitles into video files for distribution on platforms without native subtitle support.',
  'Transcribe audio from videos accurately to create captions or subtitles, improving accessibility.',
  'Curate music playlists with royalty-free or licensed tracks for content creators to use in their videos.',
  'Create short animated GIFs from video clips for use in social media, emails, or blog posts.',
  'Design custom digital stickers or emojis for use in messaging apps or online communities.',
  'Update and maintain content on creative portfolio websites, adding new projects and information.',
];

const remoteCategoriesBatch4 = [
  { name: 'Remote Creative & Media Support', imageHint: 'creative media remote' },
  { name: 'Virtual Business Operations', imageHint: 'business operations virtual' },
  { name: 'Online Marketing & Sales Assistance', imageHint: 'marketing sales online' },
  { name: 'Specialized Remote Tutoring & Coaching', imageHint: 'tutoring coaching specialized' },
  { name: 'Digital Content Organization & Management', imageHint: 'content management digital' },
  { name: 'Remote E-commerce Enhancement', imageHint: 'ecommerce enhancement online' },
  { name: 'Niche Online Research & Data Tasks', imageHint: 'research data niche' },
  { name: 'Remote Technical & Customer Assistance', imageHint: 'technical customer support' },
];

const remoteSampleTitlesBatch4 = [
  // Remote Creative & Media Support (15)
  'Podcast Intro/Outro Music Composer', 'Video Thumbnail A/B Tester', 'Social Media AR Filter Designer (Basic)',
  'Royalty-Free Sound Effect Creator', 'Custom Zoom Virtual Background Designer', 'Animated Explainer Video Scriptwriter',
  'Photo Color Correction Specialist', 'Canva Template Pack Creator (for niches)', 'Ebook Cover Mockup Designer',
  'Social Media Video Ad Creator (Short)', 'Music Transcription Services (Simple Pieces)', 'Gaming Stream Overlay Designer (Basic)',
  'Infographic Content Researcher', 'Voice Tag/Producer Drop Creator', 'Content Repurposing for Different Platforms',
  // Virtual Business Operations (15)
  'Travel Arrangement Virtual Assistant', 'Online Subscription Management', 'Digital File Conversion Services',
  'Appointment Scheduling & Calendar Management', 'Online Event Registration Support', 'Virtual Mail Management (Scanning/Forwarding)',
  'CRM Data Entry & Cleanup Specialist', 'Standard Operating Procedure (SOP) Drafter', 'Online Form Builder & Manager',
  'Expense Tracking & Reporting Assistant', 'Remote Team Meeting Facilitator (Tech Setup)', 'Cloud Storage Organization Expert',
  'Business License & Permit Researcher', 'Competitor Research & Analysis Reporter', 'Presentation Formatting & Polishing',
  // Online Marketing & Sales Assistance (15)
  'Social Media Post Scheduler (Bulk)', 'Email Marketing Campaign Assistant (Setup)', 'Affiliate Marketing Link Manager',
  'LinkedIn Profile Optimization Specialist', 'Online Survey Distribution & Collection', 'Basic Google Analytics Reporter',
  'Customer Testimonial Collector & Organizer', 'Pinterest Pin Designer & Scheduler', 'Sales Lead List Building (Basic)',
  'Forum Marketing & Engagement (Ethical)', 'Product Hunt Launch Support Assistant', 'Online Advertising Click Fraud Monitor (Basic)',
  'Hashtag Research & Strategy Assistant', 'Landing Page Content Proofreader', 'Social Media Contest Manager (Basic)',
  // Specialized Remote Tutoring & Coaching (15)
  'Standardized Test Prep Tutor (Specific Section)', 'Software Skills Tutor (e.g., Excel, Canva)', 'Language Pronunciation Coach (Online)',
  'Homework Accountability Partner', 'Study Skills Coach for Students', 'Homeschooling Support Tutor (Specific Subject)',
  'Adult Learner Tech Skills Tutor', 'Online Music Theory Tutor (Beginner)', 'Coding Basics Tutor for Kids',
  'Public Speaking Practice Partner (Online)', 'Mindfulness & Meditation Guide (Online)', 'Financial Literacy Coach (Basics)',
  'Job Interview Practice Coach (Remote)', 'Digital Organization Coach', 'Hobby Skills Tutor (e.g., Knitting, Painting - Online)',
  // Digital Content Organization & Management (15)
  'Blog Content Calendar Manager', 'Digital Photo Organizer & Tagger', 'Website Content Audit Assistant (Links, Typos)',
  'Podcast Episode Archive Manager', 'Social Media Content Library Curator', 'Online Course Material Organizer',
  'Dropbox/Google Drive Clean-up Specialist', 'Evernote/Notion Organization Consultant', 'Digital Recipe Book Compiler',
  'Ebook Library Management (Calibre)', 'Video Content Meta-data Optimizer (Tags, Descriptions)', 'Online Portfolio Content Updater',
  'Digital Asset Management (DAM) Assistant (Basic)', 'Client Document Portal Manager (Secure Sharing)', 'FAQ Database Creator & Maintainer',
  // Remote E-commerce Enhancement (15)
  'E-commerce Product Variation Lister', 'Shopify App Research & Recommendation', 'Amazon Product Q&A Responder',
  'Etsy Shop Announcement Writer', 'Customer Loyalty Program Assistant (Points Tracking)', 'Abandoned Cart Recovery Email Writer',
  'Competitor Product Feature Analyst', 'Social Commerce Post Creator (Link In Bio Tools)', 'E-commerce Product Bundling Assistant',
  'Online Store Coupon Code Manager', 'Product Sourcing Assistant (AliExpress/DHGate)', 'E-commerce Blog Content Ideator',
  'Customer Review Sentiment Analyst', 'Dropshipping Order Fulfillment Monitor', 'Charity Auction Online Listing Creator',
  // Niche Online Research & Data Tasks (15)
  'Academic Paper Summarizer', 'Market Trend Research Assistant (Specific Industry)', 'Grant Writing Research Support',
  'Historical Data Entry Specialist', 'Genealogical Record Transcriber', 'Scientific Article Finder',
  'Public Domain Content Curator', 'Legal Document Proofreader (Non-Advisory)', 'Real Estate Property Listing Data Collector',
  'Competitor Pricing Data Scraper (Manual)', 'Online News Aggregator & Summarizer (Niche)', 'Sports Statistics Compiler',
  'Film/TV Show Database Contributor (Fact Checking)', 'Product Patent Search Assistant (Basic)', 'Local Event Listing Compiler (Online Sources)',
  // Remote Technical & Customer Assistance (15)
  'Basic WordPress Plugin Support', 'Mobile App User Support (FAQ-based)', 'SaaS Product Onboarding Assistant (Guidance)',
  'Online Community Technical Moderator', 'Software Bug Reporter (User Perspective)', 'Password Manager Setup Assistant',
  'Remote Desktop Support (Guidance Only)', 'Website Accessibility Checker (Basic Tools)', 'Data Backup & Recovery Guide (Basic)',
  'Email Configuration Support (Common Clients)', 'IoT Device Setup Helper (Remote Guidance)', 'VPN Setup Assistance (User-Level)',
  'Online Gaming Server Admin (Basic Tasks)', 'Browser Extension Troubleshooting Assistant', 'Forum Signature Link Checker'
];

const remoteSampleDescriptionsBatch4 = [
  // Remote Creative & Media Support (15)
  'Create custom, catchy intro and outro music jingles for podcasters to enhance their branding.',
  'Help YouTubers and content creators optimize video thumbnails by setting up and analyzing A/B tests for better click-through rates.',
  'Design simple yet engaging augmented reality (AR) filters for Instagram Stories or Snapchat using basic creator tools.',
  'Produce and edit unique, high-quality sound effects for use in videos, games, or other media projects.',
  'Design custom, branded virtual backgrounds for professionals to use in Zoom, Microsoft Teams, or other video conferencing platforms.',
  'Write clear, engaging, and concise scripts for short animated explainer videos for businesses or educational content.',
  'Provide professional photo color correction and grading services to enhance images for web or print.',
  'Develop sets of themed, customizable Canva templates for specific niches (e.g., real estate, coaching) for others to use.',
  'Create realistic 3D mockups for ebook covers to be used in marketing materials and online listings.',
  'Produce short, attention-grabbing video advertisements suitable for social media platforms like Instagram, Facebook, or TikTok.',
  'Transcribe simple musical pieces or melodies into sheet music or digital notation for musicians.',
  'Design basic, non-animated overlays for gaming streams on platforms like Twitch or YouTube Gaming.',
  'Research and gather data, statistics, and key points to be used in creating informative infographics.',
  'Create unique voice tags or producer drops for DJs, music producers, or podcasters to brand their audio content.',
  'Adapt existing content (e.g., blog posts into video scripts, videos into social media snippets) for wider platform reach.',
  // Virtual Business Operations (15)
  'Assist busy professionals or businesses with researching and booking flights, accommodations, and transportation.',
  'Manage and track online subscriptions and recurring payments for individuals or small businesses, identifying cost-saving opportunities.',
  'Convert digital files between various formats (e.g., PDF to Word, JPG to PNG, audio to text snippets).',
  'Handle appointment scheduling, calendar management, and reminder services for clients remotely.',
  'Provide support for online event registration, managing attendee lists, and sending out event information.',
  'Offer virtual mail management services, including scanning physical mail to digital and forwarding important documents.',
  'Enter, update, and clean up data in Customer Relationship Management (CRM) systems like HubSpot or Salesforce.',
  'Help businesses document their processes by drafting Standard Operating Procedures (SOPs) for various tasks.',
  'Create and manage online forms for surveys, feedback collection, or lead generation using tools like Google Forms or Typeform.',
  'Track business or personal expenses, categorize them, and prepare simple financial reports.',
  'Provide technical setup and moderation for remote team meetings, ensuring smooth operation of conferencing tools.',
  'Organize and manage files and folders in cloud storage systems like Google Drive, Dropbox, or OneDrive for better accessibility.',
  'Research and gather information on necessary business licenses and permits for specific locations or industries.',
  'Conduct research on competitors, analyze their strategies, and compile reports with key findings and insights.',
  'Format and polish presentations (PowerPoint, Google Slides) for visual consistency and professionalism.',
  // Online Marketing & Sales Assistance (15)
  'Schedule social media posts in bulk across multiple platforms using tools like Buffer or Hootsuite.',
  'Assist with setting up email marketing campaigns, including template customization and list segmentation in tools like Mailchimp.',
  'Manage and track affiliate marketing links, ensuring they are correctly implemented and generating clicks/sales.',
  'Optimize LinkedIn profiles for professionals to enhance their personal brand and networking opportunities.',
  'Distribute online surveys and polls to target audiences and collect responses for market research.',
  'Generate basic reports from Google Analytics to track website traffic, user behavior, and campaign performance.',
  'Reach out to customers to collect testimonials and reviews, and organize them for marketing use.',
  'Design visually appealing pins for Pinterest and schedule them to drive traffic and engagement.',
  'Build lists of potential sales leads based on specified criteria using online research tools (no cold calling).',
  'Engage in relevant online forums and communities to build brand presence and answer questions (non-spammy).',
  'Provide support for Product Hunt launches, including creating materials and engaging with the community.',
  'Monitor online advertising campaigns for basic signs of click fraud or bot activity using simple checks.',
  'Research relevant hashtags for social media posts to increase visibility and reach for specific niches.',
  'Proofread content for landing pages, checking for grammar, spelling, and clarity before publication.',
  'Manage basic aspects of social media contests or giveaways, such as tracking entries and announcing winners.',
  // Specialized Remote Tutoring & Coaching (15)
  'Provide online tutoring for specific sections of standardized tests like SAT, GRE, GMAT, or local academic exams.',
  'Teach individuals how to use specific software applications effectively, such as Microsoft Excel, Canva, or Adobe Photoshop (basics).',
  'Coach non-native speakers on language pronunciation and accent reduction through online video sessions.',
  'Act as an accountability partner for students, helping them stay on track with their homework and study schedules.',
  'Offer online coaching on effective study skills, time management, and test-taking strategies for students of all ages.',
  'Provide tutoring support for homeschooled students in specific subjects, aligning with their curriculum.',
  'Help adult learners develop essential technology skills for daily life or work, such as email, internet navigation, or basic software use.',
  'Teach beginner-level music theory concepts, such as reading notes, understanding scales, and basic harmony, via online lessons.',
  'Introduce children to the fundamentals of coding and programming through fun, interactive online sessions.',
  'Serve as an online practice partner for individuals looking to improve their public speaking or presentation skills.',
  'Guide individuals through mindfulness exercises and meditation techniques via online sessions for stress reduction.',
  'Provide basic financial literacy coaching, covering topics like budgeting, saving, and understanding credit.',
  'Help individuals prepare for job interviews by conducting mock interviews and providing feedback remotely.',
  'Coach individuals on digital organization techniques for managing files, emails, and online information effectively.',
  'Offer online tutoring for specific hobbies like knitting, painting, creative writing, or basic coding for hobbyists.',
  // Digital Content Organization & Management (15)
  'Manage and update blog content calendars, scheduling posts, and ensuring content is published on time.',
  'Organize and tag large collections of digital photos for individuals or businesses for easy retrieval.',
  'Assist with website content audits by checking for broken links, typos, outdated information, and formatting issues.',
  'Organize and manage archives of podcast episodes, ensuring proper tagging, descriptions, and accessibility.',
  'Curate and maintain a library of approved social media content (images, videos, text) for brands.',
  'Organize online course materials, including videos, documents, and quizzes, within a learning management system (LMS).',
  'Help individuals or businesses clean up and organize their Dropbox, Google Drive, or other cloud storage accounts.',
  'Provide consulting or assistance in setting up and organizing information within Evernote, Notion, or similar productivity tools.',
  'Compile and organize digital recipes into a searchable and user-friendly format for personal or commercial use.',
  'Manage and organize ebook libraries using software like Calibre, including metadata editing and format conversion.',
  'Optimize metadata (titles, descriptions, tags) for video content on platforms like YouTube or Vimeo to improve searchability.',
  'Update and maintain content on online portfolios for creatives, ensuring projects are current and well-presented.',
  'Provide basic assistance with Digital Asset Management (DAM) systems, including uploading and tagging assets.',
  'Manage secure client document portals, uploading files, setting permissions, and organizing documents for professional services.',
  'Create and maintain a centralized FAQ database for businesses to use for customer support or internal knowledge.',
  // Remote E-commerce Enhancement (15)
  'List products with multiple variations (size, color, etc.) accurately on e-commerce platforms like Shopify or WooCommerce.',
  'Research and recommend suitable Shopify apps to enhance store functionality, marketing, or customer service.',
  'Monitor and respond to customer questions asked on Amazon product listings in a timely and helpful manner.',
  'Write engaging and informative shop announcements for Etsy sellers to update customers on new products or promotions.',
  'Assist with managing customer loyalty programs, including tracking points, issuing rewards, and communicating with members.',
  'Draft and set up email sequences for abandoned cart recovery to encourage customers to complete their purchases.',
  'Analyze competitor product features, pricing, and customer reviews to identify opportunities for improvement.',
  'Create engaging posts for social commerce platforms (e.g., Instagram Shop, Facebook Shop) using "link in bio" tools.',
  'Assist e-commerce businesses with creating attractive and logical product bundles to increase average order value.',
  'Manage and update online store coupon codes, ensuring they are active, correctly applied, and tracked.',
  'Help source products for e-commerce stores from platforms like AliExpress or DHGate, focusing on specific criteria.',
  'Brainstorm and research blog content ideas relevant to an e-commerce store\'s niche to attract organic traffic.',
  'Analyze customer reviews to identify common themes, sentiment, and areas for product or service improvement.',
  'Monitor dropshipping order fulfillment processes, track shipments, and communicate updates to customers.',
  'Create online listings for charity auctions or fundraising events, including descriptions, images, and bidding information.',
  // Niche Online Research & Data Tasks (15)
  'Summarize academic papers or research articles into concise, easy-to-understand abstracts or reports.',
  'Assist with market trend research for specific industries, gathering data from online sources and compiling reports.',
  'Provide research support for grant writing, finding relevant funding opportunities and gathering required information.',
  'Perform accurate data entry of historical records, documents, or archives into digital databases.',
  'Transcribe handwritten genealogical records, census data, or old documents for family history research.',
  'Find and retrieve specific scientific articles or research papers from online databases and libraries.',
  'Curate and compile lists of public domain content (images, texts, music) for creators or businesses.',
  'Proofread legal documents for typos, grammatical errors, and formatting issues (non-advisory, non-legal-practice role).',
  'Collect data on real estate property listings from various online sources for market analysis.',
  'Manually scrape pricing data or product information from competitor websites for market research.',
  'Aggregate and summarize news articles or blog posts on specific niche topics for newsletters or reports.',
  'Compile sports statistics from various sources for fantasy leagues, sports blogs, or personal analysis.',
  'Contribute to and fact-check information on online film or TV show databases like IMDb or TMDb.',
  'Assist with basic product patent searches using online databases to identify existing patents.',
  'Compile lists of local events, workshops, or activities from online sources for community calendars or guides.',
  // Remote Technical & Customer Assistance (15)
  'Provide basic troubleshooting support for common WordPress plugin issues based on documentation.',
  'Offer user support for mobile apps, primarily answering frequently asked questions and guiding users to resources.',
  'Assist new users in onboarding to SaaS products by providing guided tours or answering initial setup questions.',
  'Act as a technical moderator for online communities, helping users with platform-related issues and enforcing guidelines.',
  'Identify, replicate, and clearly report software bugs or usability issues from a user\'s perspective.',
  'Help individuals set up and manage password manager software for improved online security.',
  'Provide remote desktop support by guiding users through troubleshooting steps verbally or via chat (no direct control).',
  'Use basic online tools to check websites for common accessibility issues and report findings.',
  'Guide users through basic data backup procedures for their computers or mobile devices.',
  'Assist users with configuring common email clients (like Gmail, Outlook) for their email accounts.',
  'Help users set up and troubleshoot basic IoT (Internet of Things) devices through remote guidance.',
  'Provide assistance to users in setting up VPN services on their devices for secure internet access.',
  'Perform basic administrative tasks for online gaming servers, such as monitoring and light moderation.',
  'Help users troubleshoot common issues with browser extensions or add-ons.',
  'Check online forum signatures for broken links or non-compliant content as a moderation task.'
];


const reviewerNamesBank = [
  "Priya Sharma", "Rajesh Kumar", "Aisha Begum", "Vikram Singh", "Meera Devi", "Amit Patel", "Sneha Gupta", "Rohan Mehta",
  "Anjali Rao", "Suresh Reddy", "Fatima Khan", "Deepak Yadav", "Lakshmi Nair", "Arjun Desai", "Kavita Joshi", "Imran Ali",
  "Santosh Bisht", "Maria Fernandes", "Kenji Tanaka", "Sofia Reyes", "Ahmed Al-Farsi", "Chinedu Okoro", "Linh Tran"
];
const locationsBank = [
  "Mumbai, India", "Delhi, India", "Bangalore, India", "Manila, Philippines", "Cebu City, Philippines", "Lagos, Nigeria",
  "Kano, Nigeria", "Dhaka, Bangladesh", "Chittagong, Bangladesh", "Nairobi, Kenya", "Mombasa, Kenya", "Ho Chi Minh City, Vietnam",
  "Hanoi, Vietnam", "Karachi, Pakistan", "Lahore, Pakistan", "Kathmandu, Nepal", "Colombo, Sri Lanka"
];
const positiveQuoteTemplates = [
  "This hustle truly changed my financial situation for the better. Highly recommend giving it a shot!",
  "An excellent way to earn supplementary income. I started with low expectations and was pleasantly surprised.",
  "The flexibility is amazing, perfect for my busy schedule as a student/parent.",
  "I found the learning curve manageable, and the community around [Hustle Category] is very supportive.",
  "Exceeded all my expectations! I'm earning significantly more than I initially thought possible with [Hustle Title].",
  "If you're looking for a genuine remote opportunity, [Hustle Title] is worth exploring.",
  "The skills I've learned through [Hustle Title] are invaluable and transferable.",
  "I appreciate the clear guidance provided. It helped me get started quickly.",
  "So glad I found this! It's a legitimate way to make money online from [User Location].",
  "A fantastic side gig that has the potential to become a full-time income. Highly motivating!"
];

const generateTestimonials = (hustleTitle: string, hustleCategory: string, hustleId: string, uniqueHustleIndex: number): Testimonial[] => {
  const testimonials: Testimonial[] = [];
  const numReviews = 50 + (uniqueHustleIndex % 31); // 50 to 80, deterministic
  for (let i = 0; i < numReviews; i++) {
    const reviewerName = reviewerNamesBank[(uniqueHustleIndex + i) % reviewerNamesBank.length];
    const location = locationsBank[(uniqueHustleIndex + i + 1) % locationsBank.length]; // Offset to vary
    const quoteTemplate = positiveQuoteTemplates[(uniqueHustleIndex + i + 2) % positiveQuoteTemplates.length]; // Offset to vary
    const quote = quoteTemplate
      .replace("[Hustle Title]", hustleTitle)
      .replace("[Hustle Category]", hustleCategory)
      .replace("[User Location]", location);

    testimonials.push({
      id: `testimonial-${hustleId}-${i}`,
      reviewerName: reviewerName,
      starRating: 4 + ( (uniqueHustleIndex + i) % 2), // 4 or 5 stars, deterministic
      quote: quote,
      location: location,
    });
  }
  return testimonials;
};

const generateEarningPotentials = (hustleCategory: string): EarningPotential[] => {
  let beginnerLow = 3000, beginnerHigh = 10000;
  let intermediateLowMultiplier = 1.5, intermediateHighMultiplier = 3;
  let advancedLowMultiplier = 3, advancedHighMultiplier = 7;

  if (hustleCategory.toLowerCase().includes('tech') || hustleCategory.toLowerCase().includes('consulting') || hustleCategory.toLowerCase().includes('development')) {
    beginnerLow = 7000; beginnerHigh = 20000;
    intermediateHighMultiplier = 4; advancedHighMultiplier = 10;
  } else if (hustleCategory.toLowerCase().includes('creative') || hustleCategory.toLowerCase().includes('writing') || hustleCategory.toLowerCase().includes('marketing') || hustleCategory.toLowerCase().includes('media')) {
    beginnerLow = 5000; beginnerHigh = 15000;
  } else if (hustleCategory.toLowerCase().includes('education') || hustleCategory.toLowerCase().includes('tutoring') || hustleCategory.toLowerCase().includes('coaching')) {
    beginnerLow = 4000; beginnerHigh = 12000;
  }

  return [
    { level: 'Beginner', range: `₹${beginnerLow.toLocaleString()} - ₹${beginnerHigh.toLocaleString()} / month` },
    { level: 'Intermediate', range: `₹${Math.floor(beginnerHigh * intermediateLowMultiplier).toLocaleString()} - ₹${Math.floor(beginnerHigh * intermediateHighMultiplier).toLocaleString()} / month` },
    { level: 'Advanced', range: `₹${Math.floor(beginnerHigh * advancedLowMultiplier).toLocaleString()} - ₹${Math.floor(beginnerHigh * advancedHighMultiplier).toLocaleString()}+ / month` },
  ];
};

const timeRequiredOptions = [
  "Flexible: 1-3 hours/day, scalable",
  "Part-time: 10-20 hours/week",
  "Dedicated Part-time: Approx. 20-25 hours/week",
  "Full-time potential: Can scale to 40+ hours/week",
  "Project-based: Time varies significantly per project",
  "Consistent daily effort: 2-4 hours for steady growth",
];

const toolsBank = {
  common: ["Reliable Internet Connection", "Laptop or Desktop Computer", "Smartphone (for communication/some tasks)"],
  creative: ["Canva (Free/Pro)", "Photopea (Free Photoshop alternative)", "GIMP (Free image editor)", "Figma (for UI/UX, free tier)", "FreePik/Unsplash (Stock Images)"],
  tech: ["VS Code (or other code editor)", "GitHub/GitLab", "Browser Developer Tools", "Stack Overflow"],
  writing: ["Google Docs/MS Word", "Grammarly (Free/Premium)", "Hemingway Editor (Online)", "Plagiarism Checker (Free versions available)"],
  services: ["Zoom/Google Meet/Skype (Free tiers)", "Calendly (Free tier for scheduling)", "Trello/Asana (Free tiers for project management)", "WhatsApp/Telegram (Communication)"],
  onlinePlatforms: ["Upwork", "Fiverr", "Freelancer.com", "PeoplePerHour", "LinkedIn"],
  ecommerce: ["Shopify (Paid, but some tasks don't require own store)", "WooCommerce", "Facebook Marketplace", "Instagram Shopping"],
  ai: ["ChatGPT (Free/Plus)", "Google Gemini", "Perplexity AI"],
  marketing: ["Google Analytics (Free)", "Mailchimp (Free tier)", "Buffer/Hootsuite (Free tiers)", "Google Keyword Planner"],
  operations: ["Google Workspace/Microsoft Office 365", "Slack/Microsoft Teams", "Notion/Evernote"],
  data: ["Google Sheets/Microsoft Excel", "Tableau Public (Free data viz)"],
};

const generateToolsNeeded = (category: string, title: string, uniqueHustleIndex: number): string[] => {
  let tools = [...toolsBank.common];
  const lowerCategory = category.toLowerCase();
  const lowerTitle = title.toLowerCase();

  if (lowerCategory.includes('creative') || lowerTitle.includes('design') || lowerTitle.includes('video') || lowerTitle.includes('music') || lowerTitle.includes('photo')) tools.push(...toolsBank.creative);
  if (lowerCategory.includes('tech') || lowerTitle.includes('develop') || lowerTitle.includes('coding') || lowerTitle.includes('it') || lowerTitle.includes('software')) tools.push(...toolsBank.tech);
  if (lowerCategory.includes('writing') || lowerTitle.includes('content') || lowerTitle.includes('edit') || lowerTitle.includes('proofread') || lowerTitle.includes('script')) tools.push(...toolsBank.writing);
  if (lowerCategory.includes('service') || lowerCategory.includes('support') || lowerTitle.includes('assistant') || lowerTitle.includes('support') || lowerTitle.includes('consult') || lowerTitle.includes('coach') || lowerTitle.includes('manage')) tools.push(...toolsBank.services);
  if (lowerCategory.includes('online') || lowerCategory.includes('digital') || lowerCategory.includes('remote')) tools.push(...toolsBank.onlinePlatforms);
  if (lowerCategory.includes('ecommerce') || lowerTitle.includes('e-commerce') || lowerTitle.includes('shop') || lowerTitle.includes('product list') || lowerTitle.includes('etsy') || lowerTitle.includes('amazon')) tools.push(...toolsBank.ecommerce);
  if (lowerTitle.includes('ai') || lowerTitle.includes('prompt') || lowerTitle.includes('chatbot')) tools.push(...toolsBank.ai);
  if (lowerCategory.includes('marketing') || lowerTitle.includes('marketing') || lowerTitle.includes('seo') || lowerTitle.includes('social media') || lowerTitle.includes('ad ')) tools.push(...toolsBank.marketing);
  if (lowerCategory.includes('operations') || lowerTitle.includes('operations') || lowerTitle.includes('admin') || lowerTitle.includes('schedule') || lowerTitle.includes('calendar')) tools.push(...toolsBank.operations);
  if (lowerCategory.includes('data') || lowerTitle.includes('data') || lowerTitle.includes('research') || lowerTitle.includes('analyst') || lowerTitle.includes('survey')) tools.push(...toolsBank.data);


  if (lowerTitle.includes('tutor')) tools.push("Online Whiteboard Tools");
  if (lowerTitle.includes('social media')) tools.push("Buffer/Hootsuite (Free tiers)"); // Already in marketing but good to reinforce
  if (lowerTitle.includes('data entry')) tools.push("Microsoft Excel/Google Sheets"); // Already in data but good to reinforce
  if (lowerTitle.includes('transcription')) tools.push("Express Scribe (Free audio player)");

  const shuffledTools = [...tools];
  for (let k = 0; k < (uniqueHustleIndex % tools.length); k++) {
    shuffledTools.push(shuffledTools.shift()!);
  }

  return Array.from(new Set(shuffledTools)).slice(0, 6 + (uniqueHustleIndex % 3)); // 6 to 8 tools, deterministic
};


const difficultyMap: Record<DifficultyLevel, '🔰' | '⚙️' | '🧠'> = {
  'Beginner Friendly': '🔰',
  'Intermediate': '⚙️',
  'Advanced': '🧠',
};
const difficultyLevels: DifficultyLevel[] = ['Beginner Friendly', 'Intermediate', 'Advanced'];

const faqQuestionTemplates = [
  "Is [Hustle Title] a legitimate way to earn money online?",
  "How much can I realistically earn from [Hustle Title] as a beginner in [User Location]?",
  "Do I need any specific qualifications or degrees to start [Hustle Title]?",
  "What are the biggest challenges when starting out with [Hustle Title]?",
  "How long does it typically take to get the first client or make the first sale in [Hustle Title]?",
  "Are there any upfront costs involved in starting [Hustle Title]?",
  "Can I do [Hustle Title] part-time alongside my studies or another job?",
  "What are the best platforms to find opportunities for [Hustle Title]?",
  "How do I handle payments from international clients for [Hustle Title]?",
  "Is [Hustle Title] a sustainable long-term career option?",
  "What kind of support or community is available for people doing [Hustle Title]?",
  "Are there any specific tools that are essential for [Hustle Title] that I might need to pay for?"
];

const faqAnswerTemplates = [
  "Yes, [Hustle Title] is a well-established and legitimate way for many to earn. Always ensure you're working with reputable clients or platforms by doing your research.",
  "Earnings vary widely based on skill, effort, and the types of projects you secure. Beginners in [User Location] might start with smaller projects, building up their portfolio and rates over time. Refer to our 'Earnings Potential' section for more details.",
  "For many roles in [Hustle Title], a formal degree isn't necessary. Demonstrable skills, a strong portfolio, and a willingness to learn are often more important. Some specialized areas might benefit from certifications.",
  "The main challenges include building an initial portfolio, finding consistent clients, and self-discipline for remote work. Marketing yourself effectively is also key for [Hustle Title].",
  "This can range from a few days to a few months. It depends on your proactiveness in applying, the quality of your profile/portfolio, and current market demand for [Hustle Title].",
  "Many aspects of [Hustle Title] can be started with minimal costs, using free tools. However, investing in a good internet connection is crucial. Some specialized software or courses might be beneficial later.",
  "Absolutely! [Hustle Title] is very popular as a part-time venture. It offers flexibility, but good time management is essential to balance it with other commitments.",
  "Platforms like Upwork, Fiverr, Freelancer, LinkedIn, and niche-specific job boards are excellent for [Hustle Title]. Don't underestimate networking and direct outreach.",
  "Reliable international payment platforms like PayPal, Payoneer, or Wise are commonly used. Ensure you understand their fees and withdrawal processes for [User Location].",
  "Yes, with dedication, continuous skill development, and adaptation, [Hustle Title] can definitely be a sustainable long-term career or a significant income stream.",
  "There are many online communities, forums (like Reddit subs for [Hustle Category]), and Facebook groups where you can find support, advice, and network with others in [Hustle Title].",
  "While many free tools exist for [Hustle Title], some premium software (e.g., Adobe suite for designers, Ahrefs for SEOs) can boost productivity but are often not essential when starting out. See our 'Tools Needed' section."
];

const generateFaqs = (hustleTitle: string, hustleCategory: string, location: string, hustleId: string, uniqueHustleIndex: number): FAQ[] => {
  const faqs: FAQ[] = [];
  const numFaqs = 8 + (uniqueHustleIndex % 3); // 8 to 10 FAQs, deterministic

  const startIndex = uniqueHustleIndex % (faqQuestionTemplates.length - numFaqs + 1);
  const selectedQuestionTemplates = faqQuestionTemplates.slice(startIndex, startIndex + numFaqs);
  const selectedAnswerTemplates = faqAnswerTemplates.slice(startIndex, startIndex + numFaqs);

  for (let i = 0; i < numFaqs; i++) {
    const question = selectedQuestionTemplates[i]
      .replace("[Hustle Title]", hustleTitle)
      .replace("[User Location]", location);
    const answer = selectedAnswerTemplates[i]
      .replace("[Hustle Title]", hustleTitle)
      .replace("[Hustle Category]", hustleCategory)
      .replace("[User Location]", location);
    faqs.push({
      id: `faq-${hustleId}-${i}`,
      question,
      answer,
    });
  }
  return faqs;
};

const redFlagsBank = [
  "Avoid any job offer that requires you to pay an upfront fee for registration, training materials, or software, especially if it's unsolicited.",
  "Be cautious of vague job descriptions or offers that promise extremely high pay for very simple tasks. If it sounds too good to be true, it usually is.",
  "Never share highly sensitive personal information like bank OTPs, full credit card details, or detailed ID scans with unverified individuals or platforms.",
  "Research any client or platform thoroughly. Look for reviews, online presence, and legitimacy before committing time or effort.",
  "Beware of 'gurus' selling expensive courses with guaranteed success. Many valuable skills for remote work can be learned through free or low-cost resources and practice.",
  "Always aim for clear communication regarding project scope, deliverables, deadlines, and payment terms before starting any work. Get it in writing if possible.",
  "Protect your intellectual property. For sample work, use watermarks or provide limited versions until a contract and payment terms are agreed upon, especially with new clients.",
  "Be wary of clients who pressure you to work outside of established freelance platform messaging or payment systems, as this can void platform protections.",
  "If a client asks you to perform tasks that seem unethical or illegal, decline immediately and report them if necessary.",
  "Trust your intuition. If something feels off about an offer or a client, it's okay to decline or ask more clarifying questions."
];

const generateRedFlags = (uniqueHustleIndex: number): string[] => {
    const numFlags = 3 + (uniqueHustleIndex % 2); // 3 or 4 flags, deterministic
    const selectedFlags: string[] = [];
    for (let k = 0; k < numFlags; k++) {
        selectedFlags.push(redFlagsBank[(uniqueHustleIndex + k) % redFlagsBank.length]);
    }
    return [...new Set(selectedFlags)]; // Ensure uniqueness if modulo wraps around for small bank
}

export const HUSTLES_PER_PAGE = 10;

const generateHustles = (count: number, initialIdOffset: number, catList: typeof categories, titleList: string[], descList: string[], isRemote: boolean): Hustle[] => {
  const generatedHustles: Hustle[] = [];
  for (let i = 0; i < count; i++) {
    const uniqueGlobalIndex = initialIdOffset + i;
    const categoryObj = catList[uniqueGlobalIndex % catList.length];
    const baseTitle = titleList[uniqueGlobalIndex % titleList.length];
    const titleVariationSuffix = titleList.length > 0 && count > titleList.length ? ` Expert #${Math.floor(uniqueGlobalIndex / titleList.length) + 1}` : '';
    const title = baseTitle + titleVariationSuffix;
    const description = descList[uniqueGlobalIndex % descList.length];
    const id = `hustle-${uniqueGlobalIndex + 1}`;

    let stepsToStart, successProofLink, successTip, skillsToLearn;

    if (isRemote) {
      stepsToStart = `Steps for ${title} (Remote):\n1. Assess your skills & ensure reliable internet access and a suitable work environment.\n2. Create professional profiles on global freelance platforms (e.g., Upwork, Fiverr, Toptal, PeoplePerHour) or specialized remote job boards relevant to your skills.\n3. Build a strong portfolio showcasing your best work; consider offering initial services at competitive rates or pro-bono for testimonials if new.\n4. Master online communication & collaboration tools (Zoom, Slack, Google Workspace, Trello, Asana).\n5. Understand international payment methods (e.g., PayPal, Payoneer, Wise), local tax implications, and basic financial management for freelancers. Secure a reliable way to receive payments.`;
      successProofLink = `https://www.google.com/search?q=how+to+succeed+as+remote+${encodeURIComponent(baseTitle.replace(/\(Remote\)|\(Entry Level\)|\(Niche\)|\(e\.g\..*\)/gi, '').trim())}`;
      successTip = `Success tip for ${title} (Remote): Focus on over-delivering on quality, maintaining proactive and clear communication with clients across different time zones, and actively building a strong online reputation through positive reviews and testimonials. Continuously upskill and adapt to stay competitive in the global market. Network online within your field.`;
      skillsToLearn = `For ${title} (Remote), learn: Core skills for ${categoryObj.name} (e.g., ${categoryObj.imageHint.replace(' ', ', ')}), strong digital literacy, proficiency in English (or the primary language of your target clients), excellent time management and self-discipline, cross-cultural communication etiquette, and proficiency in using remote work software and platforms. Basic project management and negotiation skills are also beneficial.`;
    } else {
      stepsToStart = `Generic steps for ${title}:\n1. Research the market demand and identify your target audience for ${title}.\n2. Create a basic business plan outlining your services, pricing, and goals.\n3. Develop your ${categoryObj.name.toLowerCase()} product/service offering to a high standard.\n4. Market yourself effectively online and offline; build a strong personal brand or business presence.\n5. Continuously seek feedback, learn from experiences, adapt to market changes, and iterate on your offerings.`;
      successProofLink = `https://www.google.com/search?q=success+stories+${encodeURIComponent(baseTitle.replace(/\(Remote\)|\(Entry Level\)|\(Niche\)|\(e\.g\..*\)/gi, '').trim())}`;
      successTip = `Key to success in ${title}: Be persistent, highly adaptable, and always prioritize delivering quality and value. Network actively within the ${categoryObj.name} community and related fields.`;
      skillsToLearn = `To succeed in ${title}, focus on learning: Core skills related to ${categoryObj.name.toLowerCase()} (e.g., ${categoryObj.imageHint.replace(' ', ', ')}), digital marketing and online presence management, customer relationship management (CRM), basic financial literacy, and effective communication.`;
    }

    const difficultyLevel = difficultyLevels[uniqueGlobalIndex % difficultyLevels.length];
    const difficultyEmoji = difficultyMap[difficultyLevel];
    const randomUserLocationForFaq = locationsBank[uniqueGlobalIndex % locationsBank.length];

    generatedHustles.push({
      id: id,
      title: title,
      description: description,
      imageUrl: `https://picsum.photos/seed/${uniqueGlobalIndex + 1}/400/300`,
      imageHint: categoryObj.imageHint,
      category: categoryObj.name,
      detailsLink: `/hustles/${id}`,
      stepsToStart: stepsToStart,
      successProofLink: successProofLink,
      successTip: successTip,
      skillsToLearn: skillsToLearn,
      testimonials: generateTestimonials(title, categoryObj.name, id, uniqueGlobalIndex),
      earningPotentials: generateEarningPotentials(categoryObj.name),
      timeRequired: timeRequiredOptions[uniqueGlobalIndex % timeRequiredOptions.length],
      toolsNeeded: generateToolsNeeded(categoryObj.name, title, uniqueGlobalIndex),
      difficultyLevel: difficultyLevel,
      difficultyEmoji: difficultyEmoji,
      faqs: generateFaqs(title, categoryObj.name, randomUserLocationForFaq, id, uniqueGlobalIndex),
      redFlags: generateRedFlags(uniqueGlobalIndex),
    });
  }
  return generatedHustles;
};

const generalHustles = generateHustles(120, 0, categories, sampleTitles, sampleDescriptions, false);
const remoteHustlesBatch1 = generateHustles(120, generalHustles.length, remoteCategories, remoteSampleTitles, remoteSampleDescriptions, true);
const remoteHustlesBatch2 = generateHustles(120, generalHustles.length + remoteHustlesBatch1.length, remoteCategoriesBatch2, remoteSampleTitlesBatch2, remoteSampleDescriptionsBatch2, true);
const remoteHustlesBatch3 = generateHustles(120, generalHustles.length + remoteHustlesBatch1.length + remoteHustlesBatch2.length, remoteCategoriesBatch3, remoteSampleTitlesBatch3, remoteSampleDescriptionsBatch3, true);
const remoteHustlesBatch4 = generateHustles(120, generalHustles.length + remoteHustlesBatch1.length + remoteHustlesBatch2.length + remoteHustlesBatch3.length, remoteCategoriesBatch4, remoteSampleTitlesBatch4, remoteSampleDescriptionsBatch4, true);


export const allHustles: Hustle[] = [...generalHustles, ...remoteHustlesBatch1, ...remoteHustlesBatch2, ...remoteHustlesBatch3, ...remoteHustlesBatch4];

export function getHustleById(id: string): Hustle | undefined {
  return allHustles.find(hustle => hustle.id === id);
}

    