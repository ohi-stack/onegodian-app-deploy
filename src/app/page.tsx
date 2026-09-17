import { APP_POSITIONING, appCards } from '@/data/appRegistry';

const sections = [
 ['OneGodian Identity','Identity resources and public OneGodian context.','https://onegodian.org'],
 ['Membership','Member access, pricing, resources, certificates, dashboard, and support.','/members'],
 ['Contributors','Support public-facing products, education, media, technology, membership, and community infrastructure.','/contributors'],
 ['Creator Network','Creators, educators, affiliates, and community voices.','/creator-network'],
 ['Affiliate Program','Referral and campaign resources without unimplemented earnings or payout claims.','/affiliate-dashboard'],
 ['Certificates','Member and ecosystem certificate access.','/certificates'],
 ['Products','Browse the product gateway; transactions remain on OneGodian.com.','/products'],
 ['Media','Public media and creator resources.','/media'],
 ['Tools','Public and member-facing tools.','/tools'],
 ['Education','Education and learning pathways.','/learning'],
 ['Ecosystem','Explore connected OneGodian platforms by their proper domain roles.','/ecosystem'],
] as const;

export default function HomePage() {
 return <main className="home-page">
  <section className="hero-shell">
   <nav className="top-nav"><a className="brand-mark" href="/">OneGodian App</a><div className="nav-links"><a href="/dashboard">Dashboard</a><a href="/members">Members</a><a href="/contributors">Contributors</a><a href="/creator-network">Creators</a><a href="/ecosystem">Ecosystem</a></div></nav>
   <div className="hero-grid"><div><p className="kicker">APP.ONEGODIAN.COM · PUBLIC / MEMBER GATEWAY</p><h1>OneGodian App™</h1><p className="hero-copy">{APP_POSITIONING}</p><div className="hero-actions"><a className="button primary" href="/dashboard">Open Dashboard</a><a className="button secondary" href="/members">Membership</a><a className="button secondary" href="/contributors">Contribute</a></div></div>
   <aside className="status-panel"><p className="panel-label">Domain Boundary</p><p>Public/member experience only. Operator controls belong on console.onegodian.com. Capital operations remain on capital.onegodian.com.</p></aside></div>
  </section>
  <section className="section-block"><div className="section-heading"><p className="kicker">OneGodian Ecosystem Access</p><h2>Everything members and the public need in one gateway</h2></div><div className="module-grid">{sections.map(([title,description,href])=><a className="module-card" href={href} key={title}><span>Open</span><h3>{title}</h3><p>{description}</p></a>)}</div></section>
  <section className="section-block"><div className="section-heading"><p className="kicker">Dashboard Preview</p><h2>Current member-facing modules</h2></div><div className="module-grid">{appCards.map(([title,description,href])=><a className="module-card" href={href} key={href}><span className="status-badge">Available</span><h3>{title}</h3><p>{description}</p><b>Open →</b></a>)}</div></section>
 </main>;
}