import {useState} from "react";

export const useSeleccion = (itemsIniciales) => {
  const [items, setItems] = useState(itemsIniciales)



  const cambiarSeleccion = (item) => {
    // Devuelve un bebida nuevo modificado ... como en Haskell!
    return {...item, seleccionado: !item.seleccionado}
  }

  const cambiarSeleccionItem = (idItem) => setItems(
    // Devuelve tmb una lista nueva modificada.
    // Si es el bebida buscado lo devuelve modificado; si no, no.
    items.map(i => i.id === idItem ? cambiarSeleccion(i) : i)
  )

  return {
    cambiarSeleccionItem,
    items,
    setItems
  }
}