const modules = [
  { name: 'Dashboard', href: '/dashboard', eyebrow: 'Command Hub', description: 'Open the central operating view for app modules, priorities, and system status.' },
  { name: 'OneGodian Time™', href: '/time', eyebrow: 'OTS-V5', description: 'Open the dual-date clock, Gregorian to OneGodian conversion standard, epoch rules, and timestamp governance.' },
  { name: 'Dual Dating System™', href: '/time/dual-dating', eyebrow: 'Date Standard', description: 'Apply legal-safe dual-date formats for records, certificates, archives, filings, dashboards, and public pages.' },
  { name: 'Ecosystem', href: '/ecosystem', eyebrow: 'System Directory', description: 'Browse connected OneGodian platforms, domains, infrastructure layers, and sync targets.' },
  { name: 'Registry', href: '/registry', eyebrow: 'ODIN Index', description: 'Access registry categories for planets, systems, certificates, products, and records.' },
  { name: 'Planets', href: '/planets', eyebrow: 'ODIN-PR', description: 'Explore the 25-world OneGodian Galaxy™ planetary registry.' },
  { name: 'Moons & Systems', href: '/moons-systems', eyebrow: 'Orbital Systems', description: 'Review moon systems, orbital continuity, expansion interfaces, and Elyndria™ structures.' },
  { name: 'Tools', href: '/tools', eyebrow: 'Utilities', description: 'Open verification, lookup, time conversion, sync monitoring, and product tooling.' },
  { name: 'Media', href: '/media', eyebrow: 'Canon Library', description: 'Access story worlds, planetary visuals, audio, posters, and video archive categories.' },
  { name: 'Products', href: '/products', eyebrow: 'Commerce', description: 'Organize digital downloads, certificates, courses, memberships, and planetary stores.' },
  { name: 'Certificates', href: '/certificates', eyebrow: 'OBP-1', description: 'Prepare certificate verification, holder records, issuer views, and QR validation flows.' },
  { name: 'Profile', href: '/profile', eyebrow: 'Identity', description: 'View account, membership, registry alignment, downloads, and certificate placeholders.' }
];

const statuses = ['Node App Live', 'Hostinger Deployment Active', 'ODIN Systems Online', 'OTS-V5 Time Active', 'Dual Dating Standard Added'];

const workflows = [
  'Sync OneGodian.org public systems into the ecosystem directory',
  'Expand ODIN registry records into reusable data modules',
  'Use UTC as system truth and display OneGodian Time as a computed derivative',
  'Connect certificate verification after Stripe and database hardening',
  'Prepare mobile-ready navigation for official v1 and app-store wrappers'
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-shell">
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="/" className="brand-mark">OneGodian App</a>
          <div className="nav-links">
            <a href="/dashboard">Dashboard</a>
            <a href="/time">Time</a>
            <a href="/time/dual-dating">Dual Dating</a>
            <a href="/ecosystem">Ecosystem</a>
            <a href="/registry">Registry</a>
            <a href="/planets">Planets</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="kicker">OneGodian Platform · app.onegodian.com</p>
            <h1>OneGodian Everything App</h1>
            <p className="hero-copy">
              The central Node/Next.js interface for the OneGodian ecosystem: ODIN registry systems,
              OneGodian Time™, planetary canon, moon systems, products, certificates, media, tools,
              and synchronized platform infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/dashboard">Open Dashboard</a>
              <a className="button secondary" href="/time">Open Time System</a>
              <a className="button secondary" href="/time/dual-dating">Dual Dating System</a>
            </div>
          </div>

          <aside className="status-panel" aria-label="Deployment status">
            <p className="panel-label">Production Status</p>
            {statuses.map((status) => (
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
          <p className="kicker">Module Wireframe</p>
          <h2>Core app navigation</h2>
          <p>
            Each module is linked from the homepage so the deployed shell behaves like a real app gateway while deeper
            database-backed workflows are added in controlled phases.
          </p>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
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
          <p className="kicker">Operating Model</p>
          <h2>Sync systems into one interface</h2>
          <p>
            WordPress remains the public narrative and commerce layer. The Node app becomes the operational interface for records,
            verification, user access, dual-date display, and system coordination.
          </p>
        </div>

        <div className="workflow-panel">
          {workflows.map((workflow, index) => (
            <div className="workflow-row" key={workflow}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{workflow}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
