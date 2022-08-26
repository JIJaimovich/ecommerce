import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <Link to='/'>
                <img src='./favicon.ico' alt='logo'/>
            </Link>
            <h1>Ecommerce</h1>
            <div className='Categories'>
            <NavLink to='/category/policial' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Policial</NavLink>
              <NavLink to='/category/ficcion' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ficción</NavLink>
              <NavLink to='/category/fantasia' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Fantasía</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};
export default Navbar;