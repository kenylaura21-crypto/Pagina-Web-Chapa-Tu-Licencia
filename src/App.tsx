import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home(){
 return <div className="page">
   <h1>CHAPA TU LICENCIA</h1>
   <h2>Escuela de manejo en Tacna</h2>
   <p>Aprende a manejar y obtén tu licencia con nosotros.</p>
   <Link className="btn" to="/paquetes">Ver paquetes</Link>
 </div>
}

function Paquetes(){
 return <div className="page">
   <h1>Paquetes de manejo</h1>
   <div className="card">
    <h2>Pack Auto Premium</h2>
    <p>5 clases prácticas</p>
    <p>S/240</p>
    <Link className="btn" to="/checkout/auto-premium">Comprar ahora</Link>
   </div>
 </div>
}

function Checkout(){
 return <div className="page">
  <h1>Checkout</h1>
  <form>
   <input placeholder="Nombre completo"/>
   <input placeholder="Teléfono"/>
   <button className="btn">Continuar</button>
  </form>
 </div>
}

export default function App(){
 return <BrowserRouter>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/paquetes" element={<Paquetes/>}/>
   <Route path="/checkout/:id" element={<Checkout/>}/>
  </Routes>
 </BrowserRouter>
}