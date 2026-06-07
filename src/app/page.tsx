const primaryModules = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    eyebrow: 'Command Home',
    description:
      'Open the main OneGodian App dashboard for identity, membership access, certificates, campaigns, tools, deployment status, and ecosystem navigation.',
  },
  {
    name: 'Production Operations',
    href: '/production',
    eyebrow: 'Live Ops',
    description:
      'Open the production control surface for deployment status, endpoint checks, launch discipline, build/redeploy rules, and release accountability.',
  },
  {
    name: 'OneGodian Galaxy™',
    href: '/galaxy',
    eyebrow: 'Galaxy Parent Module',
    description:
      'Explore the canonical Galaxy layer for planets, moons, civilizations, sentient life, timelines, planetary systems, and visual discovery.',
  },
  {
    name: 'ODIN Registry',
    href: '/registry',
    eyebrow: 'Records / Verification',
    description:
      'Navigate ODIN categories, OBP-1 verification concepts, certificate records, product records, platform records, and system records.',
  },
  {
    name: 'OneGodian Time™',
    href: '/time',
    eyebrow: 'OTS-V5',
    description:
      'Open the OneGodian Time interface, dual-date records, conversion references, epoch rules, and timekeeping modules.',
  },
  {
    name: 'Dual Dating System™',
    href: '/time/dual-dating',
    eyebrow: 'Records',
    description:
      'Use legal-safe dual-date formatting for certificates, archives, filings, dashboards, publications, and app records.',
  },
  {
    name: 'Members',
    href: '/members',
    eyebrow: 'Access',
    description:
      'Connect members to onboarding, participation records, member status, profile tools, certificates, and OneGodian ID functions.',
  },
  {
    name: 'OMOS',
    href: '/omos',
    eyebrow: 'Operating Model',
    description:
      'Access the OneGodian Metaphysical Operating System layer for algorithm, belief mapping, alignment, and runtime architecture.',
  },
  {
    name: 'Capital',
    href: '/capital',
    eyebrow: 'Readiness',
    description:
      'Open the disclosure-aware capital readiness surface for contributions, infrastructure funding, and financial coordination.',
  },
  {
    name: 'Media Center',
    href: '/media',
    eyebrow: 'Assets',
    description:
      'Access OneGodian visuals, campaign media, music/video links, press assets, posters, and public content libraries.',
  },
  {
    name: 'Products',
    href: '/products',
    eyebrow: 'Commerce',
    description:
      'Connect to OneGodian products, digital downloads, apparel, books, certificates, memberships, and campaign collections.',
  },
  {
    name: 'Learning',
    href: '/learning',
    eyebrow: 'U OneGodian',
    description:
      'Connect learners to courses, educational tracks, certificates, student tools, and OneGodian knowledge resources.',
  },
  {
    name: 'Ecosystem',
    href: '/ecosystem',
    eyebrow: 'Portals',
    description:
      'Navigate OneGodian.org, OneGodian.com, U OneGodian, Galaxy, Capital, OMOS, QRV, and the separate Console.',
  },
];

const statusItems = [
  'App deployment live at app.onegodian.com',
  'GitHub auto-deployment connected through Hostinger',
  'Production Operations Dashboard staged at /production',
  'Public/member-facing app boundary active',
  'Galaxy, registry, time, members, OMOS, media, products, learning, and capital modules staged',
  'Console and internal administration remain separate from the public app',
];

