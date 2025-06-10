import "./platos.css"
import {useEffect, useState} from "react";
import {getPlatos, putCommanda} from "../../mockData/api";


const Titulo = ({texto}) => {
  return <h1 className="title">{texto}</h1>
}

const CardPlato = ({nombre, imagen, precio, seleccionado, alSeleccionarPlato, notas, alCambiarNotas}) => {
  return <div
    className={`card ${seleccionado && "selected"}`}
    onClick={alSeleccionarPlato}
  >
    <h3>{nombre}</h3>
    <img src={imagen}/>
    <input
      placeholder="Notas..."
      type={"text"}
      value={notas || ""}
      onChange={e => alCambiarNotas(e.target.value)}
    />
    <p className="price">${precio}</p>
  </div>
}

const ListaPlatos = ({platos, cambiarSeleccionPlato, cambiarNotasPlato}) => {
  return <div className="platos">{
    platos.map((plato) => <CardPlato
      key={plato.id}
      nombre={plato.nombre}
      imagen={plato.imagen}
      precio={plato.precio}
      seleccionado={plato.seleccionado}
      alSeleccionarPlato={() => cambiarSeleccionPlato(plato.id)} // "onDishSelect"
      notas={plato.notas}
      alCambiarNotas={notas => cambiarNotasPlato(plato.id,notas)}
    />)
  }</div>
}

const Platos = ({platos, cambiarSeleccionPlato, cambiarNotasPlato, agregarAComanda}) => {
  return (
    platos.length === 0 ? "Cargando..." : <section className="home">
      <div className="content">
        <Titulo texto="Platos"/>
        <ListaPlatos
          platos={platos}
          cambiarSeleccionPlato={cambiarSeleccionPlato}
          cambiarNotasPlato={cambiarNotasPlato}
        />
      </div>
      <div className="actions">
        <button onClick={agregarAComanda}>Agregar a comanda</button>
      </div>
    </section>
  )
};

export default Platos;