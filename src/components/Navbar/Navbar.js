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
            <NavLink to='/category/policial' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Demo1</NavLink>
              <NavLink to='/category/ficcion' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Demo2</NavLink>
              <NavLink to='/category/fantasia' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Demo3</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};
export default Navbar;