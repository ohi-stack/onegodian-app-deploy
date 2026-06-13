import { pluginBridges } from '@/lib/app-content';

const tools = [
  ['App Health', '/api/health', 'Confirms the app runtime is healthy.'],
  ['App Manifest', '/api/manifest', 'Lists core modules, endpoints, and deployment metadata.'],
  ['Tools API', '/api/tools', 'Returns operational tool and bridge records.'],
  ['Stats API', '/api/stats', 'Returns app module counts and bridge status.'],
  ['Members Health', '/api/members/health', 'Checks the OneGodian Members WordPress plugin bridge.'],
  ['Members Manifest', '/api/members/manifest', 'Returns member module tool and endpoint metadata.'],
];

export default function ToolsPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Platform Utilities</p>
      <h1>Tools</h1>
      <p className="lead">Production utility surface for health checks, manifests, plugin bridge diagnostics, and route-level operational status.</p>
      <section className="grid">
        {tools.map(([title, href, description]) => (
          <a className="card" href={href} key={href}><p className="kicker">Utility</p><h2>{title}</h2><p>{description}</p></a>
        ))}
      </section>
      <section className="bridge-grid">
        {pluginBridges.map((bridge) => (
          <article className="card" key={bridge.slug}>
            <p className="kicker">Bridge</p>
            <h2>{bridge.name}</h2>
            <p>{bridge.status}</p>
            <code className="code-line">{bridge.wordpressBaseUrl}{bridge.healthEndpoint}</code>
          </article>
        ))}
      </section>
    </main>
  );
}
