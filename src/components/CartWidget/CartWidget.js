import './CartWidget.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';



const CartWidget = () => {
    const { getQuantity: getQty } = useContext(CartContext);
    const qty = getQty();
    return (
        <Link to='/cart' className="CartWidget">
            <span>
                <img src='images/cart.jpg' alt='cart-widget' className='CartImg' />
            </span>
            { qty === 0 ? <span></span>  : <span className='number'>{qty}</span> }
        </Link>
    );
};

export default CartWidget;

