import type { Metadata } from 'next';
import BeliefMapperClient from './BeliefMapperClient';

export const metadata: Metadata = {
  title: 'Belief Mapper | OneGodian App',
  description: 'A voluntary reflection experience for belief, identity, unity, community, and purpose.'
};

export default function BeliefMapperPage() {
  return (
    <main className="home-page belief-mapper-page">
      <section className="hero-shell mapper-hero-shell">
        <nav className="top-nav" aria-label="Belief Mapper navigation">
          <a href="/" className="brand-mark">OneGodian App</a>
          <div className="nav-links">
            <a href="/dashboard">Dashboard</a>
            <a href="/members">Members</a>
            <a href="/learning">Learning</a>
            <a href="https://onegodian.org/belief-mapper-resources/">Resources</a>
          </div>
        </nav>

        <div className="mapper-hero-copy">
          <p className="mapper-pill">OneGodian™ · Belief · Identity · Purpose</p>
          <h1>Discover Where Your Belief Already Stands</h1>
          <p>
            The Belief Mapper™ is a private, voluntary reflection experience. It helps you examine your relationship to One God, unity, identity, tradition, community, and purpose without conversion pressure or forced conclusions.
          </p>
        </div>
      </section>

      <BeliefMapperClient />

      <section className="section-block mapper-explainer">
        <div className="section-heading">
          <p className="kicker">How It Works</p>
          <h2>Seven dimensions. One clear reflection.</h2>
          <p>The mapper presents one question at a time, calculates a non-clinical reflection result, and gives you a clear next step. No account is required to complete this version.</p>
        </div>
        <div className="module-grid">
          <article className="module-card"><span>Step 1</span><h3>Reflect</h3><p>Answer seven plain-language questions at your own pace.</p></article>
          <article className="module-card"><span>Step 2</span><h3>Understand</h3><p>Receive an Explorer, Reflector, Aligned, or Guide result with a short explanation.</p></article>
          <article className="module-card"><span>Step 3</span><h3>Continue</h3><p>Use resources, learning pathways, and certificate information only when they are useful to you.</p></article>
        </div>
      </section>

      <section className="section-block">
        <p className="mapper-disclaimer">
          The Belief Mapper™ is an educational and identity-reflection tool. It is not a government-issued credential, legal identification, citizenship document, medical or psychological assessment, professional license, academic degree, or regulatory determination. Results are reflective and personally interpretive.
        </p>
      </section>
    </main>
  );
}
