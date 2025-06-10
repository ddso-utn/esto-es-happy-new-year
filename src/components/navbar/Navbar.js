import './Navbar.css';

const NavBar = ({logo, slogan, vaciar}) => {
  return <nav className="nav">
    <div className="logo">{logo}</div>
    <div className="">{slogan}</div>
    <button onClick={vaciar}>X Reiniciar pedido</button>
  </nav>
}

export default NavBar;
