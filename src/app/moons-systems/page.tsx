const systems=[
'Vera System™','Kaelor System™','Elyndra Crescent™','Auralis Rings™','The Nine Orbitals™'
];

export default function MoonsSystemsPage(){
return <main className="page"><a href="/">← Home</a><p className="kicker">Orbital Registry</p><h1>Moons & Systems</h1><p className="lead">Documented moon systems and orbital structures.</p><div className="grid">{systems.map((item)=><article className="card" key={item}><h2>{item}</h2><p>Tracked celestial system registered under ODIN continuity mapping.</p></article>)}</div></main>
}
