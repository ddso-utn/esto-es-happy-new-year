import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./layout.css"

const Layout = () => {
    return(
        <section className="app-container">
          <Header username="Alumno/a de DDSO"></Header>
          <Navbar></Navbar>
          <section className="page-content">
            <Outlet />
          </section>
        </section>
    )
  
}

export default Layout;