import { appPages, deploymentStandard, pluginBridges } from '@/lib/app-content';

export default function DashboardPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Command Home</p>
      <h1>OneGodian App Dashboard</h1>
      <p className="lead">
        Public and member-facing control surface for OneGodian modules, WordPress plugin bridges,
        production routes, deployment status, and platform navigation.
      </p>

      <section className="grid">
        {appPages.map((page) => (
          <a className="card" href={page.route} key={page.route}>
            <p className="kicker">{page.eyebrow}</p>
            <h2>{page.title}</h2>
            <p>{page.description}</p>
            <strong>{page.status}</strong>
          </a>
        ))}
      </section>

      <section className="card wide-card">
        <p className="kicker">Deployment Standard</p>
        <h2>Deploy from onegodian-app-deploy only</h2>
        <p>{deploymentStandard.rule}</p>
        <p><strong>Repository:</strong> {deploymentStandard.repository}</p>
        <p><strong>Domain:</strong> {deploymentStandard.deploymentDomain}</p>
        <p><strong>Branch:</strong> {deploymentStandard.branch}</p>
      </section>

      <section className="grid">
        {pluginBridges.map((bridge) => (
          <article className="card" key={bridge.slug}>
            <p className="kicker">WordPress Bridge</p>
            <h2>{bridge.name}</h2>
            <p>{bridge.description}</p>
            <p><strong>Status:</strong> {bridge.status}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
