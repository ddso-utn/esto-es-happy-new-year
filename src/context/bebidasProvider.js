import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {getBebidas} from "../mockData/api";

export const BebidasContext = createContext()

export const BebidasProvider = ({children}) => {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    const cargarBebidas = async () => setBebidas(await getBebidas())
    cargarBebidas()
  }, [])

  const contextValue = {
    bebidas
  }

  return <BebidasContext value={contextValue}>
    {children}
  </BebidasContext>
}