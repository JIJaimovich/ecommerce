import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Footer } from "../Footer/Footer";
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext);  
    const totalQuantity = getQuantity();
    const total = getTotal();

    if(totalQuantity === 0) {
        return (
            <h1>Carrito vacío</h1>
        );
    };

    return (     
        <div className="cart">
            <h1>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout'>Completar compra</Link>
            <Footer />
        </div>
    );
};

export default Cart;