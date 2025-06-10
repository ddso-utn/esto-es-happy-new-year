import "./platos.css"
import {useContext, useEffect, useState} from "react";
import {getPlatos, putCommanda} from "../../mockData/api";
import {useNavigate} from "react-router";
import {PlatosContext} from "../../context/platosProvider";
import {ComandaContext} from "../../context/comandaProvider";


export const Titulo = ({texto}) => {
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

const Platos = () => {
  const {platos: todosLosPlatos, banner, error} = useContext(PlatosContext);
  const {agregarPlatosAComanda: alAgregarAComanda} = useContext(ComandaContext);
  const [platos, setPlatos] = useState(todosLosPlatos)
  const navigate = useNavigate();


  const platosSeleccionados = () =>
    platos.filter(p => p.seleccionado)

  const agregarAComanda = async () => {
    alAgregarAComanda(platosSeleccionados())
    setPlatos(platos.map(p => ({...p, seleccionado: false})))
    navigate('/comanda')
  }

  const cambiarSeleccion = (plato) => {
    // Devuelve un plato nuevo modificado ... como en Haskell!
    return {...plato, seleccionado: !plato.seleccionado}
  }

  const cambiarSeleccionPlato = (idPlato) => setPlatos(
    // Devuelve tmb una lista nueva modificada.
    // Si es el plato buscado lo devuelve modificado; si no, no.
    platos.map(p => p.id === idPlato ? cambiarSeleccion(p) : p)
  )

  const cambiarNotas = (plato, notas) => {
    // Devuelve un plato nuevo modificado ... como en Haskell!
    return {...plato, notas}
  }

  const cambiarNotasPlato = (idPlato, notas) => setPlatos(
    platos.map(p => p.id === idPlato ? cambiarNotas(p, notas) : p)
  )

  if(error){
    return <div className="error">HUBO UN ERROR AL CARGAR LOS PLATOS:{error}</div>
  }

  return (
    <section className="home">
      <div className="content">
        <Titulo texto="Pedido"/>
        <div>{banner}</div>
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