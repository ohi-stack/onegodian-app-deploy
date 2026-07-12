import { onegodianContentLibrary } from '@/data/onegodianContent';
import { universityBase, universityCourseCount, universitySchools } from '@/data/universityCatalog';

const learningAreas = [
  'University of OneGodian',
  'OneGodianology',
  'OneGodianese',
  'OTS-V5 Timekeeping',
  'Certifications',
  'OMOS Foundations',
  'OHI Foundations',
  'Community Development',
  'Economic Development',
];

export default function LearningPage() {
  const learningRefs = onegodianContentLibrary.filter((item) =>
    item.route === '/learning' || item.route === '/university' || item.category.toLowerCase().includes('education') || item.category.toLowerCase().includes('timekeeping')
  );

  return (
    <main className="page">
      <a href="/">← Home</a>
      <section className="hero-lite">
        <p className="kicker">Education Infrastructure</p>
        <h1>Learning</h1>
        <p className="lead">
          The learning layer routes public knowledge, University schools, courses, certifications, timekeeping education,
          OneGodianology, OneGodianese, OMOS foundations, OHI foundations, and workforce training into one clear pathway.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/university">Browse University</a>
          <a className="button secondary" href={universityBase}>Open University LMS</a>
          <a className="button secondary" href="/docs">Read Docs</a>
          <a className="button secondary" href="/certificates">View Certificates</a>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">University Catalog</p>
          <h2>{universitySchools.length} schools and {universityCourseCount} structured courses</h2>
          <p>The app now includes a browsable University section while the canonical LMS remains responsible for enrollment, lessons, progress, assessments, and certificates.</p>
        </div>
        <div className="grid">
          {universitySchools.map((school) => (
            <a className="card" href={`/university#${school.slug}`} key={school.slug}>
              <span className="badge">{school.courses.length} courses</span>
              <h2>{school.name}</h2>
              <p>{school.description}</p>
            </a>
          ))}
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
          <p>These records come from the app content library and drive University routing, future dynamic documents, course cards, and certificate links.</p>
        </div>
        <div className="grid">
          {learningRefs.map((item) => (
            <a className="card" href={item.route} key={item.slug}>
              <span className="badge">{item.status}</span>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <small>{item.category}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
