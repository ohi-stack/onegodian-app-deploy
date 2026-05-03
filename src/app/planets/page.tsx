const planets = [
  'Onegodia™','Auralis™','Luminaris™','Elyndria™','Vaeloria™','Seraphi’el Prime™','Myka’thra™','Ka’zaen™','Vera’quon™','Umbryss™','Astra’Noema™','Chronora™','Garethuun™','Qelithon™','Vora’el™','Kaor’Myn™','Vorthun’Kai™','Oraelune™','Ignivar™','Auraleth™','Terranova One™','Kaelenar™','Solytheris™','Oraphine™','Auranthis™'
];

export default function PlanetsPage(){
  return <main className="page"><a href="/">← Home</a><p className="kicker">ODIN-PR Registry</p><h1>Planetary Registry</h1><p className="lead">Canon index of recognized worlds within the OneGodian Galaxy™.</p><div className="grid">{planets.map((planet,index)=><article className="card" key={planet}><strong>PR-{String(index+1).padStart(3,'0')}</strong><h2>{planet}</h2><p>Registered planetary world with ODIN continuity classification.</p></article>)}</div></main>;
}
