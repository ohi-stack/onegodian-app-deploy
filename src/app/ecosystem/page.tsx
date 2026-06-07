const systems = [
  {
    name: 'QuantumOHI.com',
    type: 'Infrastructure',
    description:
      'Enterprise-facing OHI framework presentation, infrastructure architecture, service positioning, and technical strategy.',
  },
  {
    name: 'OBP-1™',
    type: 'Verification Layer',
    description:
      'Blockchain-ready verification framework for certificates, records, identity references, products, and registry-linked proof objects.',
  },
  {
    name: 'ODIN Registry™',
    type: 'Registry',
    description:
      'Structured registry environment for systems, products, certificates, records, platform assets, and future verification references.',
  },
  {
    name: 'OneGodian Platform™',
    type: 'Application',
    description:
      'Public and member-facing application layer connecting dashboards, learning, media, products, records, tools, and ecosystem navigation.',
  },
  {
    name: 'ACC™',
    type: 'Control Plane',
    description:
      'Agent Command Console and operator runtime for governed workflows, approvals, task routing, logs, and controlled execution.',
  },
];

const aiEnhancedPlatforms = [
  {
    name: 'Onegodian AI Cloud™',
    category: 'Cloud / Processing',
    description:
      'AI-assisted decentralized cloud storage, processing, and secure digital workspace infrastructure for OneGodian apps, media, documents, and platform services.',
    status: 'Platform concept staged for infrastructure planning',
  },
  {
    name: 'Onegodian Web3 Platform™',
    category: 'Web3 Infrastructure',
    description:
      'Decentralized web infrastructure layer supporting digital identity, verification, registry tools, blockchain-ready records, and future OBP-1™ integrations.',
    status: 'Mapped to verification, registry, and digital infrastructure layers',
  },
  {
    name: 'Vote on Everything™',
    category: 'Participation / Decision Support',
    description:
      'Decentralized voting and decision-support platform for polls, internal feedback, community surveys, member input, and structured participation.',
    status: 'Public wording limited to private participation and decision-support use',
  },
  {
    name: 'Onegodian Knowledge Base & AI LLM',
    category: 'Knowledge / Learning',
    description:
      'AI-assisted learning, documentation, and knowledge retrieval system connected to OneGodian education, system prompts, protocols, FAQs, archives, and developer documentation.',
    status: 'Aligned with education, documentation, and OHI runtime knowledge access',
  },
];

const operatingRules = [
  'Treat these systems as ONEGODIAN, LLC digital infrastructure unless a separate INO governance context is expressly identified.',
  'Use OHI-governed, AI-assisted language for public materials; avoid implying autonomous public authority or state election power.',
  'Keep education, identity, documentation, and community explanation on OneGodian.org and app.onegodian.com.',
  'Keep transactions, paid products, and commercial flows on OneGodian.com or other designated commercial properties.',
];

export default function EcosystemPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>

      <section className="section-block">
        <p className="kicker">System Directory</p>
        <h1>OneGodian Ecosystem Directory</h1>
        <p className="lead">
          The ecosystem directory organizes public app modules, infrastructure references, verification layers,
          control-plane systems, digital transformation assets, and AI-enhanced service platforms in one clear
          production surface.
        </p>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Core Systems</p>
          <h2>Connected infrastructure layers</h2>
          <p>
            These are the primary system references currently staged for the OneGodian App public/member
            experience and connected platform architecture.
          </p>
        </div>

        <div className="grid">
          {systems.map((system) => (
            <article className="card" key={system.name}>
              <span>{system.type}</span>
              <h2>{system.name}</h2>
              <p>{system.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Onegodian Digital Transformation & Media</p>
          <h2>AI-Enhanced Digital Services & Platforms</h2>
          <p>
            This division is positioned as OHI-governed, AI-assisted digital infrastructure under ONEGODIAN,
            LLC. It supports education, media, documentation, platform infrastructure, private participation,
            digital services, and knowledge access.
          </p>
        </div>

        <div className="grid">
          {aiEnhancedPlatforms.map((platform) => (
            <article className="card" key={platform.name}>
              <span>{platform.category}</span>
              <h2>{platform.name}</h2>
              <p>{platform.description}</p>
              <p><strong>Status:</strong> {platform.status}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="section-heading">
          <p className="kicker">Compliance Positioning</p>
          <h2>Controlled public language</h2>
          <p>
            Onegodian Digital Services & Platforms are private, AI-assisted and OHI-governed technology
            systems developed by ONEGODIAN, LLC for education, media, documentation, platform infrastructure,
            digital participation, and knowledge access.
          </p>
        </div>

        <div className="workflow-panel">
          {operatingRules.map((rule, index) => (
            <div className="workflow-row" key={rule}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
