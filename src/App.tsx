import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const licenses=[
 {name:'Auto A-I', text:'Aprende desde cero y prepárate para tu examen.'},
 {name:'Moto B-IIb', text:'Prácticas de moto lineal en circuito.'},
 {name:'Moto B-IIc', text:'Preparación para mototaxi.'},
 {name:'Camión A-IIb', text:'Recategorización profesional.'},
 {name:'Bus A-IIIc', text:'Preparación especializada.'}
];

const packs=[
 {id:'auto-premium',name:'Pack Auto Premium',price:'S/240',detail:'5 clases prácticas'},
 {id:'moto-premium',name:'Pack Moto Premium',price:'S/180',detail:'5 clases prácticas'}
];

function Header(){
 return <header>
  <div className="logo">CHAPA TU LICENCIA</div>
  <nav>
   <Link to="/">Inicio</Link>
   <Link to="/paquetes">Paquetes</Link>
   <Link to="/contacto">Contacto</Link>
  </nav>
 </header>
}

function Home(){
 return <>
 <section className="hero">
  <h1>Obtén tu licencia de conducir en Tacna</h1>
  <p>Aprende, practica y prepárate con instructores especializados.</p>
  <Link className="btn" to="/paquetes">Quiero mi licencia</Link>
 </section>

 <section>
 <h2>¿Qué licencia necesitas?</h2>
 <div className="grid">
 {licenses.map(x=><article className="card">
  <h3>{x.name}</h3>
  <p>{x.text}</p>
 </article>)}
 </div>
 </section>

 <section className="benefits">
 <h2>¿Por qué elegirnos?</h2>
 <p>✓ Simulador MTC</p>
 <p>✓ Circuito de práctica</p>
 <p>✓ Asesoría completa</p>
 </section>
 </>
}

function Packages(){
 return <section>
 <h1>Paquetes</h1>
 <div className="grid">
 {packs.map(p=><article className="card">
 <h2>{p.name}</h2>
 <h3>{p.price}</h3>
 <p>{p.detail}</p>
 <Link className="btn" to={'/checkout/'+p.id}>Comprar</Link>
 </article>)}
 </div>
 </section>
}

function Checkout(){
 return <section>
 <h1>Reserva tu paquete</h1>
 <form className="form">
 <input placeholder="Nombre completo"/>
 <input placeholder="WhatsApp"/>
 <input placeholder="Correo"/>
 <button className="btn">Continuar</button>
 </form>
 </section>
}

function Contact(){
 return <section>
 <h1>Contacto</h1>
 <p>Av. Jorge Basadre 595 Oficina 1 - Tacna</p>
 <a className="btn" href="https://wa.me/51918122331">WhatsApp</a>
 </section>
}

function App(){
 return <BrowserRouter>
 <Header/>
 <main>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/paquetes" element={<Packages/>}/>
  <Route path="/checkout/:id" element={<Checkout/>}/>
  <Route path="/contacto" element={<Contact/>}/>
 </Routes>
 </main>
 </BrowserRouter>
}

export default App;