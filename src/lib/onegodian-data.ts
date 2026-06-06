export const productionMeta = {
  appName: 'The OneGodian App',
  domain: 'app.onegodian.com',
  repository: 'ohi-stack/onegodian-app-deploy',
  deploymentRole: 'public-member-product-surface',
  version: '0.2.0',
  updated: '2026-06-04',
  status: 'production-content-pass',
  legalBoundary:
    'ONEGODIAN, LLC is the commercial, software, publishing, infrastructure, and operational enterprise layer. INO religious/internal governance content remains separate from the LLC product surface.',
};

export type AppRoute = {
  name: string;
  path: string;
  eyebrow: string;
  description: string;
  actions: string[];
};

export const appRoutes: AppRoute[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    eyebrow: 'Command Home',
    description:
      'Public and member-facing access point for status, quick actions, module navigation, member tools, product links, certificates, and ecosystem routing.',
    actions: ['Open module map', 'Review production status', 'Route users to the right surface'],
  },
  {
    name: 'Ecosystem',
    path: '/ecosystem',
    eyebrow: 'Portal Directory',
    description:
      'Canonical directory for OneGodian.org, OneGodian.com, U OneGodian, Galaxy, Capital, OMOS, QuantumOHI, QRV, and Console separation.',
    actions: ['Separate public, commerce, education, verification, and console surfaces', 'Reduce fragmentation'],
  },
  {
    name: 'ODIN Registry',
    path: '/registry',
    eyebrow: 'Records / Verification',
    description:
      'Structured registry surface for ODIN categories, products, systems, certificates, identity records, and verification-ready public records.',
    actions: ['Display registry categories', 'Prepare QRV verification links', 'Standardize record pages'],
  },
  {
    name: 'Members',
    path: '/members',
    eyebrow: 'Access / Identity',
    description:
      'Member onboarding, profile access, membership status, digital ID concepts, certificates, and WordPress member bridge readiness.',
    actions: ['Connect OneGodian Members plugin', 'Expose member status checks', 'Support certificates and onboarding'],
  },
  {
    name: 'Products',
    path: '/products',
    eyebrow: 'Commerce',
    description:
      'Commerce route for apparel, books, digital downloads, memberships, founder products, courses, certificates, and Remember campaign products.',
    actions: ['Connect OneGodian.com commerce', 'Prepare WooCommerce sync', 'Route support purchases'],
  },
  {
    name: 'Media',
    path: '/media',
    eyebrow: 'Assets / Campaigns',
    description:
      'Media library for campaign visuals, featured images, ALLATYME links, video covers, press assets, posters, and public promotional resources.',
    actions: ['Organize featured images', 'Link public campaign assets', 'Support social distribution'],
  },
  {
    name: 'Capital',
    path: '/capital',
    eyebrow: 'Disclosure-Aware Readiness',
    description:
      'Capital readiness surface for disclosure center routing, contribution materials, infrastructure funding overview, and non-approval software notices.',
    actions: ['Connect OneGodian Capital plugin', 'Display disclosure status', 'Keep securities language cautious'],
  },
  {
    name: 'OMOS',
    path: '/omos',
    eyebrow: 'Operating Model',
    description:
      'OneGodian Metaphysical Operating System route for the OneGodian Algorithm, OHI interaction architecture, identity mapping, and implementation tools.',
    actions: ['Display OMOS layers', 'Connect tool manifest', 'Support alignment and identity utilities'],
  },
  {
    name: 'Learning',
    path: '/learning',
    eyebrow: 'Education',
    description:
      'Education pathway for U OneGodian, courses, certifications, onboarding tracks, educational materials, and student/member learning dashboards.',
    actions: ['Route learners to courses', 'Prepare certificates', 'Document every module clearly'],
  },
  {
    name: 'Tools',
    path: '/tools',
    eyebrow: 'Utilities',
    description:
      'Tool directory for app health, manifest, registry tools, certificate checks, OMOS helpers, plugin bridge tests, and production diagnostics.',
    actions: ['Expose API tools', 'Verify bridge health', 'Support production checks'],
  },
  {
    name: 'Certificates',
    path: '/certificates',
    eyebrow: 'Credentials / Records',
    description:
      'Credential and certificate route for member certificates, product certificates, registry certificates, QRV records, and downloadable proofs.',
    actions: ['Prepare certificate records', 'Link QRV verification', 'Support member and product credentials'],
  },
];

