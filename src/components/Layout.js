
export default function Layout({ children }) {
  return (
    <div>
      <main>
        <title>Esto es happy new year</title>
      </main>

      <>{children}</>

      <footer>
        Esto es happy new year © 2022
        Todos los derechos reservados
      </footer>
    </div>
  )
}
