import { appModules, onegodianContentLibrary } from '@/data/onegodianContent';

const statusItems = [
  'Production deploy repository is onegodian-app-deploy.',
  'Public/member app boundary is active at app.onegodian.com.',
  'Console-only controls remain outside this app surface.',
  'Core modules are staged for dashboard, ecosystem, registry, members, products, media, capital, OMOS, and learning.',
  'API endpoints are available for health, manifest, tools, and stats.'
];

const portals = [
  { name: 'OneGodian.org', href: 'https://onegodian.org', role: 'Public interpretation, writings, remembrance, education, and institutional explanation.' },
  { name: 'OneGodian.com', href: 'https://onegodian.com', role: 'Commerce engine for products, memberships, books, certificates, apparel, and downloads.' },
  { name: 'U OneGodian', href: 'https://u.onegodian.org', role: 'Courses, certifications, learning dashboards, onboarding, and education pathways.' },
  { name: 'Galaxy OneGodian', href: 'https://galaxy.onegodian.com', role: 'Planets, moons, civilizations, timelines, lore, and visual discovery.' },
  { name: 'Capital OneGodian', href: 'https://capital.onegodian.com', role: 'Disclosure-aware capital readiness, contribution materials, and funding coordination.' },
  { name: 'OMOS OneGodian', href: 'https://omos.onegodian.com', role: 'Algorithm, operating model, AI interaction framework, and system architecture.' },
  { name: 'QuantumOHI.com', href: 'https://quantumohi.com', role: 'Enterprise-facing systems, infrastructure architecture, and OHI technical strategy.' },
  { name: 'QRV.Network', href: 'https://qrv.network', role: 'Verification, credentials, certificates, registry records, and trust-layer infrastructure.' }
];

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-shell">
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="/" className="brand-mark">OneGodian App</a>
          <div className="nav-links">
            {appModules.map((module) => <a href={module.href} key={module.href}>{module.title}</a>)}
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="kicker">ONEGODIAN PLATFORM · APP.ONEGODIAN.COM</p>
            <h1>OneGodian App</h1>
            <p className="hero-copy">
              The public and member-facing application layer for the OneGodian ecosystem. Use this app to move through dashboard access, member tools, registry records, products, media, learning, OMOS, capital readiness, and connected platform gateways without mixing in console-only command functions.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/dashboard">Open Dashboard</a>
              <a className="button secondary" href="/members">Members</a>
              <a className="button secondary" href="/registry">Registry</a>
              <a className="button secondary" href="/learning">Learning</a>
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
          <p className="kicker">Core App Modules</p>
          <h2>Real production routes</h2>
          <p>Each module represents a public or member-facing app area. Privileged execution, approvals, logs, deployment controls, adapters, and command-console functions belong on the separate Console surface.</p>
        </div>
        <div className="module-grid">
          {appModules.map((module) => (
            <a key={module.href} href={module.href} className="module-card">
              <span>App Route</span>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Seeded Content Library</p>
          <h2>Documents and systems now driving the app</h2>
          <p>The app is being populated from a structured OneGodian content library instead of generic placeholder cards.</p>
        </div>
        <div className="module-grid">
          {onegodianContentLibrary.map((item) => (
            <a className="module-card" href={item.route} key={item.slug}>
              <span>{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="section-heading">
          <p className="kicker">Ecosystem Directory</p>
          <h2>Connected OneGodian properties</h2>
          <p>The app is the experience gateway. Commerce, education, capital, OMOS, Galaxy, verification, and internal console responsibilities remain separated by domain.</p>
        </div>
        <div className="workflow-panel">
          {portals.map((portal) => (
            <a className="workflow-row" href={portal.href} key={portal.name}>
              <strong>{portal.name}</strong>
              <span>{portal.role}</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
