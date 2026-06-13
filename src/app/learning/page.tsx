const learningAreas = [
  ['Courses', 'Course catalog handoff for U OneGodian learning paths, modules, lessons, and practical onboarding.'],
  ['Certifications', 'Certification pathways connected to member records, certificates, and future QRV verification.'],
  ['Student Dashboard', 'Learner-facing route for progress, resources, certificates, tools, and account access.'],
  ['OneGodianology™', 'Educational framework for terminology, thought structure, identity, philosophy, and practical implementation.'],
  ['OMOS Learning', 'Training around OneGodian Algorithm, Belief Mapper, OHI framework, and operating logic.'],
  ['Member Onboarding', 'Orientation pathway connecting members to resources, courses, products, and participation records.'],
];

export default function LearningPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">U OneGodian · Education</p>
      <h1>Learning</h1>
      <p className="lead">Education gateway for courses, certifications, learning dashboards, onboarding pathways, and member development resources.</p>
      <section className="grid">
        {learningAreas.map(([title, description]) => (
          <article className="card" key={title}><p className="kicker">Learning Area</p><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <section className="grid">
        <a className="card" href="https://u.onegodian.org"><p className="kicker">LMS</p><h2>Open U OneGodian</h2><p>Go to the education and learning infrastructure node.</p></a>
        <a className="card" href="/members"><p className="kicker">Members</p><h2>Member Learning Access</h2><p>Connect member profiles to learning resources and certificates.</p></a>
        <a className="card" href="/certificates"><p className="kicker">Certificates</p><h2>Learning Certificates</h2><p>Prepare learning certificates for app display and verification.</p></a>
      </section>
    </main>
  );
}
