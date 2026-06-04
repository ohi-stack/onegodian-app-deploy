export default function MembersPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Member Infrastructure</p>
      <h1>Members</h1>
      <p className="lead">Public and member-facing access for onboarding, member status, digital identity records, certificates, and participation pathways.</p>
      <div className="grid">
        <article className="card"><h2>Member Dashboard</h2><p>Central access point for profile, status, certificates, products, and participation records.</p></article>
        <article className="card"><h2>Digital OneGodian ID</h2><p>Identity-facing member record pathway connected to QRV and certificate verification infrastructure.</p></article>
        <article className="card"><h2>Member Certificate</h2><p>Certificate records for members, supporters, contributors, and approved participation categories.</p></article>
      </div>
    </main>
  );
}
