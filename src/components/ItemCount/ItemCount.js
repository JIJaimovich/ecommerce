import { useState } from 'react';

const ItemCount = ({initial, onAdd, stock}) => {
    const [count, setCount] = useState(initial);
    const addAndRemove = (num) => {
        setCount(count+num);
    };
    return(
        <div className='itemCounter'>
            <button 
            onClick={ () => addAndRemove(-1) }
            disabled={ count === initial}
            >
            -    
            </button>
            <span> {count} </span>
            <button 
            onClick={ () => addAndRemove(+1) }
            disabled={ count === stock}
            >
            +    
            </button>
            <button 
            onClick={ () =>{ onAdd(count)} }
            disabled={stock === 0 ? true : null}
            >
            Add    
            </button>
        </div>
    );
};
export default ItemCount;