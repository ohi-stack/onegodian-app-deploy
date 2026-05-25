const primaryModules = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    eyebrow: 'Member Home',
    description:
      'Open the main OneGodian App dashboard for identity, membership access, certificates, campaigns, tools, and ecosystem navigation.',
  },
  {
    name: 'Membership',
    href: '/members',
    eyebrow: 'Access',
    description:
      'Connect members to onboarding, participation records, member status, profile tools, and future OneGodian ID functions.',
  },
  {
    name: 'Certificates',
    href: '/certificates',
    eyebrow: 'Verification',
    description:
      'View certificate records, completion placeholders, verification metadata, QRV links, and issued-document pathways.',
  },
  {
    name: 'Remember Campaign',
    href: '/campaigns/remember',
    eyebrow: 'Live Campaign',
    description:
      'Access THE ONEGODIAN: Remember Campaign resources, media assets, captions, product links, and participation tools.',
  },
  {
    name: 'OneGodian Time™',
    href: '/time',
    eyebrow: 'OTS-V5',
    description:
      'Open the OneGodian Time interface, dual-date records, conversion references, and timekeeping modules.',
  },
  {
    name: 'Dual Dating System™',
    href: '/time/dual-dating',
    eyebrow: 'Records',
    description:
      'Use legal-safe dual-date formatting for certificates, archives, filings, dashboards, publications, and app records.',
  },
  {
    name: 'Registry',
    href: '/registry',
    eyebrow: 'ODIN / OBP-1',
    description:
      'Navigate ODIN categories, OBP-1 verification concepts, certificate records, product records, and system records.',
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
    eyebrow: 'Store Link',
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
    name: 'Tools',
    href: '/tools',
    eyebrow: 'Utilities',
    description:
      'Open app-safe utilities for lookup, conversion, verification, campaign support, and ecosystem access.',
  },
  {
    name: 'Ecosystem',
    href: '/ecosystem',
    eyebrow: 'Portals',
    description:
      'Navigate OneGodian.org, OneGodian.com, U OneGodian, Galaxy, Capital, OMOS, and the separate Console.',
  },
];

const statusItems = [
  'App deployment live at app.onegodian.com',
  'Public/member-facing app boundary active',
  'Console separated at console.onegodian.com',
  'Campaign, membership, certificate, media, product, and learning modules staged',
  'API manifest, health, tools, and stats routes reserved for app-safe runtime checks',
];

const ecosystemPortals = [
  { name: 'OneGodian.org', role: 'Official public identity, writings, remembrance, articles, and institutional explanation.', href: 'https://onegodian.org' },
  { name: 'OneGodian.com', role: 'Store, products, memberships, commerce, apparel, books, and digital downloads.', href: 'https://onegodian.com' },
  { name: 'U OneGodian', role: 'Education, LMS, learning paths, student tools, and certificates.', href: 'https://u.onegodian.org' },
  { name: 'Galaxy OneGodian', role: 'Galaxy interface, planet navigator, planet-store gateway, and immersive ecosystem layer.', href: 'https://galaxy.onegodian.com' },
  { name: 'Capital OneGodian', role: 'Capital portal, disclosure center, contribution materials, and financial readiness.', href: 'https://capital.onegodian.com' },
  { name: 'OMOS OneGodian', role: 'OMOS protocol, specification, alignment system, and consciousness-centered operating model.', href: 'https://omos.onegodian.com' },
  { name: 'OneGodian Console', role: 'Separate internal command console for apps, plugins, deployments, APIs, and operations.', href: 'https://console.onegodian.com' },
];

const nextPriorities = [
  'Replace placeholder module pages with real member-facing page content.',
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
            <a href="/members">Membership</a>
            <a href="/certificates">Certificates</a>
            <a href="/campaigns/remember">Remember</a>
            <a href="/media">Media</a>
            <a href="/ecosystem">Ecosystem</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="kicker">APP.ONEGODIAN.COM · MEMBER-FACING APP</p>
            <h1>OneGodian App</h1>
            <p className="hero-copy">
              Your unified OneGodian dashboard for membership, certificates, campaigns, media, products,
              learning, tools, OneGodian Time, registry access, and ecosystem navigation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/dashboard">Open Dashboard</a>
              <a className="button secondary" href="/ecosystem">Explore Ecosystem</a>
              <a className="button secondary" href="/campaigns/remember">Remember Campaign</a>
            </div>
          </div>

          <aside className="status-panel" aria-label="App status">
            <p className="panel-label">App Status</p>
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
            This app is no longer positioned as the console or central infrastructure layer. It is the
            public and member-facing OneGodian App for access, participation, records, media, learning,
            products, campaign resources, and ecosystem navigation.
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
            The OneGodian App serves as a clean gateway into the current ecosystem foundation while keeping
            commerce, public publishing, education, capital, OMOS, Galaxy, and internal console operations on
            their proper domains.
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
            The homepage now reflects the real OneGodian App purpose. The next production pass should fill each
            module route with structured content, data, links, and app-safe workflows.
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
