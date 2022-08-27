import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext);  
    const totalQuantity = getQuantity();
    const total = getTotal();

    if(totalQuantity === 0) {
        return (
            <h1>No se agregaron productos</h1>
        );
    };

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    );
};

export default Cart;