const records = [
  ['ODIN Registry', 'Official record categories for products, certificates, identities, systems, platforms, and future verification records.'],
  ['Certificates', 'Member, learner, contributor, product, and platform certificate records prepared for QRV verification.'],
  ['Products', 'Commerce-linked products, downloads, books, memberships, certificates, and founder support items.'],
  ['Identity', 'Member status, OneGodian ID pathways, account records, and participation categories.'],
  ['Systems', 'App, platform, OMOS, Capital, Galaxy, QRV, and API infrastructure records.'],
  ['Planets / Galaxy', 'Planetary records, worlds, timelines, species, civilizations, moons, and Galaxy canon indexes.'],
];

export default function RegistryPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">ODIN / Verification</p>
      <h1>Registry Systems</h1>
      <p className="lead">App-facing registry surface for OneGodian records, certificates, products, identities, systems, and verification handoffs.</p>
      <section className="grid">
        {records.map(([title, description]) => (
          <article className="card" key={title}><p className="kicker">Registry Category</p><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <section className="grid">
        <a className="card" href="/api/manifest"><p className="kicker">API</p><h2>App Manifest</h2><p>Open the app manifest route for module and endpoint status.</p></a>
        <a className="card" href="/api/stats"><p className="kicker">API</p><h2>App Stats</h2><p>Open the stats route for operational module status.</p></a>
        <a className="card" href="/certificates"><p className="kicker">Records</p><h2>Certificates</h2><p>Open certificate records and future QRV verification handoff.</p></a>
      </section>
    </main>
  );
}
