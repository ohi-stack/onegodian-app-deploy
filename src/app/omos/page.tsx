const runtimeRequirements = [
  {
    title: 'Structured I/O',
    description:
      'OHI Runtime must accept defined payloads and return deterministic, structured responses instead of unbounded narrative output.',
  },
  {
    title: 'Operational Constraints',
    description:
      'Runtime behavior should use fixed variables, constrained generation ranges, repeatable settings, and no hidden execution memory for auditable outputs.',
  },
  {
    title: 'Deterministic Backend Layer',
    description:
      'Policy enforcement, schema validation, routing, authorization, and transaction handling belong in Node/API services, not in advisory model text alone.',
  },
  {
    title: 'Executable Readiness',
    description:
      'A component is executable only when it has documented endpoints, OpenAPI references, JSON schemas, RBAC, versioned policy injection, and immutable logs.',
  },
];

const authoritySpine = [
  {
    name: 'ACC™',
    label: 'Agent Command Console',
    role:
      'Control-plane interface for work intake, task visibility, operator review, approval workflows, agent monitoring, and production coordination.',
  },
  {
    name: 'OCP™',
    label: 'OneGodian Control Protocol',
    role:
      'Authorization and policy decision layer. OCP determines whether a requested action is allowed, denied, escalated, or approval-gated.',
  },
  {
    name: 'OEG™',
    label: 'OneGodian Execution Gateway',
    role:
      'Execution routing layer. OEG invokes approved adapters, runners, and downstream services only after OCP authorization.',
  },
  {
    name: 'Adapter / Runner',
    label: 'Execution Surface',
    role:
      'Performs the approved work, reports lifecycle state, returns output hashes, and preserves execution traceability.',
  },
];

const agentAuthorityRules = [
  'No agent may authorize its own privileged action. Sensitive execution must pass through OCP.',
  'Agents receive least-privilege access by action class, resource scope, tenant, workflow, and environment.',
  'Workflow overrides, policy exceptions, role assignment, registry canonical changes, financial execution, and production destructive operations require approval.',
  'Every authorization decision must create a deterministic decision record with policy hash, execution ID, actor, action, risk level, result hashes, and UTC timestamp.',
  'Global, domain, and agent-level kill switches must deny affected privileged execution and log the denial reason.',
];

const actionClasses = [
  {
    title: 'Read Actions',
    examples: 'agent.read, task.read, workflow.read, logs.read',
  },
  {
    title: 'Standard Execution Actions',
    examples: 'task.create, task.assign, workflow.start, adapter.invoke.standard',
  },
  {
    title: 'Sensitive Execution Actions',
    examples: 'workflow.override, registry.update, identity.role.assign, agent.disable, policy.exception.request',
  },
  {
    title: 'Restricted Actions',
    examples: 'policy.bypass, audit.delete, decision_log.alter, timestamp.override, registry.delete.canonical',
  },
];

const outputPipeline = [
  {
    step: '01',
    title: 'Source Prompt',
    description:
      'A founder prompt, system question, document request, or operational request enters the workflow as a controlled source input.',
  },
  {
    step: '02',
    title: 'Multi-Model Reasoning',
    description:
      'Multiple models may be used to widen interpretive coverage, compare reasoning patterns, and reveal useful contrast before synthesis.',
  },
  {
    step: '03',
    title: 'Compare',
    description:
      'Outputs are mapped for agreement, divergence, unsupported claims, useful structure, contradictions, and missing operational detail.',
  },
  {
    step: '04',
    title: 'Filter',
    description:
      'Rhetorical excess, unsupported claims, unstable framing, redundant material, and non-executable narrative are removed.',
  },
  {
    step: '05',
    title: 'Normalize',
    description:
      'The remaining signal is rewritten into controlled OneGodian format: clear terms, lawful framing, version discipline, and implementation-ready structure.',
  },
  {
    step: '06',
    title: 'Final OHI Output',
    description:
      'The final result becomes a governed output standard: structured, auditable, controlled, and suitable for documentation, platform content, or execution planning.',
  },
];

