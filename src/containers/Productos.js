import React from 'react'
import "../assets/css/Productos.css"
import img from "../assets/static/0.png"


export default function Productos() {
  return (  
   <>
        <div class="detalle">
          <img
            src={img}
            alt=""
            class="detalle-img"
          />
          <h1 class="home-item-titulo">Cerebro loco</h1>
            <p class="home-item-medidas">Medidas: 20x10</p>
            <div class="home-item-actions">
            <h3 class="home-item-precio">AR$ 150</h3>&nbsp;
            <a href="carrito">  <button class="home-item-comprar">+</button></a>
          
            </div>
            <p>"En la colección de stickers de Escuela Devrock no podía faltar uno de Jakob Nielsen a.k.a Cat Nielsen en esta versión. ¿Está hecho gatito? Sí, lo viste bien. Tiene bijotes, orejas y te enseña las heurísticas de usabilidad."</p>
            </div>
   </>
);  
}
