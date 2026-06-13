import { appPages, deploymentStandard, pluginBridges } from '@/lib/app-content';

const portals = [
  { name: 'OneGodian.org', role: 'Public interpretation, writings, education, membership explanation, and institutional content.', href: 'https://onegodian.org' },
  { name: 'OneGodian.com', role: 'Commerce, products, digital downloads, memberships, certificates, apparel, and checkout.', href: 'https://onegodian.com' },
  { name: 'app.OneGodian.com', role: 'Public/member app dashboard, tools, registries, member infrastructure, and route gateway.', href: 'https://app.onegodian.com' },
  { name: 'capital.OneGodian.com', role: 'Capital readiness, disclosure center, contribution pathways, and capital plugin bridge.', href: 'https://capital.onegodian.com' },
  { name: 'OMOS.OneGodian.com', role: 'Operating model, OneGodian Algorithm, OHI framework, AI interaction logic, and systems architecture.', href: 'https://omos.onegodian.com' },
  { name: 'galaxy.OneGodian.com', role: 'Cosmos, planets, species, civilizations, timelines, lore, and visual discovery.', href: 'https://galaxy.onegodian.com' },
  { name: 'u.OneGodian.org', role: 'Education, courses, certifications, learning dashboards, and onboarding pathways.', href: 'https://u.onegodian.org' },
  { name: 'QRV.Network', role: 'Verification, credentials, certificates, registry infrastructure, and trust-layer tooling.', href: 'https://qrv.network' },
];

export default function EcosystemPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">System Directory</p>
      <h1>Ecosystem Directory</h1>
      <p className="lead">Connected OneGodian domains, app routes, WordPress plugin bridges, and deployment responsibilities.</p>

      <section className="grid">
        {portals.map((portal) => (
          <a className="card" href={portal.href} key={portal.name}>
            <p className="kicker">Connected Domain</p>
            <h2>{portal.name}</h2>
            <p>{portal.role}</p>
          </a>
        ))}
      </section>

      <section className="card wide-card">
        <p className="kicker">Deployment Rule</p>
        <h2>{deploymentStandard.repository}</h2>
        <p>{deploymentStandard.rule}</p>
      </section>

      <section className="bridge-grid">
        {pluginBridges.map((bridge) => (
          <article className="card" key={bridge.slug}>
            <p className="kicker">WordPress Plugin Bridge</p>
            <h2>{bridge.name}</h2>
            <p>{bridge.description}</p>
            <code className="code-line">{bridge.wordpressBaseUrl}{bridge.healthEndpoint}</code>
          </article>
        ))}
      </section>

      <section className="grid">
        {appPages.map((page) => (
          <a className="card" href={page.route} key={page.route}>
            <p className="kicker">{page.eyebrow}</p>
            <h2>{page.title}</h2>
            <p>{page.status}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
