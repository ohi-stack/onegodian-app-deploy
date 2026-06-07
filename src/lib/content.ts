import { appModules, onegodianContentLibrary } from '@/data/onegodianContent';

export type RoutePageContent = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  sections: string[];
  cta?: { label: string; href: string };
};

export const routePages: Record<string, RoutePageContent> = {
  dashboard: {
    slug: 'dashboard',
    title: 'Dashboard',
    eyebrow: 'Central Access',
    headline: 'Unified production view for the OneGodian platform ecosystem.',
    summary:
      'The dashboard organizes platform status, deployments, members, certificates, products, learning modules, capital readiness, and QRV verification status into one mobile-first command view.',
    sections: [
      'Platform Status',
      'Latest Deployments',
      'Member Count',
      'Certificates',
      'Products',
      'Learning Modules',
      'Capital Readiness',
      'QRV Verification Status',
    ],
  },
  ecosystem: {
    slug: 'ecosystem',
    title: 'Ecosystem',
    eyebrow: 'Domain Hierarchy',
    headline: 'The OneGodian ecosystem is organized by clear domain roles.',
    summary:
      'The app routes users into the correct ecosystem layer: public identity, commerce, education, app infrastructure, OMOS systems, capital readiness, enterprise architecture, and QRV verification.',
    sections: [
      'OneGodian.org',
      'OneGodian.com',
      'u.OneGodian.com',
      'app.OneGodian.com',
      'OMOS.OneGodian.com',
      'capital.OneGodian.com',
      'QuantumOHI.com',
      'QRV.Network',
    ],
  },
  registry: {
    slug: 'registry',
    title: 'Registry',
    eyebrow: 'Records / Verification',
    headline: 'Registry access for OneGodian records, identifiers, systems, and verification.',
    summary:
      'The registry area organizes ODIN records, certificates, products, identity records, systems, and verification references so public and member-facing records stay traceable.',
    sections: ['ODIN', 'Certificates', 'Products', 'Identity', 'Systems', 'Verification'],
  },
  members: {
    slug: 'members',
    title: 'Members',
    eyebrow: 'Participation Layer',
    headline: 'Member infrastructure for identity, participation, certificates, and records.',
    summary:
      'The members area supports voluntary participation, member dashboard access, Digital OneGodian ID concepts, certificates, and participation records.',
    sections: ['Member Dashboard', 'Digital OneGodian ID', 'Member Certificates', 'Participation Records'],
  },
  learning: {
    slug: 'learning',
    title: 'Learning',
    eyebrow: 'Education Architecture',
    headline: 'Learning pathways connect public knowledge, courses, and certifications.',
    summary:
      'Learning routes users toward University of OneGodian, Onegodianology, Onegodianese, OTS-V5 education, and certification pathways.',
    sections: ['University of OneGodian', 'Onegodianology', 'Onegodianese', 'OTS-V5', 'Certifications'],
  },
  omos: {
    slug: 'omos',
    title: 'OMOS',
    eyebrow: 'Operational Intelligence',
    headline: 'OMOS connects the OneGodian Algorithm, OHI, identity mapping, and runtime systems.',
    summary:
      'The OMOS area connects OneGodian Algorithm references, OHI runtime architecture, Identity & Belief Mapper logic, institutional layer records, AGI alignment, economic cosmos concepts, and philosophy references.',
    sections: [
      'OneGodian Algorithm',
      'OHI',
      'Identity & Belief Mapper',
      'Institutional Layer',
      'AGI Alignment',
      'Unified Economic Cosmos',
      'Cosmos & Philosophy',
    ],
  },
  capital: {
    slug: 'capital',
    title: 'Capital',
    eyebrow: 'Readiness / Revenue Systems',
    headline: 'Capital readiness aligns infrastructure, disclosures, funding, and revenue systems.',
    summary:
      'The capital area focuses on institutional positioning, infrastructure readiness, valuation references, disclosure center access, funding initiatives, and revenue systems.',
    sections: [
      'Positioning Statement',
      'Infrastructure Readiness',
      'Business Valuation',
      'Disclosure Center',
      'Funding Initiatives',
      'Revenue Systems',
    ],
  },
};

export function getContentByRoute(route: string) {
  return onegodianContentLibrary.filter((item) => item.route === route || item.route.startsWith(`${route}/`));
}

export function getModuleByHref(href: string) {
  return appModules.find((module) => module.href === href);
}

export const dashboardStats = [
  { label: 'Platform Status', value: 'Live', detail: 'app.onegodian.com active' },
  { label: 'Latest Deployments', value: 'Synced', detail: 'Deploy repo content source active' },
  { label: 'Member Count', value: 'Ready', detail: 'Member dashboard route staged' },
  { label: 'Certificates', value: 'QRV', detail: 'Verification path prepared' },
  { label: 'Products', value: 'Commerce', detail: 'OneGodian.com routing model' },
  { label: 'Learning Modules', value: 'U', detail: 'u.OneGodian.com education model' },
  { label: 'Capital Readiness', value: 'Gate', detail: 'Disclosure-first references' },
  { label: 'QRV Verification Status', value: 'Layer', detail: 'QRV.Network trust infrastructure' },
];
