import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const ComandaContext = createContext()

export const ComandaProvider = ({children}) => {
  const [comanda, setComanda] = useState({platos: [], bebidas: []});

  const agregarPlatosAComanda = async (platosSeleccionados) => {
    console.log("Agregando platos...", platosSeleccionados.map(p => `${p.nombre} (Notas: ${p.notas})`))
    setComanda({...comanda, platos: platosSeleccionados})
  }

  const agregarBebidasAComanda = async (bebidasSeleccionadas) => {
    console.log("Agregando bebidas...", bebidasSeleccionadas.map(p => `${p.nombre})`))
    setComanda({...comanda, bebidas: bebidasSeleccionadas})
  }

  const contextValue = {
    comanda,
    agregarPlatosAComanda,
    agregarBebidasAComanda,
  }

  return <ComandaContext value={contextValue}>
    {children}
  </ComandaContext>
}