const modules=[
'/planets','/moons-systems','/ecosystem','/registry','/tools','/media','/products','/certificates','/profile'
];

export default function DashboardPage(){
return <main className="page"><a href="/">← Home</a><p className="kicker">Central Access</p><h1>Dashboard</h1><p className="lead">Unified navigation into the OneGodian platform ecosystem.</p><div className="grid">{modules.map((route)=><a className="card" href={route} key={route}><h2>{route.replace('/','')}</h2><p>Open module</p></a>)}</div></main>
}
