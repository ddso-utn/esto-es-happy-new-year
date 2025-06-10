import "./bebidas.css"
import {useEffect, useState} from "react";
import {getBebidas, putCommanda} from "../../mockData/api";


const Titulo = ({texto}) => {
  return <h1 className="title">{texto}</h1>
}

const NavBar = ({logo, slogan}) => {
  return <nav className="nav">
    <div className="logo">{logo}</div>
    <div className="">{slogan}</div>
  </nav>
}

const CardBebida = ({nombre, imagen, precio, seleccionado, alSeleccionarBebida}) => {
  return <div
    className={`card ${seleccionado && "selected"}`}
    onClick={alSeleccionarBebida}
  >
    <h3>{nombre}</h3>
    <img src={imagen}/>
    <p className="price">${precio}</p>
  </div>
}

const ListaBebidas = ({bebidas, cambiarSeleccionBebida}) => {
  return <div className="bebidas">{
    bebidas.map((bebida) => <CardBebida
      key={bebida.id}
      nombre={bebida.nombre}
      imagen={bebida.imagen}
      precio={bebida.precio}
      seleccionado={bebida.seleccionado}
      alSeleccionarBebida={() => cambiarSeleccionBebida(bebida.id)} // "onDishSelect"
    />)
  }</div>
}

const Bebidas = ({bebidas,cambiarSeleccionBebida, agregarAComanda }) => {

  return (
    bebidas.length === 0 ? "Cargando..." : <section className="home">
      <div className="content">
        <Titulo texto="Bebidas"/>
        <ListaBebidas
          bebidas={bebidas}
          cambiarSeleccionBebida={cambiarSeleccionBebida}
        />
      </div>
      <div className="actions">
        <button onClick={agregarAComanda}>Agregar a comanda</button>
      </div>
    </section>
  )
};

export default Bebidas;