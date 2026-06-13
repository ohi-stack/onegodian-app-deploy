const products = [
  ['Memberships', 'Spiritual, member, supporter, contributor, business, student, senior, and identity-driven participation products.'],
  ['Digital Downloads', 'Books, templates, guides, kits, checklists, documents, scrolls, and founder-created digital assets.'],
  ['Certificates', 'Member certificates, learning certificates, contributor certificates, and future QRV-linked credentials.'],
  ['App / Platform Services', 'Website, branding, development, SEO, consulting, plugin, education, and infrastructure services.'],
  ['Media / ALLATYME', 'Music, campaign assets, featured visuals, promotional media, artist material, and content products.'],
  ['Founder Support', 'Support packages, contributions, productized services, and revenue-generating offers.'],
];

export default function ProductsPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Commerce Layer</p>
      <h1>Products</h1>
      <p className="lead">App gateway into OneGodian commerce, digital products, memberships, certificates, services, and revenue systems.</p>
      <section className="grid">
        {products.map(([title, description]) => (
          <article className="card" key={title}><p className="kicker">Product Area</p><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <section className="grid">
        <a className="card" href="https://onegodian.com"><p className="kicker">Store</p><h2>OneGodian.com</h2><p>Open the main commerce platform.</p></a>
        <a className="card" href="/members"><p className="kicker">Members</p><h2>Membership Tools</h2><p>Connect products to member access and certificates.</p></a>
        <a className="card" href="/registry"><p className="kicker">Records</p><h2>Product Registry</h2><p>Route product records into the registry layer.</p></a>
      </section>
    </main>
  );
}