export const ecosystemPortals = [
  { name: 'OneGodian.org', url: 'https://onegodian.org', role: 'Public interpretation, writings, remembrance, articles, education, archives, and institutional explanation.' },
  { name: 'OneGodian.com', url: 'https://onegodian.com', role: 'Commerce engine for merchandise, books, digital downloads, memberships, founder products, courses, and campaign products.' },
  { name: 'U OneGodian', url: 'https://u.onegodian.org', role: 'Education, LMS, learning paths, onboarding, certifications, and student tools.' },
  { name: 'App OneGodian', url: 'https://app.onegodian.com', role: 'Unified public/member app for dashboards, registries, identity systems, products, media, tools, OMOS, and ecosystem navigation.' },
  { name: 'Capital OneGodian', url: 'https://capital.onegodian.com', role: 'Disclosure center, capital readiness, contribution materials, and financial coordination presentation.' },
  { name: 'OMOS OneGodian', url: 'https://omos.onegodian.com', role: 'Operating model, OneGodian Algorithm, OHI interaction framework, identity-aware infrastructure, and operational logic.' },
  { name: 'QuantumOHI.com', url: 'https://quantumohi.com', role: 'Enterprise-facing systems, OHI framework presentation, infrastructure architecture, and technical strategy.' },
  { name: 'QRV.Network', url: 'https://qrv.network', role: 'Verification, digital credentials, registry infrastructure, certificates, and trust-layer tooling.' },
  { name: 'Console OneGodian', url: 'https://console.onegodian.com', role: 'Separate operator/admin runtime surface for internal console, agents, workflows, logs, and control-plane activity.' },
];

export const wordpressBridges = [
  {
    name: 'OneGodian Members',
    slug: 'onegodian-members',
    status: 'bridge-ready',
    purpose: 'Member records, profile access, membership status, digital ID concepts, onboarding, and certificate routing.',
    expectedEndpoints: ['/wp-json/onegodian-members/v1/status', '/wp-json/onegodian-members/v1/member', '/wp-json/onegodian-members/v1/certificates'],
  },
  {
    name: 'OneGodian Platform',
    slug: 'onegodian-platform',
    status: 'bridge-ready',
    purpose: 'Platform manifest, modules, app bridge settings, submissions, tools, production checklist, and documentation synchronization.',
    expectedEndpoints: ['/wp-json/onegodian-platform/v1/status', '/wp-json/onegodian-platform/v1/manifest', '/wp-json/onegodian-platform/v1/tools'],
  },
  {
    name: 'OneGodian Capital',
    slug: 'onegodian-capital',
    status: 'bridge-ready-disclosure-required',
    purpose: 'Disclosure center, capital presentation records, contribution readiness, certificates, and non-approval software notices.',
    expectedEndpoints: ['/wp-json/onegodian-capital/v1/status', '/wp-json/onegodian-capital/v1/disclosures', '/wp-json/onegodian-capital/v1/certificates'],
  },
];

export const registryCategories = [
  'ODIN Registry',
  'Certificates',
  'Products',
  'Identity',
  'Systems',
  'Planets',
  'Moons',
  'Timekeeping',
  'OMOS Tools',
  'Capital Records',
];

export const productionChecks = [
  'onegodian-app-deploy is the deployment source of truth',
  'app.onegodian.com remains public/member-facing',
  'console.onegodian.com remains the operator/admin surface',
  'API endpoints expose health, manifest, tools, and stats',
  'WordPress bridges are declared for Members, Platform, and Capital',
  'Capital language remains disclosure-aware and does not approve offerings or investor eligibility',
];

export function findRoute(path: string) {
  return appRoutes.find((route) => route.path === path);
}
