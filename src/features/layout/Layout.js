import {Outlet} from "react-router";
import NavBar from "../../components/navbar/Navbar";

const Layout = ({numeroPlatos, vaciar}) => {
    return(
        <>
          <NavBar logo="Kommanda" slogan={`El sitio con ${numeroPlatos} platos y bebidas!`} numeroPlatos={numeroPlatos} vaciar={vaciar}/>
          <Outlet />
        </>
    )
  
}

export default Layout;