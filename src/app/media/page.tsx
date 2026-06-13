const mediaAreas = [
  ['Visual Archives', 'Featured images, campaign graphics, app visuals, product visuals, Galaxy art, and public brand material.'],
  ['Videos', 'Launch videos, announcements, ALLATYME/AMG content, platform clips, educational media, and campaign videos.'],
  ['Brand Assets', 'Logos, color systems, public graphics, press assets, founder images, and downloadable media kits.'],
  ['Campaigns', 'Remember campaign, founder support, membership promotion, product launches, and platform updates.'],
  ['Music / ALLATYME', 'Artist pages, cover art, video links, promotional assets, and label-family media.'],
  ['Press / Public Files', 'Public statements, bios, documents, fact sheets, and institutional media references.'],
];

export default function MediaPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Media Center</p>
      <h1>Media</h1>
      <p className="lead">Central media gateway for OneGodian visuals, public assets, campaign material, music/media links, and platform storytelling.</p>
      <section className="grid">
        {mediaAreas.map(([title, description]) => (
          <article className="card" key={title}><p className="kicker">Media Area</p><h2>{title}</h2><p>{description}</p></article>
        ))}
      </section>
      <section className="grid">
        <a className="card" href="https://onegodian.com"><p className="kicker">Commerce</p><h2>Product Media</h2><p>Connect product visuals to the store.</p></a>
        <a className="card" href="/galaxy"><p className="kicker">Galaxy</p><h2>Galaxy Visuals</h2><p>Connect lore and planetary media to Galaxy routes.</p></a>
        <a className="card" href="/products"><p className="kicker">Products</p><h2>Digital Assets</h2><p>Route downloadable and promotional media into product systems.</p></a>
      </section>
    </main>
  );
}
