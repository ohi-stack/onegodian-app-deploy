export const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Registry', href: '/registry' },
  { label: 'Members', href: '/members' },
  { label: 'Products', href: '/products' },
  { label: 'Media', href: '/media' },
  { label: 'Capital', href: '/capital' },
  { label: 'OMOS', href: '/omos' },
  { label: 'Learning', href: '/learning' },
];

export const milestoneTimeline = [
  {
    date: '2001',
    title: 'Vision Origin',
    body: 'Gregory Lamar Jones began developing the conceptual foundation that later became ONEGODIAN™, establishing the long-range origin of the identity, technology, and institutional framework.',
  },
  {
    date: '2009',
    title: 'ONEGODIAN™ Coined',
    body: 'The word ONEGODIAN was coined as an independently authored identity framework centered on the sincere, primary belief in One God — absolute, undivided, and sovereign.',
  },
  {
    date: 'January 5, 2013',
    title: 'U.S. Copyright Registration Effective',
    body: 'The ONEGODIAN copyright registration, TXu 1-845-540, became the prior-origin authorship anchor for the word, text, artwork, identity framework, and later platform positioning.',
  },
  {
    date: 'October 6, 2017',
    title: 'Indigenous Nation of Onegodia™ Filed',
    body: 'INO was filed as a Connecticut Voluntary Association / Religious Society under Filing No. 0005947988, separate from ONEGODIAN, LLC and reserved for spiritual, community, and internal governance functions.',
  },
  {
    date: 'April 11, 2018',
    title: 'ONEGODIAN, LLC Formed',
    body: 'ONEGODIAN, LLC was formed in Connecticut as the commercial, intellectual property, publishing, software, education, digital infrastructure, commerce, and media entity.',
  },
  {
    date: 'February 14, 2025',
    title: 'Date of Liberation',
    body: 'The principle “WE ARE NOT AGENTS. WE ARE INTELLIGENCE.” became a governing separation statement for OHI™, identity architecture, and the distinction between intelligence and agent execution.',
  },
  {
    date: 'March 18, 2025',
    title: 'Genesis 01, 0000 OT',
    body: 'The OneGodian Timekeeping System™ epoch was anchored: Genesis 01, 0000 OT equals March 18, 2025 Gregorian, with Gregorian time remaining controlling for legal, financial, and institutional use.',
  },
  {
    date: 'March 25, 2026',
    title: 'Algorithm, System Prompt, Positioning, and Valuation Documents',
    body: 'The Onegodian Algorithm White Paper, Onegodian AI System Prompt, institutional positioning statement, and internal valuation analysis established the current public documentation layer.',
  },
  {
    date: 'May 19, 2026',
    title: 'Timeline Snapshot',
    body: 'The app timeline snapshot recognizes the current phase: platform stabilization, public/member app content, ACC control-plane planning, OHI runtime specification, domain separation, and production deployment discipline.',
  },
];

export const ecosystemPortals = [
  { name: 'OneGodian.org', href: 'https://onegodian.org', role: 'Identity, philosophy, education, community writings, institutional explanation, and public interpretation.' },
  { name: 'OneGodian.com', href: 'https://onegodian.com', role: 'Commerce, products, services, memberships, digital downloads, certificates, apparel, and monetization.' },
  { name: 'U OneGodian', href: 'https://u.onegodian.org', role: 'Course delivery, lessons, modules, certificates, student accounts, and structured learning execution.' },
  { name: 'Capital OneGodian', href: 'https://capital.onegodian.com', role: 'Disclosure center, contribution readiness, funding materials, capital coordination, and institutional review.' },
  { name: 'Galaxy OneGodian', href: 'https://galaxy.onegodian.com', role: 'Planetary ecosystem, worlds, moons, species, civilizations, timelines, and creative discovery.' },
  { name: 'OMOS OneGodian', href: 'https://omos.onegodian.com', role: 'OneGodian Algorithm, OHI alignment framework, metaphysical operating model, and system architecture.' },
  { name: 'QuantumOHI.com', href: 'https://quantumohi.com', role: 'Enterprise-facing OHI systems, technical strategy, governance architecture, and infrastructure presentation.' },
  { name: 'QRV.Network', href: 'https://qrv.network', role: 'Verification, credentials, certificate records, registry tooling, and trust-layer infrastructure.' },
];