const ecosystemPortals = [
  { name: 'OneGodian.org', role: 'Public interpretation, writings, remembrance, articles, education, and institutional explanation.', href: 'https://onegodian.org' },
  { name: 'OneGodian.com', role: 'Commerce engine for products, memberships, books, certificates, apparel, and digital downloads.', href: 'https://onegodian.com' },
  { name: 'U OneGodian', role: 'Education, LMS, learning paths, student tools, certificates, and onboarding pathways.', href: 'https://u.onegodian.org' },
  { name: 'Galaxy OneGodian', role: 'Cosmos, planets, moons, civilizations, timelines, lore, and interactive discovery.', href: 'https://galaxy.onegodian.com' },
  { name: 'Capital OneGodian', role: 'Disclosure center, contribution materials, capital readiness, and financial coordination.', href: 'https://capital.onegodian.com' },
  { name: 'OMOS OneGodian', role: 'OneGodian Algorithm, operating model, AI interaction framework, and system architecture.', href: 'https://omos.onegodian.com' },
  { name: 'QuantumOHI.com', role: 'Enterprise-facing systems, OHI framework presentation, infrastructure architecture, and technical strategy.', href: 'https://quantumohi.com' },
  { name: 'QRV.Network', role: 'Verification, credentials, certificates, trust-layer infrastructure, and registry tooling.', href: 'https://qrv.network' },
];

const nextPriorities = [
  'Keep app.onegodian.com synced with the deploy repository after every content update.',
  'Use /production as the live operations checklist after each Codex merge.',
  'Fill each module route with structured content, status data, and clear calls to action.',
  'Connect certificates to QRV verification and certificate record pages.',
  'Connect products to OneGodian.com commerce categories and campaign collections.',
  'Connect learning modules to U OneGodian courses and education pathways.',
  'Keep admin, logs, plugins, deployments, and control-plane functions on the separate Console.',
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-shell">
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="/" className="brand-mark">OneGodian App</a>
          <div className="nav-links">
            <a href="/dashboard">Dashboard</a>
            <a href="/production">Production</a>
            <a href="/galaxy">Galaxy</a>
            <a href="/registry">Registry</a>
            <a href="/time">Time</a>
            <a href="/members">Members</a>
            <a href="/omos">OMOS</a>
            <a href="/ecosystem">Ecosystem</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="kicker">ONEGODIAN PLATFORM · APP.ONEGODIAN.COM</p>
            <h1>OneGodian Everything App</h1>
            <p className="hero-copy">
              The public and member-facing command dashboard for the OneGodian digital ecosystem: Galaxy,
              ODIN registry, OneGodian Time™, members, certificates, media, learning, products, OMOS,
              capital readiness, tools, production operations, and connected platform infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/dashboard">Open Dashboard</a>
              <a className="button secondary" href="/production">Production Operations</a>
              <a className="button secondary" href="/galaxy">Explore Galaxy</a>
              <a className="button secondary" href="/ecosystem">View Ecosystem</a>
            </div>
          </div>

          <aside className="status-panel" aria-label="App status">
            <p className="panel-label">Production Status</p>
            {statusItems.map((status) => (
              <div className="status-row" key={status}>
                <span className="status-dot" />
                <span>{status}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Public / Member Modules</p>
          <h2>Real app areas now staged</h2>
          <p>
            The app is now the public and member-facing access point for participation, records, media,
            learning, products, campaign resources, Galaxy navigation, production status, and ecosystem coordination.
          </p>
        </div>

        <div className="module-grid">
          {primaryModules.map((module) => (
            <a key={module.href} href={module.href} className="module-card">
              <span>{module.eyebrow}</span>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="section-heading">
          <p className="kicker">Ecosystem Directory</p>
          <h2>Connected OneGodian properties</h2>
          <p>
            The app serves as a clean gateway into the current ecosystem foundation while keeping commerce,
            public interpretation, education, capital, OMOS, Galaxy, verification, and internal console
            operations on their proper domains.
          </p>
        </div>

        <div className="workflow-panel">
          {ecosystemPortals.map((portal) => (
            <a className="workflow-row" href={portal.href} key={portal.name}>
              <strong>{portal.name}</strong>
              <span>{portal.role}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="section-heading">
          <p className="kicker">Production Priorities</p>
          <h2>Next content and integration work</h2>
          <p>
            The homepage now reflects the real OneGodian App purpose. The next production pass should keep
            route content, deployment automation, and module data synchronized across the live deploy repository.
          </p>
        </div>

        <div className="workflow-panel">
          {nextPriorities.map((priority, index) => (
            <div className="workflow-row" key={priority}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{priority}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
