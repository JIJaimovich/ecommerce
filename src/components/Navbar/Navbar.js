import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link to='/'>
                <img src='./favicon.ico' alt='logo'/>
            </Link>
            <h1>Ecommerce</h1>
            <div className='Categories'>
                <Link to='/category/policial' className="menu">Demo1</Link>
                <Link to='/category/ficcion' className="menu">Demo2</Link>
                <Link to='/category/fantasia' className="menu">Demo3</Link>
            </div>
            
            <CartWidget />
        </nav>
    );
};
export default Navbar;