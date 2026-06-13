import { appModules, onegodianContentLibrary } from '@/data/onegodianContent';

const statusCards = [
  { label: 'Platform Status', value: 'Live', detail: 'Hostinger auto-deployment is active for app.onegodian.com.' },
  { label: 'Content Library', value: String(onegodianContentLibrary.length), detail: 'Real OneGodian records staged for app display.' },
  { label: 'App Modules', value: String(appModules.length), detail: 'Production modules connected to public/member navigation.' },
  { label: 'QRV Status', value: 'Staged', detail: 'Verification routing prepared for registry and certificates.' },
];

export default function DashboardPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Central Access</p>
      <h1>Dashboard</h1>
      <p className="lead">
        Unified navigation into the OneGodian platform ecosystem with real production modules, content records,
        and deployment-aware status references.
      </p>

      <section className="grid">
        {statusCards.map((card) => (
          <article className="card" key={card.label}>
            <p className="kicker">{card.label}</p>
            <h2>{card.value}</h2>
            <p>{card.detail}</p>
          </article>
        ))}
      </section>

      <section className="section-block">
        <p className="kicker">Production Modules</p>
        <h2>App Areas</h2>
        <div className="grid">
          {appModules.map((module) => (
            <a className="card" href={module.href} key={module.href}>
              <h2>{module.title}</h2>
              <p>{module.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section-block">
        <p className="kicker">Real Content Library</p>
        <h2>Staged OneGodian Records</h2>
        <div className="grid">
          {onegodianContentLibrary.map((item) => (
            <a className="card" href={item.route} key={item.slug}>
              <p className="kicker">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
