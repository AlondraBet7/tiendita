import React, { useState, useEffect, useContext } from 'react'
import '../assets/css/Carrito.css'
import ItemCarrito from '../components/ItemCarrito'
import Contexto from '../context/Contexto'

export default function Carrito() {
  const { carrito, eliminarCarrito } = useContext(Contexto)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    console.log('<<<<carrito', carrito)
    carrito.forEach((product) => {
      console.log('<<cada producto', product[0].precio)
      setTotal(total + parseInt(p[0].precio))
    })
  })

  console.log('<<<total', total)
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
          {carrito.map((item, i) => (
            <ItemCarrito
              {...item}
              key={i}
              eliminarCarrito={eliminarCarrito}
            ></ItemCarrito>
          ))}
        </div>

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>U$D {total} </strong>
        </div>
      </div>
    </>
  )
}
