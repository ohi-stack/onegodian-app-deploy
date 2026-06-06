const memberSections = [
  {
    title: 'Member Dashboard',
    status: 'Live / Expanding',
    description:
      'Central access point for member profile, status, certificates, products, education links, participation records, and public/member resources.',
  },
  {
    title: 'Digital OneGodian ID',
    status: 'Preview',
    description:
      'Identity-facing member record pathway designed to connect member records, QRV verification references, and certificate infrastructure.',
  },
  {
    title: 'Member Certificate',
    status: 'Preview',
    description:
      'Certificate access for members, supporters, contributors, learners, and approved participation categories, with future verification routing.',
  },
  {
    title: 'Onboarding Pathway',
    status: 'In Development',
    description:
      'Guided steps for new participants to understand the ecosystem, select the right membership path, access documents, and begin using the app.',
  },
  {
    title: 'Participation Records',
    status: 'Documentation Mode',
    description:
      'Structured records for participation, support, learning activity, contributor history, and public-facing engagement within the OneGodian ecosystem.',
  },
  {
    title: 'Learning Access',
    status: 'Linked Resource',
    description:
      'Connection point to U OneGodian learning paths, courses, certificates, onboarding guides, and educational materials.',
  },
];

const memberActions = [
  { label: 'Open Dashboard', href: '/dashboard' },
  { label: 'View Certificates', href: '/certificates' },
  { label: 'Open Registry', href: '/registry' },
  { label: 'View Products', href: '/products' },
  { label: 'Read Docs', href: '/docs' },
];

const memberWorkflow = [
  'Review the member purpose and participation pathway.',
  'Confirm profile, status, and selected access category.',
  'View certificates and verification references when available.',
  'Connect to learning, products, media, and registry resources.',
  'Use support channels for corrections, updates, and onboarding help.',
];

export default function MembersPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>

      <section className="hero-lite">
        <p className="kicker">Member Infrastructure</p>
        <h1>Members</h1>
        <p className="lead">
          Public and member-facing access for onboarding, member status, digital identity records,
          certificates, participation pathways, learning access, products, and verification references.
        </p>
        <div className="hero-actions">
          {memberActions.map((action) => (
            <a className="button secondary" href={action.href} key={action.href}>{action.label}</a>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Member Tools</p>
          <h2>Real member access areas</h2>
          <p>
            This page now serves as the member gateway for practical app functions. Unfinished
            services are clearly labeled so the app remains accurate while production work continues.
          </p>
        </div>

        <div className="grid">
          {memberSections.map((section) => (
            <article className="card" key={section.title}>
              <span className="badge">{section.status}</span>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="section-heading">
          <p className="kicker">Member Workflow</p>
          <h2>How members use this app layer</h2>
          <p>
            The OneGodian App is the public/member-facing product layer. It should guide people to
            records, certificates, learning, products, and support without exposing internal console controls.
          </p>
        </div>

        <div className="workflow-panel">
          {memberWorkflow.map((step, index) => (
            <div className="workflow-row" key={step}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block notice-panel">
        <p className="kicker">Public-Safe Boundary</p>
        <h2>Member app, not operator console</h2>
        <p>
          This page is for public/member access. Operator controls, deployment tools, audit panels,
          agent-management functions, and runtime administration belong on the separate Console surface.
        </p>
      </section>
    </main>
  );
}
