const modules = [
  {
    name: 'Planetary Registry',
    href: '/planets',
    description: 'ODIN-PR planets, civilizations, and registry systems.'
  },
  {
    name: 'Moons & Systems',
    href: '/moons-systems',
    description: 'Moon systems, orbital continuity, and expansion interfaces.'
  },
  {
    name: 'Ecosystem',
    href: '/ecosystem',
    description: 'Connected OneGodian systems and infrastructure layers.'
  }
];

export default function HomePage() {
  return (
    <main style={{minHeight:'100vh',background:'#02060c',color:'#fff',padding:'48px',fontFamily:'Arial, sans-serif'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto'}}>
        <p style={{color:'#00f2ff',textTransform:'uppercase',letterSpacing:'0.12em'}}>OneGodian Platform</p>
        <h1 style={{fontSize:'64px',margin:'12px 0'}}>OneGodian Everything App</h1>
        <p style={{maxWidth:'720px',lineHeight:'1.7',color:'#c5d7e3'}}>
          Central application for the OneGodian ecosystem including ODIN registry systems,
          planets, moon systems, media, tools, and synchronized platform infrastructure.
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'20px',marginTop:'40px'}}>
          {modules.map((module) => (
            <a
              key={module.href}
              href={module.href}
              style={{
                border:'1px solid rgba(0,242,255,.25)',
                borderRadius:'20px',
                padding:'24px',
                textDecoration:'none',
                color:'#fff',
                background:'rgba(255,255,255,.03)'
              }}
            >
              <h2>{module.name}</h2>
              <p style={{color:'#b7cad8',lineHeight:'1.6'}}>{module.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
