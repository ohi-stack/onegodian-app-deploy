const systems=[
{name:'QuantumOHI.com',type:'Infrastructure'},
{name:'OBP-1™',type:'Blockchain'},
{name:'ODIN Registry™',type:'Registry'},
{name:'OneGodian Platform™',type:'Application'},
{name:'ACC™',type:'Control Plane'}
];

export default function EcosystemPage(){
return <main className="page"><a href="/">← Home</a><p className="kicker">System Directory</p><h1>Ecosystem Directory</h1><p className="lead">Connected systems and synchronized infrastructure layers.</p><div className="grid">{systems.map((system)=><article className="card" key={system.name}><h2>{system.name}</h2><p>{system.type}</p></article>)}</div></main>
}