const productionRoadmap = [
  'Define /api/omos/runtime/health for runtime readiness and version reporting.',
  'Define /api/omos/authorize as the first OCP authorization endpoint.',
  'Create policy repository, decision log repository, and role/action matrix data source.',
  'Route task.create and workflow.start through OCP before any OEG adapter invocation.',
  'Add approval request and approval resolution flows for sensitive execution.',
  'Add kill-switch storage and environment-aware policy loading for dev, staging, and production.',
];

export default function OmosPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>

      <section className="section-block">
        <p className="kicker">OMOS · Operating Architecture</p>
        <h1>OneGodian Metaphysical Operating System™</h1>
        <p className="lead">
          OMOS is the operating architecture layer for OneGodian intelligence, runtime discipline,
          authority control, agent governance, output normalization, and platform execution readiness.
          This page replaces placeholder content with the actual OHI Runtime, Agent Authority Model,
          ACC/OCP/OEG structure, and OHI Output Pipeline.
        </p>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">OHI Runtime</p>
          <h2>From philosophy to technical specification</h2>
          <p>
            OHI becomes a runtime only when it is operational, documented, repeatable, testable, and
            bounded by technical controls. Until then, OHI remains a governance philosophy applied to
            output structure rather than an executable intelligence runtime.
          </p>
        </div>

        <div className="grid">
          {runtimeRequirements.map((item) => (
            <article className="card" key={item.title}>
              <span>Runtime Requirement</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">ACC / OCP / OEG</p>
          <h2>Governed authority spine</h2>
          <p>
            The OMOS execution path separates command, authorization, routing, and execution so agents
            cannot act through unmanaged direct access. The controlled path is ACC → OCP → OEG →
            Adapter / Runner.
          </p>
        </div>

        <div className="grid">
          {authoritySpine.map((node) => (
            <article className="card" key={node.name}>
              <span>{node.label}</span>
              <h2>{node.name}</h2>
              <p>{node.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="section-heading">
          <p className="kicker">Agent Authority Model</p>
          <h2>Execution must be governed, observable, and reversible</h2>
          <p>
            The Agent Authority Model defines which agents may request which actions, which actions are
            allowed automatically, which require approval, which are prohibited, how escalation occurs,
            and what must be logged when decisions are made.
          </p>
        </div>

        <div className="workflow-panel">
          {agentAuthorityRules.map((rule, index) => (
            <div className="workflow-row" key={rule}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Action Classes</p>
          <h2>Role permissions are granted by action scope</h2>
          <p>
            OMOS uses explicit action classes instead of vague trust designations. Agents are constrained
            by role, domain, environment, workflow, resource, and approval threshold.
          </p>
        </div>

        <div className="grid">
          {actionClasses.map((item) => (
            <article className="card" key={item.title}>
              <span>Authority Class</span>
              <h2>{item.title}</h2>
              <p>{item.examples}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">OHI Output Pipeline</p>
          <h2>Compare → filter → normalize → output</h2>
          <p>
            OHI does not treat raw model output as final. Outputs are compared, filtered, and normalized
            into a disciplined OneGodian standard before they are used for documentation, public content,
            platform planning, or operational execution.
          </p>
        </div>

        <div className="grid">
          {outputPipeline.map((step) => (
            <article className="card" key={step.step}>
              <span>Pipeline Step {step.step}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-section">
        <div className="section-heading">
          <p className="kicker">Production Roadmap</p>
          <h2>Next executable build targets</h2>
          <p>
            These steps move OMOS from presentation architecture into production-grade control-plane
            infrastructure with authorization, policy enforcement, audit logs, and environment-aware execution.
          </p>
        </div>

        <div className="workflow-panel">
          {productionRoadmap.map((item, index) => (
            <div className="workflow-row" key={item}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
