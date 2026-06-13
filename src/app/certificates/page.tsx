const certificateAreas = [
  ['Member Certificate', 'Certificate access for OneGodian members through the OneGodian Members Plugin bridge.'],
  ['Learning Certificate', 'Future education and certification records connected to U OneGodian learning paths.'],
  ['Contributor Certificate', 'Supporter and contributor recognition records prepared for verification workflows.'],
  ['Product Certificate', 'Digital product, download, and proof-of-access certificate references.'],
  ['QRV Verification', 'Future handoff to QRV.Network for certificate numbers, public lookups, and trust-layer validation.'],
  ['Issuer Records', 'Continuity tracking for certificate issuer status, dates, and record categories.'],
];

export default function CertificatesPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">OBP-1 / QRV Verification</p>
      <h1>Certificates</h1>
      <p className="lead">Certificate gateway for member, learner, contributor, product, and future QRV-linked verification records.</p>
      <section className="grid">
        {certificateAreas.map(([title, description]) => (
          <article className="card" key={title}><p className="kicker">Certificate Area</p><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <section className="grid">
        <a className="card" href="/members"><p className="kicker">Members</p><h2>Get Member Certificate</h2><p>Open the members page and WordPress member certificate handoff.</p></a>
        <a className="card" href="https://qrv.network"><p className="kicker">Verification</p><h2>QRV.Network</h2><p>Open the verification infrastructure node.</p></a>
      </section>
    </main>
  );
}
