import { PipelineStage, ProjectItem, SkillCategory, FaqItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Muhammad Hassan Raza',
  shortName: 'HR.',
  title: 'Full-Stack Developer',
  headline: 'From Raw Data to Remarkable Digital Experiences.',
  supportingHeadline:
    'I turn complex problems into intelligent systems, intuitive interfaces, and production-ready applications.',
  positioning:
    'I turn complex ideas into intelligent, beautifully designed, high-performing digital experiences.',
  availability: 'Available for full-time engineering roles & select contracts',
  email: 'muhammadhassanraza14@gmail.com',
  phone: '+923048181370',
  phoneFormatted: '+92 304 8181370',
  whatsappUrl: 'https://wa.me/923048181370',
  location: 'Pakistan (Open to Worldwide Remote)',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  experienceYears: '4+',
  avatarImage: '/src/assets/images/hassan_profile_avatar_1791710958944.jpg',
};

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'data',
    stepNumber: '01',
    title: 'DATA',
    tagline: 'Raw Requirements & Ingestion',
    description:
      'Incoming client requests, unbounded API streams, business domain rules, and relational schemas enter the engineering workflow.',
    details: [
      'Schema modeling, entity relationship definitions & data constraints',
      'JSON/REST payload parsing, schema validation & sanitization',
      'Data pipeline ingest: handling edge-cases, nulls, and high-frequency queries',
    ],
    metrics: 'Lossless ingestion with schema validation',
    iconName: 'Database',
    sampleSnippet: `{
  "request_id": "req_8471e9c",
  "client_spec": "Distributed Analytics Engine",
  "data_sources": ["PostgreSQL", "Kafka Streams", "REST Webhooks"],
  "integrity_rules": ["strict_type_enforcement", "rate_limit_10k_eps"]
}`,
  },
  {
    id: 'processing',
    stepNumber: '02',
    title: 'PROCESSING',
    tagline: 'Transformation & Business Logic',
    description:
      'Information is normalized, transformed, cached, and computed through clean algorithmic pipelines and resilient backend services.',
    details: [
      'Query optimization, database indexing, and memory cache layers (Redis)',
      'Async event dispatchers, background workers & micro-task queues',
      'Deterministic business logic and transaction boundary controls',
    ],
    metrics: '< 15ms compute latency across pipeline nodes',
    iconName: 'Cpu',
    sampleSnippet: `async function transformStream(payload: IngestPayload): Promise<ProcessedRecord> {
  const sanitized = SchemaValidator.parse(payload);
  const enriched = await CacheService.decorate(sanitized);
  return EventDispatcher.broadcast('DATA_ORGANIZED', enriched);
}`,
  },
  {
    id: 'design',
    stepNumber: '03',
    title: 'DESIGN',
    tagline: 'Interface Architecture & Tokens',
    description:
      'Rough product wireframes evolve into cohesive design tokens, responsive layouts, clear visual hierarchy, and accessible UX patterns.',
    details: [
      'Systematic color tokens, typography scales & spatial math (8pt grid)',
      'Figma wireframe to production component translation',
      'WCAG AA accessible contrast, keyboard accessibility & touch zones',
    ],
    metrics: '100% responsive, accessible component hierarchy',
    iconName: 'Layout',
    sampleSnippet: `// Design Token Configuration
export const designTokens = {
  canvas: '#ffffff',
  accentPrimary: '#6d28d9', // Rich Royal Purple
  accentSecondary: '#2563eb', // Electric Blue
  typeScale: { display: 'clamp(2rem, 4vw, 3.5rem)', body: '15px' },
  touchTarget: '44px minimum'
};`,
  },
  {
    id: 'coding',
    stepNumber: '04',
    title: 'CODING',
    tagline: 'Modern Full-Stack Engineering',
    description:
      'Clean TypeScript, reusable React component architecture, modular Python services, and structured APIs assembled into a scalable application.',
    details: [
      'Predictable state management & server state hydration',
      'Modular component breakdown with strict type safety',
      'DRY backend endpoints, middleware security & CORS configuration',
    ],
    metrics: 'Zero-any TypeScript, modular decoupled components',
    iconName: 'Code2',
    sampleSnippet: `export const AppContainer: React.FC<AppProps> = ({ config }) => {
  const { data, isLoading } = useQuery(['analytics', config.id], fetchTelemetry);
  if (isLoading) return <LoadingSkeleton />;
  return <TelemetryDashboard telemetry={data} />;
};`,
  },
  {
    id: 'testing',
    stepNumber: '05',
    title: 'TESTING',
    tagline: 'Validation & Quality Assurance',
    description:
      'Automated unit testing, integration tests, end-to-end user journeys, and linting suites guarantee stability and edge-case resilience.',
    details: [
      'Comprehensive unit & component test coverage (Vitest / Jest)',
      'API endpoint integration checks, error handling & boundary tests',
      'Cross-browser layout verification and Lighthouse performance audits',
    ],
    metrics: '99.9% test pass rate with zero regression issues',
    iconName: 'CheckCircle2',
    sampleSnippet: `describe('DataPipelineService', () => {
  it('should cleanly reject malformed data payloads', async () => {
    const invalid = { badField: null };
    await expect(ingest(invalid)).rejects.toThrow(ValidationError);
  });
  it('should deliver sub-20ms response time on bulk operations', async () => { ... });
});`,
  },
  {
    id: 'deployment',
    stepNumber: '06',
    title: 'DEPLOYMENT',
    tagline: 'Production Release & Cloud Delivery',
    description:
      'Automated CI/CD pipelines, Docker containerization, edge CDN distribution, and continuous performance monitoring in production.',
    details: [
      'Automated GitHub Actions build, test, and release workflows',
      'Docker containerization & Cloud Run / Vercel edge deployment',
      'SSL enforcement, security headers, and live error telemetry',
    ],
    metrics: 'Zero-downtime rolling deploys with instant rollback',
    iconName: 'Rocket',
    sampleSnippet: `name: Production CI/CD Pipeline
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run test && npm run build
      - name: Deploy to Production Cloud
        run: gcloud run deploy production-app --image gcr.io/app:latest`,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cloudflow-analytics',
    title: 'CloudFlow Telemetry & Analytics Platform',
    category: 'Full-Stack SaaS',
    shortDescription:
      'High-throughput real-time telemetry processing platform capable of visualizing live event streams, latency monitors, and pipeline health.',
    image: '/src/assets/images/project_cloud_analytics_1791710977067.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs', 'PostgreSQL'],
    problem:
      'Engineering teams struggled with fragmented logging across multiple distributed microservices, resulting in delayed incident response times and confusing visual metrics.',
    solution:
      'Engineered an end-to-end telemetry dashboard with real-time stream processing, dynamic pipeline health gauges, and instant error rate detection with sub-second feedback.',
    impact: 'Reduced mean time to incident detection from 24 minutes to under 2 minutes in testing simulations.',
    architectureDetails: [
      'Event ingestion layer processing thousands of events per second',
      'Real-time SVG charting engine rendered with 60fps compositor transitions',
      'Modular REST backend with structured JWT security and PostgreSQL querying',
      'Clean typography and WCAG-compliant high-contrast data visualization',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'aura-commerce',
    title: 'Aura Luxury Commerce Experience',
    category: 'Modern Web Application',
    shortDescription:
      'Ultra-minimalist, editorial e-commerce platform featuring dynamic product configurator, instant bag drawer, and seamless responsive design.',
    image: '/src/assets/images/project_aura_commerce_1791710994154.jpg',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Stripe API Concept'],
    problem:
      'Traditional e-commerce templates were bloated with heavy render cycles, intrusive popups, and sluggish cart updates that hurt user conversion.',
    solution:
      'Created a refined editorial shopping experience with zero-friction cart drawers, instant state transitions, and responsive multi-angle product views.',
    impact: 'Achieved 98+ Lighthouse scores across Performance, Accessibility, and Best Practices.',
    architectureDetails: [
      'Client-side optimistic state updates for immediate UI responsiveness',
      'Fluid gesture-aware shopping drawer built with Framer Motion primitives',
      'Strict 60-30-10 color discipline emphasizing photography and typography',
      'Accessible keyboard navigation across entire catalogue and checkout flow',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'synapse-dev-studio',
    title: 'Synapse Collaborative Dev Studio',
    category: 'Developer Tools',
    shortDescription:
      'Interactive architecture canvas and API inspection suite enabling engineering teams to map data flows, test endpoints, and inspect code modules.',
    image: '/src/assets/images/project_synapse_studio_1791710908922.jpg',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Canvas/SVG', 'REST APIs', 'Python Backend'],
    problem:
      'Architects and backend developers had no unified lightweight tool to design schema relationships and simultaneously test their REST API implementations.',
    solution:
      'Built an interactive node-based architecture designer paired with a live API testing console and real-time code inspector in one single workspace.',
    impact: 'Streamlined full-stack design reviews by combining visual architecture mapping with instant API endpoint validation.',
    architectureDetails: [
      'Custom SVG vector connector system with dynamic Bezier curvature routing',
      'Mock REST executor testing authentication headers, request bodies, and latency',
      'Built-in syntax-highlighted code inspector for immediate implementation cross-checks',
      'Lightweight browser state storage with instant JSON import/export capability',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Crafting responsive, high-performance interfaces with modern component standards.',
    skills: [
      { name: 'React & React 19', level: 'Advanced', usage: 'Component architecture, custom hooks, state optimization', highlight: true },
      { name: 'TypeScript', level: 'Advanced', usage: 'Strict type contracts, generics, interface definition', highlight: true },
      { name: 'JavaScript (ESNext)', level: 'Advanced', usage: 'Async/await, DOM APIs, modern data structures' },
      { name: 'Tailwind CSS', level: 'Advanced', usage: 'Design systems, responsive utilities, custom tokens', highlight: true },
      { name: 'HTML5 & Semantic Web', level: 'Advanced', usage: 'Accessibility (a11y), SEO architecture, landmark elements' },
      { name: 'CSS3 & Modern Layouts', level: 'Advanced', usage: 'Flexbox, CSS Grid, container queries, custom properties' },
      { name: 'Motion & Animations', level: 'Proficient', usage: 'GSAP, Motion, fluid transitions, micro-interactions' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Designing robust server logic, API contracts, and computational workflows.',
    skills: [
      { name: 'Python', level: 'Proficient', usage: 'Data scripts, backend services, algorithmic processing', highlight: true },
      { name: 'REST APIs & Webhooks', level: 'Advanced', usage: 'RESTful architecture, status codes, payload design', highlight: true },
      { name: 'Node.js & Express', level: 'Proficient', usage: 'API endpoints, middleware authentication, routing' },
      { name: 'Data Validation', level: 'Advanced', usage: 'Zod, payload sanitization, runtime boundary checks' },
      { name: 'Authentication & Security', level: 'Proficient', usage: 'JWT, OAuth concepts, CORS, input sanitization' },
    ],
  },
  {
    title: 'Data & Databases',
    description: 'Structuring schemas, optimizing queries, and handling data pipelines.',
    skills: [
      { name: 'SQL & Relational DBs', level: 'Proficient', usage: 'PostgreSQL, relational queries, indexes, normalization', highlight: true },
      { name: 'Database Architecture', level: 'Proficient', usage: 'Entity modeling, foreign keys, schema migrations' },
      { name: 'Data Transformation', level: 'Advanced', usage: 'ETL concepts, JSON manipulation, stream mapping' },
      { name: 'Caching Strategies', level: 'Proficient', usage: 'In-memory caching, HTTP cache-control, performance' },
    ],
  },
  {
    title: 'Design & Experience',
    description: 'Bridging technical engineering with human-centric UI/UX design.',
    skills: [
      { name: 'UI/UX Implementation', level: 'Advanced', usage: 'Translating design intent into pixel-accurate code', highlight: true },
      { name: 'Design Systems', level: 'Advanced', usage: 'Typography scales, color tokens, consistent spacing' },
      { name: 'Responsive Web Design', level: 'Advanced', usage: 'Mobile-first layouts, clamp scales, dynamic viewports' },
      { name: 'Web Accessibility (WCAG)', level: 'Proficient', usage: 'Keyboard navigation, screen-reader focus, contrast' },
    ],
  },
  {
    title: 'Tools & DevOps',
    description: 'Tooling, version control, and production delivery infrastructure.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', usage: 'Feature branching, pull requests, version management', highlight: true },
      { name: 'Vite & Modern Bundlers', level: 'Advanced', usage: 'Fast builds, hot reloading, tree-shaking' },
      { name: 'Testing & QA', level: 'Proficient', usage: 'Unit testing, component testing, edge-case validation' },
      { name: 'CI/CD & Cloud Deployment', level: 'Proficient', usage: 'Automated release workflows, Vercel, Cloud Run' },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understand the Core Problem',
    description:
      'Every project begins with active listening. I deconstruct business objectives, target user pain points, and technical constraints before writing a single line of code.',
    deliverables: ['Problem definition statement', 'Technical feasibility analysis', 'Scope & requirement roadmap'],
    techInvolved: 'Stakeholder interviews, user journey mapping, architecture canvas',
  },
  {
    step: '02',
    title: 'Analyze',
    tagline: 'Data Models & Architecture',
    description:
      'I map out the data structures, API contracts, entity relationships, and systemic trade-offs to ensure our technical foundation is resilient and scalable.',
    deliverables: ['Database entity diagrams', 'API contract specifications', 'System architecture blueprint'],
    techInvolved: 'SQL modeling, JSON schema validation, latency budget planning',
  },
  {
    step: '03',
    title: 'Design',
    tagline: 'Intuitive Interfaces & Design Systems',
    description:
      'Before full code assembly, I establish typography hierarchies, 8pt spacing grids, and component tokens that ensure clarity, accessibility, and aesthetic excellence.',
    deliverables: ['Interactive component wireframes', 'Responsive layout prototypes', 'WCAG AA design token system'],
    techInvolved: 'Figma translation, Tailwind tokens, ergonomic touch targets',
  },
  {
    step: '04',
    title: 'Develop',
    tagline: 'Clean, Scalable Full-Stack Engineering',
    description:
      'I write clean, modular, and self-documenting code. Frontend interfaces are tightly typed in TypeScript; backend logic is modular, resilient, and performant.',
    deliverables: ['Reusable React/TypeScript components', 'Documented REST endpoints', 'Optimized database queries'],
    techInvolved: 'React 19, TypeScript, Tailwind, Python / Node.js, REST APIs',
  },
  {
    step: '05',
    title: 'Test',
    tagline: 'Rigorous Verification & Quality Assurance',
    description:
      'No application leaves the workbench unverified. I test functionality across edge cases, responsive viewports, screen sizes, and performance benchmarks.',
    deliverables: ['Unit & integration test suites', 'Cross-browser & device matrix checks', 'Lighthouse 95+ score validation'],
    techInvolved: 'Automated test runners, accessibility audits, network throttling checks',
  },
  {
    step: '06',
    title: 'Deploy',
    tagline: 'Production Release & Monitoring',
    description:
      'I package and deploy the application to modern cloud infrastructure with automated CI/CD pipelines, SSL encryption, and continuous monitoring.',
    deliverables: ['Zero-downtime production build', 'Automated CI/CD deployment script', 'Handover documentation & maintenance guide'],
    techInvolved: 'GitHub Actions, Docker, Cloud Run / Vercel, monitoring logs',
  },
];

export const FAQ_KNOWLEDGE_BASE: FaqItem[] = [
  {
    id: 'tech-stack',
    question: 'What technologies do you work with?',
    answer:
      'I specialize in modern full-stack engineering: on the frontend, I excel with React, TypeScript, modern JavaScript, and Tailwind CSS. On the backend, I work with Python, Node.js, and structured REST APIs. For databases, I work with SQL (PostgreSQL) and data modeling, along with Git, Vite, and cloud deployment pipelines.',
    category: 'technical',
    keywords: ['technologies', 'stack', 'tech', 'languages', 'frameworks', 'frontend', 'backend', 'react', 'python', 'tools'],
    followUps: ['Can you build a complete full-stack application?', 'How do you approach a new project?'],
  },
  {
    id: 'fullstack-capability',
    question: 'Can you build a complete full-stack application from scratch?',
    answer:
      'Yes, absolutely. I handle the entire product lifecycle from raw business requirements to production deployment. This includes schema design, API architecture, server-side processing, responsive UI implementation, testing, and cloud release.',
    category: 'services',
    keywords: ['complete', 'full-stack', 'scratch', 'end to end', 'database', 'frontend', 'backend', 'build', 'entire'],
    followUps: ['What is your development process?', 'Are you available for freelance projects?'],
  },
  {
    id: 'project-approach',
    question: 'How do you approach a new project?',
    answer:
      'I follow a disciplined 6-stage engineering pipeline: 01 Discover (understand goals & users) → 02 Analyze (model data & architecture) → 03 Design (create UI tokens & responsive layouts) → 04 Develop (clean TypeScript & APIs) → 05 Test (verify accessibility & stability) → 06 Deploy (production cloud release).',
    category: 'general',
    keywords: ['approach', 'process', 'workflow', 'start', 'methodology', 'steps', 'pipeline', 'how do you work'],
    followUps: ['What is your testing and deployment process?', 'How do you handle responsive design?'],
  },
  {
    id: 'responsive-design',
    question: 'How do you handle responsive design and accessibility?',
    answer:
      'Every application I build is mobile-first and tested across smartphones, tablets, laptops, and ultra-wide displays. I use dynamic clamp typography, fluid grid structures, and touch-friendly targets (minimum 44px). For accessibility, I adhere to WCAG AA guidelines with keyboard navigability and semantic markup.',
    category: 'technical',
    keywords: ['responsive', 'mobile', 'tablet', 'accessibility', 'a11y', 'wcag', 'screen', 'device'],
    followUps: ['What technologies do you work with?', 'Can you build a complete full-stack application?'],
  },
  {
    id: 'testing-deployment',
    question: 'What is your testing and deployment process?',
    answer:
      'I ensure high code quality through automated unit testing, API boundary checks, and cross-browser audits before launch. For deployment, I configure automated CI/CD workflows using GitHub Actions and modern cloud hosts (like Vercel or Cloud Run) with SSL and continuous health checks.',
    category: 'technical',
    keywords: ['testing', 'deploy', 'deployment', 'ci/cd', 'docker', 'cloud', 'quality', 'git', 'release'],
    followUps: ['Where can I view your resume?', 'How can I contact you?'],
  },
  {
    id: 'availability',
    question: 'Are you available for full-time or freelance projects?',
    answer:
      'Yes! I am currently available for high-impact full-time software engineering roles as well as select contract or freelance projects worldwide. I operate remotely and can comfortably collaborate across diverse timezones.',
    category: 'collaboration',
    keywords: ['available', 'availability', 'freelance', 'contract', 'hire', 'job', 'full time', 'remote', 'work'],
    followUps: ['How can I contact you?', 'Where can I view your resume?'],
  },
  {
    id: 'contact-info',
    question: 'How can I contact you?',
    answer:
      'You can reach me directly via email at muhammadhassanraza14@gmail.com, or message me instantly on WhatsApp at +923048181370. You can also use the contact form at the bottom of this page.',
    category: 'general',
    keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'message', 'talk', 'call'],
    followUps: ['Where can I view your resume?', 'What technologies do you work with?'],
  },
  {
    id: 'resume-view',
    question: 'Where can I view your resume?',
    answer:
      'You can view my complete interactive resume right here on this portfolio by clicking the "View Resume Online" button in the Resume section, or you can download the PDF copy for your records.',
    category: 'general',
    keywords: ['resume', 'cv', 'pdf', 'background', 'download', 'experience', 'credentials'],
    followUps: ['Are you available for freelance projects?', 'What technologies do you work with?'],
  },
];

export const RESUME_DATA = {
  name: 'Muhammad Hassan Raza',
  title: 'Full-Stack Developer',
  email: 'muhammadhassanraza14@gmail.com',
  phone: '+923048181370',
  location: 'Pakistan (Open to Worldwide Remote)',
  website: 'Portfolio Website',
  summary:
    'Dedicated Full-Stack Developer with an end-to-end engineering mindset, bridging complex data architectures with clean, accessible, and high-performance user interfaces. Experienced in modern TypeScript, React, Python, REST APIs, SQL databases, and cloud deployment pipelines.',
  experience: [
    {
      role: 'Full-Stack Developer',
      company: 'Digital Solutions & Independent Engineering',
      period: '2023 — Present',
      location: 'Remote',
      highlights: [
        'Designed and implemented end-to-end web applications utilizing React 19, TypeScript, and modern component systems.',
        'Architected RESTful API endpoints and integrated robust backend services with schema validation and sub-millisecond cache layers.',
        'Transformed complex business workflows into intuitive, responsive dashboards adhering to WCAG AA accessibility standards.',
        'Established automated CI/CD delivery pipelines ensuring seamless production releases and zero-downtime rollouts.',
      ],
    },
    {
      role: 'Frontend & UI Developer',
      company: 'Web Application Consulting',
      period: '2021 — 2023',
      location: 'Remote',
      highlights: [
        'Engineered responsive web interfaces using modern CSS frameworks, Tailwind CSS, and vanilla JavaScript/TypeScript.',
        'Optimized frontend asset delivery and render pipelines, improving Lighthouse performance benchmarks above 95.',
        'Collaborated directly with product stakeholders to convert Figma designs and user journey requirements into production code.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science / Software Engineering',
      institution: 'University Accreditation',
      period: 'Graduated',
      details: 'Focus on Data Structures, Database Systems, Software Engineering Methodologies, and Web Technologies.',
    },
  ],
  skills: [
    { category: 'Frontend', items: ['React 19', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3', 'Motion/GSAP'] },
    { category: 'Backend & Data', items: ['Python', 'RESTful APIs', 'Node.js', 'SQL / PostgreSQL', 'Data Validation', 'JSON Ingest'] },
    { category: 'Tools & DevOps', items: ['Git & GitHub', 'Vite', 'Docker Concepts', 'CI/CD Pipelines', 'Linux', 'Vercel / Cloud Run'] },
    { category: 'Architecture', items: ['Responsive Design', 'Design Systems', 'WCAG Accessibility', 'Performance Optimization'] },
  ],
};
