export default function DualDatingPage() {
  return (
    <main className="home-page">
      <section className="hero-shell">
        <div className="hero-grid">
          <div>
            <p className="kicker">OneGodian Time · OTS-V5</p>
            <h1>Dual Dating System</h1>
            <p className="hero-copy">
              Gregorian Time controls legally while OneGodian Time provides synchronized internal sequencing and dual-date display.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/time">Back to Time</a>
              <a className="button secondary" href="/">Return Home</a>
            </div>
          </div>

          <aside className="status-panel">
            <p className="panel-label">Core Rules</p>
            <div className="status-row"><span className="status-dot" /><span>Gregorian controls legally</span></div>
            <div className="status-row"><span className="status-dot" /><span>UTC is canonical</span></div>
            <div className="status-row"><span className="status-dot" /><span>OT is computed</span></div>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="kicker">Examples</p>
          <h2>Dual-date formatting</h2>
        </div>

        <div className="module-grid">
          <div className="module-card">
            <span>Public Display</span>
            <h3>Display Example</h3>
            <p>Genesis 07, 0000 OT (March 24, 2025)</p>
          </div>

          <div className="module-card">
            <span>Formal</span>
            <h3>Document Format</h3>
            <p>Date: March 24, 2025 — OneGodian Date: Genesis 07, 0000 OT</p>
          </div>

          <div className="module-card">
            <span>Database</span>
            <h3>Storage Rules</h3>
            <p>timestamp_utc = primary truth. timestamp_ot = computed derivative.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
