import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, name, price, stock, thumbnail}) => {
    const onAdd = (count) => {
        console.log( `${count} products added` );
      };
    return(
        <div>
            <img src= {thumbnail} />
            <h3>{name}</h3>
            <p>${price}</p>
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </div>
    );  
};
export default Item;