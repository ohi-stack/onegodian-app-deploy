export type UniversityCourse = {
  code: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';
  description: string;
  href: string;
};

export type UniversitySchool = {
  slug: string;
  name: string;
  description: string;
  courses: UniversityCourse[];
};

const universityBaseUrl = 'https://u.onegodian.org';

const courseHref = (code: string) => `${universityBaseUrl}/courses/?course_code=${encodeURIComponent(code)}`;

export const universitySchools: UniversitySchool[] = [
  {
    slug: 'onegodian-studies',
    name: 'School of OneGodian Studies',
    description: 'Foundational study of OneGodian philosophy, identity, responsibility, consciousness, and historical development.',
    courses: [
      { code: 'OGF-101', title: 'Introduction to OneGodian™', level: 'Beginner', description: 'Foundational overview of OneGodian concepts, history, institutions, terminology, and worldview.', href: courseHref('OGF-101') },
      { code: 'OGF-102', title: 'The OneGodian Identity™', level: 'Beginner', description: 'Identity, belief, values, purpose, community participation, and lawful institutional distinction.', href: courseHref('OGF-102') },
      { code: 'OGF-103', title: 'The OneGodian Journey™', level: 'Beginner', description: 'Educational journey stages: Seeker, Believer, OneGodian, and Elder.', href: courseHref('OGF-103') },
      { code: 'OGF-201', title: 'OneGodianology™: Foundations of OneGodian Thought', level: 'Intermediate', description: 'Core philosophy concerning life, identity, responsibility, community, and purpose.', href: courseHref('OGF-201') },
      { code: 'OGF-202', title: 'The OneGodian Book of Mortal Duties™', level: 'Intermediate', description: 'Life, death, stewardship, responsibility, service, and legacy.', href: courseHref('OGF-202') },
      { code: 'OGR-201', title: 'Comparative Religion and Philosophy', level: 'Intermediate', description: 'Respectful comparative study of religious, philosophical, and ethical traditions.', href: courseHref('OGR-201') },
      { code: 'OGE-210', title: 'Ethics in the Post-AI Era', level: 'Intermediate', description: 'Human dignity, identity, accountability, technology, and ethical oversight.', href: courseHref('OGE-210') },
      { code: 'OGH-201', title: 'History and Evolution of OneGodian Thought', level: 'Intermediate', description: 'Chronological development of OneGodian thought, institutions, and documented systems.', href: courseHref('OGH-201') },
    ],
  },
  {
    slug: 'leadership-governance',
    name: 'School of Leadership and Governance',
    description: 'Ethical leadership, public administration, institutional design, mediation, and civic responsibility.',
    courses: [
      { code: 'OGL-101', title: 'Principles of Ethical Leadership', level: 'Beginner', description: 'Service, responsibility, integrity, communication, and accountable leadership.', href: courseHref('OGL-101') },
      { code: 'OGL-201', title: 'Community Building and Institution Design', level: 'Intermediate', description: 'Designing durable organizations, community structures, and participation systems.', href: courseHref('OGL-201') },
      { code: 'OGV-201', title: 'Governance Systems and Constitutions', level: 'Intermediate', description: 'Foundational governance models, constitutions, authority, and institutional boundaries.', href: courseHref('OGV-201') },
      { code: 'OGV-301', title: 'Conflict Resolution and Mediation', level: 'Advanced', description: 'Consensus building, dispute resolution, mediation, and community repair.', href: courseHref('OGV-301') },
      { code: 'OGP-201', title: 'Public Administration Fundamentals', level: 'Intermediate', description: 'Programs, policies, operations, records, accountability, and public service.', href: courseHref('OGP-201') },
      { code: 'OGC-201', title: 'Civic Responsibility and Stewardship', level: 'Intermediate', description: 'Duties to self, family, community, institutions, and future generations.', href: courseHref('OGC-201') },
      { code: 'OGO-301', title: 'Organizational Development', level: 'Advanced', description: 'Strategy, operations, governance, performance, and sustainable institutional growth.', href: courseHref('OGO-301') },
    ],
  },
  {
    slug: 'business-entrepreneurship',
    name: 'School of Business and Entrepreneurship',
    description: 'Practical enterprise creation, commerce, branding, revenue, marketing, sales, and founder finance.',
    courses: [
      { code: 'OGB-101', title: 'Entrepreneurship Fundamentals', level: 'Beginner', description: 'Opportunity identification, validation, business models, execution, and founder discipline.', href: courseHref('OGB-101') },
      { code: 'OGB-201', title: 'Building Digital Businesses', level: 'Intermediate', description: 'Digital products, service platforms, audiences, operations, and monetization.', href: courseHref('OGB-201') },
      { code: 'OGB-210', title: 'E-Commerce Operations', level: 'Intermediate', description: 'Catalogs, checkout, fulfillment, customer service, WooCommerce, and reporting.', href: courseHref('OGB-210') },
      { code: 'OGB-220', title: 'Brand Development', level: 'Intermediate', description: 'Brand identity, positioning, messaging, standards, and market consistency.', href: courseHref('OGB-220') },
      { code: 'OGB-230', title: 'Revenue Systems and Cash Flow', level: 'Intermediate', description: 'Revenue design, pricing, recurring income, working capital, and cash-flow controls.', href: courseHref('OGB-230') },
      { code: 'OGB-240', title: 'Marketing Strategy', level: 'Intermediate', description: 'Segmentation, positioning, channels, campaigns, content, and measurement.', href: courseHref('OGB-240') },
      { code: 'OGB-250', title: 'Sales Psychology', level: 'Intermediate', description: 'Trust, decision-making, value communication, objections, and ethical conversion.', href: courseHref('OGB-250') },
      { code: 'OGB-301', title: 'Business Finance for Founders', level: 'Advanced', description: 'Financial statements, budgeting, capital planning, risk, and decision support.', href: courseHref('OGB-301') },
      { code: 'OGB-310', title: 'Wealth Building Principles', level: 'Advanced', description: 'Assets, income systems, risk management, ownership, and long-term financial stewardship.', href: courseHref('OGB-310') },
    ],
  },
  {
    slug: 'technology-digital-systems',
    name: 'School of Technology and Digital Systems',
    description: 'Web systems, WordPress, APIs, privacy, security, blockchain, automation, and human oversight.',
    courses: [
      { code: 'OGT-101', title: 'Web Development Fundamentals', level: 'Beginner', description: 'Web architecture, HTML, CSS, JavaScript, accessibility, and deployment basics.', href: courseHref('OGT-101') },
      { code: 'OGT-201', title: 'WordPress Development', level: 'Intermediate', description: 'Themes, plugins, custom post types, REST APIs, security, and production workflows.', href: courseHref('OGT-201') },
      { code: 'OGT-220', title: 'API Design and Integrations', level: 'Intermediate', description: 'Contracts, authentication, validation, webhooks, versioning, and observability.', href: courseHref('OGT-220') },
      { code: 'OGT-230', title: 'Artificial Intelligence and Human Oversight', level: 'Intermediate', description: 'Responsible use, human authority, verification, limitations, and accountability.', href: courseHref('OGT-230') },
      { code: 'OGT-240', title: 'Digital Privacy and Security', level: 'Intermediate', description: 'Data minimization, access control, secure design, threat awareness, and incident readiness.', href: courseHref('OGT-240') },
      { code: 'OGT-250', title: 'Blockchain Fundamentals', level: 'Intermediate', description: 'Ledgers, consensus, wallets, smart contracts, verification, and practical limitations.', href: courseHref('OGT-250') },
      { code: 'OGT-301', title: 'Automation Systems', level: 'Advanced', description: 'Workflow automation, integrations, queues, retries, observability, and safe execution.', href: courseHref('OGT-301') },
      { code: 'OGT-320', title: 'Agent Orchestration and Workflow Design', level: 'Advanced', description: 'Multi-agent coordination, permissions, escalation, logging, and human approval gates.', href: courseHref('OGT-320') },
    ],
  },
  {
    slug: 'human-development',
    name: 'School of Human Development',
    description: 'Practical personal development across communication, reasoning, relationships, wellness, time, and finance.',
    courses: [
      { code: 'OGH-101', title: 'Emotional Intelligence', level: 'Beginner', description: 'Self-awareness, emotional regulation, empathy, boundaries, and constructive response.', href: courseHref('OGH-101') },
      { code: 'OGH-110', title: 'Communication Mastery', level: 'Beginner', description: 'Listening, clarity, persuasion, conflict communication, and public expression.', href: courseHref('OGH-110') },
      { code: 'OGH-120', title: 'Critical Thinking', level: 'Beginner', description: 'Evidence, assumptions, logic, bias, source evaluation, and sound conclusions.', href: courseHref('OGH-120') },
      { code: 'OGH-130', title: 'Decision Making', level: 'Beginner', description: 'Decision frameworks, tradeoffs, uncertainty, accountability, and review.', href: courseHref('OGH-130') },
      { code: 'OGH-201', title: 'Relationships and Family Systems', level: 'Intermediate', description: 'Roles, communication, boundaries, support, conflict, and generational patterns.', href: courseHref('OGH-201') },
      { code: 'OGH-210', title: 'Health and Wellness', level: 'Intermediate', description: 'Foundational wellness, routines, prevention, informed choices, and professional-care boundaries.', href: courseHref('OGH-210') },
      { code: 'OGH-220', title: 'Time Management', level: 'Intermediate', description: 'Priorities, schedules, focus, routines, review, and sustainable productivity.', href: courseHref('OGH-220') },
      { code: 'OGH-230', title: 'Personal Finance', level: 'Intermediate', description: 'Budgeting, saving, credit, debt, insurance, taxes, and long-term planning.', href: courseHref('OGH-230') },
    ],
  },
  {
    slug: 'creative-arts-media',
    name: 'School of Creative Arts and Media',
    description: 'Creative production, storytelling, publishing, music, video, design, and creator-economy operations.',
    courses: [
      { code: 'OGM-101', title: 'Music Production', level: 'Beginner', description: 'Song structure, recording, arrangement, mixing fundamentals, and release workflow.', href: courseHref('OGM-101') },
      { code: 'OGM-110', title: 'Songwriting', level: 'Beginner', description: 'Concept, lyrics, melody, rhythm, structure, revision, and collaboration.', href: courseHref('OGM-110') },
      { code: 'OGM-201', title: 'Video Production', level: 'Intermediate', description: 'Pre-production, filming, lighting, audio, editing, distribution, and rights.', href: courseHref('OGM-201') },
      { code: 'OGM-210', title: 'Podcasting', level: 'Intermediate', description: 'Format, recording, editing, publishing, audience development, and monetization.', href: courseHref('OGM-210') },
      { code: 'OGM-220', title: 'Graphic Design', level: 'Intermediate', description: 'Composition, typography, hierarchy, brand systems, digital production, and accessibility.', href: courseHref('OGM-220') },
      { code: 'OGM-230', title: 'Storytelling', level: 'Intermediate', description: 'Narrative structure, character, voice, theme, audience, and cross-media adaptation.', href: courseHref('OGM-230') },
      { code: 'OGM-240', title: 'Digital Publishing', level: 'Intermediate', description: 'Editorial workflows, formats, metadata, distribution, rights, and catalog operations.', href: courseHref('OGM-240') },
      { code: 'OGM-301', title: 'Creator Economy Fundamentals', level: 'Advanced', description: 'Audience ownership, products, memberships, licensing, analytics, and sustainable creator businesses.', href: courseHref('OGM-301') },
    ],
  },
  {
    slug: 'community-economic-development',
    name: 'School of Community and Economic Development',
    description: 'Housing, investment, grants, nonprofit capacity, workforce systems, and local economic strategy.',
    courses: [
      { code: 'OGC-101', title: 'Affordable Housing Development', level: 'Beginner', description: 'Development process, site readiness, finance, partnerships, compliance, and resident outcomes.', href: courseHref('OGC-101') },
      { code: 'OGC-201', title: 'Community Investment Strategies', level: 'Intermediate', description: 'Local capital, partnerships, impact, risk, governance, and community benefit.', href: courseHref('OGC-201') },
      { code: 'OGC-210', title: 'Economic Development Planning', level: 'Intermediate', description: 'Needs assessment, sectors, infrastructure, workforce, implementation, and performance measures.', href: courseHref('OGC-210') },
      { code: 'OGC-220', title: 'Grant Writing', level: 'Intermediate', description: 'Opportunity fit, narratives, budgets, outcomes, compliance, and submission management.', href: courseHref('OGC-220') },
      { code: 'OGC-230', title: 'Nonprofit Development', level: 'Intermediate', description: 'Mission, governance, programs, fundraising, finance, compliance, and evaluation.', href: courseHref('OGC-230') },
      { code: 'OGC-301', title: 'Workforce Development Programs', level: 'Advanced', description: 'Career pathways, employer partnerships, training design, supportive services, and outcomes.', href: courseHref('OGC-301') },
    ],
  },
  {
    slug: 'future-studies',
    name: 'School of Future Studies',
    description: 'Emerging technology, autonomous systems, future economics, human identity, settlement, and civilization design.',
    courses: [
      { code: 'OGFUT-101', title: 'Emerging Technologies', level: 'Beginner', description: 'Current and developing technologies, adoption patterns, risks, and social implications.', href: courseHref('OGFUT-101') },
      { code: 'OGFUT-201', title: 'Human Identity in a Technological Age', level: 'Intermediate', description: 'Identity, agency, embodiment, privacy, community, and human continuity.', href: courseHref('OGFUT-201') },
      { code: 'OGFUT-210', title: 'Ethics of Autonomous Systems', level: 'Intermediate', description: 'Responsibility, delegation, explainability, safety, rights, and human authority.', href: courseHref('OGFUT-210') },
      { code: 'OGFUT-220', title: 'Future Economics', level: 'Intermediate', description: 'Automation, ownership, labor, digital assets, resilience, and evolving value systems.', href: courseHref('OGFUT-220') },
      { code: 'OGFUT-301', title: 'Space Settlement Concepts', level: 'Advanced', description: 'Habitats, resources, governance, ethics, logistics, and long-duration community design.', href: courseHref('OGFUT-301') },
      { code: 'OGFUT-401', title: 'Civilization Building', level: 'Master', description: 'Institutions, culture, education, infrastructure, law, economy, and intergenerational continuity.', href: courseHref('OGFUT-401') },
    ],
  },
];

export const universityCourseCount = universitySchools.reduce((total, school) => total + school.courses.length, 0);
export const universityBase = universityBaseUrl;
