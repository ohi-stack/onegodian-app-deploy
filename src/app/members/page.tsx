import { getBridgeBySlug } from '@/lib/app-content';

const bridge = getBridgeBySlug('onegodian-members');

const fallbackTools = ['Member Dashboard', 'Get Certificate', 'Member Resources', 'Membership Pricing', 'Account / Orders', 'Admin Summary'];

export default function MembersPage() {
  const tools = bridge?.tools || fallbackTools;
  const baseUrl = bridge?.wordpressBaseUrl || 'https://onegodian.org';

  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Membership Layer · Plugin Bridge</p>
      <h1>OneGodian Members</h1>
      <p className="lead">
        Member dashboard access, certificate retrieval, resources, pricing, account handoff,
        and OneGodian Members WordPress Plugin connection for app.onegodian.com.
      </p>

      <section className="grid">
        {tools.map((tool) => (
          <article className="card" key={tool}>
            <p className="kicker">Member Tool</p>
            <h2>{tool}</h2>
            <p>Connected through the OneGodian Members Plugin bridge and staged for production member access.</p>
          </article>
        ))}
      </section>

      <section className="card wide-card">
        <p className="kicker">WordPress Bridge</p>
        <h2>{bridge?.name || 'OneGodian Members'}</h2>
        <p>{bridge?.description}</p>
        <p><strong>WordPress Base:</strong> {baseUrl}</p>
        <code className="code-line">{baseUrl}{bridge?.healthEndpoint}</code>
        <div className="tool-list">
          <a className="pill" href={`${baseUrl}/member-dashboard/`}>Member Dashboard</a>
          <a className="pill" href={`${baseUrl}/member-certificate/`}>Get Certificate</a>
          <a className="pill" href={`${baseUrl}/member-resources/`}>Resources</a>
          <a className="pill" href={`${baseUrl}/membership-pricing/`}>Pricing</a>
          <a className="pill" href={`${baseUrl}/my-account/`}>Account / Orders</a>
        </div>
      </section>

      <section className="grid">
        <a className="card" href="/api/members/manifest"><p className="kicker">App API</p><h2>Members Manifest</h2><p>Structured JSON describing the member module, tools, endpoint contracts, and WordPress bridge settings.</p></a>
        <a className="card" href="/api/members/health"><p className="kicker">App API</p><h2>Members Health</h2><p>Proxy health check for the WordPress plugin endpoint. It fails gracefully if WordPress is unavailable.</p></a>
        <a className="card" href="/certificates"><p className="kicker">Verification</p><h2>Certificates</h2><p>Certificate records and QRV verification handoff for future member certificate numbers.</p></a>
      </section>
    </main>
  );
}
