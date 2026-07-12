import type { Metadata } from 'next';
import { universityBase, universityCourseCount, universitySchools } from '@/data/universityCatalog';

export const metadata: Metadata = {
  title: 'University of OneGodian | OneGodian App',
  description: 'Browse University of OneGodian schools, courses, foundational pathways, and certification routes.',
};

export default function UniversityPage() {
  return (
    <main className="home-page university-page">
      <section className="hero-shell university-hero-shell">
        <nav className="top-nav" aria-label="University navigation">
          <a href="/" className="brand-mark">OneGodian App</a>
          <div className="nav-links">
            <a href="/dashboard">Dashboard</a>
            <a href="/learning">Learning</a>
            <a href="/members">Members</a>
            <a href={universityBase}>University LMS</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="kicker">University of OneGodian · Education Gateway</p>
            <h1>Schools, courses, and structured learning pathways.</h1>
            <p className="hero-copy">
              Browse the University of OneGodian academic structure inside the OneGodian App. Course delivery,
              enrollment, progress tracking, quizzes, assignments, and verified certificates remain governed by the
              University LMS at u.onegodian.org.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={universityBase}>Open University LMS</a>
              <a className="button secondary" href="/learning">Learning Overview</a>
              <a className="button secondary" href="/certificates">Certificates</a>
            </div>
          </div>

          <aside className="status-panel" aria-label="University catalog status">
            <p className="panel-label">Academic Catalog</p>
            <div className="status-row"><span className="status-dot" /><span>{universitySchools.length} schools</span></div>
            <div className="status-row"><span className="status-dot" /><span>{universityCourseCount} structured courses</span></div>
            <div className="status-row"><span className="status-dot" /><span>Beginner through master levels</span></div>
            <div className="status-row"><span className="status-dot" /><span>Certificate and degree-pathway ready</span></div>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">University Sections</p>
          <h2>Academic schools</h2>
          <p>Select a school to review its current course catalog. Each course links to the canonical University LMS for enrollment and delivery.</p>
        </div>

        <div className="university-school-list">
          {universitySchools.map((school) => (
            <section className="university-school" id={school.slug} key={school.slug}>
              <div className="university-school-heading">
                <div>
                  <p className="kicker">{school.courses.length} courses</p>
                  <h2>{school.name}</h2>
                  <p>{school.description}</p>
                </div>
                <a className="button secondary" href={`${universityBase}/courses/`}>View LMS Catalog</a>
              </div>

              <div className="module-grid university-course-grid">
                {school.courses.map((course) => (
                  <a className="module-card university-course-card" href={course.href} key={course.code}>
                    <span>{course.code} · {course.level}</span>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <strong>Open course pathway →</strong>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="section-heading">
          <p className="kicker">Foundational Sequence</p>
          <h2>Begin with OGF-101, OGF-102, and OGF-103.</h2>
          <p>
            The foundational sequence introduces OneGodian concepts, develops a grounded understanding of identity,
            and then guides the student through the Seeker, Believer, OneGodian, and Elder learning stages.
          </p>
        </div>
        <div className="workflow-panel">
          <a className="workflow-row" href={`${universityBase}/courses/?course_code=OGF-101`}><strong>OGF-101</strong><span>Introduction to OneGodian™</span></a>
          <a className="workflow-row" href={`${universityBase}/courses/?course_code=OGF-102`}><strong>OGF-102</strong><span>The OneGodian Identity™</span></a>
          <a className="workflow-row" href={`${universityBase}/courses/?course_code=OGF-103`}><strong>OGF-103</strong><span>The OneGodian Journey™</span></a>
        </div>
      </section>

      <section className="section-block">
        <p className="university-disclaimer">
          The University of OneGodian is a proprietary educational platform. Any certificate, credential, or degree-pathway designation must be described according to its actual operational and accreditation status. The app does not represent proprietary certificates as state-issued professional licenses or accredited academic degrees.
        </p>
      </section>
    </main>
  );
}
