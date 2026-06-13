import { getBridgeBySlug } from '@/lib/app-content';

const platformBridge = getBridgeBySlug('onegodian-platform');

const omosAreas = [
  ['OneGodian Algorithm™', 'Observe and Build, Align and Scale, Evolve and Verify, with truth, dignity, and unity as operating values.'],
  ['OHI Framework', 'Multi-model synthesis, human-centered intelligence architecture, reality alignment, and interaction resolution.'],
  ['Belief Mapper', 'Journey stages from Seeker to Believer to OneGodian to Elder, supported by identity and declaration tools.'],
  ['Institutional Layer', 'Public-safe separation between ONEGODIAN, LLC commercial operations and INO internal religious/governance context.'],
  ['Protocol Layer', 'System prompts, operational logic, app tools, bridge protocols, and execution standards.'],
  ['OMOS Node', 'Dedicated platform role for OMOS.OneGodian.com as the systems architecture and operating model surface.'],
];

export default function OmosPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Operating Model · OMOS</p>
      <h1>OMOS</h1>
      <p className="lead">App gateway into the OneGodian Metaphysical Operating System: algorithm, OHI, belief mapping, legal-safe structure, protocol logic, and systems architecture.</p>
      <section className="grid">
        {omosAreas.map(([title, description]) => (
          <article className="card" key={title}><p className="kicker">OMOS Area</p><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <section className="card wide-card">
        <p className="kicker">Platform Bridge</p>
        <h2>{platformBridge?.name || 'OneGodian Platform'}</h2>
        <p>{platformBridge?.description}</p>
        <code className="code-line">{platformBridge?.wordpressBaseUrl}{platformBridge?.healthEndpoint}</code>
        <div className="tool-list">
          <a className="pill" href="https://omos.onegodian.com">Open OMOS Node</a>
          <a className="pill" href="https://onegodian.org">Open OneGodian.org</a>
          <a className="pill" href="/tools">Open App Tools</a>
        </div>
      </section>
    </main>
  );
}
