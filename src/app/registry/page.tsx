import { onegodianContentLibrary } from '@/data/onegodianContent';

const registrySections = ['ODIN', 'Certificates', 'Products', 'Identity', 'Systems', 'Verification'];

export default function RegistryPage() {
  const registryRefs = onegodianContentLibrary.filter((item) =>
    item.category.toLowerCase().includes('registry') ||
    item.category.toLowerCase().includes('verification') ||
    item.category.toLowerCase().includes('identity') ||
    item.category.toLowerCase().includes('protocol') ||
    item.category.toLowerCase().includes('domain')
  );

  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">ODIN / QRV / Records</p>
      <h1>Registry</h1>
      <p className="lead">Production-facing registry access for ODIN records, certificates, products, identity, systems, and verification references.</p>

      <section className="grid">
        {registrySections.map((section) => (
          <article className="card" key={section}>
            <span className="badge">Registry Section</span>
            <h2>{section}</h2>
            <p>{section} records and verification pathways staged for the OneGodian App registry layer.</p>
          </article>
        ))}
      </section>

      <section className="section-block">
        <p className="kicker">Content References</p>
        <h2>Registry-related records</h2>
        <div className="grid">
          {registryRefs.map((item) => (
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
