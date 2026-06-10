import { ServiceItem, SkillCategory, ExperienceItem, PortfolioItem, TestimonialItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'email-management',
    title: 'Email Management & Inbox Triage',
    icon: 'Mail',
    description: 'Keep your communications organized, clear out clutter, and ensure critical clients and partnerships are prioritized instantly.',
    benefits: [
      'Inbox zero maintenance with custom rules and filters',
      'Professional triage, drafting responses, and cold routing',
      'No important client messages or scheduling opportunities missed',
      'Weekly summaries with high-priority actionable items listed clearly'
    ]
  },
  {
    id: 'calendar-scheduling',
    title: 'Precision Calendar & Appointment Scheduling',
    icon: 'Calendar',
    description: 'Maximize your operational hours. Seamless scheduling coordination across multiple international timezones.',
    benefits: [
      'Double-booking prevention and buffers for high-focus work',
      'Timezone mapping for seamless international client alignment',
      'Automated reminder setup to reduce client show-up dropouts',
      'Meeting minutes, link preparation, and pre-meeting dossiers'
    ]
  },
  {
    id: 'data-entry',
    title: 'Accurate Data Entry & Spreadsheet Systems',
    icon: 'Database',
    description: 'Turn chaotic data into clean, structured, and informative reports. Experience with bulk cleaning and validation.',
    benefits: [
      'Meticulous information mapping with 100% data fidelity',
      'Advanced sorting, formula creation, and custom tracking views',
      'Regular cleaning cycles to eliminate redundant or stale entries',
      'Secure, confidential handling of corporate metrics and CRM updates'
    ]
  },
  {
    id: 'customer-support',
    title: 'Customer Success & Support Assistance',
    icon: 'Headphones',
    description: 'Nurture your leads and existing clients. Prompt response times paired with warm, hospitality-level guest relations.',
    benefits: [
      'Zendesk, Intercom, or email ticketing management',
      'SOP-driven problem escalation based on tier levels',
      'Client retention support through proactive follow-ups',
      'High-empathy interaction maintaining premium, professional brand tone'
    ]
  },
  {
    id: 'admin-support',
    title: 'Administrative & Back-Office Support',
    icon: 'ShieldCheck',
    description: 'Offload routine yet essential tasks to standard operating procedures designed to run smoothly in the background.',
    benefits: [
      'Daily checklist execution and workflow coordination',
      'Travel itinerary design and cost comparison breakdowns',
      'File hierarchy organization on Google Drive/Dropbox',
      'Meticulous expense log matching and invoice tracking'
    ]
  },
  {
    id: 'doc-file-org',
    title: 'Document & File Organization',
    icon: 'FileText',
    description: 'Never waste hours searching for a file. Secure, structured folders with consistent file naming standards.',
    benefits: [
      'Document revision logs and simple versioning protocols',
      'Standardized template design for contracts, receipts, and proposals',
      'Highly secure handling inspired by medical and identity fraud training',
      'Instant-lookup directory indexing and search-friendly structures'
    ]
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    id: 'admin',
    title: 'Administrative & Back-Office',
    icon: 'Briefcase',
    skills: [
      { name: 'Calendar Scheduling', level: 95, tags: ['Google Calendar', 'Calendly'] },
      { name: 'File Organization', level: 90, tags: ['Google Drive', 'Dropbox'] },
      { name: 'Inbox Management', level: 95, tags: ['Gmail', 'Outlook'] },
      { name: 'Data Entry & Extraction', level: 98, tags: ['10-Key', 'Web Scraping'] },
      { name: 'Document SOP Creation', level: 88, tags: ['Notion', 'Google Docs'] }
    ]
  },
  {
    id: 'tech',
    title: 'Technical & Systems',
    icon: 'Laptop',
    skills: [
      { name: 'Google Workspace', level: 95, tags: ['Docs', 'Sheets', 'Drive'] },
      { name: 'MS Office Specialist', level: 90, tags: ['Excel', 'Word', 'PPT'] },
      { name: 'CRM & Ticketing Tools', level: 85, tags: ['Zendesk', 'HubSpot'] },
      { name: 'Collab Tools', level: 92, tags: ['Slack', 'Zoom', 'MS Teams'] },
      { name: 'Data Validation Tools', level: 94, tags: ['Fraud Rules', 'Deduplication'] }
    ]
  },
  {
    id: 'communication',
    title: 'Communication & Coordination',
    icon: 'MessageSquareText',
    skills: [
      { name: 'Professional Correspondence', level: 95, tags: ['Email', 'Dossiers'] },
      { name: 'Client Onboarding Support', level: 90, tags: ['Relationship Mgmt'] },
      { name: 'Cross-timezone Aligning', level: 94, tags: ['Scheduling Logic'] },
      { name: 'Information Triage', level: 98, tags: ['Prioritization'] },
      { name: 'Medical/Legal Confidentiality', level: 100, tags: ['HIPAA Aware', 'GDPR'] }
    ]
  },
  {
    id: 'soft',
    title: 'Core Professional Strengths',
    icon: 'Shield',
    skills: [
      { name: 'Attention to Detail', level: 100, tags: ['100% Accuracy'] },
      { name: 'Time Management', level: 96, tags: ['Strict Deadlines'] },
      { name: 'Information Discretion', level: 100, tags: ['NDAs', 'Secure Data'] },
      { name: 'High-Pressure Resiliency', level: 95, tags: ['Surgical Logic'] },
      { name: 'Hospitality-Level Service', level: 95, tags: ['Empathy', 'Diplomacy'] }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Fraud Specialist / Data Analyst',
    company: 'Leading Financial Service Provider',
    period: '2023 - Present',
    location: 'Remote / Hybrid',
    description: 'Conducted rigorous transactional investigations and background profile validations. Protected corporate and user assets through accurate database pattern verification under high-volume pressure.',
    vaTransferableSkills: [
      'Uncompromised data accuracy',
      'Confidentiality & security protocols',
      'Meticulous pattern extraction',
      'Investigation documentation archives'
    ],
    achievements: [
      'Successfully audited over 10,000+ sensitive data accounts with zero leakage or processing errors.',
      'Designed a custom visual spreadsheet tracker used by team members to speed up case-document triages by 25%.',
      'Handled highly confidential financial documents, strictly adhering to global compliance and privacy mandates.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Medical Secretary / Administrative Specialist',
    company: 'General Hospital Administration',
    period: '2021 - 2023',
    location: 'On-site Healthcare Sector',
    description: 'Orchestrated administrative and client-facing medical workflows. Managed critical calendars, coordinated appointment schedulers, and processed clinical documentation.',
    vaTransferableSkills: [
      'Incredibly strict calendar hygiene',
      'Confidential document management',
      'Active patient-client triage',
      'Urgent escalation pathways'
    ],
    achievements: [
      'Managed active billing and scheduling systems for up to 12 attending surgeons with overlapping timetables.',
      'Organized physical and digital file systems containing over 15,000 sensitive records with flawless look-up speeds.',
      'Drafted professional communications and medical dossiers, maintaining a 100% accuracy score on critical letters.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Customer Service Counter Specialist',
    company: 'Hospitality Services Center',
    period: '2019 - 2021',
    location: 'Major Metro Hub',
    description: 'Served as primary lead for client relationships, billing reconciliations, and point-of-sale customer concerns.',
    vaTransferableSkills: [
      'Active listening & de-escalation',
      'Hospitality-tier client experience',
      'Payment transaction safety',
      'Dynamic problem-solving'
    ],
    achievements: [
      'Maintained a 98.7% positive customer satisfaction index across all feedback channels.',
      'Streamlined the physical-to-digital desk logging procedures, reducing queue congestion by 30%.',
      'Educated on Hospitality Management (Graduated Cum Laude / consecutive President’s Lister), equipping with world-class correspondence standards.'
    ]
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Inbox Triage Framework & Auto-Filtering SOP',
    category: 'email',
    description: 'Created a modular inbox categorization directory that maps incoming customer, sales, priority partners, and operational logs to folders instantly.',
    challenge: 'A growing SaaS agency founder had 500+ daily emails, missing critical investment pitches, partner followups, and client cancellations.',
    solution: 'Designed a strict label matrix (VIP, Urgent-SOP, Read-Weekly, Newsletters), integrated color flags, and wrote automated boilerplate response templates.',
    outcome: 'Reduced visual noise by 75%. Response time to VIP sales leads dropped from 14 hours to 30 minutes, resulting in an estimated 18% improvement in customer retention.',
    previewType: 'inbox'
  },
  {
    id: 'port-2',
    title: 'Accurate Client Tracking Sheets with Formula Safeguards',
    category: 'data',
    description: 'Structured an error-proof, auto-calculating Google Sheet for tracking client touchpoints, daily milestones, and invoicing targets.',
    challenge: 'Freelance team entering data manually with heavy calculation errors, broken references, and duplicate entries.',
    solution: 'Engineered a locked master sheet utilizing data validation, deduplication arrays, simple pivot summaries, and conditional highlighting.',
    outcome: '100% data entry consistency. Saved manual auditing time by 4 hours per week and eliminated financial rounding discrepancies completely.',
    previewType: 'sheet'
  },
  {
    id: 'port-3',
    title: 'Cross-Timezone Executive Booking System & Dossiers',
    category: 'calendar',
    description: 'Implemented an multi-timezone scheduling workspace across UK, US Eastern, and US Pacific times, complete with pre-call briefs.',
    challenge: 'Managing Partner missing key investor alignment sessions and confusing local times during business travel.',
    solution: 'Setup unified Calendly integrations synced with internal secondary calendars, incorporating travel buffers, automatic calendar notes, and briefing sheets.',
    outcome: 'Zero missed booking schedules over a 6-month period, with consistent 15-minute restorative gaps prior to international pitches.',
    previewType: 'calendar'
  },
  {
    id: 'port-4',
    title: 'Standard Operating Procedure (SOP) Wiki & Incident Logs',
    category: 'admin',
    description: 'Crafted a secure, rapid-lookup Standard Operating Procedure manual for customer onboarding and document storage safeguards.',
    challenge: 'Company expansion led to disjointed training, irregular security practices, and file organizational sprawl on Shared Drives.',
    solution: 'Drafted clear, step-by-step documentation with quick reference anchors, compliance rules, and file-hierarchy structures.',
    outcome: 'Onboarded secondary VAs in 3 days instead of 2 weeks. Standardized file taxonomy, ensuring zero documentation loss.',
    previewType: 'report'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'VeloDigital Agency',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'Transitioning our admin tasks to this portfolio candidate was the best decision of the year. Due to their fraud analyst history, they treat data with extreme safety. Flawless inbox management and incredibly meticulous documentation.'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance, MD',
    role: 'Chief Medical Director',
    company: 'St. Vincent Surgical Group',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'Organizing complex surgical lists and private records requires a secretary with razor-sharp focus and total confidentiality. Their precision is surgical, scheduling is airtight, and they deal with people with amazing diplomacy.'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Director of Customer Experience',
    company: 'LuxeLiving International',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    content: 'Their hospitality degree shines through in every client email. They handle customer success logs patiently, coordinate Zoom calls flawlessly, and create clear spreadsheets that give our executive board complete visibility.'
  }
];
