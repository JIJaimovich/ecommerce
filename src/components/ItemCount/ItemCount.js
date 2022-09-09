import { useState, useEffect } from 'react';
import './ItemCount.css'    

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial);
    useEffect(() => {
        setQuantity(initial)
   }, [initial]);
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    };
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    };
 
    return(
        <div className='itemCount'>          
             <div className='handle'>
                 <button className="button" onClick={decrement}>-</button>
                 <h4 className='number'>{quantity}</h4>
                 <button className="button" onClick={increment}>+</button>
             </div>
             <div className='cart'>
                 <button className="buttonCart" onClick={() => onAdd(quantity)}>Agregar</button>
             </div>
        </div>
    );
 
 }
 export default ItemCount; 