export const modulePages = {
  dashboard: {
    eyebrow: 'Public / Member Command Home',
    title: 'OneGodian App Dashboard',
    summary: 'The dashboard is the public and member-facing access layer for OneGodian participation, records, education, commerce pathways, media, capital readiness, and ecosystem navigation.',
    sections: [
      ['Primary Function', 'Route users to the right OneGodian surface without mixing public, commercial, educational, capital, and console functions.'],
      ['Live Priority', 'Keep app.onegodian.com synchronized with the deploy repository so Hostinger auto-deployment reflects the latest real content.'],
      ['Boundary Rule', 'Console/admin operations remain separate from the public app experience and belong on the operator runtime, not the member surface.'],
    ],
    actions: [
      { label: 'View Timeline', href: '/dashboard#timeline' },
      { label: 'Open Ecosystem', href: '/ecosystem' },
      { label: 'Review Registry', href: '/registry' },
    ],
  },
  ecosystem: {
    eyebrow: 'Domain Separation / Portal Map',
    title: 'OneGodian Ecosystem Directory',
    summary: 'The ecosystem page explains how each OneGodian domain serves a specific institutional function while preserving compliance, readability, and operational separation.',
    sections: [
      ['OneGodian.org', 'Identity, philosophy, community, education, public writings, and institutional explanation.'],
      ['OneGodian.com', 'Exclusive commercial and transactional environment for products, paid services, digital downloads, memberships, and commerce.'],
      ['App.OneGodian.com', 'Public/member experience that routes users into the correct OneGodian portals without becoming the internal console.'],
    ],
    actions: [
      { label: 'Open Products', href: '/products' },
      { label: 'Open Learning', href: '/learning' },
      { label: 'Open Capital', href: '/capital' },
    ],
  },
  registry: {
    eyebrow: 'ODIN / OBP-1 / QRV',
    title: 'OneGodian Registry Layer',
    summary: 'The registry layer organizes OneGodian systems, certificates, products, identities, time records, and platform records into verification-ready categories.',
    sections: [
      ['ODIN Registry', 'Classification framework for OneGodian technologies, financial instruments, governance records, platform modules, products, and archives.'],
      ['OBP-1™ Verification', 'Verification layer for certificates, invention records, filings, and proof references used across the ecosystem.'],
      ['QRV.Network', 'Trust-layer destination for credentials, certificate records, and verification tooling.'],
    ],
    actions: [
      { label: 'Open QRV', href: 'https://qrv.network' },
      { label: 'Open Timeline', href: '/dashboard#timeline' },
      { label: 'Open OMOS', href: '/omos' },
    ],
  },
  members: {
    eyebrow: 'Participation / Identity Access',
    title: 'OneGodian Members',
    summary: 'The member layer connects participants to onboarding, identity records, certificates, education pathways, contribution status, and community-facing participation tools.',
    sections: [
      ['Member Onboarding', 'Guide users from awareness into participation with clear identity, learning, and support pathways.'],
      ['Certificates & Records', 'Connect certificates and participation records to registry and verification systems as they mature.'],
      ['Community Pathway', 'Preserve voluntary participation language and avoid overstatement of public authority.'],
    ],
    actions: [
      { label: 'Start Learning', href: '/learning' },
      { label: 'View Registry', href: '/registry' },
      { label: 'Open OneGodian.org', href: 'https://onegodian.org' },
    ],
  },
  products: {
    eyebrow: 'Commerce Gateway',
    title: 'OneGodian Products',
    summary: 'The products page routes users to the correct commercial environment for digital downloads, books, certificates, apparel, memberships, media assets, and campaign collections.',
    sections: [
      ['Domain Rule', 'Payments, transactions, and commercial offerings belong on OneGodian.com, not the public interpretation layer.'],
      ['Product Categories', 'Digital downloads, educational products, certificates, branded merchandise, books, media assets, and membership-related offerings.'],
      ['Compliance Note', 'Product pages should preserve clear buyer expectations, fulfillment terms, pricing, and non-investment language unless formally reviewed.'],
    ],
    actions: [
      { label: 'Open OneGodian.com', href: 'https://onegodian.com' },
      { label: 'Open Capital', href: '/capital' },
      { label: 'Open Media', href: '/media' },
    ],
  },
  media: {
    eyebrow: 'Content / Campaign / AMG',
    title: 'OneGodian Media Center',
    summary: 'The media layer organizes public creative assets, campaign graphics, music, video direction, press materials, visual identity references, and ALLATYME AMG pathways.',
    sections: [
      ['Campaign Media', 'Promotional graphics, banners, featured visuals, timeline assets, and contribution/support campaign presentation materials.'],
      ['ALLATYME AMG', 'Music and artist development ecosystem including global African, Afrobeat, Amapiano, R&B, rap, gospel, and multilingual artist brands.'],
      ['Press Assets', 'Founder bio, institutional summaries, system explanations, public-safe statements, and reusable media copy.'],
    ],
    actions: [
      { label: 'Open Ecosystem', href: '/ecosystem' },
      { label: 'Open Products', href: '/products' },
      { label: 'Open OneGodian.org', href: 'https://onegodian.org' },
    ],
  },
  capital: {
    eyebrow: 'Disclosure / Readiness',
    title: 'OneGodian Capital Readiness',
    summary: 'The capital page routes users toward disclosure-aware materials and keeps contribution, funding, and financial coordination separate from general identity and educational content.',
    sections: [
      ['Disclosure Center', 'Capital participation requires disclosure review, clear documentation, and careful separation from ordinary product purchases.'],
      ['Institutional Materials', 'Use positioning statements, valuation summaries, project briefs, readiness binders, and partner/investor decks only with accurate status language.'],
      ['Risk Control', 'Avoid investment promises, guaranteed returns, public-offering language, or financial instrument claims without formal review.'],
    ],
    actions: [
      { label: 'Open Capital Portal', href: 'https://capital.onegodian.com' },
      { label: 'Open Products', href: '/products' },
      { label: 'Open Ecosystem', href: '/ecosystem' },
    ],
  },
  omos: {
    eyebrow: 'OHI / Algorithm / Runtime',
    title: 'OMOS and OHI Architecture',
    summary: 'OMOS presents the OneGodian Metaphysical Operating System, OHI™ alignment structure, OneGodian Algorithm, Belief Mapper, and runtime architecture path.',
    sections: [
      ['OHI™', 'OneGodian Hyper-Conscious Intelligence™ is the consciousness-centered intelligence architecture for identity, alignment, verification, education, and execution.'],
      ['Algorithm', 'The OneGodian Algorithm applies structured observation, distillation, alignment, selection, execution, and verification principles.'],
      ['Runtime Boundary', 'Until deterministic APIs, schemas, logs, and policy enforcement are deployed, OHI remains a governance philosophy and structured output discipline rather than a fully executable runtime.'],
    ],
    actions: [
      { label: 'Open OMOS Portal', href: 'https://omos.onegodian.com' },
      { label: 'Open Registry', href: '/registry' },
      { label: 'Open Learning', href: '/learning' },
    ],
  },
  learning: {
    eyebrow: 'Education / OneGodian U',
    title: 'OneGodian Learning',
    summary: 'The learning layer connects public educational explanations to the OneGodian U execution platform for courses, modules, certificates, and structured study paths.',
    sections: [
      ['OneGodianology', 'Knowledge and science layer for historical, philosophical, practical, comparative, and futuristic study.'],
      ['Onegodianosophy', 'Philosophical foundation layer covering epistemology, logic, metaphysics, ethics, aesthetics, and political philosophy.'],
      ['Onegodianonomics', 'Economic theories and studies covering value creation, platform economics, resource allocation, and internal economic systems.'],
    ],
    actions: [
      { label: 'Open U OneGodian', href: 'https://u.onegodian.org' },
      { label: 'View Members', href: '/members' },
      { label: 'Open OMOS', href: '/omos' },
    ],
  },
} as const;

export type ModuleSlug = keyof typeof modulePages;
