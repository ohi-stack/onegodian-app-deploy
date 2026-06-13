import { onegodianContentLibrary } from '@/data/onegodianContent';

const capitalAreas = ['Positioning Statement', 'Infrastructure Readiness', 'Business Valuation', 'Disclosure Center', 'Funding Initiatives', 'Revenue Systems'];

export default function CapitalPage() {
  const capitalRefs = onegodianContentLibrary.filter((item) =>
    item.route === '/capital' ||
    item.category.toLowerCase().includes('capital') ||
    item.category.toLowerCase().includes('institutional')
  );

  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Capital / Readiness / Disclosure</p>
      <h1>Capital</h1>
      <p className="lead">Disclosure-aware capital readiness surface for institutional positioning, infrastructure readiness, valuation references, funding initiatives, and revenue system coordination.</p>

      <section className="grid">
        {capitalAreas.map((area) => (
          <article className="card" key={area}>
            <span className="badge">Capital Area</span>
            <h2>{area}</h2>
            <p>{area} supports the OneGodian capital readiness, disclosure, and production infrastructure pathway.</p>
          </article>
        ))}
      </section>

      <section className="section-block">
        <p className="kicker">Capital References</p>
        <h2>Seeded institutional content</h2>
        <div className="grid">
          {capitalRefs.map((item) => (
            <article className="card" key={item.slug}>
              <span className="badge">{item.status}</span>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <small>{item.category}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
