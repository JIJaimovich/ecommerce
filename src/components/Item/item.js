import ItemCount from '../ItemCount/ItemCount';
import './Item.css' 

const Item = ({product}) => {
    const onAdd = (count) => {
        console.log( `${count} products added` );
      };
    return(
        <li>
            <img src= {product.thumbnail} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </li>
    );  
};
export default Item;