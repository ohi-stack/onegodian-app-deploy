import { onegodianContentLibrary } from '@/data/onegodianContent';

const productAreas = ['Digital Products', 'Certificates', 'Books', 'Memberships', 'Courses', 'Founder Products', 'Media Products', 'Service Packages'];

export default function ProductsPage() {
  const productRefs = onegodianContentLibrary.filter((item) =>
    item.category.toLowerCase().includes('education') ||
    item.category.toLowerCase().includes('capital') ||
    item.category.toLowerCase().includes('institutional') ||
    item.category.toLowerCase().includes('algorithm')
  );

  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Commerce / Product Gateway</p>
      <h1>Products</h1>
      <p className="lead">Product pathways for digital downloads, certificates, books, memberships, courses, founder products, media products, and service packages.</p>

      <section className="grid">
        {productAreas.map((area) => (
          <article className="card" key={area}>
            <span className="badge">Product Area</span>
            <h2>{area}</h2>
            <p>{area} are routed to OneGodian.com commerce, WooCommerce products, Stripe flows, or app-supported access pages.</p>
          </article>
        ))}
      </section>

      <section className="section-block">
        <p className="kicker">Productized Knowledge</p>
        <h2>Content that can become products</h2>
        <div className="grid">
          {productRefs.map((item) => (
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
