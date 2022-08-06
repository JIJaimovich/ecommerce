import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Item.css'
 

const Item = ({id, name, img, price }) => {
    const onAdd = (count) => {
        console.log( `${count} products added` );
      };
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={7} onAdd={onAdd} />
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    );  
};
export default Item;

