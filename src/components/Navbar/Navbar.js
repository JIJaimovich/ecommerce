import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>
                <img src='./favicon.ico' alt='logo'/>
            </Link>
            <h1>Book Store</h1>
            <div className='categories'>
            <NavLink to='/category/policial' className={({isActive}) => isActive ? 'selected' : 'random'}>Policial</NavLink>
              <NavLink to='/category/ficcion' className={({isActive}) => isActive ? 'selected' : 'random'}>Ficción</NavLink>
              <NavLink to='/category/fantasia' className={({isActive}) => isActive ? 'selected' : 'random'}>Fantasía</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};
export default Navbar;