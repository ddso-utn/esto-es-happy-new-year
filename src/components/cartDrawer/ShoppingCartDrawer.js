import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartDrawerContext } from '../../store/CartContext';
import { useNavigate } from 'react-router-dom';
import './ShoppingCartDrawer.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

const ShoppingCartDrawer = () => {
  const navigate = useNavigate();
  const { open, hideCart, wishedProducts, addProductWithAmount, removeProduct } = useCartDrawerContext();

  const [openModal, setOpenModal] = useState(false);
  const filteredProducts = wishedProducts.filter(p => p.cantidad > 0);

  const buy = () => {
    setOpenModal(true);
  };
  
  const total = wishedProducts.reduce((sum, p) => sum + p.price * p.cantidad, 0);

  return (
    <Drawer anchor="right" open={open} onClose={hideCart}>
      <div className="cart-drawer-content">
        <h2>Carrito</h2>
        {filteredProducts.length === 0 ? (
          <p className="cart-empty">No hay productos en el carrito.</p>
        ) : (
          <div className="cart-list">
            {filteredProducts.map(p => (
              <div key={p.id} className="cart-item">
                <img src={p.image} alt={p.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-title">{p.title}</div>
                  <div className="cart-item-price">${p.price.toFixed(2)}</div>
                  <div className="cart-item-controls">
                    <IconButton size="small" onClick={() => addProductWithAmount(p, -1)} disabled={p.cantidad <= 1}>
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <span className="cart-item-qty">{p.cantidad}</span>
                    <IconButton size="small" onClick={() => addProductWithAmount(p, 1)}>
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </div>
                </div>
                <IconButton size="small" onClick={() => removeProduct(p)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
          </div>
        )}
        <div className="cart-total-section">
          <div className="cart-total-row">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button
            disabled={!filteredProducts.length}
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 16 }}
            onClick={buy}
          >
            Comprar
          </Button>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      borderRadius: 2,
      minWidth: 300,
      textAlign: 'center'
    }}
  >
    <h2>¡Compra confirmada!</h2>
    <p>Ud. va a comprar: {filteredProducts.map(p => p.title).join(', ')}</p>
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        setOpenModal(false);
        navigate("/checkout");
      }}
      sx={{ mt: 2 }}
    >
      Ir a Checkout
    </Button>
  </Box>
</Modal>
    </Drawer>
  );
};

export default ShoppingCartDrawer;