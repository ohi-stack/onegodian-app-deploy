const mediaAreas = ['Media Center', 'Visual Archives', 'Music Releases', 'Campaign Assets', 'Brand Assets', 'Video Library', 'Press Materials', 'Creator Resources'];

export default function MediaPage() {
  return (
    <main className="page">
      <a href="/">← Home</a>
      <p className="kicker">Media / Publishing / Assets</p>
      <h1>Media</h1>
      <p className="lead">Media access for OneGodian visuals, campaign materials, music releases, public announcements, brand assets, creator resources, and publishing pipelines.</p>

      <section className="grid">
        {mediaAreas.map((area) => (
          <article className="card" key={area}>
            <span className="badge">Media Area</span>
            <h2>{area}</h2>
            <p>{area} supports the OneGodian public content, publishing, music, brand, and outreach ecosystem.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
