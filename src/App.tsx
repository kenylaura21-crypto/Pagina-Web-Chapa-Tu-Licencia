import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Car, Bike, Truck, BusFront, ShieldCheck, Users, ClipboardCheck} from 'lucide-react';

const licenses=[
['A-I Auto',Car],
['B-IIb Moto Lineal',Bike],
['B-IIc Mototaxi',Bike],
['A-IIb Camión',Truck],
['A-IIIc Bus/Tráiler',BusFront]
];

const packages=[
['Básico','3 clases','S/145'],
['Premium ⭐','5 clases','S/240'],
['Avanzado','7 clases','S/330']
];

function Header(){
return <header>
<div className="logo">CHAPA TU<br/>LICENCIA</div>
<nav>
<Link to="/">Inicio</Link>
<Link to="/paquetes">Paquetes</Link>
<Link to="/simulador">Simulador MTC</Link>
<Link to="/contacto">Contacto</Link>
</nav>
<a className="cta" href="https://wa.me/51918122331">WhatsApp</a>
</header>
}

function Home(){
return <>
<section className="hero">
<div>
<p className="tag">ESCUELA DE MANEJO EN TACNA</p>
<h1>Obtén tu licencia<br/><span>de conducir</span></h1>
<p>Aprende desde cero con instructores profesionales y prepárate para aprobar.</p>
<div>
<a className="cta" href="https://wa.me/51918122331">Escríbenos ahora</a>
<Link className="secondary" to="/paquetes">Ver paquetes</Link>
</div>
</div>
<div className="car">🚘</div>
</section>

<h2>¿Qué licencia necesitas?</h2>
<section className="grid">
{licenses.map(([n,I])=><article><I/><h3>{n}</h3><Link to="/licencias">Ver más</Link></article>)}
</section>

<section className="benefits">
<div><ShieldCheck/> Circuito privado</div>
<div><Users/> Instructores certificados</div>
<div><ClipboardCheck/> Simulador MTC</div>
</section>

<h2>Paquetes más solicitados</h2>
<section className="grid">
{packages.map(p=><article>
<h3>{p[0]}</h3>
<p>{p[1]}</p>
<h2>{p[2]}</h2>
<Link to="/checkout">Comprar ahora</Link>
</article>)}
</section>
</>
}

function Page(){return <section className="page"><h1>Chapa Tu Licencia</h1><p>Contenido preparado para esta sección.</p></section>}

export default function App(){
return <BrowserRouter>
<Header/>
<main>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="*" element={<Page/>}/>
</Routes>
</main>
</BrowserRouter>
}