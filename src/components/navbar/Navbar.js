import './Navbar.css';
import {AppBar} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useCartDrawerContext } from '../../store/CartContext';
const Navbar = () => {

    const { showCart } = useCartDrawerContext();

return <AppBar position="static">
    <div className="app-nav">

      <div className="navbar-section">
        <div className="brand">
          <h1 className="brand-text">EEHNY</h1>
        </div>
      </div>

      <div className="navbar-section">
        <button className="cart" onClick={showCart}>
          <ShoppingCartIcon />
        </button>
      </div>
    </div>
  </AppBar>
  // return (
  //   <header className="navbar-bg">
  //     <nav className="navbar">

  //     </nav>
  //   </header>
  // );
};

export default Navbar;
