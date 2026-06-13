export type AppPage = {
  title: string;
  route: string;
  eyebrow: string;
  description: string;
  status: string;
  actions: string[];
};

export type PluginBridge = {
  name: string;
  slug: string;
  wordpressBaseUrl: string;
  description: string;
  healthEndpoint: string;
  manifestEndpoint?: string;
  adminUrl: string;
  status: string;
  tools: string[];
};

export const appPages: AppPage[] = [
  {
    title: 'Dashboard',
    route: '/dashboard',
    eyebrow: 'Command Home',
    status: 'Live shell',
    description: 'Central member-facing dashboard for app routes, production status, platform access, and next actions.',
    actions: ['Open ecosystem modules', 'Review deployment status', 'Route users to member tools']
  },
  {
    title: 'Ecosystem',
    route: '/ecosystem',
    eyebrow: 'Platform Directory',
    status: 'Live shell',
    description: 'Directory for OneGodian.org, OneGodian.com, app, capital, OMOS, Galaxy, U OneGodian, QuantumOHI, and QRV Network.',
    actions: ['Map domains', 'Separate roles', 'Keep deployment responsibilities clear']
  },
  {
    title: 'Registry',
    route: '/registry',
    eyebrow: 'ODIN / Verification',
    status: 'Staged',
    description: 'Record surface for certificates, products, identities, systems, platform records, and verification handoffs.',
    actions: ['Index records', 'Prepare QRV links', 'Connect certificates']
  },
  {
    title: 'Tools',
    route: '/tools',
    eyebrow: 'Utilities',
    status: 'Staged',
    description: 'Operational tools for health checks, manifests, stats, timekeeping, verification, and plugin bridge testing.',
    actions: ['Run health checks', 'Open manifests', 'Inspect bridge status']
  },
  {
    title: 'Members',
    route: '/members',
    eyebrow: 'Membership',
    status: 'Bridge ready',
    description: 'Member dashboard access, certificates, resources, pricing, account tools, and WordPress Members Plugin bridge.',
    actions: ['Get certificate', 'Open member dashboard', 'Check plugin health']
  },
  {
    title: 'Products',
    route: '/products',
    eyebrow: 'Commerce',
    status: 'Staged',
    description: 'Commerce gateway for memberships, books, downloads, certificates, apparel, founder products, and product collections.',
    actions: ['Connect WooCommerce', 'Route to store', 'Track product records']
  },
  {
    title: 'Media',
    route: '/media',
    eyebrow: 'Media Center',
    status: 'Staged',
    description: 'Media hub for visuals, videos, launch assets, campaign graphics, AMG/ALLATYME links, and public content libraries.',
    actions: ['Publish assets', 'Organize campaigns', 'Link media channels']
  },
  {
    title: 'Capital',
    route: '/capital',
    eyebrow: 'Capital Readiness',
    status: 'Bridge ready',
    description: 'Disclosure-aware bridge into ONEGODIAN Capital for readiness, contribution pathways, documents, and infrastructure funding.',
    actions: ['Open disclosure center', 'Connect capital plugin', 'Track readiness']
  },
  {
    title: 'OMOS',
    route: '/omos',
    eyebrow: 'Operating Model',
    status: 'Bridge ready',
    description: 'OneGodian Metaphysical Operating System reference surface for algorithm, OHI, belief mapping, legal layer, and operating logic.',
    actions: ['Open OMOS node', 'Review OHI framework', 'Connect core tools']
  },
  {
    title: 'Learning',
    route: '/learning',
    eyebrow: 'U OneGodian',
    status: 'Staged',
    description: 'Education gateway for courses, certifications, learning dashboards, onboarding paths, and member development tools.',
    actions: ['Open U OneGodian', 'Connect certifications', 'Route learners']
  }
];

export const pluginBridges: PluginBridge[] = [
  {
    name: 'OneGodian Members',
    slug: 'onegodian-members',
    wordpressBaseUrl: process.env.NEXT_PUBLIC_MEMBERS_WORDPRESS_BASE_URL || 'https://onegodian.org',
    description: 'Membership dashboard, member certificate, resources, pricing, account handoff, and admin summary bridge.',
    healthEndpoint: '/wp-json/onegodian-members/v1/health',
    manifestEndpoint: '/wp-json/onegodian-members/v1/me',
    adminUrl: '/wp-admin/admin.php?page=onegodian-members-dashboard',
    status: 'Plugin package ready; live WordPress activation required',
    tools: ['Member Dashboard', 'Get Certificate', 'Member Resources', 'Membership Pricing', 'Account / Orders', 'Admin Summary']
  },
  {
    name: 'OneGodian Platform',
    slug: 'onegodian-platform',
    wordpressBaseUrl: process.env.NEXT_PUBLIC_PLATFORM_WORDPRESS_BASE_URL || 'https://onegodian.org',
    description: 'Platform tools, submissions, forms bridge, API bridge settings, documentation, production checklist, and plugin status.',
    healthEndpoint: '/wp-json/onegodian-platform/v1/health',
    manifestEndpoint: '/wp-json/onegodian-platform/v1/manifest',
    adminUrl: '/wp-admin/admin.php?page=onegodian-platform',
    status: 'Bridge staged for WordPress plugin connection',
    tools: ['Platform Dashboard', 'Forms Bridge', 'Submissions', 'API Settings', 'Documentation', 'Status']
  },
  {
    name: 'OneGodian Capital',
    slug: 'onegodian-capital',
    wordpressBaseUrl: process.env.NEXT_PUBLIC_CAPITAL_WORDPRESS_BASE_URL || 'https://capital.onegodian.com',
    description: 'Disclosure center, readiness dashboard, capital tools, contributor intake, product cards, and app bridge integration.',
    healthEndpoint: '/wp-json/onegodian-capital/v1/health',
    manifestEndpoint: '/wp-json/onegodian-capital/v1/manifest',
    adminUrl: '/wp-admin/admin.php?page=onegodian-capital',
    status: 'Bridge staged for capital plugin and capital node connection',
    tools: ['Disclosure Center', 'Readiness Dashboard', 'Contributor Intake', 'Capital Products', 'OBP-1 Node', 'Status']
  }
];

export const deploymentStandard = {
  repository: 'ohi-stack/onegodian-app-deploy',
  deploymentDomain: 'https://app.onegodian.com',
  branch: 'main',
  nodeVersion: '20.x',
  rule: 'onegodian-app-deploy is the only deployment repository for app.onegodian.com. onegodian-app is legacy/source reference only.'
};

export function getPageByRoute(route: string) {
  return appPages.find((page) => page.route === route);
}

export function getBridgeBySlug(slug: string) {
  return pluginBridges.find((bridge) => bridge.slug === slug);
}
