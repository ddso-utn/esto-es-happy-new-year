import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
    return(
        <>
          <Header></Header>
          <Navbar></Navbar>
          <Outlet />

        </>
    )
  
}

export default Layout;