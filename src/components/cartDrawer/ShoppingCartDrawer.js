import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import {useCartDrawerContext } from '../../store/CartContext';
import { useNavigate } from 'react-router';
import './ShoppingCartDrawer.css'; 

const ShoppingCartDrawer = () => {
    const navigate = useNavigate(); 
    const { open, hideCart, wishedProducts } = useCartDrawerContext();
    
    const buy = () => {
      alert(`Ud. va a comprar: ${wishedProducts.map(p => p.title).join(', ')}`)
      navigate("/checkout")
    }

    return (
        <Drawer anchor="right" open={open} onClose={() => hideCart(false)}>
        <div style={{ width: 350, padding: 16 }}>
          <h2>Carrito</h2>
          {wishedProducts.length === 0
            ? <p>No hay productos en el carrito.</p>
            : wishedProducts.map(p => (
                <div key={p.id}>
                  <span>{p.title} x {p.cantidad}</span>
                </div>
              ))
          }
          <div className="actions">
            <Button disabled={!wishedProducts.length} variant="contained" onClick={buy}>Comprar</Button>
          </div>
        </div>
      </Drawer>
    );

}

export default ShoppingCartDrawer;