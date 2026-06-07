import { onegodianContentLibrary } from '@/data/onegodianContent';

const learningAreas = [
  'University of OneGodian',
  'Onegodianology',
  'Onegodianese',
  'OTS-V5 Timekeeping',
  'Certifications',
  'OMOS Foundations',
  'OHI Foundations',
  'Community Development',
  'Economic Development',
];

export default function LearningPage() {
  const learningRefs = onegodianContentLibrary.filter((item) =>
    item.route === '/learning' || item.category.toLowerCase().includes('education') || item.category.toLowerCase().includes('timekeeping')
  );

  return (
    <main className="page">
      <a href="/">← Home</a>
      <section className="hero-lite">
        <p className="kicker">Education Infrastructure</p>
        <h1>Learning</h1>
        <p className="lead">
          The learning layer routes public knowledge, courses, certifications, timekeeping education,
          Onegodianology, Onegodianese, OMOS foundations, OHI foundations, and workforce training into
          one clear education pathway.
        </p>
        <div className="hero-actions">
          <a className="button secondary" href="https://u.onegodian.com">Open University</a>
          <a className="button secondary" href="/docs">Read Docs</a>
          <a className="button secondary" href="/certificates">View Certificates</a>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Current Training</p>
          <h2>Education categories</h2>
          <p>Production-ready categories for the learning system and University of OneGodian routing.</p>
        </div>
        <div className="grid">
          {learningAreas.map((area) => (
            <article className="card" key={area}>
              <span className="badge">Learning</span>
              <h2>{area}</h2>
              <p>Structured educational pathway for {area.toLowerCase()} within the OneGodian ecosystem.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Content References</p>
          <h2>Seeded learning documents</h2>
          <p>These records come from the app content library and should drive future dynamic docs, course cards, and certificate links.</p>
        </div>
        <div className="grid">
          {learningRefs.map((item) => (
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
