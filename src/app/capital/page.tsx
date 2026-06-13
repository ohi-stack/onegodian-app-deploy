import { getBridgeBySlug } from '@/lib/app-content';

const bridge = getBridgeBySlug('onegodian-capital');

const capitalAreas = [
  ['Disclosure Center', 'Public-safe disclosure review and acknowledgement routing before capital participation.'],
  ['Contributor Intake', 'Structured handoff for supporters, contributors, partners, and capital readiness conversations.'],
  ['Capital Products', 'Capital-related products, contribution packages, records, and document access points.'],
  ['Readiness Dashboard', 'Operational readiness view for documents, production status, and capital infrastructure.'],
  ['Plugin Bridge', 'WordPress bridge for OneGodian Capital plugin data, health, manifest, and admin status.'],
  ['App Handoff', 'Route app users to capital.onegodian.com without mixing public app and disclosure operations.'],
];

export default function CapitalPage() {
  const baseUrl = bridge?.wordpressBaseUrl || 'https://capital.onegodian.com';

  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Capital Readiness · Plugin Bridge</p>
      <h1>Capital</h1>
      <p className="lead">Disclosure-aware gateway for capital readiness, contribution pathways, documents, and the OneGodian Capital WordPress bridge.</p>
      <section className="grid">
        {capitalAreas.map(([title, description]) => (
          <article className="card" key={title}><p className="kicker">Capital Area</p><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <section className="card wide-card">
        <p className="kicker">WordPress Bridge</p>
        <h2>{bridge?.name || 'OneGodian Capital'}</h2>
        <p>{bridge?.description}</p>
        <code className="code-line">{baseUrl}{bridge?.healthEndpoint}</code>
        <div className="tool-list">
          <a className="pill" href={baseUrl}>Open Capital Node</a>
          <a className="pill" href={`${baseUrl}/disclosure-center/`}>Disclosure Center</a>
          <a className="pill" href={`${baseUrl}/contributor-intake/`}>Contributor Intake</a>
        </div>
      </section>
    </main>
  );
}
