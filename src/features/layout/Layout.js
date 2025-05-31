import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
    return(
        <>
          <Header username="Alumno/a de DDSO"></Header>
          <Navbar></Navbar>
          <Outlet />

        </>
    )
  
}

export default Layout;